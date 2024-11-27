// frontend/src/components/PlanesPago.jsx
import React from "react";
import "../css/PlanesPago.css";

const PlanesPago = () => {
  return (
    <section className="my-5">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "30vh",
        }}
      >
        <h2 className="h3 text-center mb-5">Planes de Pago</h2>
      </div>

      <div className="row wow fadeIn">
        <div className="col-lg-4 col-md-6 mb-4">
          <div
            className="card h-100 shadow-lg custom-card"
            style={{ height: "220px" }}
          >
            <div className="card-body">
              <h5 className="card-title">Plan Básico</h5>
              <h6 className="card-price">$9.99/mes</h6>
              <hr />
              <ul className="fa-ul">
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Característica 1
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Característica 2
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Característica 3
                </li>
              </ul>
              <a href="#" className="btn btn-primary btn-block">
                Seleccionar
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div
            className="card h-100 shadow-lg custom-card"
            style={{ height: "240px" }}
          >
            <div className="card-body">
              <h5 className="card-title">Plan Estándar</h5>
              <h6 className="card-price">$19.99/mes</h6>
              <hr />
              <ul className="fa-ul">
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Característica 1
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Característica 2
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Característica 3
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Característica 4
                </li>
              </ul>
              <a href="#" className="btn btn-primary btn-block">
                Seleccionar
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div
            className="card h-100 shadow-lg custom-card"
            style={{ height: "260px" }}
          >
            <div className="card-body">
              <h5 className="card-title">Plan Premium</h5>
              <h6 className="card-price">$29.99/mes</h6>
              <hr />
              <ul className="fa-ul">
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Característica 1
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Característica 2
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Característica 3
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Característica 4
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Característica 5
                </li>
              </ul>
              <a href="#" className="btn btn-primary btn-block">
                Seleccionar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanesPago;
