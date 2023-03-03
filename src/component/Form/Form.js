import React from "react";
import { useState } from "react";

import "./Form.css";
const Form = () => {
	const [formState, setFormState] = useState({
		text: "",
		value: 0,
		type: "expense",
		formState: true,
	});

	const handleOnFormChange = e => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
	};

	return (
		<form
			className='form'
			onSubmit={handleSubmit}
			onChange={handleOnFormChange}>
			<div className='elemContainer'>
				<label htmlFor='text'> Text: </label>
				<input
					id='text'
					name='text'
					type='textarea'
					placeholder='Enter expense or income...'></input>
			</div>
			<div className='elemContainer'>
				<label htmlFor='value'> Value: </label>
				<input
					id='value'
					name='value'
					type='number'
					placeholder='Enter value...'></input>
			</div>
			<div className='elemContainer'>
				<fieldset>
					<legend>Select a type:</legend>

					<div>
						<label htmlFor='expense'>Expense</label>
						<input
							type='radio'
							id='expense'
							name='type'
							value='expense'
							defaultChecked></input>
					</div>

					<div>
						<label htmlFor='income'>Income</label>
						<input type='radio' id='income' name='type' value='income'></input>
					</div>
				</fieldset>
			</div>

			<button onClick={handleSubmit}>Add</button>
		</form>
	);
};
export default Form;
