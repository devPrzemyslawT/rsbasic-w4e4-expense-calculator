import React from "react";
import { useState, useEffect } from "react";

import {
	addValues,
	sumValue,
	filterByType,
	IncomeType,
	ExpenseType,
} from "../Utils/Fun/function";
import "./Form.css";

import UList from "../UList/UList";
import Paragraph from "../Para/Paragraph";
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
			text: "Salary",
			value: 2000,
			type: "income",
		},
	]);

	const [filtDataIncomes, setFiltDataIncomes] = useState([{}]);
	const [filtDataExpenses, setFiltDataExpenses] = useState([{}]);
	const [inValue, setInValue] = useState("0");
	const [exValue, setExValue] = useState("0");
	const [sumAllValue, setSumAllValue] = useState("0");

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
		setFiltDataIncomes(filterByType(tableState, IncomeType));
		setFiltDataExpenses(filterByType(tableState, ExpenseType));
	}, [tableState]);

	useEffect(() => {
		setInValue(sumValue(filtDataIncomes));
	}, [filtDataIncomes]);

	useEffect(() => {
		setExValue(sumValue(filtDataExpenses));
	}, [filtDataExpenses]);

	useEffect(() => {
		setSumAllValue(addValues(inValue, exValue));
	}, [inValue, exValue]);

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
			<div>
				<Paragraph label='Incomes' value={inValue}></Paragraph>
				<Paragraph label='Expenses' value={exValue}></Paragraph>
				<Paragraph label='You have' value={sumAllValue}></Paragraph>
			</div>
		</form>
	);
};
export default Form;
