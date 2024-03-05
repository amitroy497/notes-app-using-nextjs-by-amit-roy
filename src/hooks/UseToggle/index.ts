'use client';

import { useState } from 'react';

export const useToggle = (defaultValue: boolean) => {
	const [show, setShow] = useState<boolean>(false);

	const toggle = () => {
		setShow(!show);
	};

	return { show, toggle };
};
