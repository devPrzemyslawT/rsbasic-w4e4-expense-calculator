import React from "react";
import { useState, useEffect } from "react";

import { filterByType, IncomeType, ExpenseType } from "../Utils/Fun/function";
import "./Form.css";

import UList from "../UList/UList";

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

	const [filtDataIncomes, setFiltDataIncomes] = useState([{}]);
	const [filtDataExpenses, setFiltDataExpenses] = useState([{}]);

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

	useEffect(() => {
		// console.log("Hello from useEffect");
		// console.log("original table", tableState);
		// console.log("incomes:", filterByType(tableState, IncomeType));
		// console.log("expenses:", filterByType(tableState, ExpenseType));
		setFiltDataIncomes(filterByType(tableState, IncomeType));
		setFiltDataExpenses(filterByType(tableState, ExpenseType));
		// console.log(filtDataIncomes);
	}, [tableState]);

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

			<UList newData={filtDataIncomes}></UList>
			<div> ---------- Expenses ---------- </div>

			<UList newData={filtDataExpenses}></UList>

			<div> ---------- Summary ---------- </div>
		</form>
	);
};
export default Form;
