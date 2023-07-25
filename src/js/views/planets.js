import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext.js';

const Planets = () => {
  const { store, actions } = useContext(Context);
  const { idCard } = useParams();
  const planetsDetails = store.planetsInfo.find(planet => planet.uid === idCard);

  const imageToDisplay = (idCard == 1) ? `https://starwars-visualguide.com/assets/img/big-placeholder.jpg` : `https://starwars-visualguide.com/assets/img/planets/${idCard}.jpg`;

  if (!planetsDetails) {
    return <div className="text-center text-light display-1">Loading...</div>;
  }

  return (
    <>
      <div className="jumbotron container pb-3">
        <div className="lead mt-5 d-flex">
          <img src={imageToDisplay} className="rounded mx-2" style={{ width: "18rem" }} alt="Cool looking character"></img>
          <div className="mx-2 text-center">
            <h1 className="details-text mt-0 display-4">{planetsDetails.name}</h1>
            <p className="planet-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
          </div>
        </div>
        <hr />
        <div className="lead">
          <table className="table table-borderless table-responsive mt-4">
            <thead>
              <tr>
                <th className="details-text">Name</th>
                <th className="details-text">Population</th>
                <th className="details-text">Climate</th>
                <th className="details-text">Terrain</th>
                <th className="details-text">Gravity</th>
                <th className="details-text">Orbital Period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{planetsDetails.name}</td>
                <td>{planetsDetails.population}</td>
                <td>{planetsDetails.climate}</td>
                <td>{planetsDetails.terrain}</td>
                <td>{planetsDetails.gravity}</td>
                <td>{planetsDetails.orbital_period}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Planets;
