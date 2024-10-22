import React from 'react';
import './Card.css'
function Card (props) {
    const {  id, nom, prenom }=props.personne
    function SupprimerP(event){
        props.SupprimerIns(id)
    }


    return (
        <div className='card'>
            <h1>{id}</h1>
            <h2>{nom}</h2>
            <h3>{prenom}</h3>
            <button onClick={(event) => SupprimerP(event)}>Delete</button>
        </div>
    );
};

export default Card;
