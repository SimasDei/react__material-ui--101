import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';

export const useStyles = makeStyles(theme => ({
	navbar: {
		background: '#222',
	},
	navbar__slider__container: {
		width: 250,
		background: '#511',
		height: '100vh',
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

export const menuItems = [
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
