import React from 'react';
import '../css/mapInfo.css';

const MainInfo = () => {
  return (
    <>
      {/* Section: Main info */}
      <section className="main-info">
        <div className="row">
          <div className="col-md-6 mb-4">
            <img src="https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg" className="img-fluid" alt="Main" />
          </div>
          <div className="col-md-6 mb-4">
            <h3 className="h3 mb-3">Aprende a como usar Bootstrap</h3>
            <p>
              Este material te enseña a como usar boostrap (
              <strong>Boostrap</strong> ) framework.
            </p>
            <p>Lee mas sobre el documento</p>
            <hr />
            <p>
              <strong>400+</strong> material UI elements,
              <strong>600+</strong> material icons,
              <strong>74</strong> CSS animations, SASS files, templates, tutorials and many more.
              <strong>Free for personal and commercial use.</strong>
            </p>
            <a href="https://mdbootstrap.com/docs/jquery/getting-started/download/" className="btn btn-indigo">
              Descargalo ya ¡¡
            </a>
            <a href="https://mdbootstrap.com/docs/jquery/components/" className="btn btn-indigo">
              Miralo gratis ¡¡¡
            </a>
          </div>
        </div>
      </section>
      <hr className="my-5" />
      {/* Section: Main features & Quick Start */}
      <section>
        <h3 className="h3 text-center mb-5">Sobre APRD</h3>
        <div className="row">
          <div className="col-lg-6 col-md-12 px-4">
            <div className="row">
              <div className="col-1 mr-3">
                <i className="icon">💻</i>
              </div>
              <div className="col-10">
                <h5 className="feature-title">Somos una Empresa que se enfoca en El aprendisaje de nuestros clientes</h5>
                <p>
                  <strong>400+</strong> material UI elements,
                  <strong>600+</strong> material icons,
                  <strong>74</strong> CSS animations, SASS files, templates, tutorials and many more.
                  <strong>Free for personal and commercial use.</strong>
                </p>
              </div>
            </div>
            <div className="spacer"></div>
            <div className="row">
              <div className="col-1 mr-3">
                <i className="icon">📚</i>
              </div>
              <div className="col-10">
                <h5 className="feature-title">Detalles de nuestra documentacion</h5>
                <p className="grey-text">
                  We give you detailed user-friendly documentation at your disposal. It will help you to implement your ideas
                  easily.
                </p>
              </div>
            </div>
            <div className="spacer"></div>
            <div className="row">
              <div className="col-1 mr-3">
                <i className="icon">🎓</i>
              </div>
              <div className="col-10">
                <h5 className="feature-title">Lotes de tutoriales</h5>
                <p className="grey-text">
                  We care about the development of our users. We have prepared numerous tutorials, which allow you to learn
                  how to use MDB as well as other technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <p className="h5 text-center mb-4">Mira los siguientes 5 minutos de nuestros cursos</p>
            <div className="embed-responsive">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/cXTThxoywNQ" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-5" />
      {/* Section: Not enough */}
      <section>
        <h2 className="my-5 h3 text-center">Ventajas de Elejir Nuestros cursos</h2>
        <div className="row features-small mb-5 mt-3">
          <div className="col-md-4">
            <div className="row">
              <div className="col-2">
                <i className="icon">✔️</i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">Inicia sesion</h6>
                <p className="grey-text">Y descarga</p>
                <div className="spacer"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <i className="icon">✔️</i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">400+ UI elements</h6>
                <p className="grey-text">
                  Un gran coleccion de flexibles componentes que te permitan desarrollar cualquier proyecto de forma gratuita.
                </p>
                <div className="spacer"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <i className="icon">✔️</i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">600+ icons</h6>
                <p className="grey-text">Hundreds of useful, scalable, vector icons at your disposal.</p>
                <div className="spacer"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <i className="icon">✔️</i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">Totalmente util para garantizar el proceso de aprendisaje</h6>
                <p className="grey-text">
                  <strong>400+</strong> material UI elements,
                  <strong>600+</strong> material icons,
                  <strong>74</strong> CSS animations, SASS files, templates, tutorials and many more.
                  <strong>Free for personal and commercial use.</strong>
                </p>
                <div className="spacer"></div>
              </div>
            </div>
          </div>
          <div className="col-md-4 flex-center">
            <img src="https://mdbootstrap.com/img/Others/screens.png" alt="MDB Magazine Template displayed on iPhone" className="img-fluid" />
          </div>
          <div className="col-md-4 mt-2">
            <div className="row">
              <div className="col-2">
                <i className="icon">✔️</i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">70+ CSS animaciones</h6>
                <p className="grey-text">Para facilitar el proceso de estilos de tu pagina</p>
                <div className="spacer"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <i className="icon">✔️</i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">Muchas plantillas útiles</h6>
                <p className="grey-text">¿Necesitas inspiración? Utilice una de nuestras plantillas predefinidas de forma gratuita.</p>
                <div className="spacer"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <i className="icon">✔️</i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">Fácil instalación</h6>
                <p className="grey-text">5 minutos, unos cuantos clics y... listo. Te sorprenderá lo fácil que es.</p>
                <div className="spacer"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <i className="icon">✔️</i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">Fácil de usar y personalizar</h6>
                <p className="grey-text">
                  Usar MDB es sencillo y agradable. La flexibilidad de los componentes le permite una profunda personalización. Vas a
                  ajustar fácilmente cada componente para adaptarlo a sus necesidades.
                </p>
                <div className="spacer"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="mb-5" />
      {/* Section: More */}
      <section>
        <h2 className="my-5 h3 text-center">Mas sobre nuestros cursos</h2>
        <div className="row features-small mt-5">
          <div className="col-xl-3 col-lg-6">
            <div className="row">
              <div className="col-2">
                <i className="icon">🔥</i>
              </div>
              <div className="col-10 mb-2 pl-3">
                <h5 className="feature-title font-bold mb-1">Compatibilidad entre navegadores</h5>
                <p className="grey-text mt-2">
                  Chrome, Firefox, IE, Safari, Opera, Microsoft Edge: MDB adora todos los navegadores; Todos los navegadores adoran APRD.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6">
            <div className="row">
              <div className="col-2">
                <i className="icon">⬆️</i>
              </div>
              <div className="col-10 mb-2">
                <h5 className="feature-title font-bold mb-1">Actualizaciones frecuentes</h5>
                <p className="grey-text mt-2">
                  APRD mejora cada mes. Nos encanta el proyecto y lo potenciamos todo lo posible.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6">
            <div className="row">
              <div className="col-2">
                <i className="icon">💬</i>
              </div>
              <div className="col-10 mb-2">
                <h5 className="feature-title font-bold mb-1">Comunidad activa</h5>
                <p className="grey-text mt-2">
                  Nuestra sociedad crece día a día. Visita nuestro foro y comprueba cómo es ser parte de nuestra familia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6">
            <div className="row">
              <div className="col-2">
                <i className="icon">💻</i>
              </div>
              <div className="col-10 mb-2">
                <h5 className="feature-title font-bold mb-1">jQuery 3.x</h5>
                <p className="grey-text mt-2">
                  APRD está integrado con el jQuery más nuevo. Por lo tanto, puede utilizar todas las funciones más recientes que vienen junto con
                  él.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row features-small mt-4">
          <div className="col-xl-3 col-lg-6">
            <div className="row">
              <div className="col-2">
                <i className="icon">📦</i>
              </div>
              <div className="col-10 mb-2">
                <h5 className="feature-title font-bold mb-1">Modularidad</h5>
                <p className="grey-text mt-2">
                  Material Design para Bootstrap viene con bibliotecas compiladas y listas para usar que incluyen todas las funciones como
                  así como módulos para CSS (archivos SASS) y JS.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6">
            <div className="row">
              <div className="col-2">
                <i className="icon">❓</i>
              </div>
              <div className="col-10 mb-2">
                <h5 className="feature-title font-bold mb-1">Technical support</h5>
                <p className="grey-text mt-2">
                  Nos preocupamos por la confiabilidad. Si tiene alguna pregunta, no dude en contactarnos.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6">
            <div className="row">
              <div className="col-2">
                <i className="icon">📐</i>
              </div>
              <div className="col-10 mb-2">
                <h5 className="feature-title font-bold mb-1">Caja flexible</h5>
                <p className="grey-text mt-2">APRD es totalmente compatible con Flex Box. Puedes olvidarte de los problemas de alineación.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6">
            <div className="row">
              <div className="col-2">
                <i className="icon">📄</i>
              </div>
              <div className="col-10 mb-2">
                <h5 className="feature-title font-bold mb-1"> Archivos SASS </h5>
                <p className="grey-text mt-2">Los archivos .scss organizados y bien documentados no pueden esperar hasta que los compiles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainInfo;