import React, { useReducer } from 'react';

const reducer = (state, action) => {
	switch (action.type) {
		case 'Multiplication':
			return { ...state, num: state.num * 7 };
		case 'Division':
			return { ...state, num: state.num / 25 };
		case 'ParseInt':
			return {
				...state,
				num: state.num > 1 ? parseInt(state.num) : (state.num = 1),
			};
		case 'Set_Num':
			return {
				...state,
				multiplyInput: action.payload,
			};
		case 'Set_Num_Sum':
			return { ...state, sumInput: action.payload };
		case 'NumberN':
			return { ...state, num: state.num * state.multiplyInput };
		case 'AddNumber':
			return { ...state, num: state.num + state.sumInput };
		default:
			"This action doens't exist";
	}
};
const UseReducerDesafio = () => {
	const [state, dispatch] = useReducer(reducer, {
		num: 1,
		multiplyInput: 1,
		sumInput: 1,
	});

	const handleChangeSum = (e) => {
		dispatch({
			type: 'Set_Num_Sum',
			payload: Number(e.target.value),
		});
	};
	const handleMultiplyForXNumber = () => {
		dispatch({ type: 'NumberN' });
	};
	const handleChange = (e) => {
		dispatch({ type: 'Set_Num', payload: Number(e.target.value) });
	};

	const handleMultiply = () => {
		dispatch({ type: 'Multiplication' });
	};

	const handleDivide = () => {
		dispatch({ type: 'Division' });
	};
	const handleParseInt = () => {
		dispatch({ type: 'ParseInt' });
	};
	const handleSum = () => {
		dispatch({ type: 'AddNumber' });
	};
	console.log(state.multiplyInput);
	console.log(state.num);
	return (
		<div className="UseReducer">
			<div className="center">
				<span className="text">Desafio Use Reducer</span>
				<span className="text red">{state.num}</span>
				<div>
					<button className="btn" onClick={handleMultiply}>
						x7
					</button>
					<button className="btn" onClick={handleDivide}>
						/25
					</button>
					<button className="btn" onClick={handleParseInt}>
						ParseInt
					</button>
					<div className="multiply-input">
						<button
							className="btn"
							onClick={handleMultiplyForXNumber}
						>
							Multiplique por:
						</button>
						<input
							type="number"
							className="input multiply"
							value={state.multiplyInput}
							onChange={handleChange}
							placeholder="Digite um número"
						/>
					</div>
					<div className="sum-input">
						<button className="btn" onClick={handleSum}>
							Some com:
						</button>
						<input
							type="number"
							className="input sum"
							value={state.sumInput}
							onChange={handleChangeSum}
							placeholder="Digite um número"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UseReducerDesafio;
