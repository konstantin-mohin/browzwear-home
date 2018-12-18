import React from 'react';
import { geocodeURL } from 'utils/constants';


const withGeocode = (WrappedComponent, props) => {
	return class extends React.Component {

		componentDidCatch(error, info) {
			console.log('catch', error, info);
		}

		getLocation = async (address) => {
			const requestURL = geocodeURL(address);
			const { results, status } = await this.props.fetchJSON(requestURL);

			if (status === 'OK') {
				return results[0].geometry.location;
			}

			return false;
		}


		render() {
			return <WrappedComponent getLocation={this.getLocation} {...this.props} />;
		}
	}
}


export default withGeocode;
