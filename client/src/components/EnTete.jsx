import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import MyButton from "./MyButton";
import ModalForm from "./MondalForm";

function EnTete() {
  return (
    <div className="d-flex justify-content-between bg-white p-2 entete">
      <div>
        <h1>Bievenue sur RED Product</h1>
        <p className="text-body-secondary">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </div>
      {/* ___________________________________  */}
      {/* <!-- Button trigger modal --> */}
      <div className="d-flex align-self-center">
        <MyButton
          type="button"
          style="btn btn-primary"
          dataBsToggle="modal"
          dataBsTarget="#staticBackdrop"
          btnLabel="Launch modal"
        />
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title text-uppercase fs-5"
                id="staticBackdropLabel"
              >
                <FaArrowLeft />
                <span className="ms-2">créer un nouveau hotel</span>
              </h1>
              <MyButton
                type="button"
                style="btn-close"
                dataBsDismiss="modal"
                ariaLabel="Close"
              />
            </div>
            <div class="modal-body">
              <ModalForm />
            </div>
          </div>
        </div>
      </div>
      {/* ______________________________________ */}
    </div>
  );
}

export default EnTete;
