import React, { useContext } from "react";
import "../../styles/home.css";
import Card from "../component/card";
import { Context } from "../store/appContext.js"

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-4">
			<h1>Characters</h1>
			<div className="text-center d-flex overflow-scroll">
				{store.peopleInfo.map((person) => {
					return <div className="text-center mx-auto mb-5" key={person.uid}>
						<Card name={person.name} uid={person.uid} key={person.name} character={person} category="people" />
					</div>
				})}
			</div>
			<h1>Planets</h1>
			<div className="text-center d-flex overflow-scroll">
				{store.planetsInfo.map((planet, index) => {
					return <div className="text-center mx-auto mb-5" key={planet.uid}>
						<Card name={planet.name} uid={planet.uid} key={planet.name} character={planet} category="planets" />
					</div>
				})}
			</div>
			<h1>Vehicles</h1>
			<div className="text-center d-flex overflow-scroll">
				{store.vehiclesInfo.map((vehicle, index) => {
					return <div className="text-center mx-auto mb-5" key={vehicle.uid}>
						<Card name={vehicle.name} uid={vehicle.uid} key={vehicle.name} character={vehicle} category="vehicles" />
					</div>
				})}
			</div>
		</div>
	)
};
