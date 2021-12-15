import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import ProductCard from './ProductCard';
import './ProductSearch.css';

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
			return <ProductCard product={product} key={product.sku} />;
		});
		return (
			<div className="d-flex flex-column justify-content-between align-items-center mx-4">
				<div className="search-card card mt-4 p-3 d-flex justify-content-center align-items-center">
					<Form onSubmit={this.onFormSubmit}>
						<Row className="align-items-center">
							<Col className="my-1">
								<div className="search">
									<Form.Control
										id="search-input"
										type="text"
										autoComplete="off"
										placeholder="Search for products"
										onChange={this.onInputChange}
										value={this.state.searchTerm}
									/>
									<span id="search-icon">
										<i className="fas fa-search" />
									</span>
									<span id="at-icon">
										<i className="fas fa-at" />
									</span>
								</div>
							</Col>
							<Col xs="auto" className="my-1">
								<Button type="submit">Search</Button>
							</Col>
						</Row>
					</Form>
				</div>
				<div className="container mt-4 d-flex flex-wrap">{renderedGrid}</div>
			</div>
		);
	}
}

export default ProductSearch;
