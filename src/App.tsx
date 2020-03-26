import React from 'react';
import { CssBaseline } from '@material-ui/core';

import Home from './components';

export const App: React.FC = () => {
	return (
		<div className='App'>
			<CssBaseline />
			<Home />
		</div>
	);
};

export default App;
