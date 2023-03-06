export const filterByType = (filteredData, type) => {
	const filteredNewData = filteredData.filter(value => value.type === type);
	return filteredNewData;
};