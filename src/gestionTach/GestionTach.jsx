import React, { useState } from 'react'

const GestionTach = () => {
    const [tache , setTache]=useState("")
    const [taches , setTaches]=useState([])
    const [Id , setId]=useState(0) 
    const empty=()=>{
        setId(Id+1)
        if(tache.trim()!==""){
            const nouvelle={id:Id , des:tache , }
            setTaches([...taches , nouvelle])
            setTache("")
        }
    }

  const supp=(id)=>{
    const confirmation=window.confirm("do you want to delete")
    if(confirmation){
        setTaches(taches.filter((e)=>e.id !== id))
    }
  }

  return (
    <div>
      <input type="text" value={tache} onChange={(e)=>setTache(e.target.value)} />
      <button onClick={empty}>Ajouter</button>
      <ul>
        {taches.map((e,i)=>(
           
                <li key={i}>
                   
               
                    {e.des} 
                    <button onClick={()=>supp(e.id)}>Supprimer</button>
                </li>
        ))}
        </ul>
    </div>
  )
}

export default GestionTach
