import React  from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaInicio from "../pages/PaginaInicio";
import PaginaJuego from "../pages/PaginaJuego";
import Configuracion from "../pages/Configuracion";

const AppRouter = () => {
 
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/inicio" element={<PaginaInicio/>} />
      <Route path="/juego" element={<PaginaJuego/>} />
      <Route path="/creacion-pregunta" element={<Configuracion/>} />
      

      {/* Default route */}
      <Route path="/*" element={<PaginaInicio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
