
import { useState } from 'react';
import PageTitle from '../PageTitle';
import SectionTitle from '../SectionTitle';

const UseState = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');
	function addCount() {
		setCount((prevCount) => prevCount + 1);
	}
	function rmvCount() {
		if (count != 0) {
			setCount((prevCount) => prevCount - 1);
		}
	}

	return (
		<div className="UseState">
			<PageTitle
				title="Hook UseState"
				subtitle="Estado em componentes funcionais!"
			/>
			<SectionTitle title="Exercício #01" />
			<div className="center">
				<span className="text">{count}</span>
				<div>
					<button className="btn" onClick={addCount}>
						+1
					</button>
					<button className="btn" onClick={rmvCount}>
						-1
					</button>
				</div>
			</div>
			<SectionTitle title="Exercício #02" />
			<input
				type="text"
				className="input"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
		</div>
	);
};

export default UseState;
