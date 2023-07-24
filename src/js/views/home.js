import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import Card from "../component/card";
import { useParams } from "react-router";
import { Context } from "../store/appContext.js"

export const Home = () => {
	const { idCard } = useParams();
	const { store, actions } = useContext(Context);

	console.log(store.favorites);
	return (
		<div className="container mt-4">
			<h1>Characters</h1>
			<div className="text-center d-flex overflow-scroll">
				{store.people.map((person, index) => {
					return <div className="text-center mx-auto mb-5">
						<Card name={person.name} uid={person.uid} key={person.name} category="people"/>
					</div>
				})}
			</div>
			<h1>Planets</h1>
			<div className="text-center d-flex overflow-scroll">
				{store.planets.map((planet, index) => {
					return <div className="text-center mx-auto mb-5">
						<Card name={planet.name} uid={planet.uid} key={planet.name} category="planets"/>
					</div>
				})}
			</div>
			<h1>Vehicles</h1>
			<div className="text-center d-flex overflow-scroll">
				{store.vehicles.map((vehicle, index) => {
					return <div className="text-center mx-auto mb-5">
						<Card name={vehicle.name} uid={vehicle.uid} key={vehicle.name} category="vehicles"/>
					</div>
				})}
			</div>
		</div>
	)
};
