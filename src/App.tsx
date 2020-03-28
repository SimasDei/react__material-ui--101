import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import coffeeApple from './assets/coffee-apple.jpg';

import Home from './components';

const useStyles = makeStyles({
	app__container: {
		display: 'flex',
		'flex-direction': 'column',
		height: '100vh',
		width: '100wv',
		background: `url(${coffeeApple}) no-repeat center center fixed`,
	},
});

export const App: React.FC = () => {
	const classes = useStyles();
	return (
		<div className={`${classes.app__container} App`}>
			<CssBaseline />
			<Home />
		</div>
	);
};

export default App;
