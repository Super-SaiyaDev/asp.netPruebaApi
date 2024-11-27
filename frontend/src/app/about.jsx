import React from "react";
import "../css/about.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>

      <section className="mt-5 wow fadeIn">
        <div className="row">
          <div className="col-md-12 mb-4">
            <h1>Sobre Nosotros</h1>
            <h3>Bienvenidos a Cursos APRD</h3>
            <p>
              En Cursos APRD, nos dedicamos a ofrecer una amplia variedad de
              cursos en línea para ayudarte a mejorar tus habilidades y avanzar
              en tu carrera. Nuestros cursos están diseñados por expertos en la
              industria y cubren una amplia gama de temas, desde tecnología
              hasta desarrollo personal.
            </p>
            <p>
              Nos enorgullece proporcionar contenido de alta calidad y una
              experiencia de aprendizaje interactiva. Únete a nosotros y
              comienza tu viaje de aprendizaje hoy mismo.
            </p>
            <a href="/cursos" className="btn btn-primary">
              Ver Cursos
            </a>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <h2>Nuestra Misión</h2>
            <img
              src="https://th.bing.com/th/id/OIP.MxjNmOQyhiROVrWRZmAp4gHaE8?rs=1&pid=ImgDetMaing"
              className="img-fluid"
              alt="Nuestra Misión"
            />
            <p>
              Nuestra misión es proporcionar educación accesible y de alta
              calidad a personas de todo el mundo. Creemos que la educación es
              la clave para un futuro mejor y trabajamos arduamente para hacer
              que nuestros cursos sean accesibles para todos.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <h2>Nuestros Valores</h2>
            <img
              src="https://th.bing.com/th/id/OIP.CpMcqzGyGHrgwW5bAIjRLgHaEb?rs=1&pid=ImgDetMain"
              className="img-fluid"
              alt="Nuestros Valores"
            />
            <p>
              En Cursos APRD, valoramos la integridad, la innovación y la
              excelencia. Nos esforzamos por mantener estos valores en todo lo
              que hacemos, desde la creación de contenido hasta el soporte al
              cliente.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <h2>Nuestro Equipo</h2>
            <img
              src="https://th.bing.com/th/id/R.086d6a964ec00a0e5ee1fca25c3e6b6e?rik=T%2fD7cxxDzhUkxg&riu=http%3a%2f%2fwww.sweetprocess.com%2fwp-content%2fuploads%2f2023%2f08%2fscribe-vs-sweetprocess-2.png&ehk=LFAbnez%2f6dvNvuUK55aEObo%2fl4eYN0HIK1f7KVNkQCI%3d&risl=&pid=ImgRaw&r=0"
              className="img-fluid"
              alt="Nuestro Equipo"
            />
            <p>
              Contamos con un equipo de profesionales dedicados y apasionados
              por la educación. Nuestro equipo trabaja incansablemente para
              asegurarse de que nuestros cursos sean de la más alta calidad y
              que nuestros estudiantes tengan la mejor experiencia de
              aprendizaje posible.
            </p>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default About;
