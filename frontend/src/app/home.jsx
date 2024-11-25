import React from "react";
import MainInfo from "../components/homeInfo";
import Navbar from "../components/navbar";
import FullPageIntro from "../components/FullPageIntro";
import Footer from "../components/Footer";
import "../css/home.css";

const Home = () => {
  return (
    <>
      <div id="navbar">
        <Navbar />
      </div>
      <section>
        <header>
          <FullPageIntro />
        </header>
        <main>
          <div className="container">
            <MainInfo />
          </div>
        </main>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
