import nodemailer from 'nodemailer';

export default async (req, res) => {
	const {
		method,
		body: { name, email, message },
	} = req;

	if (method === 'POST') {
		try {
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
				to: 'tojmccann@gmail.com',
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
		} catch (error) {
			res.status(400).json({ success: false });
		}
	}
};
