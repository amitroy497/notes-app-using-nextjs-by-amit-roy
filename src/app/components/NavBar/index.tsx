'use client';

import { useRouter } from 'next/navigation';
import { FcTodoList } from 'react-icons/fc';
import { GrNotes } from 'react-icons/gr';

import { useToggle } from '@/hooks/UseToggle';

const NavBar = () => {
	const router = useRouter();
	const { show: showTodos, toggle: toggleTodos } = useToggle(false);

	const handleClick = (link: string) => {
		router.push(link);
		toggleTodos();
	};

	return (
		<div className='absolute bottom-[-28px] z-10 w-full flex justify-evenly items-center py-2'>
			<div
				className='flex flex-col items-center gap-2 font-bold'
				onClick={() => handleClick('allNotes')}
				style={{ fontWeight: showTodos ? 'normal' : 'bold' }}
			>
				<GrNotes />
				<div>Notes</div>
			</div>
			<div
				className='flex flex-col items-center gap-2 font-bold'
				onClick={() => handleClick('allTodos')}
				style={{ fontWeight: showTodos ? 'bold' : 'normal' }}
			>
				<FcTodoList />
				<div>To-dos</div>
			</div>
		</div>
	);
};

export default NavBar;
