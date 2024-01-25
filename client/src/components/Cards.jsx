import React from "react";
import Card from "./Card";
import EnTete from "./EnTete";

function Cards() {
  return (
    <div className="container mt-4">
      <div className="row">
        <EnTete />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Cards;
