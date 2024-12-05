import React from "react";
import Sliderbar from "../components/sidebar";
import NavbarSystem from "../components/navbarSystem";
import Table from "./table";

const Users = () => {
  const columns = ["code", "username", "clave", "role", "activo", "created_at"];

  const rows = ["id", "username", "clave", "role", "activo", "created_at"];

  const inputs = [
    { name: "Username", type: "text", lblName: "Usuario" },
    { name: "Clave", type: "password", lblName: "Contraseña" },
    { name: "activo", type: "text", lblName: "activo" },
    { name: "created_at", type: "date", lblName: "created_at" },
    {
      name: "roleId",
      type: "select",
      options: [
        { value: 1, label: "Admin" },
        { value: 2, label: "User" },
      ],
      lblName: "Role",
    },
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
        <Table rows={rows} columns={columns} api={api} input={inputs}></Table>
      </section>
    </>
  );
};

export default Users;
