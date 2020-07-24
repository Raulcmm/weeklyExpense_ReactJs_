import React, { useEffect, useState } from 'react';

import { analyzeBudget } from '../helpers/ColorAlert';
const ExpenseList = ({ budgetList, budgetTotal }) => {
	const [ remainingBudget, setRemainingBudget ] = useState(budgetTotal);

	useEffect(
		() => {
			if (budgetList.length > 0) {
				let left = budgetList.reduce((prev, current) => +prev + +current.amount, 0);
				setRemainingBudget(budgetTotal - left);
			}
		},
		[ budgetTotal, budgetList ]
	);
	return (
		<div>
			<h2>expensive list</h2>
			{budgetList.map((budget, index) => (
				<div key={index} className="alert alert-primary" role="alert">
					name budget: {budget.nameBudget} - amount: {budget.amount}
				</div>
			))}
			<div className={analyzeBudget(budgetTotal, remainingBudget)} role="alert">
				Amount left: {remainingBudget}
			</div>
		</div>
	);
};

export default ExpenseList;
