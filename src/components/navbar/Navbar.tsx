import React from 'react';
import {
	AppBar,
	Toolbar,
	List,
	ListItem,
	ListItemText,
	IconButton,
	Avatar,
	Divider,
	Typography,
	Box,
} from '@material-ui/core';
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';

export const Navbar: React.FC = () => {
	return (
		<Box component='nav'>
			<AppBar>
				<Toolbar>
					<ArrowBack />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
