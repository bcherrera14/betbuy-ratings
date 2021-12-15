import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsGrid from './ProductsGrid';
import ProductSearch from './ProductSearch';
import '@fortawesome/fontawesome-free/css/all.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';

class App extends React.Component {
	state = { products: [], searchResults: [], loading: false };

	componentDidMount() {
		this.getNetgearRouters();
		this.setState({ loading: true });
	}

	getNetgearRouters = () => {
		axios
			.get(
				`https://api.bestbuy.com/v1/products(manufacturer=netgear)?format=json&pageSize=100&apiKey=${process.env
					.REACT_APP_BETBUY_KEY}`
			)
			.then((response) => {
				//console.log(response.data.products);
				this.setState({ products: response.data.products });
			});
	};

	onFormSubmit = (term) => {
		//console.log(term);
		axios
			.get(
				`https://api.bestbuy.com/v1/products(search=${term})?format=json&pageSize=30&apiKey=${process.env
					.REACT_APP_BETBUY_KEY}`
			)
			.then((response) => {
				//console.log(response.data.products);
				this.setState({ searchResults: response.data.products });
			});
	};

	render() {
		return (
			<div>
				<Routes>
					<Route path="/" element={<Navbar />}>
						<Route index element={<ProductsGrid products={this.state.products} />} />
						<Route
							path="/search"
							element={
								<ProductSearch onFormSubmit={this.onFormSubmit} results={this.state.searchResults} />
							}
						/>
					</Route>
				</Routes>
			</div>
		);
	}
}

export default App;
