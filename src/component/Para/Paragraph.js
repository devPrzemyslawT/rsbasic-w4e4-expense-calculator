import React from "react";

const Paragraph = props => {
	const { label, value } = props;

	return (
		<p>
			{label}: <strong>{value}$</strong>
		</p>
	);
};

export default Paragraph;
