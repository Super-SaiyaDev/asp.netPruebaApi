import React from "react";
import Sliderbar from "../components/sidebar";
import NavbarSystem from "../components/navbarSystem";
import Table from "./table";

const Users = () => {
  const columns = [
    "id",
    "username",
    "clave",
    "role",
    "activo",
    "created_at"
  ];

  const rows = [
    "id",
    "username",
    "clave",
    "role",
    "activo",
    "created_at"
  ];

  const api = {
    url: "http://localhost:5040/api/Usuarios",
  };

  return (
    <>
      <header>
        <nav>
          <NavbarSystem />
        </nav>
      </header>
      <section>
        <Sliderbar />
        <Table rows={rows} columns={columns} api={api}></Table>
      </section>
    </>
  );
};

export default Users;
