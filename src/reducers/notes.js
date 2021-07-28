import { FETCH, UPDATE, DELETE, ADD } from "../constants/actionTypes";

export const noteReducer = (notes = [], action) => {
	switch (action.type) {
		case FETCH:
		    return action.payload;  
		case ADD:
		    return [...notes, action.payload];
		case UPDATE:
		    return notes.map((note) => { 
		    	if(note._id === action.payload["id"]){
                    note = action.payload["note"];
                }
                return note;
		    });  
		case DELETE:
		    return notes.filter((note) => note._id!==action.payload);
		default:
		    return notes;
    }
};