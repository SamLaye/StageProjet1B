import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import user from "../assets/images/user.png";
import { MdOutlineLogout } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import Input from "../components/formulaire/Input";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const démalCi = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("hotelAppUser");
    message.success("Baax na, niou fanaan diam!");
    démalCi("/");
  };

  return (
    <div
      className="row justify-content-between position-fixed z-2 py-2"
      id="navbar"
    >
      {/* LA BARRE DE RECHERCHE _________________________start___ */}
      <div className="col my-auto">
        <h2 className="text-dark">Dashoard</h2>
      </div>
      {/* _______________________________________________end_____ */}

      {/* L'IMAGE DU PROFIL _____________________________start___ */}
      <div className="col my-auto d-flex justify-content-end">
        <div
          className="input-group border rounded-pill overflow-hidden d-flex me-2"
          id="navbar-input-container"
        >
          <button className="btn me-2" type="button">
            <i class="bi bi-search my-auto me-2"></i>
          </button>
          <Input
            type="text"
            style="border-0 my-auto"
            autoFocus
            placeholder="Rechercher..."
            id="navbar-input"
          />
        </div>
        <IoIosNotifications className="text-dark d-flex align-self-center fs-3" />
        <div className="">
          <img src={user} className="my-auto mx-2 " alt="profil" id="homeIMG" />
          <span></span>
        </div>
        <MdOutlineLogout
          className="text-dark d-flex align-self-center fs-3"
          onClick={handleLogout}
          id="logoutBtn"
        />
      </div>
      {/* _______________________________________________end_____ */}
    </div>
  );
};

export default Navbar;
