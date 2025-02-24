import  {  useState } from 'react';
import PageTitle from '../PageTitle';
import ChildrenOne from '../Context/ChildrenOne';
import AppContext from '../../data/AppContext'; //Importando o contexto
const UseContext = () => {
	const [name, setName] = useState('Front Beginners');
	return (
		<div className="UseContext">
			<PageTitle
				title="Hook UseContext"
				subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto."
			/>
			<AppContext.Provider value={{ name, setName }}>
				{/*Englobando o contexto  */}
				<div className="center">
					<ChildrenOne />
				</div>
			</AppContext.Provider>
		</div>
	);
};

export default UseContext;
