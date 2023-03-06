import React from "react";
import { useState } from "react";

import { filterByType } from "../Utils/Fun/function";
import "./Form.css";

let nextId = 0;
const Form = () => {
	const [formState, setFormState] = useState({
		text: "",
		value: null,
		type: "expense",
	});

	const [tableState, setTableState] = useState([
		{
			id: 0,
			text: "Pensja",
			value: 2000,
			type: "income",
		},
	]);

	const handleOnFormChange = e => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();

		setTableState(
			// Replace the state
			[
				// with a new array
				...tableState, // that contains all the old items
				{
					id: ++nextId,
					text: formState.text,
					value: formState.value,
					type: formState.type,
				}, // and one new item at the end
			]
		);
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
			<div>---------- Incomes ----------</div>
			<ul>
				{/* {tableState.map(data => { */}
				{filterByType(tableState, "income").map(data => {
					const { text, value, type, id } = data;

					return (
						<li key={id}>
							<div>
								{text}:<strong>{value}$</strong>
							</div>
						</li>
					);
				})}
			</ul>
			<div> ---------- Expenses ---------- </div>
			<ul>
				{/* {tableState.map(data => { */}
				{filterByType(tableState, "expense").map(data => {
					const { text, value, type, id } = data;

					return (
						<li key={id}>
							<div>
								{text}:<strong>{value}$</strong>
							</div>
						</li>
					);
				})}
			</ul>
			<div> ---------- Summary ---------- </div>

			<ul></ul>
		</form>
	);
};
export default Form;
