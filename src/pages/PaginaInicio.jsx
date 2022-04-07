import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import createRonda from '../actions/gameActions'
import useForm from './../hooks/useForm'

const PaginaInicio = () => {
  
  const dispatch=useDispatch()
  const [formValues,handleInputChange,reset]=useForm({playerName:""})
  const {playerName}=formValues
  const navigate =useNavigate()
  const handleGoToConfigPage=(e)=>{
    navigate("/creacion-pregunta")
  }

  const handleGoToHistoryPage=(e)=>{
    navigate("/datos-historico")
  }
  const handleGoToStartGame=(e)=>{
    e.preventDefault()
    if (playerName==="") {
      return
    }
    dispatch(createRonda(playerName))
    navigate("/juego")
  }

  return (
    
    <div>
      <section>
      <button onClick={handleGoToConfigPage}>Configurar Juego</button>
      <button onClick={handleGoToHistoryPage}>Datos Historicos</button>
      </section>
      <form onSubmit={handleGoToStartGame} >
        <input type="text" name="playerName" id="" value={playerName} onChange={handleInputChange} />
      <button type='Submit'>Jugar</button>
      </form>
      </div>
  )
}

export default PaginaInicio