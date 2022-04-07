import types from "./../types/types";
import React from "react";
import { urlBase } from "../environments/environment";

const iniciarRonda = (rondaInicial) => ({
  type: types.iniciarJuego,
  payload: rondaInicial,
});
const responderPregunta = (nuevaRonda) => ({
  type: types.responderPregunta,
  payload: nuevaRonda,
});

const cargandoRonda = () => ({
  type: types.cargandoRonda,
  payload: true,
});

const createRonda = (playerName) => {
  return async (dispatch) => {
    try {
      dispatch(cargandoRonda());
      const response = await fetch(
        `${urlBase}/ronda/crear-ronda/${playerName}`,
        { method: "POST" }
      );
      if (response.ok) {
        const rondaInicial = await response.json();
        dispatch(iniciarRonda(rondaInicial));
      }
      throw await response.json();
    } catch (error) {}
  };
};
export const subirNivel = (idRonda) => {
  return async (dispatch) => {
    try {
      dispatch(cargandoRonda());
      const response = await fetch(`${urlBase}/ronda/subir-nivel/${idRonda}`, {
        method: "PUT",
      });
      if (response.ok) {
        const nuevaRonda = await response.json();
        console.table(nuevaRonda);
        dispatch(responderPregunta(nuevaRonda));
      }
      throw await response.json();
    } catch (error) {}
  };
};

export const startFetchCategoryIdByName = async (category) => {
  try {
    const response = await fetch(`${urlBase}/categoria/consultar/${category}`);
    if (response.ok) {
      return await response.json();
    }
    throw await response.json();
  } catch (error) {}
};

export const startCreateNewQuestion = async (question) => {
  try {
      alert(JSON.stringify(question))
    const response = await fetch(`${urlBase}/pregunta/crear`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(question),
    });
    if (response.ok) {
      return await response.json();
    }
    throw await response.json();
  } catch (error) {}
};

export default createRonda;
