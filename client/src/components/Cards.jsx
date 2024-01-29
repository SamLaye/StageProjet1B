import React, { useEffect, useState } from "react";
import Card from "./Card";
import EnTete from "./EnTete";
import HotelServices from "../services/hotelServices";

function Cards() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await HotelServices.getAllHotel();
      setHotels(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des hôtels :", error);
    }
  };
  console.log(hotels);

  return (
    <div className="container mt-4">
      <div className="row p-1">
        <EnTete />
        {hotels.map((hotel) => (
          <Card
            price={hotels.price}
            addresse={hotels.adress}
            hotelKey={hotels._id}
            title={hotels.title}
          />
        ))}
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Cards;
