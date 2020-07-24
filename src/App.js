import React, { useState} from 'react';
import NewBudgetForm from './components/NewBudgetForm';
import BudgetForm from './components/BudgetForm';
import ExpenseList from './components/ExpenseList';

const App = () => {
	const [ budgetTotal, setBudgetTotal ] = useState(0);
	const [ budgetList, setBudgetList ] = useState([]);

	return (
		<div className="container mt-5 text-center">
			<h1>Weekly expense</h1>
			<div className=" card mt-4">
				{budgetTotal  ? (
					<div className="row">
						<div className="col-md-6">
							<NewBudgetForm setBudgetList={setBudgetList} />
						</div>
						<div className="col-md-6">
							<ExpenseList budgetList={budgetList} budgetTotal={budgetTotal} />
						</div>
					</div>
				) : (
					<BudgetForm setBudgetTotal={setBudgetTotal} />
				)}
			</div>
		</div>
	);
};
export default App;
