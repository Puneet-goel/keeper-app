import { FETCH, UPDATE, DELETE, ADD } from "../constants/actionTypes";
import * as api from "../local-api/api.js";

export const getNotes = () => async(dispatch) => {
	try{
		const data = await api.get();
		dispatch({
		    type: FETCH,
		    payload: data
	    });
	}
	catch(error){
		console.log(error);
	}
}

export const addNote = (note) => async(dispatch) => {

	try{
		await api.add(note);
		dispatch({
		    type: ADD,
		    payload: note
	    });
	}
	catch(error){
		console.log(error);
	}
}

export const deleteNote = (id) => async(dispatch) => {

	try{
		await api.del(id);
		console.log(id);
		dispatch({
		    type: DELETE,
		    payload: id
	    });
	}
	catch(error){
		console.log(error);
	}
}

export const updateNote = (id, note) => async(dispatch) => {

	try{
		await api.update(id, note);
		dispatch({
		    type: UPDATE,
		    payload: {
		    	"id": id,
		    	"note": note
		    }
	    });
	}
	catch(error){
		console.log(error);
	}
}