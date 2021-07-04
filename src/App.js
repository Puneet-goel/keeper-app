import React from 'react';
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
  
function App(){
	return (
		<BrowserRouter>
			<div>
			   <Header />
			   <Switch>
			        <Route exact path="/"> 
			            <Home/> 
			        </Route>
			   </Switch>
			</div>
		</BrowserRouter>
	);
}
 
export default App;