'use client';
import { useCallback, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaCheck } from 'react-icons/fa6';
import { GoArrowLeft } from 'react-icons/go';
import { RiShareLine } from 'react-icons/ri';

import { currentFormatDateTime } from '@/lib/constants';

import HeaderBodyTextArea from '../components/HeaderBodyTextArea';

type noteType = {
	header: string;
	body: string;
	date: string;
};

const NotePage = () => {
	const router = useRouter();
	const [note, setNote] = useState<noteType>({
		header: '',
		body: '',
		date: '',
	});

	const getData = useCallback((header: string, body: string) => {
		setNote({ header, body, date: currentFormatDateTime });
	}, []);

	const handleClick = () => {
		router.push('/');
	};

	const handleSubmit = async () => {
		if (note.header?.length === 0 && note.body?.length === 0) {
			return alert('One of the thing Header or Body, is mandatory');
		}
		const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/notes`, {
			method: 'POST',
			body: JSON.stringify({
				date: note.date,
				header: note.header,
				body: note.body,
			}),
		});
		const response = await data.json();
		if (response.success) {
			return router.push('/');
		}
		return alert('Error, please try again');
	};

	return (
		<>
			<div className='flex justify-between items-center my-2 py-2'>
				<Link href='/' className='cursor-pointer' onClick={handleClick}>
					<GoArrowLeft size='30px' />
				</Link>
				<RiShareLine size='30px' className='cursor-pointer' />
				<button onClick={handleSubmit}>
					<FaCheck size='30px' className='cursor-pointer' />
				</button>
			</div>
			<div>{currentFormatDateTime}</div>
			<div className='mx-[-1rem] my-2 border-b-2 border-black dark:border-white'></div>
			<HeaderBodyTextArea getData={getData} />
		</>
	);
};

export default NotePage;
