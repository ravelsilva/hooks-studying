import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import UseReducerDesafio from './components/Hooks/Desafios/UseReducerDesafio';
import UseCallback from './components/Hooks/UseCallback';
import UseContext from './components/Hooks/UseContext';
import UseEffect from './components/Hooks/UseEffect';
import UseMemo from './components/Hooks/UseMemo';
import UseReducer from './components/Hooks/UseReducer';
import UseRef from './components/Hooks/UseRef';
import UseState from './components/Hooks/UseState';
import Menu from './components/layout/Menu';
import Content from './components/layout/Content';
function App() {
	return (
		<>
			<Router>
				<Menu />
				<Content />
			</Router>
		</>
	);
}

export default App;
