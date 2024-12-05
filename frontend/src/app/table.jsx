import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "../components/dataTable";
import "../css/table.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaHistory } from "react-icons/fa";
import Modal from "react-modal";
import Create from "../components/create";

const Table = ({ columns, rows, api, input }) => {
  const [isInputFocused, setInputFocused] = useState(false);
  const [datos, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api.url);
        const data = response.data;
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [api.url]);

  return (
    <>
      <div className="datatable">
        <div className="container-datatable">
          <div className="header-table">
            <div className="title-table">
              <h1>Users Management</h1>
            </div>

            <div className="navigate-table">
              <div className="btn-navigate">
                <div className="btn-container-action">
                  <button onClick={() => setModalIsOpen(true)}>
                    <i className="btn-action btn-add">
                      <IoMdPersonAdd />
                    </i>
                    New User
                  </button>

                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                  >
                    <Create inputs={input}  api={api} setModalIsOpen={setModalIsOpen} />
                  </Modal>

                  <button>
                    <Link to="/history">
                      <i className="btn-action btn-history">
                        <FaHistory />
                      </i>
                      Historial
                    </Link>
                  </button>
                </div>
              </div>

              <div className="input-feild-s">
                <i className={`lbl-search ${isInputFocused ? "desactived" : ""}`}>
                  <IoSearchOutline />
                </i>
                <input
                  className="input-search"
                  type="text"
                  onFocus={() => setInputFocused(true)}
                  onBlur={() => setInputFocused(false)}
                />
              </div>
            </div>
          </div>

          <div className="content-Table scrollable-table">
            <div className="table-responsive">
              <DataTable data={datos} columns={columns} rows={rows} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;