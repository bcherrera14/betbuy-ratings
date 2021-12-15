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
			<p className="mt-3">
				{product.customerTopRated ? (
					<span>
						<i className="fas fa-award" /> <strong>Top Rated</strong>
					</span>
				) : (
					''
				)}
			</p>
			<img className="mt-3" src={product.image} alt="..." />
			<h5 className="m-3">{product.modelNumber.split('-')[0]}</h5>
			<div className="d-flex flex-column align-items-center justify-content-center">
				<span>{stars}</span>
				<p>{product.customerReviewAverage}</p>

				<p>
					{product.customerReviewCount} Customer Reviews
					<a className="ms-2" href={product.url + '#tabbed-customerreviews'}>
						<i className="fas fa-external-link-alt fa-sm" />
					</a>
				</p>
			</div>
		</div>
	);
};

export default ProductCard;
