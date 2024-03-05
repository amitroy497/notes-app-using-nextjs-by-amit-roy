'use client';

import { useRouter } from 'next/navigation';
import { GrEdit } from 'react-icons/gr';

import { currentFormatDateTime, DarkThemeYellow } from '@/lib/constants';

import DeleteTile from '../DeleteTile';

type NoteTileProps = {
	_id: string;
	header?: string;
	body?: string;
	date: string;
	fetchNotes: () => void;
};

const NoteTile = ({
	_id: id,
	header,
	body,
	date,
	fetchNotes,
}: NoteTileProps) => {
	const router = useRouter();

	const onlyDate = date.substring(0, date.indexOf(','));

	return (
		<article className='flex justify-between items-center p-3 my-2 bg-slate-400 text-black dark:text-white dark:bg-slate-800 rounded-xl'>
			<section>
				<header className='truncate'>{header}</header>
				<section className='truncate'>{body}</section>
				{date === currentFormatDateTime ? (
					<section>Just now</section>
				) : (
					<section>{onlyDate}</section>
				)}
			</section>
			<section className='flex justify-between items-center gap-2'>
				<GrEdit
					color={DarkThemeYellow}
					size='15px'
					className='cursor-pointer'
					onClick={() => router.push(`/allNotes/${id}`)}
				/>
				<DeleteTile id={id} fetchNotes={fetchNotes} />
			</section>
		</article>
	);
};

export default NoteTile;
