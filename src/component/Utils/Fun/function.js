export const filterByType = (filteredData, type) => {
	// let filteredNewData = [{}];
	// console.log(filteredData);
	// console.log(type);
	let filteredNewData = filteredData.filter(value => value.type === type);
	// console.log(filteredNewData);
	return filteredNewData;
};

export const IncomeType = "income";

export const ExpenseType = "expense";
