import React from "react";
import Button from "./Button";

function AddToOrderButton() {
  return (
    <Button type="outline">
      <span>Order</span>
      <img src="/img/bike.svg" alt="Bike Delivery" className="icon"></img>
    </Button>
  );
}

export default AddToOrderButton;
