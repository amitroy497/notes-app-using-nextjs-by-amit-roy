'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';

import AddButton from '../components/AddButton';
import AllNoteTiles from '../components/AllNoteTiles';
import Search from '../components/Search';

const AllNotes = () => {
	const [count, setCount] = useState<number>(0);
	const [notes, setNotes] = useState<string[]>();

	const getNotes = useCallback((notes: any) => {
		setCount(notes.length);
		setNotes(notes);
	}, []);

	return (
		<div className='notesPageHeight relative overflow-hidden'>
			<h1 className='text-4xl font-bold my-4'>All Notes</h1>
			<h6 className='text-base my-2'>
				{count} {count > 1 ? <>notes</> : <>note</>}
			</h6>
			<div className='absolute right-[55px] bottom-[62px]'>
				<Link href='/notePage'>
					<AddButton />
				</Link>
			</div>
			<div className='tileContainer mt-4 overflow-x-hidden overflow-y-auto'>
				<AllNoteTiles getNotes={getNotes} />
			</div>
		</div>
	);
};

export default AllNotes;
