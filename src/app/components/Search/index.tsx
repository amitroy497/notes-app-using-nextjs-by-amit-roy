'use client';
import React from 'react';
import { IoSearch } from 'react-icons/io5';

import { useToggle } from '@/hooks/UseToggle';

import { WhiteBlackTheme } from '../ButtonTheme';
import SearchNotes from '../SearchNotes';

const Search = () => {
	const { show: showSearch, toggle: toggleSearch } = useToggle(false);
	return (
		<>
			{showSearch ? (
				<SearchNotes toggleSearch={toggleSearch} />
			) : (
				<IoSearch
					color={WhiteBlackTheme()}
					size='20px'
					className='cursor-pointer'
					onClick={() => toggleSearch()}
				/>
			)}
		</>
	);
};

export default Search;
