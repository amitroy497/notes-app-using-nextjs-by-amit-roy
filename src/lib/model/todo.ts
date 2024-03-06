import mongoose from 'mongoose';

const todoModel = new mongoose.Schema({
	date: {
		type: String,
		required: true,
	},
	body: {
		type: String,
	},
	done: {
		type: Boolean,
	},
});

export const Todo = mongoose.models.todos || mongoose.model('todos', todoModel);
