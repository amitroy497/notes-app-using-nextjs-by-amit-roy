import { FcTodoList } from 'react-icons/fc';
import { GrNotes } from 'react-icons/gr';

type NavBarProps = {
	handleClick: () => void;
	showTodos: boolean;
};

const NavBar = ({ handleClick, showTodos }: NavBarProps) => {
	return (
		<div className='absolute bottom-[-28px] z-10 w-full flex justify-evenly items-center py-2'>
			<div
				className='flex flex-col items-center gap-2 font-bold'
				onClick={() => handleClick()}
				style={{ fontWeight: showTodos ? 'normal' : 'bold' }}
			>
				<GrNotes />
				<div>Notes</div>
			</div>
			<div
				className='flex flex-col items-center gap-2 font-bold'
				onClick={() => handleClick()}
				style={{ fontWeight: showTodos ? 'bold' : 'normal' }}
			>
				<FcTodoList />
				<div>To-dos</div>
			</div>
		</div>
	);
};

export default NavBar;
