import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";

export const PremioAcumulado = () => {
  const premioAcumulado = useSelector(
    (store) => store.juegoReducer.premioAcumulado
  );
  return (
    <div class="card">
      <div class="row row-cols-5 mt-4 mb-4 ms-4">
        <div class="col">
          <div class="card-body">Premio Acumulado: </div>
        </div>
        <div class="col">
          <div class="card-body">{premioAcumulado}</div>
        </div>
      </div>
    </div>
  );
};
