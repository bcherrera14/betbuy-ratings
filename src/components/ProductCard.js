import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
	let rating = parseFloat(product.customerReviewAverage);
	// console.log(rating);
	let stars = [
		<i className="far fa-star" key={Math.random()} />,
		<i className="far fa-star" key={Math.random()} />,
		<i className="far fa-star" key={Math.random()} />,
		<i className="far fa-star" key={Math.random()} />,
		<i className="far fa-star" key={Math.random()} />
	];

	for (let i = 0; i < 5; i++) {
		if (rating >= 1) {
			stars[i] = <i className="fas fa-star" key={Math.random()} />;
		} else if (rating >= 0.5) {
			stars[i] = <i className="fas fa-star-half-alt" key={Math.random()} />;
		}
		rating -= 1;
	}

	return (
		<div className="card d-flex flex-column justify-content-center align-items-center m-4" key={product.sku}>
			<img className="mt-3" src={product.image} />
			<h5 className="m-3">{product.modelNumber.split('-')[0]}</h5>
			<div className="d-flex flex-column align-items-center">
				<span>{stars}</span>
				<p>{product.customerReviewAverage}</p>

				<p>{product.customerReviewCount} Customer Reviews</p>
				<p>
					{product.customerTopRated ? (
						<span>
							<i class="fas fa-award" /> <strong>Top Rated</strong>
						</span>
					) : (
						''
					)}
				</p>
			</div>
		</div>
	);
};

export default ProductCard;
