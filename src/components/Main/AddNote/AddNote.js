import React,{ useState, useEffect } from 'react';
import useStyles from './styles';
import { Paper, Button, TextField, Card, CardContent, CardHeader } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { addNote } from "../../../actions/actions.js";
import { useDispatch } from "react-redux";

const AddNote = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const [note,setNote] = useState({
		title: '',
		content: ''
	});

	useEffect(() => {
	},[note]);

	const handleChange = (event) => {
		setNote({ 
			...note, 
			[event.target.name]: event.target.value 
		});
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(addNote(note));
		setNote({
			title: '',
			content: ''
		});
	} 

	return (
		<Paper elevation={3} >
		    <Card>
		        <CardHeader title="Add Note"/>
		        <CardContent> 
		            <form onSubmit={handleSubmit} className={`${classes.form} ${classes.root}`} autoComplete="off">
		                <TextField 
		                    name="title" 
		                    variant="outlined" 
		                    label="Title"
		                    fullWidth 
		                    value={note.title} 
		                    onChange={handleChange}
		                />
					    <TextField 
					        name="content" 
					        variant="outlined"
					        label="Message" 
					        fullWidth 
					        value={note.content} 
					        onChange={handleChange}
					    />
					    <Button 
					        className={classes.buttonSubmit} 
					        variant="contained" 
					        color="primary" 
					        size="large" 
					        type="submit" 
					        fullWidth 
					    > 
					        <AddIcon fontSize="small"/>
					        Add
					    </Button>
					</form>
		        </CardContent>
		    </Card>
		</Paper> 
	);
}

export default AddNote;