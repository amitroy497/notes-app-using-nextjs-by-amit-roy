import React from 'react';
import { FaRegBell } from 'react-icons/fa6';
import { HiMiniXMark } from 'react-icons/hi2';
import { IoMdCheckmark } from 'react-icons/io';

type TodoModalContentProps = {
	close: () => void;
	todoValue: string;
	setTodoValue: (arg0: string) => void;
	handleSubmit: () => void;
};
const TodoModalContent = ({
	close,
	todoValue,
	setTodoValue,
	handleSubmit,
}: TodoModalContentProps) => {
	return (
		<div className='w-full flex flex-col gap-4'>
			<div className='flex justify-between items-center font-bold'>
				<HiMiniXMark size='20px' className='cursor-pointer' onClick={close} />
				<h1>New To-Do</h1>
				<IoMdCheckmark
					size='20px'
					className='cursor-pointer'
					onClick={handleSubmit}
				/>
			</div>
			<input
				type='text'
				placeholder='New to-do'
				className='textAreaPlaceholder w-full p-3 outline-none bg-slate-400 text-black dark:text-white dark:bg-slate-800 rounded-xl'
				value={todoValue}
				onChange={(e) => setTodoValue?.(e.target.value)}
			/>
			<FaRegBell />
		</div>
	);
};

export default TodoModalContent;
