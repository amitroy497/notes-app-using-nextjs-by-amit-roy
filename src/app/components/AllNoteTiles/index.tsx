'use client';
import { useCallback, useEffect, useState } from 'react';

import NoteTile from '../NoteTile';

type NotesDetailsType = {
	_id: string;
	date: string;
	header?: string;
	body?: string;
};

type AllNoteTilesProps = {
	getNotes: (arg0: NotesDetailsType) => void;
};

const AllNoteTiles = ({ getNotes }: AllNoteTilesProps) => {
	const [notes, setNotes] = useState([]);

	const fetchNotes = useCallback(async () => {
		const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/notes`);
		const res = await data.json();
		setNotes(res?.result);
		getNotes(res?.result);
	}, [getNotes]);

	useEffect(() => {
		fetchNotes();
	}, [fetchNotes]);

	return (
		<>
			{notes?.map((note: NotesDetailsType) => (
				<div key={note?._id}>
					<NoteTile {...note} fetchNotes={fetchNotes} />
				</div>
			))}
		</>
	);
};

export default AllNoteTiles;
