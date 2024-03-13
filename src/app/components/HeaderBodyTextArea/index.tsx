'use client';

import { useEffect, useState } from 'react';

import { MaxHeadingLength } from '@/lib/constants';

type HeaderBodyTextAreaProps = {
	getData: (arg0: string, arg1: string) => void;
	currentHeader?: string;
	currentBody?: string;
};

const HeaderBodyTextArea = ({
	getData,
	currentHeader,
	currentBody,
}: HeaderBodyTextAreaProps) => {
	const [header, setHeader] = useState<string>(currentHeader || '');
	const [body, setBody] = useState<string>(currentBody || '');
	const [headerLength, setHeaderLength] = useState<number>(
		currentHeader?.length || 0
	);

	useEffect(() => {
		getData(header, body);
	}, [body, getData, header]);

	return (
		<>
			<section className='flex items-end flex-col my-2'>
				<textarea
					placeholder='Heading'
					className='textAreaPlaceholder p-2 outline-none resize-none w-full overflow-y-auto overflow-x-hidden bg-slate-400 text-black dark:text-white dark:bg-slate-800 rounded-xl'
					maxLength={MaxHeadingLength}
					value={header}
					onChange={(e) => {
						setHeader(e.target.value);
						setHeaderLength(e.target.value.length);
					}}
				/>
				<div className='text-xs mt-1 mr-2'>
					{headerLength}/{MaxHeadingLength}
				</div>
			</section>
			<textarea
				placeholder='Body'
				className='textAreaPlaceholder p-2 outline-none resize-none w-full h-[56vh] overflow-hidden bg-slate-400 text-black dark:text-white dark:bg-slate-800 rounded-xl'
				value={body}
				onChange={(e) => setBody(e.target.value)}
			/>
		</>
	);
};

export default HeaderBodyTextArea;
