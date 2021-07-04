import React from 'react';
import useStyles from './styles';
import { Paper, Typography, Card, CardHeader, CardContent, CardActions, Button } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteNote } from "../../../controller/note";

function Note({ note }){
	const classes = useStyles();
	return (
		<Paper elevation={3} className={classes.paper}>
			<Card> 
			    <CardHeader title={note.Title} />
			    <CardContent>
	                <Typography variant="body2" color="textSecondary" component="p">
	                    {note.Content}
	                </Typography>
	            </CardContent>
	            <CardActions>
	                <Button onClick={() => deleteNote(note._id)} href="/">
		                <DeleteIcon fontSize="small" />
	                </Button>
	            </CardActions>
			</Card>
		</Paper> 
	);
}

export default Note;