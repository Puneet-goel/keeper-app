import React,{ useState } from 'react';
import useStyles from './styles';
import { Paper, Button, TextField, Card, CardContent, CardHeader } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { addNote } from "../../controller/note";

const AddNote = () => {
	const classes = useStyles();
	const [note,setNote] = useState({
		Title: '',
		Content: ''
	});

	const handleSubmit = (event) => {
		addNote(note);
	} 

	return (
		<Paper elevation={3} >
		    <Card>
		        <CardHeader title="Add Note"/>
		        <CardContent> 
		            <form onSubmit={handleSubmit} className={`${classes.form} ${classes.root}`} >
		                <TextField name="title" variant="outlined" label="Title" fullWidth value={note.Title} onChange={(e) => {console.log(e); setNote({ ...note, Title: e.target.value })}}/>
					    <TextField name="content" variant="outlined" label="Message" fullWidth value={note.Content} onChange={(e) => setNote({ ...note, Content: e.target.value })} />
					    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth > <AddIcon/>Add </Button>
					</form>
		        </CardContent>
		    </Card>
		</Paper> 
	);
}

export default AddNote;