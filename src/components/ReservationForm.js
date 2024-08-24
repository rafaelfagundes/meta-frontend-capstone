import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../api";
import { ReservationContext } from "../App";
import Button from "./Button";

function ReservationForm() {
  const { reservationData, setReservationData } =
    useContext(ReservationContext);

  const [availableTimes, setAvailableTimes] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setReservationData({
      ...reservationData,
      [id]: value,
    });
    if (formErrors[id]) {
      setFormErrors({
        ...formErrors,
        [id]: null,
      });
    }
  };

  useEffect(() => {
    const date = new Date(reservationData.resDate);
    if (!isNaN(date.getTime())) {
      const availableTimes = fetchAPI(date);
      setAvailableTimes(availableTimes);
    } else {
      setAvailableTimes([]);
    }
  }, [reservationData.resDate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = {};

    const selectedDate = new Date(reservationData.resDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!reservationData.resDate) {
      errors.resDate = "Date is required";
    } else if (selectedDate < today) {
      errors.resDate = "Please choose a date from today onwards";
    }

    if (!reservationData.resTime) errors.resTime = "Time is required";
    if (!reservationData.guests) errors.guests = "Number of guests is required";
    if (!reservationData.occasion) errors.occasion = "Occasion is required";

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const response = await submitAPI(reservationData);
      if (response) {
        navigate("/confirmation");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "240px", gap: "20px" }}
      aria-labelledby="reservation-form-title"
    >
      <label htmlFor="resDate">Choose date</label>
      <input
        type="date"
        id="resDate"
        value={reservationData.resDate}
        onChange={handleChange}
        required
        aria-invalid={!!formErrors.resDate}
        aria-describedby="resDate-error"
      />
      {formErrors.resDate && (
        <span className="error" id="resDate-error">
          {formErrors.resDate}
        </span>
      )}
      <label htmlFor="resTime">Choose time</label>
      <select
        id="resTime"
        value={reservationData.resTime}
        onChange={handleChange}
        required
        aria-invalid={!!formErrors.resTime}
        aria-describedby="resTime-error"
      >
        <option value="">Select a Time</option>{" "}
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      {formErrors.resTime && (
        <span className="error" id="resTime-error">
          {formErrors.resTime}
        </span>
      )}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={reservationData.guests}
        onChange={handleChange}
        required
        aria-invalid={!!formErrors.guests}
        aria-describedby="guests-error"
      />
      {formErrors.guests && (
        <span className="error" id="guests-error">
          {formErrors.guests}
        </span>
      )}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={reservationData.occasion}
        onChange={handleChange}
        required
        aria-invalid={!!formErrors.occasion}
        aria-describedby="occasion-error"
      >
        <option value="">Select an Occasion</option>{" "}
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Wedding">Wedding</option>
        <option value="Other">Other</option>
      </select>
      {formErrors.occasion && (
        <span className="error" id="occasion-error">
          {formErrors.occasion}
        </span>
      )}
      <Button type="submit">Make Your Reservation</Button>
    </form>
  );
}

export default ReservationForm;
