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
			people: [],
			planets: [],
			vehicles: [],
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

			//fetch StarWar's General Information and store it globally
			getStarWarsInfo: (category) => {
				fetch(`https://www.swapi.tech/api/${category}/`).then(response => response.json())
					.then(data => {
						let obj = {};
						obj[category] = data.results;
						setStore(obj);
					})
					.catch(err => err)
			},
			//fetch StarWar Characters and store it globally
			getPeople: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`).then(response => response.json())
				.then((data) => {setStore({ peopleInfo: data?.result.properties })})
				.catch(err => err)
			},
			//fetch StarWar Vehicles and store it globally
			getVehicles: (id) => {
				fetch(`https://www.swapi.tech/api/vehicles/${id}`).then(response => response.json()).then(data => setStore({ vehiclesInfo: data?.result.properties })).catch(err => err)
			},
			//fetch StarWar Planets and store it globally
			getPlanets: (id) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`).then(response => response.json()).then(data => setStore({ planetsInfo: data?.result.properties })).catch(err => err)
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
	};
};

export default getState;
