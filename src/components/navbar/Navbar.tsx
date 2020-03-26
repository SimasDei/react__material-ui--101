import React, { useState } from 'react';
import {
	AppBar,
	Toolbar,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	IconButton,
	Avatar,
	Divider,
	Typography,
	Box,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import MobileDrawer from '@material-ui/core/Drawer';

import { useStyles, menuItems } from './Navbar.data';

import avatar from '../../assets/avatar.png';

export const SideList: React.FC = () => {
	const classes = useStyles();

	return (
		<Box className={classes.navbar__slider__container} component='div'>
			<Avatar className={classes.navbar__avatar} src={avatar} alt='Dude Bro' />
			<Divider />
			<List>
				{menuItems.map(menuItem => (
					<ListItem button key={menuItem.listText} className={classes.navbar__slider__item}>
						<ListItemIcon className={classes.navbar__slider__icon}>
							{menuItem.listIcon}
						</ListItemIcon>
						<ListItemText primary={menuItem.listText} />
					</ListItem>
				))}
			</List>
		</Box>
	);
};

export const Navbar: React.FC = () => {
	const [state, setState] = useState({
		isOpen: false,
	});
	const classes = useStyles();
	const toggleSlider = (slider: string, status: boolean) => {
		setState({ ...state, [slider]: status });
	};
	return (
		<>
			<Box component='nav'>
				<AppBar position='static' className={classes.navbar}>
					<Toolbar>
						<IconButton onClick={() => toggleSlider('isOpen', !state.isOpen)}>
							<ArrowBack className={classes.navbar__icon} />
						</IconButton>
						<Typography variant='h5' className={classes.navbar__title}>
							Tomato
						</Typography>
						<MobileDrawer
							open={state.isOpen}
							onClose={() => toggleSlider('isOpen', !state.isOpen)}
							anchor='right'>
							<SideList />
						</MobileDrawer>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

export default Navbar;
