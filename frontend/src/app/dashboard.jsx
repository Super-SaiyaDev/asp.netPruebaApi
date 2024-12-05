import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sliderbar from "../components/sidebar";
import NavbarSystem from "../components/navbarSystem";
import HeroSystem from "../components/hero";
import "../css/principal.css";
const Principal = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkCookie = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/user/check"
        );
        if (response.data === "Cookie exists") {
          console.log("Cookie exists");
        } else if (esponse.data === "Cookie does not exist") {
          console.log("Cookie does not exist");
          navigate("/login");
        }
      } catch (error) {
        console.error("Failed to check cookie", error);
      }
    };

    checkCookie();
  }, []);

  return (
    <>
      <div className="container-dashboard">
        <header className="container-dashboard">
          <nav cassName="container-dashboard">
            <NavbarSystem />
          </nav>
        </header >
        <section className="container-dashboard">
          <Sliderbar />
          <HeroSystem />
        </section>
      </div>
    </>
  );
};

export default Principal;
