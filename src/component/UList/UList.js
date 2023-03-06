import React from "react";

const UList = props => {
	const { newData } = props;
	return (
		<ul>
			{newData.map(elem => {
				const { text, value, type, id } = elem;

				return (
					<li key={`${type}_${id}`}>
						<div>
							{text}: <strong> {value}$</strong>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default UList;
