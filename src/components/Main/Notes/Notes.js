import React from "react";
import Note from "./Note/Note";
import { useSelector } from "react-redux"; 
import { Grid } from "@material-ui/core";

const Notes = () => {
    const notes = useSelector((state) => state);

  	return(
		<Grid container spacing={2} >
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