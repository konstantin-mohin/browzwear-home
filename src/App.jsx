import React from 'react';
import Wrapper from 'components/Wrapper';
import CompanyNavigator from 'components/CompanyNavigator';
import data from 'assets/clients.json';
import { hot } from 'react-hot-loader';
import recursivelyLowercaseJSONKeys from 'recursive-lowercase-json';


const labels = ['Countries', 'Cities', 'Company', 'Map'];

class App extends React.Component {
	render() {
		return(
			<Wrapper classNames="abs-center full-height">
				<CompanyNavigator
					labels={labels}
					data={recursivelyLowercaseJSONKeys(data.Customers)}
				/>
			</Wrapper>
		);
	}
}


export default hot(module)(App);
