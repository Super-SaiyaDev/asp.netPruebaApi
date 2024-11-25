import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nv-container">
        <div className="nv-container-title">
          <a className="nv-title" href="#">
            <h1>APRD</h1>
          </a>
        </div>

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
        </div>

        <div className="navbar-links">
          <ul className="navbar-nav nav-icons">
            <li className="nav-item">
              <a href="#" className="nav-link" target="_blank">
                <i className="fab fa-facebook-f"><FaFacebook/></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" target="_blank">
                <i className="fab fa-instagram"><FaInstagram/></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" target="_blank">
                <i className="fab fa-youtube"><FaYoutube/></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" target="_blank">
                <i className="fab fa-github"><FaGithub/></i> 
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
