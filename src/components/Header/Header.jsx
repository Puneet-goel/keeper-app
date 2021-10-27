import React from 'react';

import './Header.css';
import Logo from "../../images/notes.jpg";

function Header(){

	return (
		<nav className="navbar navbar-light header mb-4 p-1">
			<h1 className="heading font-weight-bold">
				NOTES
			</h1>
			<a className="navbar-brand ml-3" href="https://notekeeper-puneet.netlify.app">
				<img src={Logo} alt="App Logo(Note)" className="logo" />
			</a>
		</nav>
	);
}

export default Header;