'use client';

type SearchNotesProps = {
	toggleSearch: () => void;
};
const SearchNotes = ({ toggleSearch }: SearchNotesProps) => {
	return (
		<div className='flex justify-between items-center p-2 border-2 border-solid border-black rounded-lg dark:border-white absolute right-2 top-[-15px]'>
			<input
				type='Search'
				placeholder='Search notes'
				className='outline-none bg-transparent'
			/>
			<span className='text-black dark:text-white p-2 font-semibold'>|</span>
			<button
				type='button'
				className='text-black dark:text-yellow-400 cursor-pointer no-underline font-semibold'
				onClick={() => toggleSearch()}
			>
				Cancel
			</button>
		</div>
	);
};

export default SearchNotes;
