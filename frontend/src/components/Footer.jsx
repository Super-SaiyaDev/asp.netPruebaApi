import React from "react";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { SlGraduation } from "react-icons/sl";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="f-btns">
        <div className="btn">
          <a className="f-link" href="#" target="_blank" role="button">
            Descarga nuestros cursos{" "}
            <i className="icon fas fa-download">
              <IoIosCloudDownload />
            </i>
          </a>
        </div>

        <div className="btn">
          <a className="f-link" href="#">
            Comienza ya!!{" "}
            <i className="icon fas fa-graduation-cap">
              <SlGraduation />
            </i>
          </a>
        </div>
      </div>

      <div className="f-social-icon">
        <a href="#" target="_blank">
          <i className="icon-f fab fa-facebook-f">
            <FaFacebook />
          </i>
        </a>
        <a href="#" target="_blank">
          <i className="icon-f fab fa-youtube">
            <FaYoutube />
          </i>
        </a>
        <a href="#" target="_blank">
          <i className="icon-f fab fa-instagram-plus-g">
            <LuInstagram />
          </i>
        </a>
        <a href="#" target="_blank">
          <i className="icon-f fab fa-github">
            <FaGithub />
          </i>
        </a>
      </div>

      <div className="f-copyright">
       <span> © 2019 Copyright:{" "}</span>
        <a href="#" target="_blank">
          {" "}
          APRD
        </a>
      </div>
    </div>
  );
};

export default Footer;
