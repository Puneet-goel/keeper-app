import React,{ useEffect } from 'react';
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main";
import { getNotes } from "./actions/actions.js";
import { useDispatch } from "react-redux";

function App(){
	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(getNotes());
	},[dispatch]);

	return (
		<>
			<Header />
			<Main /> 
	    </>
	);
}
 
export default App;