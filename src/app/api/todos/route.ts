import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

import { connectionStr } from '@/db';
import { Todo } from '@/lib/model/todo';

export async function GET() {
	try {
		await mongoose.connect(connectionStr);
		const data = await Todo.find();
		return NextResponse.json({ result: data, success: true });
	} catch (err) {
		return NextResponse.json({
			result: 'Something went wrong!',
			success: false,
		});
	}
}

export async function POST(request: any) {
	const payload = await request.json();
	await mongoose.connect(connectionStr);
	let todo = new Todo(payload);
	const result = await todo.save();
	return NextResponse.json({ result, success: true });
}
