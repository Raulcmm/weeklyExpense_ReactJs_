export const analyzeBudget = (budgetTotal, left) => {
	let typeClass;

	if (budgetTotal / 4 > left) {
		typeClass = 'aler alert-danger';
	} else if (budgetTotal / 2 > left) {
		typeClass = 'alert alert-warning';
	} else {
		typeClass = 'alert alert-success';
	}

	return typeClass;
};
