import React, { useEffect, useState } from "react";
import Card from "./Card";
import EnTete from "./EnTete";
import HotelServices from "../services/hotelServices";

function Cards() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await HotelServices.getAllHotel();
        setHotels(response);
        console.log("Response.data =>", response);
      } catch (error) {
        console.error("Erreur lors de la récupération des hôtels :", error);
      }
    };

    fetchHotels();
  }, []);
  console.log(hotels && hotels.data && hotels.data);

  return (
    <div className="container mt-4">
      <div className="row p-1">
        <EnTete />
        {hotels &&
          hotels.data &&
          hotels.data.map((hotel) => (
            <Card
              image={hotel.image}
              price={hotel.price}
              addresse={hotel.adress}
              hotelKey={hotel._id}
              title={hotel.title}
            />
          ))}
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Cards;
