import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { startCreateNewQuestion, startFetchCategoryIdByName } from "../actions/gameActions";
import useForm from "../hooks/useForm";

const initialState = {
  question: "",
  invalidAnswer1: "",
  invalidAnswer2: "",
  invalidAnswer3: "",
  correctAnswer: "",
  category: "",
};

const Configuracion = () => {
  const navigate = useNavigate();

  const [formValues, handleInputChange, resetForm] = useForm(initialState);
  const {
    question,
    invalidAnswer1,
    invalidAnswer2,
    invalidAnswer3,
    correctAnswer,
    category
  } = formValues;
  const handleCreateNewQuestion = (e) => {
    e.preventDefault();
    startFetchCategoryIdByName(category).then(categoryId=>{
      const newQuestion={
        pregunta:{
          nombrePregunta:question,
          idCategoria:categoryId
        },
        respuestas:[
          {
            nombreRespuesta:invalidAnswer1,
            esRespuestaCorrecta:false
          },{
            nombreRespuesta:invalidAnswer2,
            esRespuestaCorrecta:false
          },{
            nombreRespuesta:invalidAnswer3,
            esRespuestaCorrecta:false
          },{
            nombreRespuesta:correctAnswer,
            esRespuestaCorrecta:true
          }
        ]
  
      }
      startCreateNewQuestion(newQuestion).then(isSussesfull=>{
        Swal.fire({
          icon:"success",
          text:"Pregunta Creada Exitosamente",
          timer:5000,
          showCancelButton:false
        })
      })

    })
  };

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate("/inicio");
  }
 
  return (
    <form onSubmit={handleCreateNewQuestion}>
      <button onClick={handleGoBack} className="form-go-back__btn">Atrás</button>
      <div className="question-container">
        <h1 className="form__main-title">Ingresa La Pregunta</h1>
        <input
          type="text"
          name="question"
          id="question"
          value={question}
          onChange={handleInputChange}
          className="form__input form__question-input"
        />
      </div>

        
      <div className="inputs__container">
      <h3 className="form-section__main-title">Categoria</h3>
        <div className="radio-inputs__container">
          <div className="input-radio__container">
            <label htmlFor="Geografia">Geografia</label>
            <input
              type="radio"
              name="category"
              id="Geografia"
              value="Geografia"
              onChange={handleInputChange}
              />
          </div>

          <div className="input-radio__container">
            <label htmlFor="Deportes">Deportes</label>
            <input
              type="radio"
              name="category"
              id="Deportes"
              value="Deportes"
              onChange={handleInputChange}
            />
          </div>

          <div className="input-radio__container">
            <label htmlFor="Ciencia y Naturaleza">Ciencia y Naturaleza</label>
            <input
              type="radio"
              name="category"
              id="Ciencia_y_Naturaleza"
              value="Ciencia y Naturaleza"
              onChange={handleInputChange}
            />
          </div>

          <div className="input-radio__container">
            <label htmlFor="Arte y Literatura">Arte y Literatura</label>
            <input
              type="radio"
              name="category"
              id="Arte_y_Literatura"
              value="Arte y Literatura"
              onChange={handleInputChange}
            />
          </div>

          <div className="input-radio__container">

            <label htmlFor="Historia">Historia</label>
            <input
              type="radio"
              name="category"
              id="Historia"
              value="Historia"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="answer-inputs__container">
        <input
          type="text"
          name="invalidAnswer1"
          id=""
          value={invalidAnswer1}
          onChange={handleInputChange}
          placeholder="Respuesta inválida"
          className="form__question-input"
        />
        <input
          type="text"
          name="invalidAnswer2"
          id=""
          value={invalidAnswer2}
          onChange={handleInputChange}
          placeholder="Respuesta inválida"
          className="form__question-input"
        />
        <input
          type="text"
          name="invalidAnswer3"
          id=""
          value={invalidAnswer3}
          onChange={handleInputChange}
          placeholder="Respuesta inválida"
          className="form__question-input"
        />
        <input
          type="text"
          name="correctAnswer"
          id=""
          value={correctAnswer}
          onChange={handleInputChange}
          placeholder="Respuesta correcta"
          className="form__question-input"
        />
        <input type="submit" value="Crear Pregunta" className="form__question-input form__submit-btn" />
      </div>
    </form>
  );
};

export default Configuracion;
