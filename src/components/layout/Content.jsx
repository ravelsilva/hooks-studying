import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UseState from '../Hooks/UseState';
import UseEffect from '../Hooks/UseEffect';
import UseRef from '../Hooks/UseRef';
import UseMemo from '../Hooks/UseMemo';
import UseCallback from '../Hooks/UseCallback';
import UseContext from '../Hooks/UseContext';
import UseReducer from '../Hooks/UseReducer';
import UseReducerDesafio from '../Hooks/Desafios/UseReducerDesafio';
import './Content.css';
import Zustand from '../Hooks/Zustand';
const Content = () => {
	return (
		<div className="Content">
			<Routes>
				<Route path="/useState" element={<UseState />} />
				<Route path="/useEffect" element={<UseEffect />} />
				<Route path="/useRef" element={<UseRef />} />
				<Route path="/useMemo" element={<UseMemo />} />
				<Route path="/useCallback" element={<UseCallback />} />
				<Route path="/useContext" element={<UseContext />} />
				<Route path="/useReducer" element={<UseReducer />} />
				<Route
					path="/useReducerDesafio"
					element={<UseReducerDesafio />}
				/>
				<Route path="/Zustand" element={<Zustand />} />
			</Routes>
		</div>
	);
};

export default Content;
