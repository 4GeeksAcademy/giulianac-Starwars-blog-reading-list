import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext.js';

const Planets = () => {
  const { store, actions } = useContext(Context);
  const { idCard } = useParams();

  useEffect(() => {
    actions.getPlanets(idCard)
  }, []);

  const imageToDisplay = (idCard == 1) ? `https://starwars-visualguide.com/assets/img/big-placeholder.jpg` : `https://starwars-visualguide.com/assets/img/planets/${idCard}.jpg`;

  return (
    <>
      <div className="container mt-5 d-flex">
        <img src={imageToDisplay} className="rounded mx-2" style={{ width: "18rem" }} alt="Cool looking character"></img>
        <div className="mx-2 text-center">
          <h1 className="text-light mt-0">{store.planetsInfo ? store.planetsInfo.name : "loading..."}</h1>
          <p className="planet-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
        </div>
      </div>
      <div className="container">
        <hr />
        <table className="table table-borderless table-responsive mt-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>Population</th>
              <th>Climate</th>
              <th>Terrain</th>
              <th>Gravity</th>
              <th>Orbital Period</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{store.planetsInfo ? store.planetsInfo.name : "loading..."}</td>
              <td>{store.planetsInfo ? store.planetsInfo.population : "loading..."}</td>
              <td>{store.planetsInfo ? store.planetsInfo.climate : "loading..."}</td>
              <td>{store.planetsInfo ? store.planetsInfo.terrain : "loading..."}</td>
              <td>{store.planetsInfo ? store.planetsInfo.gravity : "loading..."}</td>
              <td>{store.planetsInfo ? store.planetsInfo.orbital_period : "loading..."}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Planets;
