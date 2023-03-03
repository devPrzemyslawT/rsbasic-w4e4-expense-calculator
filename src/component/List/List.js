import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = props => {
	const { typeElement, typeValue, data } = props;
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 450 }} size='small' aria-label='a dense table'>
				<TableHead>
					<TableRow>
						<TableCell>{typeElement}</TableCell>
						<TableCell align='right'>{typeValue}</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map(elem => (
						<TableRow
							key={elem.text}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
							<TableCell component='th' scope='row'>
								{elem.text}
							</TableCell>
							<TableCell align='right'>{elem.value}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default List;
