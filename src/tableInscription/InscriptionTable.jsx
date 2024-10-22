import React, { useState } from 'react'

let k=0;
const InscriptionTable= () => {
    const [nom , setNom]=useState('')
    const [prenom , setPrenom]=useState('');
    const [Table,setTable]=useState([]);

    
    
    const ajouter=()=>{
        const personne={id:++k,  nom:nom,prenom:prenom}
         setTable([...Table,personne])
    }
    const supprimer=(idPers)=>{
        setTable((p=>Table.filter(pers=>pers.id !== idPers)))
    }
  return (
    <div>
      <h2>Inscription</h2>
      <div>
        <label htmlFor="">Nom :</label>
        <input type="text"  onChange={(e)=>setNom(e.target.value)}/>
      </div>
      <br />
      <div>
      <label htmlFor="">prenom :</label>
        <input type="text"  onChange={(e)=>setPrenom(e.target.value)}/>
      </div>
      <br />
      <button  onClick={ajouter}> Afficher </button>
    <p>{Table.length}</p>
    {/* {
     Table.map( person => 
      <div>{person.id} - {person.nom} - {person.prenom}</div>
     )}   */}

    <table style={{border:"2px"}}>
        <tr>
            <th>id</th>
            <th>nom</th>
            <th>prenom</th>
            <th>Supprimer</th>
        </tr>
        {
            Table.map( person => 
            <tr>
                <td>{person.id}</td>
                <td> {person.nom} </td>
                <td> {person.prenom} </td>
                <td><button onClick={()=>supprimer(person.id)}>Delete</button></td>
            </tr>
            )
        }
    </table>

    </div>
  )
}

export default InscriptionTable;
