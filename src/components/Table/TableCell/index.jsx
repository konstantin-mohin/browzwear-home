import React from 'react';
import PropTypes from 'prop-types';


const TableCell = ({ children }) => (
	<td>
		{
			children
		}
	</td>
);


TableCell.propTypes = {
	children: PropTypes.node.isRequired,
};


export default TableCell;
