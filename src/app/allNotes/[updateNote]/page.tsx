'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaCheck } from 'react-icons/fa6';
import { GoArrowLeft } from 'react-icons/go';
import { RiShareLine } from 'react-icons/ri';

import HeaderBodyTextArea from '@/app/components/HeaderBodyTextArea';
import { currentFormatDateTime } from '@/lib/constants';

type UpdateNoteProps = {
	params: {
		updateNote: string;
	};
};

const UpdateNote = ({ params }: UpdateNoteProps) => {
	const router = useRouter();

	const [apiSuccess, setApiSuccess] = useState<boolean>(false);
	const [date, setDate] = useState<string>();
	const [header, setHeader] = useState<string>();
	const [body, setBody] = useState<string>();

	useEffect(() => {
		(async function () {
			const data = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}api/notes/${params.updateNote}`
			);
			const noteData = await data.json();

			setDate(noteData?.result?.date);
			setHeader(noteData?.result?.header);
			setBody(noteData?.result?.body);
			setApiSuccess(true);
		})();
	}, [params.updateNote]);

	const getData = useCallback(
		(updatedHeader: string, updatedBody: string) => {
			if (updatedHeader !== header || updatedBody !== body) {
				setDate(currentFormatDateTime);
			}
			updatedHeader !== header && setHeader(updatedHeader);
			updatedBody !== body && setBody(updatedBody);
		},
		[body, header]
	);

	const handleSubmit = async () => {
		if (header?.length === 0 && body?.length === 0) {
			return alert('One of the thing Header or Body, is mandatory');
		}
		const data = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}api/notes/${params.updateNote}`,
			{
				method: 'PUT',
				body: JSON.stringify({
					date,
					header: header || '',
					body: body || '',
				}),
			}
		);
		const response = await data.json();
		if (response.success) {
			return router.push('/allNotes');
		}
		return alert('Error, please try again');
	};

	const handleClick = () => {
		router.push('/allNotes');
	};

	return (
		<>
			{apiSuccess && (
				<>
					<div className='flex justify-between items-center my-2 py-2'>
						<Link
							href='/allNotes'
							className='cursor-pointer'
							onClick={handleClick}
						>
							<GoArrowLeft size='30px' />
						</Link>
						<RiShareLine size='30px' className='cursor-pointer' />
						<button onClick={handleSubmit}>
							<FaCheck size='30px' className='cursor-pointer' />
						</button>
					</div>
					<div>{date}</div>
					<div className='mx-[-1rem] my-2 border-b-2 border-black dark:border-white'></div>
					<HeaderBodyTextArea
						getData={getData}
						currentHeader={header}
						currentBody={body}
					/>
				</>
			)}
		</>
	);
};

export default UpdateNote;
