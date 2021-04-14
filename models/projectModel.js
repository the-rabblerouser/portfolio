import mongoose, { Schema } from 'mongoose';

// if ref is a string and not the Review schema, it will return null when server is restarted

const ProjectSchema = new Schema({
	title: String,
	description: String,
	tools: Number,
	repository: String,
	site: String,
});

export default mongoose.models.Campground ||
	mongoose.model('Project', ProjectSchema);
