// frontend/src/components/Cursos.jsx
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import "../css/Cursos.css";

const Cursos = () => {
  const cursos = [
    {
      id: 1,
      title: "Curso de Machine Learning",
      description:
        "Explora el mundo del Machine Learning y aprende a construir modelos predictivos con Python.",
      imageUrl:
        "https://th.bing.com/th/id/R.e56ed2a047bcfdfbeefe8f9448cbe9ed?rik=BBPrDQsjDX%2ftFA&pid=ImgRaw&r=0",
      link: "https://mdbootstrap.com/learn/mdb-foundations/basics/introduction/",
    },
    // Añade más cursos aquí
  ];

  return (
    <>
      <Navbar />
      <section className="mt-5 wow fadeIn">
        <div className="row">
          <div className="col-md-12 mb-4">
            <h1>Nuestros Cursos</h1>
            <h3>Explora nuestros cursos disponibles</h3>
            <p>
              En Cursos APRD, ofrecemos una variedad de cursos diseñados para
              ayudarte a alcanzar tus metas profesionales y personales. A
              continuación, encontrarás algunos de nuestros cursos más
              populares.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          {cursos.map((curso) => (
            <div className="col-md-4 mb-4" key={curso.id}>
              <div className="card">
                <div
                  className="card-img-top"
                  style={{ backgroundImage: `url(${curso.imageUrl})` }}
                ></div>
                <div className="card-body">
                  <h5 className="card-title">{curso.title}</h5>
                  <p className="card-text">{curso.description}</p>
                  <a href={curso.link} className="btn btn-primary">
                    Ver Curso
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default Cursos;
