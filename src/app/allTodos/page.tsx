'use client';
import { useCallback, useState } from 'react';

import { useToggle } from '@/hooks/UseToggle';

import AddButton from '../components/AddButton';
import Modal from '../components/Modal';
import TodoModal from '../components/TodoModal';
import TodoTilesSection from '../components/TodoTilesSection';

const AllTodos = () => {
	const { show: showModal, toggle: toggleShowModal } = useToggle(false);
	const [count, setCount] = useState<number>(0);
	const getTodos = useCallback((todos: any) => {
		setCount(todos.length);
	}, []);

	const handleAddButtonClick = () => {
		toggleShowModal();
	};

	return (
		<>
			<div className='notesPageHeight relative overflow-hidden'>
				<h1 className='text-4xl font-bold my-4'>To-dos</h1>
				<h6 className='text-base my-2'>
					{count} {count > 1 ? <>to-dos</> : <>to-do</>}
				</h6>
				<div
					className='absolute right-[55px] bottom-[62px]'
					onClick={handleAddButtonClick}
				>
					<AddButton />
				</div>
				<div className='tileContainer mt-4 overflow-x-hidden overflow-y-auto'>
					<TodoTilesSection
						getTodos={getTodos}
						showModal={showModal}
						toggleShowModal={toggleShowModal}
					/>
				</div>
			</div>
		</>
	);
};

export default AllTodos;
