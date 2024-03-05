import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Providers from './Providers';
import ThemeSwitcher from './ThemeSwitcher';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Notes App by Amit Roy',
	description: 'Using Next.js',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					<article className='mx-auto w-[80%] h-screen overflow-hidden'>
						<section className='screenHeight overflow-hidden my-5 p-4 border-4 border-double border-black dark:border-yellow-400'>
							<ThemeSwitcher />
							{children}
						</section>
					</article>
				</Providers>
			</body>
		</html>
	);
}
