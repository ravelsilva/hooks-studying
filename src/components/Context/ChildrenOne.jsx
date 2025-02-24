import React, { useContext } from 'react';
import ChildrenTwo from './ChildrenTwo';
import AppContext from '../../data/AppContext'; //Importando o contexto

const ChildrenOne = () => {
	const { name } = useContext(AppContext); //Utilzando o contexto criado 
	return (
		<div>
			<div className="text">{name}</div>
			<ChildrenTwo />;
		</div>
	);
};

export default ChildrenOne;
