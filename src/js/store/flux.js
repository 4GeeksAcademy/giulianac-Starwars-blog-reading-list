const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			peopleInfo: [],
			planetsInfo: [],
			vehiclesInfo: [],
			favorites: [],
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			// fetch StarWar People general information
			getPeople: () => {
				fetch(`https://www.swapi.tech/api/people/`)
					.then(response => response.json())
					.then((data) => {
						const peopleUrls = data.results.map((result) => result.url);
						//fetch Characters details
						Promise.all(
							peopleUrls.map((url) =>
								fetch(url).then((response) => response.json())
							)
						)
							.then((peopleData) => {
								const charactersDetails = peopleData.map((data) => ({
									uid: data.result.uid,
									name: data.result.properties.name,
									birth_year: data.result.properties.birth_year,
									gender: data.result.properties.gender,
									height: data.result.properties.height,
									eye_color: data.result.properties.eye_color,
									hair_color: data.result.properties.hair_color,
									image: `https://starwars-visualguide.com/assets/img/characters/${data.result.uid}.jpg`,
									description1: `Height: ${data.result.properties.height} cm`,
									description2: `Eye Color: ${data.result.properties.eye_color}`,
									description3: `Hair Color: ${data.result.properties.hair_color}`,
								}));
								setStore({ peopleInfo: charactersDetails });
							})
							.catch(err => {
								console.error('Error fetching character details', err);
								throw err;
							});
					})
					.catch(err => {
						console.error('Error fetching people urls', err);
						throw err;
					});
			},
			// fetch StarWar Planets general information
			getPlanets: () => {
				fetch(`https://www.swapi.tech/api/planets/`)
					.then(response => response.json())
					.then((data) => {
						const planetsUrls = data.results.map((result) => result.url);
						//fetch Planets details
						Promise.all(
							planetsUrls.map((url) =>
								fetch(url).then((response) => response.json())
							)
						)
							.then((peopleData) => {
								const planetsDetails = peopleData.map((data) => ({
									uid: data.result.uid,
									name: data.result.properties.name,
									population: data.result.properties.population,
									climate: data.result.properties.climate,
									terrain: data.result.properties.terrain,
									gravity: data.result.properties.gravity,
									orbital_period: data.result.properties.orbital_period,
									image: `https://starwars-visualguide.com/assets/img/planets/${data.result.uid}.jpg`,
									description1: `Population: ${data.result.properties.population}`,
									description2: `Climate: ${data.result.properties.climate}`,
									description3: `Terrain: ${data.result.properties.terrain}`,
								}));
								setStore({ planetsInfo: planetsDetails });
							})
							.catch(err => {
								console.error('Error fetching planet details', err);
								throw err;
							})
					})
					.catch(err => {
						console.error('Error fetching planets urls', err);
						throw err;
					})
			},
			// fetch StarWar Vehicles general information
			getVehicles: () => {
				fetch(`https://www.swapi.tech/api/vehicles/`)
					.then(response => response.json())
					.then((data) => {
						const vehiclesUrls = data.results.map((result) => result.url);
						//fetch Vehicles details
						Promise.all(
							vehiclesUrls.map((url) =>
								fetch(url).then((response) => response.json())
							)
						)
							.then((vehicleData) => {
								const vehiclesDetails = vehicleData.map((data) => ({
									uid: data.result.uid,
									name: data.result.properties.model,
									manufacturer: data.result.properties.manufacturer,
									vehicle_class: data.result.properties.vehicle_class,
									cargo_capacity: data.result.properties.cargo_capacity,
									max_atmosphering_speed: data.result.properties.max_atmosphering_speed,
									length: data.result.properties.length,
									image: `https://starwars-visualguide.com/assets/img/vehicles/${data.result.uid}.jpg`,
									description1: `Model: ${data.result.properties.model}`,
									description2: `Manufacturer: ${data.result.properties.manufacturer}`,
									description3: `Vehicle Class: ${data.result.properties.vehicle_class}`,
								}));
								setStore({ vehiclesInfo: vehiclesDetails });
							})
							.catch(err => {
								console.error('Error fetching vehicle details', err);
								throw err;
							})
					})
					.catch(err => {
						console.error('Error fetching vehicle urls', err);
						throw err;
					})
			},
			//add selectedItem to favorites' list
			addFavorites: (selectedItem) => {
				let listOfFavorites = getStore().favorites;
				if (!listOfFavorites.includes(selectedItem)) {
					setStore({ favorites: listOfFavorites.concat(selectedItem) });
				}
			},
			//delete selectedFavorite from favorites' list
			deleteFavorites: (selectedFavorite) => {
				let listOfFavorites = getStore().favorites;
				setStore({ favorites: listOfFavorites.filter((item) => item !== selectedFavorite) });
			}
		}
	}
};

export default getState;
