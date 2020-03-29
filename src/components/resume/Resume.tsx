import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../navbar/Navbar';

const useStyles = makeStyles(theme => ({
	resume__container: {
		background: '#233',
	},
	resume__timeline: {
		position: 'relative',
		padding: '1rem',
		margin: '0 auto',
		'&:before': {
			content: `''`,
			position: 'absolute',
			height: '100%',
			border: '1px solid tan',
			right: '40px',
			top: 0,
		},
		'&:after': {
			content: `''`,
			display: 'table',
			clear: 'both',
		},
		[theme.breakpoints.up('md')]: {
			padding: '2rem',
			'&:before': {
				left: 'calc(50% - 1px)',
				right: 'auto',
			},
		},
	},
}));

const Resume: React.FC = () => {
	const classes = useStyles();

	return (
		<>
			<Navbar />
			<Box component='header' className={classes.resume__container}>
				<Typography variant='h4'>Professional Experience</Typography>
				<Box className={classes.resume__timeline}>
					<Typography variant='h2'>2018</Typography>
				</Box>
			</Box>
		</>
	);
};

export default Resume;
