import React from "react";
import logo from "../../logo.svg";
import "./header.css";
const HeaderElem = () => {
	return (
		<div className='header'>
			<img src={logo} className='App-logo' alt='logo' />
			<h1>Expense calculator!</h1>
			<img src={logo} className='App-logo' alt='logo' />
		</div>
	);
};

export default HeaderElem;
