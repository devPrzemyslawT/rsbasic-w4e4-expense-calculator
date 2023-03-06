import React from "react";
import logo from "../../logo.svg";

const HeaderElem = () => {
	return (
		<div>
			<img src={logo} className='App-logo' alt='logo' />
			<h1>Expense calculator!</h1>
			<img src={logo} className='App-logo' alt='logo' />
		</div>
	);
};

export default HeaderElem;
