import React from 'react';

import TodoTile from '../TodoTile';
import { TodosDetailsType } from '../TodoTilesSection';

type TodoDoneProps = {
	todos: TodosDetailsType[];
	fetchTodos: () => void;
};
const TodoDone = ({ todos, fetchTodos }: TodoDoneProps) => {
	return (
		<div>
			<div className='mt-5 mb-2 text-base'>Done {`(${todos.length})`}</div>
			{todos?.map((todo: TodosDetailsType) => (
				<div key={todo?._id} className='my-2'>
					<TodoTile {...todo} fetchTodos={fetchTodos} />
				</div>
			))}
		</div>
	);
};

export default TodoDone;
