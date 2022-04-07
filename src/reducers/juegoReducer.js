import types from "../types/types";

const initialState = {
  id: "",
  nombreJugador: "",
  premioAcumulado: 0,
  categoria: {},
  pregunta: {},
  respuestas: [],
  pasoUltimoNivel: false,
  loading: false,
};
const juegoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.iniciarJuego:
      return {
        ...state,
        id: action.payload.id,
        nombreJugador: action.payload.nombreJugador,
        premioAcumulado: action.payload.premioAcumulado,
        categoria: action.payload.categoria,
        pregunta: action.payload.pregunta,
        respuestas: action.payload.respuestas,
        pasoUltimoNivel: action.payload.pasoUltimoNivel,
        loading:false
      };
    case types.responderPregunta:
      return {
        ...state,
        id: action.payload.id,
        nombreJugador: action.payload.nombreJugador,
        premioAcumulado: action.payload.premioAcumulado,
        categoria: action.payload.categoria,
        pregunta: action.payload.pregunta,
        respuestas: action.payload.respuestas,
        pasoUltimoNivel: action.payload.pasoUltimoNivel,
        loading:false
      };
    case types.finalizarJuego:
      return {};
    case types.cargandoRonda:
      return {
        ...state,
        id: "",
        nombreJugador: "",
        premioAcumulado: 0,
        categoria: {},
        pregunta: {},
        respuestas: [],
        pasoUltimoNivel: false,
        loading:action.payload,
      };
    default:
      return state;
  }
};

export default juegoReducer;
