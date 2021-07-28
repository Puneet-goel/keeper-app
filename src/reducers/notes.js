import { FETCH, DELETE, ADD } from "../constants/actionTypes";

export const noteReducer = (notes = [], action) => {
	switch (action.type) {
		case FETCH:
		    return action.payload;  
		case ADD:
		    return [...notes, action.payload]; 
		case DELETE:
		    return notes.filter((note) => note._id!==action.payload);
		default:
		    return notes;
    }
};