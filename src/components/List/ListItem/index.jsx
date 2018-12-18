import React from 'react';
import PropTypes from 'prop-types';


const ListItem = ({title, ...props}) =>
	<li {...props}>
		{title}
	</li>


ListItem.propTypes = {
	title: PropTypes.string.isRequired,
};


export default ListItem;
