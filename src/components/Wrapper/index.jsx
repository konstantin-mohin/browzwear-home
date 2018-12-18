import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';


const Wrapper = ({children, classNames}) => (
	<div className={`wrapper ${classNames}`}>{children}</div>
);

Wrapper.propTypes = {
	children: PropTypes.node.isRequired,
	classNames: PropTypes.string,
};

export default Wrapper;
