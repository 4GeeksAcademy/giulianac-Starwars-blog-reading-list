import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import PropTypes from 'prop-types';

const Card = ({ name, uid, category }) => {
    const { store, actions } = useContext(Context);
    const { idCard } = useParams();
    const imageToDisplay = uid === "1" && category === "planets" ? `https://starwars-visualguide.com/assets/img/big-placeholder.jpg` : `https://starwars-visualguide.com/assets/img/${(category === "people" ? "characters" : category)}/${uid}.jpg`;

    return (
        <div className="card mb-5 mx-2" style={{ width: "18rem" }}>
            <img src={imageToDisplay} className="card-img-top" alt="A Picture From Far Far Away" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {(category === "people") ?
                    (<><p className="card-text">A person within the Star Wars universe</p></>) :
                    ((category === "planets") ?
                        (<><p className="card-text">A planet within the Star Wars universe</p></>) :
                        (<><p className="card-text">A vehicle within the Star Wars universe</p></>)
                    )
                }
                <Link to={`/${category}/${uid}`}><button className='btn btn-primary'>Learn More!</button></Link>
                <button className="btn btn-warning" onClick={() => {actions.addFavorites(name)}}><i className="far fa-heart"></i></button>
            </div>
        </div>
    )
};

Card.propTypes = {
    category: PropTypes.string,
}

export default Card;