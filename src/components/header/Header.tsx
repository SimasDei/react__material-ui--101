import React from 'react';
import { Box, Typography, Avatar, Grid } from '@material-ui/core';

import avatar from '../../assets/avatar.png';

const Header = () => {
	return (
		<Box>
			<Avatar src={avatar} alt='Yes.' />
		</Box>
	);
};

export default Header;
