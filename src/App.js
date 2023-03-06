import "./App.css";
import Form from "./component/Form/Form";
import HeaderElem from "./component/Header/header";


function App() {
	return (
		<div className='App'>
			<div className='App-header'>
				<HeaderElem></HeaderElem>
			</div>
			<div className="App-form'">
				<Form></Form>
			</div>
			{/* <div className='App-list'>
				<List
					typeElement='Expenses:'
					typeValue='Value [$]'
					data={expensesData}></List>
				<List
					typeElement='Incomes:'
					typeValue='Value [$]'
					data={incomesData}></List>
			</div> */}
		</div>
	);
}

export default App;
