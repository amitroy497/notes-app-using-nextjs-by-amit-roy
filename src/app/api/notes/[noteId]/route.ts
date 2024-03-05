import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

import { connectionStr } from '@/db';
import { Note } from '@/lib/model/note';

export const PUT = async (request: Request, content: any) => {
	const noteId = content?.params?.noteId;
	const filter = { _id: noteId };
	const payload = await request.json();
	await mongoose.connect(connectionStr);
	const result = await Note.findOneAndUpdate(filter, payload);
	if ((!payload.date && !payload.header) || (!payload.date && !payload.body)) {
		return NextResponse.json({ result: 'Invalid Data', success: false });
	}
	return NextResponse.json({ result, success: true }, { status: 200 });
};

export const GET = async (request: Request, content: any) => {
	const noteId = content?.params?.noteId;
	const record = { _id: noteId };
	await mongoose.connect(connectionStr);
	const result = await Note.findById(record);
	return NextResponse.json({ result, success: true });
};

export const DELETE = async (request: Request, content: any) => {
	const noteId = content?.params?.noteId;
	const record = { _id: noteId };
	await mongoose.connect(connectionStr);
	const result = await Note.deleteOne(record);
	return NextResponse.json({ result, success: true });
};
