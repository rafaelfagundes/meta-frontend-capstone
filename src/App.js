import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import ReservationConfirmation from "./pages/ReservationConfirmation";
import Footer from "./sections/Footer";
import NavBar from "./sections/NavBar";

// Create a context for reservation data
export const ReservationContext = createContext();

function App() {
  // State to store reservation data
  const [reservationData, setReservationData] = useState({
    resDate: "",
    resTime: "",
    guests: 1,
    occasion: "Birthday",
  });

  return (
    <BrowserRouter>
      <ReservationContext.Provider
        value={{ reservationData, setReservationData }}
      >
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/confirmation" element={<ReservationConfirmation />} />
          </Routes>
          <Footer />
        </div>
      </ReservationContext.Provider>
    </BrowserRouter>
  );
}

export default App;
