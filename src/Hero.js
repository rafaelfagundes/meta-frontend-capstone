import React from "react";
import Button from "./components/Button";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container space-between full-width">
        <div className="hero-content">
          <div>
            <h1 className="serif secondary-text-color">Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <p className="description">
            A cozy spot serving fresh and flavourful dishes made with care
          </p>
          <Button>Reserve a Table</Button>
        </div>
        <div className="hero-image">
          <img src="img/hero-picture.png" alt="Hero Background"></img>
        </div>
      </div>
    </section>
  );
}

export default Hero;
