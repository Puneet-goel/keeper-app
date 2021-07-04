import React from "react";
import Note from "./Note/Note";
import { Grid } from "@material-ui/core";
import { getData } from "../../controller/note";

const Notes = () => {

    var notes = getData();
  	return(
		<Grid container spacing={2}>
	       {
                notes.map((note) => (
                	<Grid key={note._id} item xs={12} sm={4}> 
                		<Note note={note}/>
                	</Grid>
                ))
	        }	            
		</Grid>
	);
}

export default Notes;