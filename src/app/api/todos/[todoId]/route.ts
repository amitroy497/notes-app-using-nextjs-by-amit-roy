import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

import { connectionStr } from '@/db';
import { Todo } from '@/lib/model/todo';

export const PUT = async (request: Request, content: any) => {
	const todoId = content?.params?.todoId;
	const filter = { _id: todoId };
	const payload = await request.json();
	await mongoose.connect(connectionStr);
	const result = await Todo.findOneAndUpdate(filter, payload);
	if (!payload.date && !payload.body && !payload.done) {
		return NextResponse.json({ result: 'Invalid Data', success: false });
	}
	return NextResponse.json({ result, success: true }, { status: 200 });
};

export const GET = async (request: Request, content: any) => {
	const todoId = content?.params?.todoId;
	const record = { _id: todoId };
	await mongoose.connect(connectionStr);
	const result = await Todo.findById(record);
	return NextResponse.json({ result, success: true });
};

export const DELETE = async (request: Request, content: any) => {
	const todoId = content?.params?.todoId;
	const record = { _id: todoId };
	await mongoose.connect(connectionStr);
	const result = await Todo.deleteOne(record);
	return NextResponse.json({ result, success: true });
};
