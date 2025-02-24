import React from 'react';
import PageTitle from '../PageTitle';
import SectionTitle from '../SectionTitle';
import { create } from 'zustand';
const useZustand = create((set) => ({
	count: 0,
	increase: () => set((state) => ({ count: state.count + 1 })),
	decrease: () => set((state) => ({ count: state.count - 1 })),
}));

const Zustand = () => {
	const { count, increase, decrease } = useZustand();

	return (
		<div>
			<PageTitle
				title="Zustand"
				subtitle="Facilita a criação e o gerenciamento de estados globais sem necessidade de muitos conceitos complexos, como reducers e actions."
			/>
			<SectionTitle title="Exercício #01" />
			<div className="center">
				<div className="text red">{count}</div>
				<div>
					<button onClick={increase} className="btn">
						+
					</button>
					<button onClick={decrease} className="btn">
						-
					</button>
				</div>
			</div>
		</div>
	);
};

export default Zustand;
