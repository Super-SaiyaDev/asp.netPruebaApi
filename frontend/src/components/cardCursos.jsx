import React from "react";
import "../css/Cursos.css";

const CardCurso = ({ title, description, imageUrl, link }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div
          className="card-img-top"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} className="btn btn-primary">
            Ver Curso
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardCurso;
