'use client';
import { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';

import { useToggle } from '@/hooks/UseToggle';

import { WhiteBlackTheme } from '../ButtonTheme';
import Modal from '../Modal';
import SearchNotes from '../SearchNotes';

type SearchProps = {
	notes: any;
	fetchNotes: () => void;
};

const Search = ({ notes, fetchNotes }: SearchProps) => {
	const { show: showSearch, toggle: toggleSearch } = useToggle(false);
	const [noteHeader, setNoteHeader] = useState<string[]>([]);

	return (
		<>
			{showSearch ? (
				<Modal>
					<SearchNotes
						toggleSearch={toggleSearch}
						items={notes}
						fetchNotes={fetchNotes}
					/>
				</Modal>
			) : (
				<div className='absolute top-4 right-2'>
					<IoSearch
						color={WhiteBlackTheme()}
						size='20px'
						className='cursor-pointer'
						onClick={() => toggleSearch()}
					/>
				</div>
			)}
		</>
	);
};

export default Search;
