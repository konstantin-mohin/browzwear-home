import React from 'react';
import PropTypes from 'prop-types';

import Map from 'components/Map';
import Table from 'components/Table';
import TableRow from 'components/Table/TableRow';
import TableCell from 'components/Table/TableCell';
import TableBody from 'components/Table/TableBody';
import TableHead from 'components/Table/TableHead';
import TableHeadCell from 'components/Table/TableHeadCell';
import List from 'components/List';
import {
	getGeocodeAddress,
	sortClients,
} from 'utils/helpers';




class CompanyNavigator extends React.Component {
	constructor(props) {
		super(props);
		// this.groupedByCountry = groupBy(this.props.data, ['country', 'city']);

		// const countriesByCities = Object.values(this.groupedByCountry).sort(sortObjByLength);
		// this.sorted = countriesByCities.map(city =>
		// 	Object.values(city).sort(sortArrByLength)
		// );
		this.sortedData = sortClients(this.props.data);

		this.state = {
			countryIndex: 0,
			cityIndex: 0,
			companyIndex: 0,
		};
	}

	handleClick = (e) => {
		const targetIndex = +e.target.getAttribute('data-index');
		const parentIndex = e.target.parentNode.getAttribute('data-index-type');

		if (Number.isInteger(targetIndex) && parentIndex) {

			switch (parentIndex) {
				case 'countryIndex':
					this.setState({
						[parentIndex]: targetIndex,
						cityIndex: 0,
						companyIndex: 0,
					});
					break;

				case 'cityIndex':
					this.setState({
						[parentIndex]: targetIndex,
						companyIndex: 0,
					});
					break;
			
				default:
					this.setState({ [parentIndex]: targetIndex });
					break;
			}
		}
	}

	activeClass = (bool) =>
		!!bool && { className: 'selected'}


	render() {
		const {
			labels,
			data,
		} = this.props;
		const {
			countryIndex,
			cityIndex,
			companyIndex,
		} = this.state;
		const { sortedData } = this;
		const currentCompany = sortedData[countryIndex][cityIndex][companyIndex];
		const address = getGeocodeAddress(currentCompany);

		return (
			<Table onClick={this.handleClick} className={'table height-450'}>
				<TableHead>
					<TableRow>
						{
							labels.map((label,i) => <TableHeadCell key={`${i}-${label}`}>{label}</TableHeadCell>)
						}
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>
							<List data-index-type="countryIndex" data={sortedData} className={'list'}>
								{
									(country, index) =>
										<li
											data-index={index}
											key={country[0][0].id}
											{...this.activeClass(index===countryIndex)}
											>
												{country[0][0].country}
										</li>
								}
							</List>
						</TableCell>
						<TableCell>
							<List data-index-type="cityIndex" data={sortedData[countryIndex]} className={'list'}>
								{
									(city, index) =>
										<li
											data-index={index}
											key={city[0].id}
											{...this.activeClass(index === cityIndex)}
											>
											{city[0].city}
										</li>
								}
							</List>
						</TableCell>
						<TableCell>
							<List data-index-type="companyIndex" data={sortedData[countryIndex][cityIndex]} className={'list'}>
								{
									(company, index) =>
										<li
											data-index={index}
											key={company.id}
											{...this.activeClass(index === companyIndex)}
											>
												{company.companyname}
											</li>
								}
							</List>
						</TableCell>
						<TableCell>
							<Map
								address={address}
							/>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		);
	}
}

export default CompanyNavigator;
