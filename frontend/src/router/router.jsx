import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginUser from "../app/login";
import Home from "../app/home";
import Cursos from "../app/cursos";


const Path = () => {
  return (
    <Router>
      <Routes>

        {/* //?  Rutas del login. */}
        <Route path="/login" element={<LoginUser />} />
        <Route path="/" element={<Home />}/>
        <Route path="/cursos" element={<Cursos/>}/>

        <Route
          path="*"
          element={
            <>
              <h1
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  minHeight: "90vh",
                }}
              >
                not found this path{" "}
              </h1>
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default Path;
