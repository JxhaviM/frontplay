import React  from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaInicio from "../pages/PaginaInicio";
import PaginaJuego from "../pages/PaginaJuego";
import Configuracion from "../pages/Configuracion";
import PaginaHistorico from "../pages/PaginaHistorico";

const AppRouter = () => {
 
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/inicio" element={<PaginaInicio/>} />
      <Route path="/juego" element={<PaginaJuego/>} />
      <Route path="/creacion-pregunta" element={<Configuracion/>} />
      <Route path="/datos-historico" element={<PaginaHistorico/>} />
      

      {/* Default route */}
      <Route path="/*" element={<PaginaInicio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
