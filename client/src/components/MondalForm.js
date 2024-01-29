import React, { useState } from "react";
import { message } from "antd";
import HotelServices, { createHotel } from "../services/hotelServices";

function ModalForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [adress, setAdress] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("adress", adress);
      formData.append("price", price);
      formData.append("image", image);

      const response = await HotelServices.createHotel(formData);
      message.success("Hotel added successfully!");
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
      message.error("An error occurred while adding the hotel.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row">
      <div className="col-12 col-md-6 p-1">
        <label>Title:</label>
        <input
          className="form-control"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="col-12 col-md-6 p-1">
        <label>Description:</label>
        <input
          className="form-control"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="col-12 col-md-6 p-1">
        <label>Address:</label>
        <input
          className="form-control"
          type="text"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
          required
        />
      </div>
      <div className="col-12 col-md-6 p-1">
        <label>Price:</label>
        <input
          className="form-control"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="col-12 col-md-6 p-1">
        <label>Image:</label>
        <input
          className="form-control"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
      </div>
      <div className="text-end">
        <button className="btn text-white" type="submit">Submit</button>
      </div>
      
    </form>
  );
}

export default ModalForm;