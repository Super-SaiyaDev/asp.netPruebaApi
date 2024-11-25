import React from "react";
import Picture1 from "../assets/image/Scenes/Scenes08.svg";
import Picture2 from "../assets/image/Scenes/Scenes05.svg";
import { FaUserGraduate } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import "../css/fullPageIntro.css";

const FullPageIntro = () => {
  return (
    <div className="hr-container">
      <div className="hr-container-content">
        <div className="pircture">
          <div className="img-1">
            <img src={Picture2} alt="" />
          </div>
        </div>

        <div className="hr-content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-4 text-center text-md-left">
                <h1 className="hr-title">Se parte de nuestra comunidad</h1>

                <div className="content-btn">
                  <button href="#" className="hr-btn btn-indigo btn-lg">
                    Comienza gratis ya
                    <i className="fas fa-graduation-cap ml-2"><FaUserGraduate/></i>
                  </button>

                  <button href="#" className="hr-btn btn-indigo btn-lg">
                    Descarga nuestros recursos 
                    <i className="fas fa-graduation-cap ml-2"><FaCloudDownloadAlt/></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPageIntro;
