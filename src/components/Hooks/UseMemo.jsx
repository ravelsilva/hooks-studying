import {  useMemo, useState } from 'react';
import PageTitle from '../PageTitle';

function sum(a, b) {
	//Cálculo da soma
	// const future = Date.now() + 600;
	// while (Date.now() < future) {} //Espera 600 milissegundos
	return a + b;
}
const UseMemo = () => {
	const [n1, setN1] = useState(0);
	const [n2, setN2] = useState(0);
	const [n3, setN3] = useState(0);
	//------------
	//Espera 2 milissegundos para todos os inputs
	// const result = sum(n1, n2);
	// console.log(typeof result);
	//------------

	// const [result, setResult] = useState(0);

	// //Só aciona a interrupção em milissegundos qunado o N1 e N2 forem modificados
	// useEffect(
	// 	function () {
	// 		setResult(sum(n1, n2));
	// 	},
	// 	[n1, n2]
	// );
	//------------

	//Mesma situação do useEffect e useState, mas simplificado
	const result = useMemo(() => sum(n1, n2), [n1, n2]);

	//------------
	return (
		<div className="useMemo">
			<PageTitle
				title="Hook UseMemo"
				subtitle="Retorna um valor memorizado!"
			/>
			<div className="center">
				<input
					type="number"
					className="input"
					value={n1}
					onChange={(e) => setN1(parseInt(e.target.value))}
				/>
				<input
					type="number"
					className="input"
					value={n2}
					onChange={(e) => setN2(parseInt(e.target.value))}
				/>
				<input
					type="number"
					className="input"
					value={n3}
					onChange={(e) => setN3(parseInt(e.target.value))}
				/>
				<span className="text red">{result}</span>
			</div>
		</div>
	);
};

export default UseMemo;
