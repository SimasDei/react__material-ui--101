import React from 'react';
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
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';

import avatar from '../../assets/avatar.png';

const useStyles = makeStyles(theme => ({
	navbar: {
		background: '#222',
	},
	navbar__slider__container: {
		width: 250,
		background: '#511',
		height: '30rem',
	},
	navbar__slider__item: {
		color: 'tan',
	},
	navbar__slider__icon: {
		color: 'tan',
	},
	navbar__avatar: {
		display: 'block',
		margin: '0.5rem auto',
		width: theme.spacing(13),
		height: theme.spacing(13),
	},
	navbar__title: {
		color: 'tan',
	},
	navbar__icon: {
		color: 'tomato',
	},
}));

const menuItems = [
	{
		listIcon: <Home />,
		listText: 'Home',
	},
	{
		listIcon: <AssignmentInd />,
		listText: 'Resume',
	},
	{
		listIcon: <Apps />,
		listText: 'Portfolio',
	},
	{
		listIcon: <ContactMail />,
		listText: 'Contacts',
	},
];

export const Navbar: React.FC = () => {
	const classes = useStyles();
	return (
		<>
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
			<Box component='nav'>
				<AppBar position='static' className={classes.navbar}>
					<Toolbar>
						<IconButton>
							<ArrowBack className={classes.navbar__icon} />
						</IconButton>
						<Typography variant='h5' className={classes.navbar__title}>
							Tomato
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

export default Navbar;
