import React from 'react';
import { Form } from 'react-bootstrap';

class ProductSearch extends React.Component {
	state = { searchTerm: '' };

	onInputChange = (event) => {
		this.setState({ searchTerm: event.target.value });
		// console.log(event.target.value);
	};

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onFormSubmit(this.state.searchTerm);
	};

	render() {
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
			</div>
		);
	}
}

export default ProductSearch;
