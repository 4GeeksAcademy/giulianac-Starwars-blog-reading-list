import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext.js';

const Vehicles = () => {
  const { store, actions } = useContext(Context);
  const { idCard } = useParams();
  const vehiclesDetails = store.vehiclesInfo.find(vehicle => vehicle.uid === idCard);

  if (!vehiclesDetails) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <>
      <div className="container mt-5 d-flex">
        <img src={vehiclesDetails.image} className="rounded mx-2" style={{ width: "18rem" }} alt="Cool looking character"></img>
        <div className="mx-2 text-center">
          <h1 className="text-light mt-0">{vehiclesDetails.name}</h1>
          <p className="character-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
        </div>
      </div>
      <div className="container">
        <hr />
        <table className="table table-borderless table-responsive mt-4">
          <thead>
            <tr>
              <th>Model</th>
              <th>Class</th>
              <th>Manufacturer</th>
              <th>Max Speed</th>
              <th>Capacity</th>
              <th>Length</th>
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
    </>
  )
}

export default Vehicles;