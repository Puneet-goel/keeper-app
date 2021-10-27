import React,{ useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

import { update } from "../../actions/actions.js";
import "./Modal.css";

const Modal = ({editNote}) => {

    const [note, setNote] = useState(editNote);
    const dispatch = useDispatch();

    useEffect(() => {
        setNote(editNote);
    }, [editNote]);

    const handleChange = (event) => {
		setNote({ 
			...note, 
			[event.target.name]: event.target.value 
		});
	}

    const handleClose = (event) => {
        event.preventDefault();
        dispatch(update(note._id, note));
    }

    return (
        <div className="modal fade" id="edit" role="dialog" aria-labelledby="edit" aria-hidden="true">
            <div className="modal-dialog  modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <h5 className="modal-id" > #{note._id}</h5>
                        <input type="text" name="title" className="form-control mb-1 title" placeholder="Title" value={note.title} onChange={handleChange} autoComplete="off" spellCheck="false" />
                        <input type="text" name="content" className="form-control" placeholder="Take a note..." value={note.content} onChange={handleChange} autoComplete="off" spellCheck="false" />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;