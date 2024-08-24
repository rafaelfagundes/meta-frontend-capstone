import React from "react";
import ReservationForm from "../components/ReservationForm";

function Reservation() {
  return (
    <div className="container reservation">
      <h1 className="serif primary-text-color">Make Your Reservation</h1>
      <ReservationForm />
    </div>
  );
}

export default Reservation;
