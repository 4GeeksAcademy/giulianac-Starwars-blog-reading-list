import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext.js';

const Characters = () => {
  const { store, actions } = useContext(Context);
  const { idCard } = useParams();
  const characterDetails = store.peopleInfo.find(character => character.uid === idCard);

  if (!characterDetails) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <>
      <div className="container mt-5 d-flex">
        <img src={characterDetails.image} className="rounded mx-2" style={{ width: "18rem" }} alt="Cool looking character"></img>
        <div className="mx-2 text-center">
          <h1 className="text-light mt-0">{characterDetails.name}</h1>
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
              <td>{characterDetails.name}</td>
              <td>{characterDetails.birth_year}</td>
              <td>{characterDetails.gender}</td>
              <td>{characterDetails.hair_color}</td>
              <td>{characterDetails.eye_color}</td>
              <td>{characterDetails.height}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Characters;