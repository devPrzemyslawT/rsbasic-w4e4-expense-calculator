import logo from "./logo.svg";
import "./App.css";
import Form from "./component/Form";

function App() {
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
		</div>
	);
}

export default App;
