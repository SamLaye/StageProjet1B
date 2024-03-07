import React, { useEffect, useState } from "react";
import { message } from "antd";
import HotelServices, { createHotel } from "../../services/hotelServices";
import MyButton from "../MyButton";
import { getUserDetails } from "../../utils/GetUser";

function ModalForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [adress, setAdress] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const [user, setUser] = useState();

  useEffect(() => {
    const userDetails = getUserDetails();
    setUser(userDetails);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = user?.userId
      console.log(userId)
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("adress", adress);
      formData.append("price", price);
      formData.append("image", image);
      formData.append("userId", userId);

      const response = await HotelServices.createHotel(formData);
      message.success("Hotel added successfully!");
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
      message.error("An error occurred while adding the hotel.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row" id="myModalForm">
      <div className="col-12 col-md-6 p-1">
        <label>Title:</label>
        <input
          className="form-control inputForm"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="col-12 col-md-6 p-1">
        <label>Address:</label>
        <input
          className="form-control inputForm"
          type="text"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
          required
        />
      </div>
      <div className="col-12 col-md-6 p-1">
        <label>Email:</label>
        <input
          className="form-control inputForm"
          type="email"
          // value={adress}
          // onChange={(e) => setAdress(e.target.value)}
          // required
        />
      </div>
      <div className="col-12 col-md-6 p-1">
        <label>Telephone:</label>
        <input
          className="form-control inputForm"
          type="number"
          // value={adress}
          // onChange={(e) => setAdress(e.target.value)}
          // required
        />
      </div>
      <div className="col-12 col-md-6 p-1">
        <label>Description:</label>
        <input
          className="form-control inputForm"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="col-12 col-md-6 p-1">
        <label>Price:</label>
        <input
          className="form-control inputForm"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="col-12  p-1">
        <label>Ajouter une photo</label>
        <div className="d-flex flex-column justify-content-center align-items-center inputFormTypeFile p-2 rounded">
          <label htmlFor="file" className="d-flex flex-column text-center">
            <i className="bi bi-card-image fs-1 opacity-50"></i>
            <span className="opacity-50">Ajouter une photo</span>
          </label>
          <input
            className="form-control inputForm"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
          
      </div>
      <div className="text-end">
        {/* <button className="btn text-white" type="submit">Submit</button> */}
        <MyButton
          type="submit"
          style="btn text-white px-3 mt-1"
          btnLabel="Enregistrer"
          id="btnCloseHotelModal"
        />
      </div>
      
    </form>
  );
}

export default ModalForm;