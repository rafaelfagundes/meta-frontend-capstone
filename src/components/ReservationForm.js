import React, { useState } from "react";

function ReservationForm() {
  const [formData, setFormData] = useState({
    resDate: "",
    resTime: "17:00",
    guests: 1,
    occasion: "Birthday",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Reservation submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
    >
      <label htmlFor="resDate">Choose date</label>
      <input
        type="date"
        id="resDate"
        value={formData.resDate}
        onChange={handleChange}
      />

      <label htmlFor="resTime">Choose time</label>
      <select id="resTime" value={formData.resTime} onChange={handleChange}>
        <option value="17:00">17:00</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
        <option value="21:00">21:00</option>
        <option value="22:00">22:00</option>
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={formData.guests}
        onChange={handleChange}
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={formData.occasion} onChange={handleChange}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default ReservationForm;
