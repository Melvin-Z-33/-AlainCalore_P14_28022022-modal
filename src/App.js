import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';

function App() {
	function test() {}
	return (
		<div className="App">
			<Modal buttonText="Push me" secondFunction={test} modalText="it works!" />
		</div>
	);
}

export default App;
