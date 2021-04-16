export default async (req, res) => {
	const { method, body } = req;

	if (method === 'POST') {
		try {
			res.json(body);
			console.log(body);
		} catch (error) {
			res.status(400).json({ success: false });
		}
	}
};
