import React from 'react';
import { CssBaseline } from '@material-ui/core';

import coffeeApple from './assets/coffee-apple.jpg';

import Home from './components';

const style = {
	display: 'flex',
	'flex-direction': 'column',
	height: '100vh',
	width: '100wv',
	background: `url(${coffeeApple}) no-repeat center center fixed`,
};

export const App: React.FC = () => {
	return (
		<div className='App' style={style}>
			<CssBaseline />
			<Home />
		</div>
	);
};

export default App;
