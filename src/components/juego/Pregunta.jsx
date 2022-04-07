import React, { Fragment, useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {subirNivel} from './../../actions/gameActions'
import { useNavigate } from "react-router-dom";

export const Pregunta = () => {
  const dispatch=useDispatch()
  const textoInformativo =
    "Puedes retirarte con el acumulado que llevas hasta ahora, si decides Enviar y la respuesta es incorrecta, pereras el acumulado";
  const pregunta = useSelector(
    (store) => store.juegoReducer.pregunta.nombrePregunta
  );
  const respuestas = useSelector((store) => store.juegoReducer.respuestas);
  const {id:idRonda,loading,pasoUltimoNivel} = useSelector((store) => store.juegoReducer);
  const respuesta1 = useSelector(
    (store) => store.juegoReducer.respuestas[0].nombreRespuesta
  );
  const respuesta2 = useSelector(
    (store) => store.juegoReducer.respuestas[1].nombreRespuesta
  );
  const respuesta3 = useSelector(
    (store) => store.juegoReducer.respuestas[2].nombreRespuesta
  );
  const respuesta4 = useSelector(
    (store) => store.juegoReducer.respuestas[3].nombreRespuesta
  );
  const handleBotonContestar = () => {
    var respuestaCorrecta = false;
    switch (respuestaSeleccionada) {
      case 0:
        respuestaCorrecta = respuestas[0].esRespuestaCorrecta;
        break;
      case 1:
        respuestaCorrecta = respuestas[1].esRespuestaCorrecta;
        break;
      case 2:
        respuestaCorrecta = respuestas[2].esRespuestaCorrecta;
        break;
      case 3:
        respuestaCorrecta = respuestas[3].esRespuestaCorrecta;
        break;
    }
    if (respuestaCorrecta) {
      if (pasoUltimoNivel) {
        handleGoBack()  
      }else{
        dispatch(subirNivel(idRonda))

      }
      
    
    } else {
      window.alert("respuesta Incorrecta");
    }
    console.log(respuestaSeleccionada);
  };
  const navigate = useNavigate();
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState();
  const handleRespuestaSeleccionada = (respuesta) => {
    setRespuestaSeleccionada(respuesta);
   
  };
  const handleGoBack = (e) => {
    e.preventDefault();
    navigate("/inicio");
  }
  if (loading) {
    return <h1>Cargando...</h1>
    
  }
  return (
    <div class="card">
      <div class="card mt-4 mb-2 ms-4">
        <div class="card-body">{pregunta}</div>
      </div>
      <div class="card mx-4 mb-4">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onClick={() => handleRespuestaSeleccionada(0)}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            {respuesta1}
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onClick={() => handleRespuestaSeleccionada(1)}
          />
          <label class="form-check-label" for="flexRadioDefault2">
            {respuesta2}
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onClick={() => handleRespuestaSeleccionada(2)}
          />
          <label class="form-check-label" for="flexRadioDefault2">
            {respuesta3}
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onClick={() => handleRespuestaSeleccionada(3)}
          />
          <label class="form-check-label" for="flexRadioDefault2">
            {respuesta4}
          </label>
        </div>
      </div>
      <div class="d-grid gap-2 d-md-block">
        <button
          class="btn btn-primary mx-4 mb-2"
          type="button"
          onClick={() => handleBotonContestar()}
        >
          Contestar
        </button>
        <button class="btn btn-primary mb-2" type="button" onClick={handleGoBack}>
          Retirarse
        </button>
      </div>
      <div class="card  mb-4 ms-4">
        <div class="card-body">{textoInformativo}</div>
      </div>
    </div>
  );
};
