import React from 'react';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from 'react-google-maps';

import {
	compose,
	withProps
} from 'utils/helpers';
import { mapProps } from 'utils/constants';


const Map = compose(
	withProps(mapProps),
	withScriptjs,
	withGoogleMap
)( (props) =>
	<GoogleMap
		{...props.componentProps}
	>
		{props.isMarkerShown && <Marker position={props.componentProps.center} />}
	</GoogleMap>
);

export default Map;
