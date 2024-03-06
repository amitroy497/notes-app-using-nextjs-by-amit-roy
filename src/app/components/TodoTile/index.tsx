'useClient';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { GrEdit } from 'react-icons/gr';
import {
	RiCheckboxBlankCircleLine,
	RiCheckboxCircleFill,
} from 'react-icons/ri';

import { useToggle } from '@/hooks/UseToggle';

import { ButtonTheme } from '../ButtonTheme';
import DeleteTile from '../DeleteTile';
import Modal from '../Modal';
import TodoModal from '../TodoModal';

type TodoTileProps = {
	_id: string;
	date: string;
	body: string;
	done: boolean;
	fetchTodos: () => void;
};

const TodoTile = ({
	_id: id,
	date,
	body: todoBody,
	done,
	fetchTodos,
}: TodoTileProps) => {
	const [checkedStatus, setCheckedStatus] = useState<boolean>(false);
	const { show: showModal, toggle: toggleShowModal } = useToggle(false);

	useEffect(() => {
		done ? setCheckedStatus(true) : setCheckedStatus(false);
	}, [done]);

	const handleCheck = async () => {
		setCheckedStatus(!checkedStatus);
		const data = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}api/todos/${id}`,
			{
				method: 'PUT',
				body: JSON.stringify({
					date: date,
					body: todoBody,
					done: !checkedStatus,
				}),
			}
		);
		const response = await data.json();
		if (response.success) {
			return fetchTodos();
		}
		return alert('Error, please try again');
	};

	const styles = {
		color: checkedStatus ? '#D3D3D3' : 'white',
	};
	return (
		<div className='flex justify-between items-center gap-2 p-3 bg-slate-400 text-black dark:text-white dark:bg-slate-800 rounded-xl'>
			<section className='flex items-center gap-2'>
				{checkedStatus ? (
					<RiCheckboxCircleFill color={ButtonTheme()} onClick={handleCheck} />
				) : (
					<RiCheckboxBlankCircleLine
						color={ButtonTheme()}
						onClick={handleCheck}
					/>
				)}
				<span style={styles}>{todoBody}</span>
			</section>
			<section className='flex justify-between items-center gap-2'>
				<GrEdit
					color={ButtonTheme()}
					size='15px'
					className='cursor-pointer'
					onClick={toggleShowModal}
				/>
				<DeleteTile id={id} fetchDetails={fetchTodos} link='todos' />
			</section>
			{showModal && (
				<Modal>
					<TodoModal
						close={toggleShowModal}
						shouldUpdate={true}
						id={id}
						fetchTodos={fetchTodos}
					/>
				</Modal>
			)}
		</div>
	);
};

export default TodoTile;
