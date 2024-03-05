import Link from 'next/link';
import { MdAddCircle } from 'react-icons/md';

import { DarkThemeYellow } from '@/lib/constants';

const AddButton = () => {
	return (
		<Link href='/notePage'>
			<MdAddCircle
				color={DarkThemeYellow}
				size='100px'
				className='cursor-pointer'
			/>
		</Link>
	);
};

export default AddButton;
