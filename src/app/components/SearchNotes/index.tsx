'use client';

import { useEffect, useState } from 'react';

import NoteTile from '../NoteTile';

type SearchNotesProps = {
	toggleSearch: () => void;
	items: string[];
	fetchNotes: () => void;
};
const SearchNotes = ({ toggleSearch, items, fetchNotes }: SearchNotesProps) => {
	const [suggestions, setSuggestions] = useState<any>([]);
	const [text, setText] = useState<string>('');
	const [itemHeaders, setItemHeaders] = useState<any>();

	useEffect(() => {
		let arr: string[] = [];
		items.map((item: any) => {
			arr.push(item.header);
			return arr.push(item.body);
		});
		setItemHeaders(JSON.stringify(arr));
	}, [items]);

	const getSuggestion: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		const value = e.target.value;
		let time: number = 0;
		clearTimeout(time);
		let data: string[] = [];
		if (value.length > 0) {
			const regEx = new RegExp(`${value}`, 'i');
			data = JSON.parse(itemHeaders).filter((v: string) => regEx.test(v));
		}
		const dispItem = items.filter((h: any) => {
			return data.includes(h?.header) || data.includes(h?.body);
		});
		setSuggestions(dispItem);
		setText(value);
	};

	const renderSuggestions = () => {
		if (suggestions.length === 0) {
			return null;
		}
		return (
			<div className='h-[70vh] w-full overflow-x-hidden overflow-y-auto'>
				{suggestions.map((suggestion: any) => (
					<div key={suggestion?._id} className='w-full'>
						<NoteTile
							{...suggestion}
							fetchNotes={fetchNotes}
							toggleSearch={toggleSearch}
						/>
					</div>
				))}
			</div>
		);
	};

	return (
		<>
			<div className='flex justify-between items-center p-2 border-2 border-solid border-black rounded-lg dark:border-white'>
				<input
					type='Search'
					placeholder='Search notes'
					className='outline-none bg-transparent'
					value={text}
					onChange={getSuggestion}
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
			{renderSuggestions()}
		</>
	);
};

export default SearchNotes;
