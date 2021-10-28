import React,{ useState } from 'react';
import $ from "jquery";

import './Header.css';
import Logo from "../../images/notes.jpg";

function Header(){

	const [url, setURL] = useState(() => localStorage.getItem('file'));

	const handleURL = () => {
		localStorage.setItem('file',url);	
		$("#root").css("background-image", "url(" + url + ")");
	}

	return (
		<nav className="navbar navbar-light header mb-4 p-1">
			<a className="navbar-brand left ml-4" href="https://notekeeper-puneet.netlify.app">
				<img className="logo" src={Logo} alt="App Logo(Note)"  />
				<h1 className="heading font-weight-bold mb-0 pl-3"> NOTES </h1>
			</a>
			<div className="d-flex pr-1 pr-sm-3">
				<i className="material-icons fa-2x wallpaper" data-toggle="modal" data-target="#background" > wallpaper </i>
			</div>
			<div className="modal fade" id="background" role="dialog" aria-labelledby="background" aria-hidden="true">
				<div className="modal-dialog  modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-body">
							<h5 className="font-weight-bold mb-3"> Provide Custom Url for Background</h5>
							<input type="text" name="url" className="form-control mb-1" placeholder="Background URL" value={url} onChange={(event) => setURL(event.target.value)} autoComplete="off" spellCheck="false" />
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-danger" onClick={() => setURL('')}>CLEAR</button>
							<button type="button" className="btn btn-success" data-dismiss="modal" onClick={handleURL}>APPLY</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Header;