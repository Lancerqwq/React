import React from "react";
import { AppBar, Link as MuiLink, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";

function MyAppBar(props) {
	return (
		<AppBar position='static'>
			<Toolbar>
				<MuiLink color='inherit' component={Link} to='/'>
					Home
				</MuiLink>
				<MuiLink color='inherit' component={Link} to='/contacts'>
					Contacts
				</MuiLink>
				<MuiLink color='inherit' component={Link} to='/electronics'>
					Electronics
				</MuiLink>
				<MuiLink color='inherit' component={Link} to='/login'>
					Login
				</MuiLink>
			</Toolbar>
		</AppBar>
	);
}

export default MyAppBar;
