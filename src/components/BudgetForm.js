import React from 'react';
import useForm from '../hooks/useForm';

const BudgetForm = ({ setBudget }) => {
	const initialState = {
		budget: 0,
		error: false
	};
	const { data, handleChange, setData } = useForm(initialState);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (data.budget <= 0) {
			setData({
				...data,
				error: true
			});
		} else {
			setBudget(data.budget);
		}
	};

	return (
		<div className="card mt-5">
			<div className="card-body">
				{data.error ? (
					<div className="alert alert-danger" role="alert">
						This is a danger alert—check it out!
					</div>
				) : null}
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<h2>Your budget </h2>
						<input type="number" className="form-control" name="budget" onChange={handleChange} />
						<button type="submit" className="btn btn-primary btn-block mt-4">
							Define a budget
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default BudgetForm;
