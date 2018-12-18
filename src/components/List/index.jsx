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
	data: PropTypes.array.isRequired,
	children: PropTypes.func.isRequired,
};


export default List;
