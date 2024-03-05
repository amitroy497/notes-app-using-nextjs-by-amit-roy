'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa6';

import { DarkThemeYellow } from '@/lib/constants';

const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div className='flex justify-between items-center w-[120px] font-bold'>
			{theme === 'dark' ? (
				<>
					<label>Dark Mode</label>
					<span className='w-[25px] h-full'>
						<FaToggleOn
							className='w-full h-full'
							onClick={() => setTheme('light')}
							color={DarkThemeYellow}
						/>
					</span>
				</>
			) : (
				<>
					<label>Light Mode</label>
					<span className='w-[25px] h-full'>
						<FaToggleOff
							className='w-full h-full'
							onClick={() => setTheme('dark')}
						/>
					</span>
				</>
			)}
		</div>
	);
};

export default ThemeSwitcher;
