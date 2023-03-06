export const filterByType = (filteredData, type) => {
	let filteredNewData = filteredData.filter(value => value.type === type);

	return filteredNewData;
};

export const sumValue = sumData => {
	let resultValue = 0;
	sumData.map(elem => {
		const { text, value, type, id } = elem;
		resultValue = parseFloat(resultValue) + parseFloat(value);
		return resultValue;
	});

	return resultValue;
};

export const addValues = (valIn, valEx) => {
	let result = parseFloat(valIn) - parseFloat(valEx);
	return result;
};

export const IncomeType = "income";

export const ExpenseType = "expense";
