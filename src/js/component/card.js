import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import PropTypes from 'prop-types';

const Card = ({ character, uid, category }) => {
    const { store, actions } = useContext(Context);
    const { idCard } = useParams();
    const placeholderImg = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
    const imageToDisplay = uid === "1" && category === "planets" ? placeholderImg : `https://starwars-visualguide.com/assets/img/${(category === "people" ? "characters" : category)}/${uid}.jpg`;

    return (
        <div className="card mb-2 mx-2 h-100" style={{ width: "18rem" }}>
            <img src={imageToDisplay} className="card-img-top" alt="A Picture From Far Far Away" />
            <div className="card-body d-flex justify-content-between flex-column">
                <h4 className="card-title">{character.name}</h4>
                {(category === "people") ?
                    (<><p className="card-text">{character.description1}</p>
                        <p className="card-text">{character.description2}</p>
                        <p className="card-text">{character.description3}</p></>) :
                    ((category === "planets") ?
                        (<><p className="card-text">{character.description1}</p>
                            <p className="card-text">{character.description2}</p>
                            <p className="card-text">{character.description3}</p></>) :
                        (<><p className="card-text">{character.description1}</p>
                            <p className="card-text">{character.description2}</p>
                            <p className="card-text">{character.description3}</p></>)
                    )
                }
                <div className="card-buttons d-flex">
                    <Link to={`/${category}/${uid}`}><button className="btn btn-primary btn-more">Learn More!</button></Link>
                    <button className="btn btn-danger btn-add-favorite" onClick={() => { actions.addFavorites(character.name) }}><i className="text-white far fa-heart"></i></button>
                </div>
            </div>
        </div >
    )
};

Card.propTypes = {
    category: PropTypes.string,
    character: PropTypes.object,
    uid: PropTypes.string,
}

export default Card;