import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logoRT from "../assets/images/Link → SVG.png";
import { message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import AuthServices from "../services/authServices";
import { getErrorMessage } from "../utils/GetError";

export default function Inscription() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = {
        firstName,
        lastName,
        userName,
        password,
      };
      const response = await AuthServices.registerUser(data);
      console.log(response.data);
      // message.success("Macha'Allah, dallal ak diam");
      message.success("Register success");
      navigate("/connexion");
    } catch (error) {
      console.log(error);
      message.error(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth">
      <div className="container">
        <div className="d-flex h-100 justify-content-center align-items-center ">
          <div
            id="inscription"
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div className="d-flex justify-content-center mb-3">
              <img src={logoRT} alt="" />
              <h2 className="text-white ms-3">RED PRODUCT</h2>
            </div>

            <form className="col-12 justify-content-center form bg-white p-4">
              <h1 className="fs-5">Inscrivez-vous en tant que Admin</h1>
              <div class="mb-3 w-100 mx-auto">
                <input
                  type="text"
                  className="form-control input rounded-0"
                  id="exampleInputEmail1"
                  placeholder="Firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div class="mb-3 w-100 mx-auto">
                <input
                  type="text"
                  className="form-control input rounded-0"
                  id="exampleInputEmail1"
                  placeholder="Lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div class="mb-3 w-100 mx-auto">
                <input
                  type="text"
                  className="form-control input rounded-0"
                  id="exampleInputEmail1"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="mb-3 w-100 mx-auto">
                <input
                  type="password"
                  className="form-control input rounded-0"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input rounded-0"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Accepter les termes et la politique
                </label>
              </div>
              <button
                loading={loading}
                disabled={!userName || !password || !firstName || !lastName}
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary w-100 mx-auto"
              >
                S'inscrire
              </button>
            </form>
            <p className="text-center text-white mt-3">
              Vous avez un compte?{" "}
              <Link to="/" className="anotherLink">
                <span className="anotherAction">Se connecter</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
