import React from 'react';
// import bestbuy from '../apis/bestbuy';
import axios from 'axios';

class App extends React.Component {
	state = { products: [] };

	componentDidMount() {
		this.getNetgearRouters();
		console.log();
	}

	getNetgearRouters = () => {
		axios
			.get(
				`https://api.bestbuy.com/v1/products(manufacturer=netgear&search=router)?format=json&pageSize=50&apiKey=${process
					.env.REACT_APP_BETBUY_KEY}`
			)
			.then((response) => {
				console.log(response.data.products);
				this.setState({ products: response.data.products });
			});
	};

	render() {
		return <div>App</div>;
	}
}

export default App;
