import React from "react";
import Notes from "./Notes/Notes";
import { Container, Grid, Grow } from "@material-ui/core";
import AddNote from "./AddNote/AddNote";
import useStyles from './styles';

const Main = () => {
	const classes = useStyles();
  	return(
		<Grow in>
		    <Container >
		        <Grid className={classes.grid} container justify="space-between" alignItems="stretch" spacing={2}>
		            <Grid item xs={12} sm={8}>
		                <Notes />
		            </Grid>	 
		            <Grid item xs={12} sm={4}>
		                <AddNote />
		            </Grid>           
		        </Grid>
		    </Container>
		</Grow>
	);
}

export default Main;