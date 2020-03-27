import React from 'react';
import { Box, Typography, Avatar, Grid } from '@material-ui/core';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';

import avatar from '../../assets/avatar.png';

const useStyles = makeStyles(theme => ({
	header__avatar: {
		width: theme.spacing(15),
		height: theme.spacing(15),
		margin: theme.spacing(1),
	},
	header__title: {
		color: 'tomato',
	},
	header__subtitle: {
		color: 'tan',
		marginBottom: '3rem',
	},
	header__container: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '100vw',
		textAlign: 'center',
		zIndex: 1,
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<Box className={classes.header__container}>
			<Grid container justify='center'>
				<Avatar src={avatar} alt='Yes.' className={classes.header__avatar} />
			</Grid>
			<Typography variant='h4'>
				<Typed strings={['Mr. Dude']} typeSpeed={40} className={classes.header__title} />
			</Typography>
			<br />
			<Typography variant='h4'>
				<Typed
					strings={['One thing', 'and anotha', 'aaaand anotha !']}
					typeSpeed={40}
					backSpeed={60}
					loop
					className={classes.header__subtitle}
				/>
			</Typography>
		</Box>
	);
};

export default Header;
