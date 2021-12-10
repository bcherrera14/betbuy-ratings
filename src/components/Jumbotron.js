import React from 'react';

const Jumbotron = ({ title }) => {
	return (
		<div class="jumbotron jumbotron-fluid my-3 py-3">
			<div class="container d-flex justify-content-center">
				<h2 class="display-4">{title}</h2>
			</div>
		</div>
	);
};

export default Jumbotron;
