'use client';
import { useRouter } from 'next/navigation';

import { useToggle } from '@/hooks/UseToggle';

import AllNotes from './allNotes/page';
import AllTodos from './allTodos/page';
import NavBar from './components/NavBar';

const Home = () => {
	const router = useRouter();
	const { show: showTodos, toggle: toggleTodos } = useToggle(false);

	const handleClick = () => {
		toggleTodos();
	};

	return (
		<main className='screenHeight relative'>
			{showTodos ? <AllTodos /> : <AllNotes />}
			<NavBar handleClick={handleClick} showTodos={showTodos} />
		</main>
	);
};

export default Home;
