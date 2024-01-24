import React from "react";
import user from "../assets/images/user.png";

function Stat() {
  return (
    <div className="col-12 col-md-6 col-lg-4 p-2">
      <div className="bg-white bg-danger d-flex rounded p-2">
        <img
          src={user}
          alt=""
          className="d-flex stat-img align-self-center me-3"
        />
        <div className="stat">
          <h3 className="statTitle">
            {" "}
            <span>125</span> Formulaires
          </h3>
          <p className="text-secondary statDesc">Je ne sais pas quoi mettre</p>
        </div>
      </div>
    </div>
  );
}

export default Stat;
