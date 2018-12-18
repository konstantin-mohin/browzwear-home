import React from 'react';
import PropTypes from 'prop-types';


const TableBody = ({ children, props }) => (
	<tbody {...props}>
		{
			children
		}
	</tbody>
);


TableBody.propTypes = {
	children: PropTypes.node.isRequired,
};


export default TableBody;
