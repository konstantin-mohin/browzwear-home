import React from 'react';

const APIKey = 'AIzaSyCvOnmyCkmw3yXD8mFjR7pN8vm75ehmvsg';
const mapURL = `https://maps.googleapis.com/maps/api/js?key=${APIKey}&v=3.exp&libraries=geometry,drawing,places`;

export const geocodeURL = (address) => `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${APIKey}`;

export const mapProps = {
	googleMapURL: mapURL,
	loadingElement: <div style={{ height: '100%' }} ><h2>Finding...</h2></div>,
	containerElement: <div style={{ height: '400px' }} />,
	mapElement: <div style={{ height: '100%' }} />,
}
