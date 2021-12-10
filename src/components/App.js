import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsGrid from './ProductsGrid';
import '@fortawesome/fontawesome-free/css/all.css';
import Jumbotron from './Jumbotron';

import Navbar from './Navbar';

class App extends React.Component {
	state = { products: [] };

	componentDidMount() {
		this.getNetgearRouters();
	}

	getNetgearRouters = () => {
		axios
			.get(
				`https://api.bestbuy.com/v1/products(manufacturer=netgear)?format=json&pageSize=100&apiKey=${process.env
					.REACT_APP_BETBUY_KEY}`
			)
			.then((response) => {
				console.log(response.data.products);
				this.setState({ products: response.data.products });
			});
	};

	render() {
		return (
			<div>
				<Navbar />
				<Jumbotron title="Best Buy Product Reviews" />
				<ProductsGrid products={this.state.products} />
			</div>
		);
	}
}

export default App;
