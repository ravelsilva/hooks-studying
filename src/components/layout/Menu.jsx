import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
const Menu = () => {
	return (
		<aside className="Menu">
			<nav>
				<ul>
					<li>
						<Link to="/useState">UseState</Link>
					</li>
					<li>
						<Link to="/useEffect">UseEffect</Link>
					</li>
					<li>
						<Link to="/useRef">UseRef</Link>
					</li>
					<li>
						<Link to="/useMemo">UseMemo</Link>
					</li>
					<li>
						<Link to="/useCallback">UseCallback</Link>
					</li>
					<li>
						<Link to="/useContext">UseContext</Link>
					</li>
					<li>
						<Link to="/useReducer">UseReducer</Link>
					</li>
					<li>
						<Link to="/useReducerDesafio">UseReducerDesafio</Link>
					</li><li>
						<Link to="/Zustand">Zustand</Link>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default Menu;
