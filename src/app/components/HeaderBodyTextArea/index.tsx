'use client';

import { useEffect, useState } from 'react';

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

	useEffect(() => {
		getData(header, body);
	}, [body, getData, header]);

	return (
		<>
			<textarea
				placeholder='Heading'
				className='textAreaPlaceholder p-2 mt-2 outline-none resize-none w-full overflow-hidden bg-slate-400 text-black dark:text-white dark:bg-slate-800 rounded-xl'
				maxLength={250}
				value={header}
				onChange={(e) => setHeader(e.target.value)}
			/>
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
