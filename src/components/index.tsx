import React from 'react';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from './navbar/Navbar';
import Header from './header/Header';

const particleParams = {
	particles: {
		number: {
			value: 45,
			density: {
				enable: true,
				value_area: 900,
			},
		},
		shape: {
			stroke: {
				width: 1,
				color: 'tomato',
			},
		},
		size: {
			value: 8,
			random: true,
			anim: {
				enable: true,
				speed: 10,
				size_min: 0.1,
				sync: true,
			},
		},
		opacity: {
			value: 1,
			random: true,
			anim: {
				enable: true,
				speed: 1,
				opacity_min: 0.1,
				sync: true,
			},
		},
	},
};

const useStyles = makeStyles({
	particles__canvas: {
		position: 'absolute',
	},
});

export const Home: React.FC = () => {
	const classes = useStyles();

	return (
		<>
			<Navbar />
			<Header />
			<Particles params={particleParams} canvasClassName={classes.particles__canvas} />
		</>
	);
};

export default Home;
