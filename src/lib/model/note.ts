import mongoose from 'mongoose';

const noteModel = new mongoose.Schema({
	date: {
		type: String,
		required: true,
	},
	header: {
		type: String,
	},
	body: {
		type: String,
	},
});

export const Note = mongoose.models.notes || mongoose.model('notes', noteModel);
