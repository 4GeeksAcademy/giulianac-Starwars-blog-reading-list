import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext.js';

const Characters = () => {
  const { store, actions } = useContext(Context);
  const { idCard } = useParams();

  useEffect(()=>{
    actions.getPeople(idCard);
  },[])

  return (
    <>
      <div className="container mt-5 d-flex">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${idCard}.jpg`} className="rounded mx-2" style={{ width: "18rem" }} alt="Cool looking character"></img>
        <div className="mx-2 text-center">
          <h1 className="text-light mt-0">{store.peopleInfo ? store.peopleInfo.name : "loading..."}</h1>
          <p className="character-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
        </div>
      </div>
      <div className="container">
        <hr />
        <table className="table table-borderless table-responsive mt-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>Birth</th>
              <th>Gender</th>
              <th>Hair Color</th>
              <th>Eye Color</th>
              <th>Height</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{store.peopleInfo ? store.peopleInfo.name : "loading..."}</td>
              <td>{store.peopleInfo ? store.peopleInfo.birth_year : "loading..."}</td>
              <td>{store.peopleInfo ? store.peopleInfo.gender : "loading..."}</td>
              <td>{store.peopleInfo ? store.peopleInfo.hair_color : "loading..."}</td>
              <td>{store.peopleInfo ? store.peopleInfo.eye_color : "loading..."}</td>
              <td>{store.peopleInfo ? store.peopleInfo.height : "loading..."}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Characters;