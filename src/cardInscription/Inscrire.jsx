import React, { useState } from 'react';
import Card from './Card';

let k = 0;
const Inscrire = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [Table, setTable] = useState([]);

    const ajouter = () => {
        if (nom && prenom) {  // Ensure both fields are filled
            const personne = { id: ++k, nom: nom, prenom: prenom };
            setTable([...Table, personne]);
        }
    };

    const supprimer = (idPers) => {
        setTable(Table.filter(pers => pers.id !== idPers));
    };

    return (
        <div>
            <h2>Inscription</h2>
            <div>
                <label htmlFor="nom">Nom :</label>
                <input type="text" id="nom" onChange={(e) => setNom(e.target.value)} />
            </div>
            <br />
            <div>
                <label htmlFor="prenom">Prénom :</label>
                <input type="text" id="prenom" onChange={(e) => setPrenom(e.target.value)} />
            </div>
            <br />
            <button onClick={ajouter}> Afficher </button>
            <p>{Table.length}</p>
            {
                Table.map(person => (
                    <Card key={person.id} personne={person} SupprimerIns={supprimer} />
                ))
            }
        </div>
    );
};

export default Inscrire;
 