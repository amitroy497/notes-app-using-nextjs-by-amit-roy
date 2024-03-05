import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<article className='dark:text-red-800'>
				Notes App by Amit Roy using Next.js
				<Link href='/allNotes'>AllNotes</Link>
			</article>
		</main>
	);
}
