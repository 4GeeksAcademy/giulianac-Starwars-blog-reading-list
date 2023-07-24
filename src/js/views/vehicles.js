import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext.js';

const Vehicles = () => {
  const { store, actions } = useContext(Context);
  const { idCard } = useParams();

  useEffect(() => {
    actions.getVehicles(idCard);
  }, [])

  return (
    <>
      <div className="container mt-5 d-flex">
        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${idCard}.jpg`} className="rounded mx-2" style={{ width: "18rem" }} alt="Cool looking character"></img>
        <div className="mx-2 text-center">
          <h1 className="text-light mt-0">{store.vehiclesInfo ? store.vehiclesInfo.model : "loading..."}</h1>
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
              <td>{store.vehiclesInfo ? store.vehiclesInfo.model : "loading..."}</td>
              <td>{store.vehiclesInfo ? store.vehiclesInfo.vehicle_class : "loading..."}</td>
              <td>{store.vehiclesInfo ? store.vehiclesInfo.manufacturer : "loading..."}</td>
              <td>{store.vehiclesInfo ? store.vehiclesInfo.max_atmosphering_speed : "loading..."}</td>
              <td>{store.vehiclesInfo ? store.vehiclesInfo.cargo_capacity : "loading..."}</td>
              <td>{store.vehiclesInfo ? store.vehiclesInfo.length : "loading..."}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Vehicles;