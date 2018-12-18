import React from 'react';


export const compose = (...fns) =>
	fns.reduce((f, g) => (...args) => f(g(...args)));


export const withProps = injectedProps => WrappedComponent => {
	const WithProps = props => <WrappedComponent {...injectedProps} {...props} />

	return WithProps
}


export const groupBy = (objectArray, props) =>
	objectArray.reduce(
		(acc, obj) => {
		const key = obj[props[0]];
		const city = obj[props[1]];

		if (!acc[key]) {
			acc[key] = {};
		}
		if (!acc[key][city]) {
			acc[key][city] = [];
			// acc[key].push(city);
		}
		acc[key][city].push(obj);
		return acc;
		},
	{});


export const sortObjByLength = (prev, next) =>
	Object.keys(next).length - Object.keys(prev).length;

export const getGeocodeAddress = (obj) => obj &&
	`${obj.address}, ${obj.postalcode}, ${obj.city}, ${obj.country}`;

export const sortClients = (data) => {
	let grouped = groupBy(data, ['country', 'city']);
	let byCities = Object.values(grouped).sort(sortObjByLength);
	let byCompanies = byCities.map(city =>
		Object.values(city).sort(sortObjByLength)
	);

	return byCompanies;
}
