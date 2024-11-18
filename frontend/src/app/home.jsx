import React from "react";
import MainInfo from "../components/homeInfo";
import Navbar from "../components/navbar";
import FullPageIntro from "../components/FullPageIntro";
import Footer from "../components/Footer";
import "../css/home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FullPageIntro />
      <main>
        <div className="container">
          <MainInfo />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
