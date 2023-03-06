import "./App.css";
import Form from "./component/Form/Form";
import List from "./component/List/List";
import HeaderElem from "./component/Header/header";
import { incomesData, expensesData } from "./component/Utils/data/data";

function App() {
	return (
		<div className='App'>
			{/* <div className='App-header'>
				<HeaderElem></HeaderElem>
			</div> */}
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
