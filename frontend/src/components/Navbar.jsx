import React from "react";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          <strong>APRD</strong>
        </a>
        <div className="navbar-links">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/Home/Index">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Home/Cursos">
                Cursos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Home/CursosGratis">
                Recursos Gratis
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Home/Unete">
                Trabajar en APRD
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Home/PlanesPago" target="_blank">
                Planes y costos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Home/About">
                Más de nosotros
              </a>
            </li>
          </ul>
          <ul className="navbar-nav nav-icons">
            <li className="nav-item">
              <a href="#" className="nav-link" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" target="_blank">
                <i className="fab fa-github"></i> APRD GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
