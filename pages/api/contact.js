import nodemailer from 'nodemailer';
import { contactSchema } from '../../models/contactSchema';

export default async (req, res) => {
	const { method, body } = req;

	if (method === 'POST') {
		const {
			value: { name, email, message },
			error,
		} = contactSchema.validate(body);

		if (error) {
			const msg = error.details
				.map(({ message }) => `400 Bad Request: ${message}`)
				.join(',');
			return res.status(400).send(msg);
		}

		let transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				type: 'OAuth2',
				user: process.env.MAIL_USERNAME,
				pass: process.env.MAIL_PASSWORD,
				clientId: process.env.OAUTH_CLIENTID,
				clientSecret: process.env.OAUTH_CLIENT_SECRET,
				refreshToken: process.env.OAUTH_REFRESH_TOKEN,
			},
		});

		let mailOptions = {
			from: `${email}`,
			to: process.env.MAIL_USERNAME,
			subject: `${name} @ ${email}`,
			text: `${message}`,
		};

		transporter.sendMail(mailOptions, function (err, data) {
			if (err) {
				console.log('Error ' + err);
			} else {
				console.log('Email sent successfully');
			}
		});
	}
};
