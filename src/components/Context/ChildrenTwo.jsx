import React, { useContext } from 'react';
import AppContext from '../../data/AppContext'; //Importando o contexto

const ChildrenTwo = () => {
	const { setName } = useContext(AppContext);
	return (
		<button className="btn" onClick={() => setName('Ravel')}>
			Mude o nome
		</button>
	);
};

export default ChildrenTwo;
