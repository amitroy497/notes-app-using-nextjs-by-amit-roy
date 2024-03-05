import Link from 'next/link';
import { useTheme } from 'next-themes';
import { MdAddCircle } from 'react-icons/md';

import { ButtonTheme } from '../ButtonTheme';

const AddButton = () => {
	const { theme } = useTheme();
	return (
		<Link href='/notePage'>
			<MdAddCircle
				color={ButtonTheme()}
				size='100px'
				className='cursor-pointer'
			/>
		</Link>
	);
};

export default AddButton;
