// import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Template(props) {
  return (
    // LA TEMPLATE DEFINI L'ARCHITECTURE GOLBALE DE L'APP
    <div className="container-fluid ">
      <div className="row px-0 h-100 ">
        <div
          className="col-width-sidebar h-100 position-fixed z-3"
          id="sidebar-container-parent"
        >
          {props.sidebar}
        </div>
        <div className="d-flex flex-column col-width-navbar text-white">
          <div className="" id="navbar">
            {props.navbar}
          </div>
          <div className="position-relative " id="child">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
