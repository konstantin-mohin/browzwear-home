import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';


const Table = ({children, ...props}) => (
	<table {...props}>
		{
			children
		}
	</table>
);


Table.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Table;
