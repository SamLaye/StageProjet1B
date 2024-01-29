import React from "react";
import img from "../assets/images/images.png";

function Card({ image, addresse, title, price, hotelKey }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2" key={hotelKey}>
      <div className="card">
        <img src={img} className="card-img card-img-top " alt="..." />
        <div className="card-body">
          <div className="card-text">
            <h3 className="hotelAdress">{addresse}</h3>
            <h2 className="fs-6">{title}</h2>
            <h3 className="hotelPrice">{price} XOF par nuit</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
