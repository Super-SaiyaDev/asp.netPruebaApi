import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="page-footer text-center font-small mt-4">
      <div className="pt-4">
        <a
          className="btn btn-outline-white"
          href="#"
          target="_blank"
          role="button"
        >
          Descarga nuestros cursos <i className="fas fa-download ml-2"></i>
        </a>
        <a className="btn btn-outline-white" href="#">
          Comienza ya!! <i className="fas fa-graduation-cap ml-2"></i>
        </a>
      </div>
      <hr className="my-4" />
      <div className="pb-4">
        <a href="#" target="_blank">
          <i className="fab fa-facebook-f mr-3"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fab fa-twitter mr-3"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fab fa-youtube mr-3"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fab fa-google-plus-g mr-3"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fab fa-github mr-3"></i>
        </a>
      </div>
      <div className="footer-copyright py-3">
        © 2019 Copyright:{" "}
        <a href="#" target="_blank">
          {" "}
          APRD.com{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
