import { FETCH, DELETE, ADD } from "../constants/actionTypes";
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
		const data = await api.add(note);
		dispatch({
		    type: ADD,
		    payload: data
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