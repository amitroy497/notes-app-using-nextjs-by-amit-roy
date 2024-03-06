'use client';
import { useEffect, useLayoutEffect, useState } from 'react';

import { currentFormatDateTime } from '@/lib/constants';

import TodoModalContent from '../TodoModalContent';

type TodoModalProps = {
	close: () => void;
	shouldUpdate: boolean;
	id?: string;
	fetchTodos: () => void;
};

const TodoModal = ({ close, shouldUpdate, id, fetchTodos }: TodoModalProps) => {
	const [todoValue, setTodoValue] = useState<string>('');
	const [doneValue, setDoneValue] = useState<boolean>(false);

	const postData = async () => {
		const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/todos`, {
			method: 'POST',
			body: JSON.stringify({
				date: currentFormatDateTime,
				body: todoValue,
				done: false,
			}),
		});
		const response = await data.json();
		return response;
	};

	const putData = async () => {
		const data = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}api/todos/${id}`,
			{
				method: 'PUT',
				body: JSON.stringify({
					date: currentFormatDateTime,
					body: todoValue,
					done: doneValue,
				}),
			}
		);
		const response = await data.json();
		return response;
	};

	const handleSubmit = async () => {
		if (todoValue.length === 0) {
			return;
		}

		let response = [];

		if (shouldUpdate) {
			response = await putData();
		} else {
			response = await postData();
		}
		if (response.success) {
			fetchTodos();
			return close();
		}
		return alert('Error, please try again');
	};

	useLayoutEffect(() => {
		if (shouldUpdate) {
			(async function () {
				const data = await fetch(
					`${process.env.NEXT_PUBLIC_API_URL}api/todos/${id}`
				);
				const todoData = await data.json();

				setTodoValue(todoData?.result?.body);
				setDoneValue(todoData?.result?.done);
			})();
		}
	}, [id, shouldUpdate]);

	return (
		<>
			<TodoModalContent
				close={close}
				todoValue={todoValue}
				setTodoValue={setTodoValue}
				handleSubmit={handleSubmit}
			/>
		</>
	);
};

export default TodoModal;
