import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

import { connectionStr } from '@/db';
import { Note } from '@/lib/model/note';

export async function GET() {
	try {
		await mongoose.connect(connectionStr);
		const data = await Note.find();
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
	let note = new Note(payload);
	const result = await note.save();
	return NextResponse.json({ result, success: true });
}
