import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import MobileDrawer from '@material-ui/core/Drawer';

import { useStyles } from './Navbar.data';
import SideList from './SideList';

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
