'use client';
import { useCallback, useEffect, useState } from 'react';

import Modal from '../Modal';
import TodoDone from '../TodoDone';
import TodoModal from '../TodoModal';
import TodoTile from '../TodoTile';

export type TodosDetailsType = {
	_id: string;
	date: string;
	body: string;
	done: boolean;
};

type TodoTilesSectionProps = {
	getTodos: (arg0: TodosDetailsType) => void;
	showModal: boolean;
	toggleShowModal: () => void;
};

const TodoTilesSection = ({
	getTodos,
	showModal,
	toggleShowModal,
}: TodoTilesSectionProps) => {
	const [todosChecked, setTodosChecked] = useState([]);
	const [todosUnChecked, setTodosUnChecked] = useState([]);

	const fetchTodos = useCallback(async () => {
		const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/todos`);
		const res = await data.json();
		const unCheckedData = res?.result?.filter((item: any) => {
			return item?.done === false;
		});
		setTodosUnChecked(unCheckedData);

		const checkedData = res?.result?.filter((item: any) => {
			return item?.done === true;
		});
		setTodosChecked(checkedData);
		getTodos(res?.result);
	}, [getTodos]);

	useEffect(() => {
		fetchTodos();
	}, [fetchTodos]);

	return (
		<>
			{todosUnChecked?.map((todo: TodosDetailsType) => (
				<div key={todo?._id} className='my-2'>
					<TodoTile {...todo} fetchTodos={fetchTodos} />
				</div>
			))}
			{todosChecked.length > 0 && (
				<TodoDone todos={todosChecked} fetchTodos={fetchTodos} />
			)}
			{showModal && (
				<Modal>
					<TodoModal
						close={toggleShowModal}
						shouldUpdate={false}
						fetchTodos={fetchTodos}
					/>
				</Modal>
			)}
		</>
	);
};

export default TodoTilesSection;
