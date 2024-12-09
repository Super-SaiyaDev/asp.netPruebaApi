import React from "react";
import "../css/about.css";
import img2 from "../assets/image/picture3.svg";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div id="navbar">
        <Navbar />
      </div>

      <div className="about-container">
        <div className="about-content">
          <div className="about-container-card about-card1">
            <div className="about-card-img">
              <img src={img2} alt="" />
            </div>

            <div className="about-content-card ">
              <div className="about-card-title">
                <h1>Sobre Nosotros</h1>
                <h3>Bienvenidos a Cursos APRD</h3>
              </div>

              <div className="about-card-content">
                <p>
                  En Cursos APRD, nos dedicamos a ofrecer una amplia variedad de
                  cursos en línea para ayudarte a mejorar tus habilidades y
                  avanzar en tu carrera. Nuestros cursos están diseñados por
                  expertos en la industria y cubren una amplia gama de temas,
                  desde tecnología hasta desarrollo personal.
                </p>
                <p>
                  Nos enorgullece proporcionar contenido de alta calidad y una
                  experiencia de aprendizaje interactiva. Únete a nosotros y
                  comienza tu viaje de aprendizaje hoy mismo.
                </p>
              </div>

              <div className="about-btn btn-cursos">
                <a href="/cursos" className="about-btn about1">
                  Ver Cursos
                </a>
              </div>
            </div>
          </div>

          <div className="card-container-categorias">
            <div className="card-content-title">
              <h1 className="h1-content-tilte">logros</h1>
            </div>
            <div className="categoria-card-content">
              <div className="categoriac-card">
                <div className="categoira-title">
                  <h1 className="h1-categoria">Categorias</h1>
                </div>
                <div className="content-card-category">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur unde autem, ipsam pariatur in dolores, quidem error
                    labore perferendis impedit soluta exercitationem dignissimos
                    itaque optio est vel, dolorem consectetur nam. Eum labore,
                    harum quasi quo inventore numquam rerum ducimus alias minima
                    iusto, iste provident quas deserunt, et necessitatibus eius
                    laudantium ea soluta! Dolore repellendus inventore modi
                  </p>
                </div>

                <div className="categoria-card-btn">
                  <a href="*">Ver Categorias</a>
                </div>
              </div>

              <div className="categoriac-card">
                <div className="categoira-title">
                  <h1 className="h1-categoria">Categorias</h1>
                </div>
                <div className="content-card-category">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur unde autem, ipsam pariatur in dolores, quidem error
                    labore perferendis impedit soluta exercitationem dignissimos
                    itaque optio est vel, dolorem consectetur nam. Eum labore,
                    harum quasi quo inventore numquam rerum ducimus alias minima
                    iusto, iste provident quas deserunt, et necessitatibus eius
                    laudantium ea soluta! Dolore repellendus inventore modi
                  </p>
                </div>

                <div className="categoria-card-btn">
                  <a href="*">Ver Categorias</a>
                </div>
              </div>

              <div className="categoriac-card">
                <div className="categoira-title">
                  <h1 className="h1-categoria">Categorias</h1>
                </div>
                <div className="content-card-category">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur unde autem, ipsam pariatur in dolores, quidem error
                    labore perferendis impedit soluta exercitationem dignissimos
                    itaque optio est vel, dolorem consectetur nam. Eum labore,
                    harum quasi quo inventore numquam rerum ducimus alias minima
                    iusto, iste provident quas deserunt, et necessitatibus eius
                    laudantium ea soluta! Dolore repellendus inventore modi
                  </p>
                </div>

                <div className="categoria-card-btn">
                  <a href="*">Ver Categorias</a>
                </div>
              </div>
            </div>
          </div>

          <div className="about-container-card about-card2">
            <div className="about-content-card ">
              <div className="about-card-title">
                <h1>Sobre Nosotros</h1>
                <h3>Bienvenidos a Cursos APRD</h3>
              </div>

              <div className="about card-content">
                <p>
                  En Cursos APRD, nos dedicamos a ofrecer una amplia variedad de
                  cursos en línea para ayudarte a mejorar tus habilidades y
                  avanzar en tu carrera. Nuestros cursos están diseñados por
                  expertos en la industria y cubren una amplia gama de temas,
                  desde tecnología hasta desarrollo personal.
                </p>
                <p>
                  Nos enorgullece proporcionar contenido de alta calidad y una
                  experiencia de aprendizaje interactiva. Únete a nosotros y
                  comienza tu viaje de aprendizaje hoy mismo.
                </p>
              </div>
              <div className="btn-cursos">
                <a href="/cursos" className="about-btn about2">
                  Ver Cursos
                </a>
              </div>
            </div>

            <div className="about-card-img">
              <img src={img2} alt="" />
            </div>
          </div>

          <div className="about-container-card about-card3">
            <div className="about-card-img">
              <img src={img2} alt="" />
            </div>

            <div className="about-content-card ">
              <div className="about-card-title">
                <h1>Sobre Nosotros</h1>
                <h3>Bienvenidos a Cursos APRD</h3>
              </div>

              <div className="about card-content">
                <p>
                  En Cursos APRD, nos dedicamos a ofrecer una amplia variedad de
                  cursos en línea para ayudarte a mejorar tus habilidades y
                  avanzar en tu carrera. Nuestros cursos están diseñados por
                  expertos en la industria y cubren una amplia gama de temas,
                  desde tecnología hasta desarrollo personal.
                </p>
                <p>
                  Nos enorgullece proporcionar contenido de alta calidad y una
                  experiencia de aprendizaje interactiva. Únete a nosotros y
                  comienza tu viaje de aprendizaje hoy mismo.
                </p>
              </div>
              <div className="about-btn btn-cursos">
                <a href="/cursos" className="about-btn about3">
                  Ver Cursos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default About;
