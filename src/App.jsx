import React,{ useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import $ from "jquery";

import { getNotes } from "./actions/actions.js";
import Header from "./components/Header/Header.jsx";
import AddNote from "./components/AddNote/AddNote.jsx";
import Main from "./components/Main/Notes.jsx";
import Modal from "./components/Modal/Modal.jsx";

function App(){
	const dispatch = useDispatch();
	const [editNote, setEditNote] = useState({
		title: "",
		content: ""
	});

	useEffect(()=>{
		dispatch(getNotes());
		const x = localStorage.getItem('file');
		if(!x){
			localStorage.setItem('file','');
		}else{
			$("#root").css("background-image", "url(" + x + ")");
		}
	},[dispatch]);

	return (
		<>
			<Header />
			<AddNote />
			<Main setEditNote={setEditNote}/> 
			<Modal editNote={editNote} />
	    </>
	);
}
 
export default App;