import logo from "./logo.svg";
import "./App.css";
import Form from "./component/Form/Form";
import List from "./component/List/List";

function App() {
	const expensesData = [
		{
			text: "prad",
			value: 100,
		},
		{
			text: "prad2",
			value: 200,
		},
	];
	const incomesData = [
		{
			text: "pensja",
			value: 1000,
		},
		{
			text: "pensja2",
			value: 300,
		},
	];
	return (
		<div className='App'>
			<div className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<h1>Expense calculator!</h1>
				<img src={logo} className='App-logo' alt='logo' />
			</div>
			<div className="App-form'">
				<Form></Form>
			</div>
			<div className='App-list'>
				<List
					typeElement='Expenses:'
					typeValue='Value [$]'
					data={expensesData}></List>
				<List
					typeElement='Incomes:'
					typeValue='Value [$]'
					data={incomesData}></List>
			</div>
		</div>
	);
}

export default App;
