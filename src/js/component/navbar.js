import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';
import star_wars_logo from '../../img/star_wars_logo.png';

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container-fluid">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src={star_wars_logo} style={{height:"5rem"}}/></span>
				</Link>
				<div className="ml-auto">
					<button type="button" className="btn btn-outline-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						<i className="far fa-heart"></i> {store.favorites.length }
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites.map(
							(favorite, index) => {
								return (
									<li className="dropdown-item" key={index}> {favorite}
										<button className="btn-close" onClick={() => { actions.deleteFavorites(favorite) }} >
										</button>
									</li>
								);
							}
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
