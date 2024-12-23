//! library
//? to use react hooks and axios api
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
//? to styles
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaBook } from "react-icons/fa";
//? to import components and styles
import UserInput from "../components/input";
import "../css/login.css";

//! Create the Login that is the component principal
const LoginUser = () => {
  //? creating the usestate
  const [values, setValue] = useState({
    user: "",
    clave: "",
  });

  //? creating the handler change the of UserInputs components
  const onChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...values, [name]: value });
  };

  //? using the usenavigate
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  //? this is the handleSumit of menssage.
  const handleSumit = (e) => {
    e.preventDefault(); //* to when the form be activated o send
    console.log(values); //* printing the value of the useState

    //! i'am send the value of the UserInputs
    axios
      .post("http://localhost:5040/api/Auth/login", values)
      .then((res) => {
        if (values.clave != "" && values.user != "") {
          console.log(res.data);
          if (res.data.success) {
            navigate("/");
          } else {
            navigate("/login");
          }
        } else {
          alert("rellene todos los campos");
        }
      })
      .catch((err) => {
        console.log(err);
        alert(errorMessage);
      }); // Mostrar alert con el mensaje de error);
  };

  return (
    <>
      {/*contenedor */}
      <div className="container">
        <div className="container-1">
          {/* form */}
          <form action="" onSubmit={handleSumit} className="frm">
            {/* container of the all content */}
            <div className="input-group">
              {/* Logo */}

              <div className="title-login">
                <div className="icon">
                  <FaBook />
                  <span className="logo-name">APRD</span>
                </div>

                <div className="t-login">
                  <h1>Inicia sesion</h1>
                </div>
              </div>

              {/* icons to login */}

              <div className="other-logins">
                <a className="google" href="#">
                  <span>
                    {" "}
                    <FcGoogle />
                  </span>
                  <span className="logo-span">Continue with Google</span>
                </a>
                <a className="instagram" href="#">
                  <FaInstagram />
                  <span className="logo-span">Continue with Instagram</span>
                </a>
                <a className="facebook" href="#">
                  <FaFacebook />
                  <span className="logo-span">Continue with Facebook</span>
                </a>
              </div>
              {/* line of the or */}

              <hr />
              <div className="or">
                <span>or</span>
              </div>

              {/* container the UserInputs */}

              <div className="input-feild">
                {/* importing the component UserInput */}
                <UserInput
                  onChange={onChange}
                  type={"text"}
                  lblName={"Username"}
                  name={"user"}
                  value={values.user}
                />
              </div>

              <div className="input-feild">
                {/* importing the component UserInput */}
                <UserInput
                  onChange={onChange}
                  type={"password"}
                  lblName={"Password"}
                  name={"clave"}
                  value={values.clave}
                />
              </div>

              {/* links router */}
              <div className="link-router">
                <span>
                  Don't you Have an
                  <Link className="link" to="/register">
                    account?
                  </Link>
                </span>
                <span>
                  Forgot
                  <Link className="link" to="/">
                    your password.
                  </Link>
                </span>
              </div>

              {/* btn for help to the handler submit of the form */}
              <div className="button">
                <button className="btn-lgn">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginUser;
