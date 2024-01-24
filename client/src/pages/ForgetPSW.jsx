import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logoRT from "../assets/images/Link → SVG.png";
import { Link } from "react-router-dom";

export default function ForgetPSW() {
  return (
    <div className="auth">
      <div className="container">
        <div className="d-flex h-100 justify-content-center align-items-center ">
          <div
            id="forgotPsw"
            className="col-8 col-md-4  d-flex flex-column justify-content-center align-items-center"
          >
            <div className="d-flex justify-content-center mb-3">
              <img src={logoRT} alt="" />
              <h2 className="text-white ms-3">RED PRODUCT</h2>
            </div>
            <div className="col-12 justify-content-center form bg-white p-4">
              <h1 className="fs-5">Mot de passe oublié?</h1>
              <div class="mb-3 w-100 mx-auto">
                <p>
                  Entrez votre adresse e-mail ci-dessous et nous vous envoyons
                  des instructions sur la façon de modifier votre mot de passe.
                </p>
              </div>
              <div className="mb-3 w-100 mx-auto">
                <input
                  type="password"
                  className="form-control input rounded-0"
                  id="exampleInputPassword1"
                  placeholder="Mot de passe"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mx-auto">
                Envoyer
              </button>
            </div>
            <p className="text-center text-white">Mot de passe oublié</p>
            <p className="text-center text-white">
              Revenir à la{" "}
              <Link to="/" className="anotherLink">
                <span className="anotherAction">connection</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
