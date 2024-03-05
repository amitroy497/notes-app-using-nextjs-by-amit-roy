'use client';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';

type ProvidersProps = {
	children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<>
			{mounted ? (
				<ThemeProvider attribute='class'>{children}</ThemeProvider>
			) : (
				<>{children}</>
			)}
		</>
	);
};

export default Providers;
