import React from 'react'
import { useSelector } from 'react-redux'
import {PremioAcumulado} from "./../components/juego/PremioAcumulado"
import {Pregunta} from "./../components/juego/Pregunta"

const PaginaJuego = () => {
  
  const loadingRonda=useSelector((store) => store.juegoReducer.loading)
 
  const ronda=useSelector(state=>state)
  return (
    <div className="card mx-2">
      <PremioAcumulado/>
      {loadingRonda?(<h1>Cargando Ronda</h1>):(<Pregunta/>)}
      
    </div>
  )
}

export default PaginaJuego