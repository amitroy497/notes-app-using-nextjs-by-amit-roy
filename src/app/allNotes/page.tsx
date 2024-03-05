'use client';

import { useCallback, useState } from 'react';

import AddButton from '../components/AddButton';
import AllNoteTiles from '../components/AllNoteTiles';
import FooterButtons from '../components/NavBar';
import Search from '../components/Search';

const AllNotes = () => {
	const [count, setCount] = useState<number>(0);
	const getNotes = useCallback((notes: any) => {
		setCount(notes.length);
	}, []);
	return (
		<div className='notesPageHeight relative overflow-hidden'>
			<div className='absolute top-4 right-2'>
				<Search />
			</div>
			<h1 className='text-4xl font-bold my-4'>All Notes</h1>
			<h6 className='text-base my-2'>
				{count} {count > 1 ? <>notes</> : <>note</>}
			</h6>
			<div className='absolute right-[55px] bottom-[62px]'>
				<AddButton />
			</div>
			<div className='tileContainer mt-4 overflow-x-hidden overflow-y-auto'>
				<AllNoteTiles getNotes={getNotes} />
			</div>
		</div>
	);
};

export default AllNotes;
