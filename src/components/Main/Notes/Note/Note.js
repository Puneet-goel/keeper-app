import React from 'react';
import useStyles from './styles';
import { Paper, Typography, Card, CardHeader, CardContent, CardActions, Button } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteNote } from "../../../../actions/actions.js";
import { useDispatch } from "react-redux";

function Note({ note }){
	const dispatch = useDispatch();
	const classes = useStyles();
	return (
		<Paper elevation={3} className={classes.paper}>
			<Card> 
			    <CardHeader title={note.title} />
			    <CardContent>
	                <Typography variant="body2" color="textSecondary" component="p">
	                    {note.content}
	                </Typography>
	            </CardContent>
	            <CardActions>
	                <Button type="submit" onClick={() => dispatch(deleteNote(note._id))}>
		                <DeleteIcon fontSize="small" />
	                </Button>
	            </CardActions>
			</Card>
		</Paper> 
	);
}

export default Note;