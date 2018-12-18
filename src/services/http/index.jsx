import React from 'react';
import PropTypes from 'prop-types';


const withHTTP = (WrappedComponent, props) => {
	return class extends React.Component {

		componentDidCatch(error, info) {
			console.log('http error', error, info);
		}

		fetchJSON = (url) =>
			fetch(url)
				.then(res => res.json())
				.then(data => data);

		render() {
			return <WrappedComponent fetchJSON={this.fetchJSON} {...this.props} />;
		}
	}
}


export default withHTTP;
