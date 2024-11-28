import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nv-container">
        <div className="nv-container-title">
          <div className="nv-title">
            <h1>
              <FaBook /> APRD
            </h1>
          </div>
        </div>

        <div className="navbar-links">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Cursos">
                Cursos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/planesPago" target="_blank">
                Planes y costos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/unete">
                Trabajar en APRD
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                Más de nosotros
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-links">
          <ul className="navbar-nav nav-icons">
            <li className="nav-item">
              <a href="#" className="nav-link" target="_blank">
                <i className="fab fa-facebook-f">
                  <FaFacebook />
                </i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" target="_blank">
                <i className="fab fa-instagram">
                  <FaInstagram />
                </i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" target="_blank">
                <i className="fab fa-youtube">
                  <FaYoutube />
                </i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" target="_blank">
                <i className="fab fa-github">
                  <FaGithub />
                </i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" target="_blank">
                Inicia Sesion
                <i className="fab fa-github">
                  <FaUser />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
