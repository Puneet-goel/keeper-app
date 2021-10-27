import React from 'react';
import moment from 'moment';
import { useDispatch } from "react-redux";

import { deleteNote } from "../../../actions/actions.js";
import "./Note.css";

const Note = ({ note, setEditNote }) => {
	
	const dispatch = useDispatch();

	const editNote = (event) => {
		event.preventDefault();
		setEditNote(note);
	}

	return (
		<div className="card mb-4 mr-3" style={{background: note.color}}>
			<div className="card-body">
				<h5 className="card-title mb-0 title">#{note._id} {note.title}</h5>
				<p className="card-subtitle mb-2 text-muted font-weight-light font-italic text-right">{moment(note.createdAt).fromNow()}</p>
				<p className="card-text content">{note.content}</p>
				<div className="functions mt-3">
					<i className="fa fa-edit" data-toggle="modal" data-target="#edit" onClick={editNote}/>
					<i className="material-icons"  onClick={() => dispatch(deleteNote(note._id))}> delete </i>
				</div>
			</div>
		</div>
	);
}

export default Note;