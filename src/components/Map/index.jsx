import React from 'react';
import GoogleMap from 'services/map';
import withGeocode from 'services/api/geocode';
import withHTTP from 'services/http';
import { compose } from 'utils/helpers';


class Map extends React.Component {
	state = {
		location: {
			lat: '',
			lng: '',
		}
	}


	componentDidUpdate(prevProps) {
		if (prevProps.address !== this.props.address) {
			this.handleLocation();
		}
	}

	handleLocation = async () => {
		const location = await this.props.getLocation(this.props.address);

		this.setState({location});
	}

	componentDidMount() {
		this.handleLocation();
	}


	render() {
		const {
			location
		} = this.state;
		const {lat, lng} = location;

		return (
				!!lat && !!lng &&
				<GoogleMap
					isMarkerShown={true}
					componentProps={{
						zoom: 20,
						center: { ...location }
					}}
				/>
		)
	}
}


export default compose(withHTTP,withGeocode)(Map);

