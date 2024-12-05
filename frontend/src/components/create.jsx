import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/create.css";

const Create = ({ setModalIsOpen, inputs, api }) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({});

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    axios
      .post(api.url, values)
      .then((data) => {
        console.log(data);
        navigate("/usuarios");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-frm-create">
      <form onSubmit={handlerSubmit}>
        <div className="title-create">
          <h1>crear usuario</h1>
        </div>
        <div className="input-groupt-cr">
          {inputs.map((input, index) => (
            <div className="input-feild-cr" key={index}>
              <label className="label-cr">{input.lblName}</label>
              {input.type === "select" ? (
                <select
                  className="input-cr"
                  name={input.name}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      [input.name]: parseInt(e.target.value, 10),
                    })
                  }
                  required
                  id={input.name}
                >
                  {input.options.map((options, index) => (
                    <option key={index} value={options.value}>
                      {options.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  className="input-cr"
                  id={input.name}
                  type={input.type}
                  name={input.name}
                  required
                  onChange={(e) =>
                    setValues({
                      ...values,
                      [input.name]: e.target.value,
                    })
                  }
                />
              )}
            </div>
          ))}
          <div className="btn-cr">
            <button className="btn-create" type="submit">
              crear
            </button>
            <button
              className="btn-redirect"
              type="button"
              onClick={() => setModalIsOpen(false)}
            >
              cancelar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
