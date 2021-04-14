import dbConnect from '../../utils/mongodb';
import Project from '../../models/projectModel';

export default async (req, res) => {
	const { method } = req;

	if (method === 'GET') {
		await dbConnect();

		try {
			const projects = await Project.find({});
			res.json(projects);
		} catch (error) {
			res.status(400).json({ success: false });
		}
	}
};
