import React, { useContext } from "react";
import "../../styles/home.css";
import Card from "../component/card";
import { Context } from "../store/appContext.js"

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container my-4">
			<h1 className="details-title">Characters</h1>
			<div className="text-center d-flex overflow-auto pt-3">
				{store.peopleInfo.map((person) => {
					return <div className="text-center mx-auto mb-4" key={person.uid}>
						<Card uid={person.uid} character={person} category="people" />
					</div>
				})}
			</div>
			<h1 className="details-title">Planets</h1>
			<div className="text-center d-flex overflow-auto pt-3">
				{store.planetsInfo.map((planet) => {
					return <div className="text-center mx-auto mb-4" key={planet.uid}>
						<Card uid={planet.uid} character={planet} category="planets" />
					</div>
				})}
			</div>
			<h1 className="details-title">Vehicles</h1>
			<div className="text-center d-flex overflow-auto pt-3">
				{store.vehiclesInfo.map((vehicle) => {
					return <div className="text-center mx-auto mb-4" key={vehicle.uid}>
						<Card uid={vehicle.uid} character={vehicle} category="vehicles" />
					</div>
				})}
			</div>
		</div>
	)
};
