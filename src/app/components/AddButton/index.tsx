import { MdAddCircle } from 'react-icons/md';

import { ButtonTheme } from '../ButtonTheme';

const AddButton = () => {
	return (
		<MdAddCircle
			color={ButtonTheme()}
			size='100px'
			className='cursor-pointer'
		/>
	);
};

export default AddButton;
