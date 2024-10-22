import React from 'react'
import './App.css'
import Inscrire from './cardInscription/Inscrire'
import InscriptionTable from './tableInscription/InscriptionTable'
import GestionTach from './gestionTach/GestionTach'
const App = () => {
  return (
    <div>
      <InscriptionTable/>
      
      <Inscrire/>

      <h1>Mini Crud</h1>
      <GestionTach/>
    </div>
  )
}

export default App
