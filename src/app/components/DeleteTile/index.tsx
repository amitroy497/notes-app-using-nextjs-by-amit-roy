'use client';

import { RiDeleteBin2Line } from 'react-icons/ri';

import { ButtonTheme } from '../ButtonTheme';

type DeleteTileProps = {
	id: string;
	fetchNotes: () => void;
};

const DeleteTile = ({ id, fetchNotes }: DeleteTileProps) => {
	const deleteData = async () => {
		const data = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}api/notes/${id}`,
			{
				method: 'DELETE',
				body: JSON.stringify({
					_id: id,
				}),
			}
		);
		const response = await data.json();
		if (response.success) {
			return fetchNotes();
		}
		return alert('Error, please try again');
	};
	return (
		<div>
			<RiDeleteBin2Line
				color={ButtonTheme()}
				size='15px'
				className='cursor-pointer'
				onClick={deleteData}
			/>
		</div>
	);
};

export default DeleteTile;
