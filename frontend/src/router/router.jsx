import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginUser from "../app/login";
import Home from "../app/home";
import Cursos from "../app/cursos";
import About from "../app/about";
import PlanesPago from "../components/planesPago";
import Principal from "../app/dashboard";
import Table from "../app/table";
import Users from "../app/usuarios";

const Path = () => {
  return (
    <Router>
      <Routes>
        {/* //?  Rutas del login. */}
        <Route path="/login" element={<LoginUser />} />

        {/* //?  Rutas del Elearning . */}
        <Route path="/auth/client" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/about" element={<About />} />
        <Route path="/planesPago" element={<PlanesPago />} />

        {/* //?  Rutas del sistema. */}
        <Route path="/auth/user" element={<LoginUser />} />
        <Route path="/home" element={<Principal />}></Route>
        <Route path="/table" element={<Table />}></Route>
        <Route path="/usuarios" element={<Users />}></Route>

        {/* //?  Rutas de la pagina no encontrada. */}
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
