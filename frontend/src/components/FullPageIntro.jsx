import React from "react";
import "../css/fullPageIntro.css";

const FullPageIntro = () => {
  return (
    <div className="full-page-intro">
      <div className="mask">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4 text-center text-md-left">
              <h1 className="display-4 font-weight-bold">
                Se parte de nuestra comunidad
              </h1>
              <hr className="hr-light" />
              <p>
                <strong>
                  Te ofrecemos los mejores cursos y ofertas para aprender a
                  programar. Recuerda que nadie enseña mejor que APRD.
                </strong>
              </p>
              <p className="mb-4 d-none d-md-block">
                <strong>
                  El tutorial más completo para aprender a programar. Amado por
                  más de 500.000 usuarios. Versiones en video y escritas
                  disponibles. Crea tu propio sitio web increíble con tus
                  conocimientos.
                </strong>
              </p>
              <a href="#" className="btn btn-indigo btn-lg">
                Comienza gratis ya !!{" "}
                <i className="fas fa-graduation-cap ml-2"></i>
              </a>
            </div>
            {/* <div className="col-md-6 col-xl-5 mb-4">
              <div className="card">
                <div className="card-body">
                  <form name="">
                    <h3 className="dark-grey-text text-center">
                      <strong>Regístrate aquí</strong>
                    </h3>
                    <hr />
                    <div className="md-form">
                      <i className="fas fa-user prefix grey-text"></i>
                      <input type="email" id="form3" className="form-control" />
                      <label htmlFor="form3">Correo electrónico</label>
                    </div>
                    <div className="md-form">
                      <i className="fas fa-envelope prefix grey-text"></i>
                      <input type="text" id="form2" className="form-control" />
                      <label htmlFor="form2">Usuario</label>
                    </div>
                    <div className="md-form">
                      <i className="fas fa-pencil-alt prefix grey-text"></i>
                      <input
                        type="password"
                        id="form8"
                        className="form-control"
                      />
                      <label htmlFor="form8">Contraseña</label>
                    </div>
                    <div className="text-center">
                      <button className="btn btn-indigo">Enviar</button>
                      <hr />
                      <fieldset className="form-check">
                        <a href="#" className="login-lnk" target="_blank">
                          ¿Ya tienes una cuenta creada? <br /> Inicia sesión
                          aquí.
                        </a>
                      </fieldset>
                    </div>
                  </form>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPageIntro;