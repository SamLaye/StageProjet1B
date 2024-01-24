import React from "react";
import img from "../assets/images/images.png";

function Card() {
  return (
    <div className="col-3 p-1">
      <div className="card">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <div class="card-text">
            <h3 className="hotelAdress">
              Place de l'Independance, 10 Rue PL 29, Dakar
            </h3>
            <h2 className="fs-6">King Fahd Palace</h2>
            <h3 className="hotelPrice">22.000 XOF par nuit</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
