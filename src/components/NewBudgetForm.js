import React, { Fragment } from 'react';
import useForm from '../hooks/useForm';

const GridBudget = ({ setBudgetList }) => {
	const initialState = {
		nameBudget: '',
		amount: 0
	};

	const { data, handleChange } = useForm(initialState);
	// console.log(data);

	//destructuring of data
	const handleSubmit = (e) => {
		e.preventDefault();
		const { nameBudget, amount } = data;
		if (nameBudget !== '' && amount !== '') {
			setBudgetList((budgets) => [ ...budgets, data ]);
		}
	};

	return (
		<Fragment>
			<h2>Agrega tus gastos aqui</h2>
			<form className="pd-2 text-left" onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Nombre gasto</label>
					<input
						type="text"
						placeholder="Ej.Transporte"
						className="form-control"
						name="nameBudget"
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<label>Nombre gasto</label>
					<input
						type="number"
						placeholder="Ej.Transporte"
						className="form-control"
						name="amount"
						onChange={handleChange}
					/>
				</div>
				<button className="btn btn-primary btn-block" type="submit">
					Agregar gasto
				</button>
			</form>
		</Fragment>
	);
};

export default GridBudget;
