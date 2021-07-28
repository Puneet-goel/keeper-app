import React from 'react';
import { AppBar, Typography } from "@material-ui/core";

import useStyles from './styles';
import notes from "../../images/notes.jpg";

function Header(){

	const classes = useStyles();

	return (
		<AppBar className={`${classes.appBar} ${classes.root}`} position="static" color="primary">
		    <div className={classes.brandContainer}>
		        <Typography to="/" className={classes.heading} variant="h2" align="center">NOTES</Typography>
		        <img className={classes.image} src={notes} alt="icon" height="60" />
		    </div>
		</AppBar>
	);
}

export default Header;