import AllNotes from './allNotes/page';
import NavBar from './components/NavBar';

export default function Home() {
	return (
		<main className='screenHeight relative'>
			{/* Notes App by Amit Roy using Next.js */}
			<AllNotes />
			{/* <Link href='/allNotes'>AllNotes</Link> */}
			<NavBar />
		</main>
	);
}
