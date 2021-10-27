import React from "react";
import { useSelector } from "react-redux"; 

import Note from "./Note/Note.jsx";

const Notes = ({setEditNote}) => {
	
    const notes = useSelector((state) => state);

  	return(
		<div className="card-columns m-3">
			{
				notes.map((note) => (
					<Note note={note} key={note._id} setEditNote={setEditNote} />
				))
			}
		</div>       
	);
}

export default Notes;