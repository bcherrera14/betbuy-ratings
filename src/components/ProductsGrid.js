import React from 'react';
import ProductCard from './ProductCard';

const ProductsGrid = ({ products }) => {
	function isRouter(item) {
		if (
			item.includes('Cable') ||
			item.includes('Extender') ||
			item.includes('Satellite') ||
			item.includes('Switch') ||
			item.includes('Powerline') ||
			item.includes('Access Point') ||
			item.includes('USB')
		) {
			return false;
		} else {
			return true;
		}
	}

	const routerList = products.filter((product) => isRouter(product.name));
	console.log('Unsorted List: ', routerList);

	const sortedList = routerList.slice().sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
	console.log('Sorted List: ', sortedList.reverse());

	const renderedGrid = sortedList.map((product) => {
		// console.log(product.startDate);
		return <ProductCard product={product} />;
	});

	return <div className="container mt-4 d-flex flex-wrap">{renderedGrid}</div>;
};

export default ProductsGrid;
