import mongoose, { Schema } from 'mongoose';

const ProjectSchema = new Schema({
	title: String,
	description: String,
	tools: String,
	repository: String,
	site: String,
});

export default mongoose.models.Projects ||
	mongoose.model('Projects', ProjectSchema);
