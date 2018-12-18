import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';


class List extends React.PureComponent {

	render() {
		const {
			data,
			children,
			...props
		} = this.props;

		return (
			<ul {...props}>
				{
					data.map((item, index) => children(item, index))
				}
			</ul>
		)
	}
}


List.propTypes = {
	// title: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired,
	children: PropTypes.func.isRequired,
};

List.defaultProps = {
	selected: false
};

export default List;
