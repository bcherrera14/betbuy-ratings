import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = ({ setJumbotronTitle }) => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						<strong>NETGEAR</strong>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<NavLink className="nav-link" aria-current="page" to="/">
								Routers
							</NavLink>
							<NavLink className="nav-link" aria-current="page" to="/search">
								Search
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
			<Outlet />
		</div>
	);
};

export default Navbar;
