import React,{ useState } from 'react';
import { useDispatch } from "react-redux";

import { addNote, deleteAllNotes } from "../../actions/actions.js";
import './AddNote.css';

const AddNote = () => {

	const dispatch = useDispatch();
	const [note,setNote] = useState({
		title: '',
		content: ''
	});

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

	const handleClear = (event) => {
		event.preventDefault();
		dispatch(deleteAllNotes());
	} 

	return (
		<div className="d-flex justify-content-center">
			<div className="addbox">
				<input type="text" name="title" className="form-control mb-1" placeholder="Title" value={note.title} onChange={handleChange} autoComplete="off" spellCheck="false" />
				<input type="text" name="content" className="form-control" placeholder="Take a note..." value={note.content} onChange={handleChange} autoComplete="off" spellCheck="false" />
				<div className="d-flex justify-content-around mt-3" >
					<button className="btn btn-success" type="submit" onClick={handleSubmit} > 
						<i className="fa fa-plus" /> &nbsp;
						ADD
					</button>
					<button className="btn btn-danger d-flex" type="submit" onClick={handleClear} > 
						<i className="material-icons"> clear_all </i> &nbsp;
						CLEAR
					</button>
				</div>
			</div>
		</div>
	);
}

export default AddNote;