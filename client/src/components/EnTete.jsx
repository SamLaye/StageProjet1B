import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import Input from "./formulaire/Input";
import FormLabel from "./formulaire/FormLabel";
import MyButton from "./MyButton";

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
              <form action="" className="row">
                <div className="col-6 mb-3 p-2">
                  <FormLabel
                    style="form-label text-secondary"
                    labelFor="exampleFormControlInput1"
                    labelName="Nom de l'hotel"
                  />
                  <Input
                    type="text"
                    style="form-control"
                    placeholder="name@example.com"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div className="col-6 mb-3 p-2">
                  <FormLabel
                    labelFor="exampleFormControlInput1"
                    style="form-label text-secondary"
                    labelName="Address"
                  />
                  <Input
                    type="text"
                    style="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Adress"
                  />
                </div>
                <div className="col-6 mb-3 p-2">
                  <FormLabel
                    labelFor="exampleFormControlInput1"
                    style="form-label text-secondary"
                    labelName="Email address"
                  />
                  <Input
                    type="email"
                    style="form-control text-secondary"
                    id="exampleFormControlInput1"
                    placeholder="name@example"
                  />
                </div>
                <div className="col-6 mb-3 p-2">
                  <FormLabel
                    labelFor="exampleFormControlInput1"
                    style="form-label text-secondary"
                    labelName="Numéro de téléphone"
                  />
                  <Input
                    type="email"
                    style="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example"
                  />
                </div>
                <div className="col-6 mb-3 p-2">
                  <FormLabel
                    labelFor="exampleFormControlInput1"
                    style="form-label text-secondary"
                    labelName="Prix par nuit"
                  />
                  <Input
                    type="email"
                    style="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example"
                  />
                </div>
                <div className="col-6 mb-3 p-2">
                  <FormLabel
                    labelFor="exampleFormControlInput1"
                    style="form-label text-secondary"
                    labelName="Devise"
                  />
                  <Input
                    type="email"
                    style="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@k,,k,k,k"
                  />
                </div>
                <div className="col-12 mb-3 p-2">
                  <FormLabel
                    labelFor="exampleFormControlInput1"
                    className="form-label text-secondary"
                    labelName="Ajouter une photo"
                  />
                  <Input
                    type="email"
                    style="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <MyButton
                type="button"
                style="btn btn-secondary"
                dataBsDismiss="modal"
                btnLabel="Close"
              />
              <MyButton type="button" style="btn btn-primary" btnLabel="Save" />
            </div>
          </div>
        </div>
      </div>
      {/* ______________________________________ */}
    </div>
  );
}

export default EnTete;
