import React from 'react';
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Avatar,
	Divider,
	Box,
} from '@material-ui/core';

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

export default SideList;
