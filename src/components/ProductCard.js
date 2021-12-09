import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
	const renderedRating = <i class="far fa-star" />;
	return (
		<div className="card d-flex flex-column justify-content-center align-items-center m-4">
			<img className="mt-3" src={product.image} />
			<h5 className="m-3">{product.modelNumber}</h5>
			<div className="d-flex flex-column align-items-center">
				<p>
					<i className="far fa-star" />
					<i className="far fa-star" />
					<i className="far fa-star" />
					<i className="far fa-star" />
					<i className="far fa-star me-2" />
					{product.customerReviewAverage}
				</p>
				<p>{product.customerReviewCount} Customer Reviews</p>
			</div>
		</div>
	);
};

export default ProductCard;
