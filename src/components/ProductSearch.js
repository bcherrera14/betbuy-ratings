import React from 'react';
import { Form } from 'react-bootstrap';
import ProductCard from './ProductCard';

class ProductSearch extends React.Component {
	state = { searchTerm: '', results: [] };

	onInputChange = (event) => {
		this.setState({ searchTerm: event.target.value });
		// console.log(event.target.value);
	};

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onFormSubmit(this.state.searchTerm);
	};

	componentDidMount() {
		//console.log(this.props.results);
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.results !== prevProps.results) {
			//console.log(this.props.results);
			this.setState({ results: this.props.results });
		}

		if (this.state.results !== prevState.results) {
			console.log(this.state.results);
			//this.setState({ results: this.props.results });
		}
	}

	render() {
		const renderedGrid = this.state.results.map((product) => {
			// console.log(product.startDate);
			return <ProductCard product={product} key={product.sku} />;
		});
		return (
			<div className="d-flex flex-column justify-content-between align-items-center mx-4">
				<div className="search-bar mt-4">
					<Form onSubmit={this.onFormSubmit}>
						<Form.Group className="m-3" controlId="videoSearch">
							{/* <Form.Label>Video Search</Form.Label> */}
							<Form.Control
								type="text"
								placeholder="Search"
								onChange={this.onInputChange}
								value={this.state.searchTerm}
							/>
						</Form.Group>
					</Form>
				</div>
				<div className="container mt-4 d-flex flex-wrap">{renderedGrid}</div>
			</div>
		);
	}
}

export default ProductSearch;
