import { FETCH, DELETE, ADD, DELETEALL, UPDATE } from "../constants/actionTypes";

export const noteReducer = (notes = [], action) => {
	switch (action.type) {
		case FETCH:
		    return action.payload;  
		case ADD:
		    return [...notes, action.payload]; 
		case UPDATE:
			return action.payload; 
		case DELETE:
		    return action.payload; 
		case DELETEALL:
			return [];
		default:
		    return notes;
    }
};