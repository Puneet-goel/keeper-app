import { FETCH, DELETE, ADD, DELETEALL, UPDATE } from "../constants/actionTypes";
import * as api from "../local-api/api.js";

export const getNotes = () => (dispatch) => {
	try{
		const data = api.get();
		dispatch({
		    type: FETCH,
		    payload: data
	    });
	}
	catch(error){
		console.log(error);
	}
}

export const addNote = (note) => (dispatch) => {

	try{
		const data = api.add(note);
		dispatch({
		    type: ADD,
		    payload: data
	    });
	}
	catch(error){
		console.log(error);
	}
}

export const deleteNote = (id) => (dispatch) => {

	try{
		const data = api.deleteOne(id);

		dispatch({
		    type: DELETE,
		    payload: data
	    });
	}
	catch(error){
		console.log(error);
	}
}

export const deleteAllNotes = () => (dispatch) => {

	try{
		const data = api.deleteAll();

		dispatch({
		    type: DELETEALL,
		    payload: data
	    });
	}
	catch(error){
		console.log(error);
	}
}

export const update = (id, note) => (dispatch) => {

	try{
		const data = api.update(id, note);

		dispatch({
			type: UPDATE,
			payload: data
		})
	}
	catch(error){
		console.log(error);
	}
}