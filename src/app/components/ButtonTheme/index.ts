import { useTheme } from 'next-themes';

import {
	DarkThemeYellow,
	LightThemeBlack,
	WhiteThemeColor,
} from '@/lib/constants';

export const ButtonTheme = () => {
	const { theme } = useTheme();
	if (theme === 'dark') {
		return DarkThemeYellow;
	}
	return LightThemeBlack;
};

export const WhiteBlackTheme = () => {
	const { theme } = useTheme();
	if (theme === 'dark') {
		return WhiteThemeColor;
	}
	return LightThemeBlack;
};
