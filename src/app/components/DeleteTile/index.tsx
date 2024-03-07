'use client';

import { RiDeleteBin2Line } from 'react-icons/ri';

import { ButtonTheme } from '../ButtonTheme';

type DeleteTileProps = {
	id: string;
	fetchDetails: () => void;
	link: string;
	toggleSearch?: () => void;
};

const DeleteTile = ({
	id,
	fetchDetails,
	link,
	toggleSearch,
}: DeleteTileProps) => {
	const deleteData = async () => {
		const data = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}api/${link}/${id}`,
			{
				method: 'DELETE',
				body: JSON.stringify({
					_id: id,
				}),
			}
		);
		const response = await data.json();
		if (response.success) {
			toggleSearch?.();
			return fetchDetails();
		}
		return alert('Error, please try again');
	};
	return (
		<>
			<RiDeleteBin2Line
				color={ButtonTheme()}
				size='15px'
				className='cursor-pointer'
				onClick={deleteData}
			/>
		</>
	);
};

export default DeleteTile;
