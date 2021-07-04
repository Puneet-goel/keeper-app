import React from 'react';
import useStyles from './styles';
import { Paper, Typography, Card, CardHeader, CardContent, CardActions, Button } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteNote } from "../../../controller/note";

function Note({ title,content,id }){
	const classes = useStyles();
	return (
		<Paper elevation={3} className={classes.paper}>
			<Card> 
			    <CardHeader title={title} />
			    <CardContent>
	                <Typography variant="body2" color="textSecondary" component="p">
	                    {content}
	                </Typography>
	            </CardContent>
	            <CardActions>
	                <Button onClick={() => deleteNote(id)} href="/">
		                <DeleteIcon />
	                </Button>
	            </CardActions>
			</Card>
		</Paper> 
	);
}

export default Note;