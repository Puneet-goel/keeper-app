import React,{ useEffect } from 'react';
import { useDispatch } from "react-redux";

import { getNotes } from "./actions/actions.js";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main";

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