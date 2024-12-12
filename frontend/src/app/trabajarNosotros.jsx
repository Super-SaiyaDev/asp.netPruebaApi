import React from "react";
import Navbar from "../components/navbar";
import "../css/CambioRol.css";  

const CambioRol = () => {
  return (
    <>

    <div id="navbar">
        <Navbar></Navbar>
    </div>
    <Navbar></Navbar>
      <div className="CambioRol-container">
        <div className="cambioRol-content">
          <h2 className="cambioRol-form-title">Convertirse en Usuario</h2>
          <div className="cambioRol-form">
            <form action="">
              <div className="cambioRol-input-group">
                <div className="cambioRol-input-field">
                  <input type="text" id="nombre" required />
                  <label htmlFor="nombre">Nombre</label>
                </div>
                <div className="cambioRol-input-field">
                  <input type="text" id="apellido" required />
                  <label htmlFor="apellido">Apellido</label>
                </div>
                <div className="cambioRol-input-field">
                  <input type="email" id="email" required />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="cambioRol-input-field">
                  <input type="text" id="telefono" required />
                  <label htmlFor="telefono">Teléfono</label>
                </div>
                <div className="cambioRol-input-field">
                  <input type="text" id="direccion" required />
                  <label htmlFor="direccion">Dirección</label>
                </div>
                <div className="cambioRol-input-field">
                  <input type="text" id="ciudad" required />
                  <label htmlFor="ciudad">Ciudad</label>
                </div>
                <div className="cambioRol-input-field">
                  <input type="text" id="estado" required />
                  <label htmlFor="estado">Estado</label>
                </div>
                <div className="cambioRol-input-field">
                  <input type="text" id="codigoPostal" required />
                  <label htmlFor="codigoPostal">Código Postal</label>
                </div>
              </div>
              <button type="submit">
                
                <a  style={{textDecoration: "none", color: "white"}} href="http://localhost:5173/"> enviar </a>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CambioRol;