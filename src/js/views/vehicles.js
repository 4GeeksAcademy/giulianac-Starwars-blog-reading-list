import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext.js';

const Vehicles = () => {
  const { store, actions } = useContext(Context);
  const { idCard } = useParams();
  const vehiclesDetails = store.vehiclesInfo.find(vehicle => vehicle.uid === idCard);

  if (!vehiclesDetails) {
    return <div className="text-center text-light display-1">Loading...</div>;
  }

  return (
    <>
      <div className="jumbotron container pb-3">
        <div className="lead mt-5 d-flex">
          <img src={vehiclesDetails.image} className="rounded mx-2" style={{ width: "18rem" }} alt="Cool looking character"></img>
          <div className="mx-2 text-center">
            <h1 className="text-light mt-0">{vehiclesDetails.name}</h1>
            <p className="character-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
          </div>
        </div>
        <hr />
        <div className="lead">
          <table className="table table-borderless table-responsive mt-4">
            <thead>
              <tr>
                <th className="details-text">Model</th>
                <th className="details-text">Class</th>
                <th className="details-text">Manufacturer</th>
                <th className="details-text">Max Speed</th>
                <th className="details-text">Capacity</th>
                <th className="details-text">Length</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{vehiclesDetails.name}</td>
                <td>{vehiclesDetails.vehicle_class}</td>
                <td>{vehiclesDetails.manufacturer}</td>
                <td>{vehiclesDetails.max_atmosphering_speed}</td>
                <td>{vehiclesDetails.cargo_capacity}</td>
                <td>{vehiclesDetails.length}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Vehicles;