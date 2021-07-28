import React from "react";
import { Container, Grid, Grow } from "@material-ui/core";

import Notes from "./Notes/Notes";
import AddNote from "./AddNote/AddNote";

const Main = () => {
  	return(
		<Grow in>
		    <Container >
		        <Grid  container justify="space-between" alignItems="stretch" spacing={2}>
		            <Grid item xs={12} sm={4}>
		                <AddNote />
		            </Grid>    
		            <Grid item xs={12} sm={8}>
		                <Notes />
		            </Grid>	 
		                   
		        </Grid>
		    </Container>
		</Grow>
	);
}

export default Main;