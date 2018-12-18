import React from 'react';
import PropTypes from 'prop-types';


const TableHeadCell = ({ children, ...props }) => (
	<th {...props}>
		{
			children
		}
	</th>
);


TableHeadCell.propTypes = {
	children: PropTypes.node.isRequired,
};


export default TableHeadCell;
