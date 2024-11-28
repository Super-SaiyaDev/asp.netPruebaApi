import React from "react";
import Picture2 from "../assets/image/picture2.svg";
import { FaUserGraduate } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import "../css/fullPageIntro.css";

const FullPageIntro = () => {
  return (
    <div className="hr-container">
      <div className="hr-content">
        <div className="row">
          <div className="col-md-6 mb-4 text-center text-md-left">
            <div className="hr-title">
              <h1 className="hr-title">Se parte de </h1>
              <h2 className="hr-title">nuestra comunidad</h2>
            </div>

            <div className="descripcion">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                amet eligendi tota Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Unde neque quaerat temporibus facilis dolore
                nihil nemo minima nisi in eaque culpa exercitationem non aut
                distinctio magnam libero, voluptatem nulla id. Perferendis
                facere cupiditate suscipit, cumque saepe fugit doloribus a,
                aperiam rem iste doloremque
              </span>
            </div>

            <div className="content-btn">
              <button href="#" className="hr-btn btn-indigo btn-lg">
                Comienza gratis ya
                <i className="fas fa-graduation-cap ml-2">
                  <FaUserGraduate />
                </i>
              </button>

              <button href="#" className="hr-btn btn-indigo btn-lg">
                Descarga nuestros recursos
                <i className="fas fa-graduation-cap ml-2">
                  <FaCloudDownloadAlt />
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pircture">
        <img src={Picture2} alt="" />
      </div>
    </div>
  );
};

export default FullPageIntro;
