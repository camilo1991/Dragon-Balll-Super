import React from "react";
import { Button } from "semantic-ui-react";

export default function Details({ itemSeleccionado, setEstadoListado }) {
  const resetEstadoListado = () => {
    setEstadoListado(false);
  };
  return (
    <div className="detail-content">
      <img
        className="detail-image"
        src={itemSeleccionado.img2}
        alt={itemSeleccionado.name}
      />
      <div className="detail-info">
        <h2>{itemSeleccionado.name}</h2>
        <p id="detail-item">Descripción: </p>
        <p>{itemSeleccionado.desc}</p>

        <div className="div-button">
          <Button className="details-button" onClick={resetEstadoListado}>
            Regresar
          </Button>
        </div>
      </div>
    </div>
  );
}
