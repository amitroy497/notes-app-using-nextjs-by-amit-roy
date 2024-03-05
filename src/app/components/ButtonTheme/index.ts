import { useTheme } from 'next-themes';

import { DarkThemeYellow, LightThemeBlack } from '@/lib/constants';

export const ButtonTheme = () => {
	const { theme } = useTheme();
	if (theme === 'dark') {
		return DarkThemeYellow;
	}
	return LightThemeBlack;
};
