import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { message } from "antd";
import Input from "./formulaire/Input";
import FormLabel from "./formulaire/FormLabel";
import MyButton from "./MyButton";
import { getErrorMessage } from "../utils/GetError";
import HotelServices from "../services/hotelServices";

function EnTete() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [adress, setAdress] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        title,
        description,
        adress,
        price,
      };
      const response = await HotelServices.createHotel(data);
      message.success("Hotel add with success!");
      console.log(response.data);
    } catch (error) {
      console.log(error);
      message.error(getErrorMessage(error));
    }
  };

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
              <form
                action="/upload"
                className="row"
                enctype="multipart/form-data"
              >
                {/* ___________________________________  */}
                <div className="col-6 mb-3 p-2">
                  <FormLabel
                    style="form-label text-secondary"
                    labelFor="hotelTitle"
                    labelName="Nom de l'hotel"
                  />
                  <Input
                    type="text"
                    style="form-control"
                    placeholder="hotel name"
                    id="hotelTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required="required"
                  />
                </div>
                <div className="col-6 mb-3 p-2">
                  <FormLabel
                    labelFor="hotelAddress"
                    style="form-label text-secondary"
                    labelName="Address"
                  />
                  <Input
                    type="text"
                    style="form-control"
                    id="hotelAddress"
                    placeholder="Address"
                    value={adress}
                    onChange={(e) => setAdress(e.target.value)}
                    required="required"
                  />
                </div>
                <div className="col-6 mb-3 p-2">
                  <FormLabel
                    labelFor="exampleFormControlInput1"
                    style="form-label text-secondary"
                    labelName="Description"
                  />
                  <Input
                    type="text"
                    style="form-control text-secondary"
                    id="exampleFormControlInput1"
                    placeholder="Description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required="required"
                  />
                </div>
                {/* <div className="col-6 mb-3 p-2">
                  <FormLabel
                    labelFor="exampleFormControlInput1"
                    style="form-label text-secondary"
                    labelName="Numéro de téléphone"
                  />
                  <Input
                    type="text"
                    style="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    required="required"
                  />
                </div> */}
                <div className="col-6 mb-3 p-2">
                  <FormLabel
                    labelFor="hotelPrice"
                    style="form-label text-secondary"
                    labelName="Prix par nuit"
                  />
                  <Input
                    type="email"
                    style="form-control"
                    id="hotelPrice"
                    placeholder="1000"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required="required"
                  />
                </div>
                {/* <div className="col-6 mb-3 p-2">
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
                </div> */}
                <div className="col-12 mb-3 p-2">
                  <FormLabel
                    labelFor="file"
                    style="form-label text-secondary "
                    labelName="Ajouter une photo"
                  />
                  <Input
                    type="file"
                    style="form-control "
                    name="image"
                    id="file"
                    placeholder="name@example"
                    required="required"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  {console.log("Contenu de l'image", image)}
                </div>
                <div className="modal-footer">
                  <MyButton
                    type="button"
                    style="btn btn-secondary"
                    dataBsDismiss="modal"
                    btnLabel="Close"
                  />
                  <MyButton
                    type="button"
                    onClick={handleSubmit}
                    style="btn btn-primary"
                    btnLabel="Save"
                  />
                </div>
                {/* ______________________________  */}
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ______________________________________ */}
    </div>
  );
}

export default EnTete;
