import React from "react";
import Button from "./components/Button";

function Hero() {
  return (
    <section class="hero" id="home">
      <div class="container space-between full-width">
        <div class="hero-content">
          <div>
            <h1 className="serif secondary-text-color">Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <p class="description">
            A cozy spot serving fresh and flavourful dishes made with care
          </p>
          <Button>Reserve a Table</Button>
        </div>
        <div class="hero-image">
          <img src="img/hero-picture.png" alt="Hero Background"></img>
        </div>
      </div>
    </section>
  );
}

export default Hero;
