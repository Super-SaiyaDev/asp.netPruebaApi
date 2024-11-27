import React from "react";
import CardCurso from "../components/cardCursos";
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

    {
      id: 1,
      title: "Curso de Machine Learning",
      description:
        "Explora el mundo del Machine Learning y aprende a construir modelos predictivos con Python.",
      imageUrl:
        "https://th.bing.com/th/id/R.e56ed2a047bcfdfbeefe8f9448cbe9ed?rik=BBPrDQsjDX%2ftFA&pid=ImgRaw&r=0",
      link: "https://mdbootstrap.com/learn/mdb-foundations/basics/introduction/",
    },

    {
      id: 1,
      title: "Curso de Machine Learning",
      description:
        "Explora el mundo del Machine Learning y aprende a construir modelos predictivos con Python.",
      imageUrl:
        "https://th.bing.com/th/id/R.e56ed2a047bcfdfbeefe8f9448cbe9ed?rik=BBPrDQsjDX%2ftFA&pid=ImgRaw&r=0",
      link: "https://mdbootstrap.com/learn/mdb-foundations/basics/introduction/",
    },

    {
      id: 1,
      title: "Curso de Machine Learning",
      description:
        "Explora el mundo del Machine Learning y aprende a construir modelos predictivos con Python.",
      imageUrl:
        "https://th.bing.com/th/id/R.e56ed2a047bcfdfbeefe8f9448cbe9ed?rik=BBPrDQsjDX%2ftFA&pid=ImgRaw&r=0",
      link: "https://mdbootstrap.com/learn/mdb-foundations/basics/introduction/",
    },

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

      <div className="mt-5 wow fadeIn">
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
            <CardCurso
              key={curso.id}
              title={curso.title}
              description={curso.description}
              imageUrl={curso.imageUrl}
              link={curso.link}
            />
          ))}
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Cursos;
