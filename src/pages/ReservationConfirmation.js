import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReservationContext } from "../App";
import Button from "../components/Button";

function ReservationConfirmation() {
  const { reservationData } = useContext(ReservationContext);

  return (
    <div className="container reservation text-center">
      <h1 className="serif primary-text-color">Reservation Confirmed</h1>
      <img src="img/check.svg" alt="Checkmark"></img>
      <h2>Your reservation has been confirmed.</h2>
      <h3 className="serif primary-text-color">Here are your details:</h3>
      <p>
        <strong>Date:</strong> {reservationData.resDate}
      </p>
      <p>
        <strong>Time:</strong> {reservationData.resTime}
      </p>
      <p>
        <strong>Occasion:</strong> {reservationData.occasion}
      </p>
      <p>
        <strong>Number of guests:</strong> {reservationData.guests}
      </p>
      <div className="space-40"></div>

      <Link to="/" className="">
        <Button className="center">Go to Home</Button>
      </Link>
    </div>
  );
}

export default ReservationConfirmation;
