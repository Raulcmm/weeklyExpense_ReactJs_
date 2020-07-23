import React, { useState, Fragment } from 'react';
import NewBudgetForm from './components/NewBudgetForm';
import BudgetForm from './components/BudgetForm';
import ExpenseList from './components/ExpenseList';

const App = () => {
	const [ budget, setBudget ] = useState(0);
	return (
		<div className="container mt-5 text-center">
			<h1>Weekly expense</h1>
			{budget === 0 ? (
				<BudgetForm setBudget={setBudget} />
			) : (
				<div className="card mt-5 row ">
					<div className="row">
						<div className="col-md-6">
							<NewBudgetForm />
						</div>
						<div className="col-md-6">
							<ExpenseList />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default App;
