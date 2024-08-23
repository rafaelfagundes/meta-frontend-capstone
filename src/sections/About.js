import React from "react";

function About() {
  return (
    <section className="about container" id="about">
      <div className="row space-between">
        <div>
          <h2 className="serif primary-text-color">Little Lemon</h2>
          <h3 className="terciary-text-color">Chicago</h3>
          <p>
            Little Lemon is a charming, cozy restaurant nestled in the heart of
            Chicago, known for its vibrant and inviting atmosphere. The space is
            warm and intimate, with cheerful yellow accents and rustic wooden
            tables that make diners feel at home. Specializing in fresh,
            seasonal ingredients, Little Lemon offers a carefully crafted menu
            filled with flavorful dishes that highlight the natural goodness of
            each component. From zesty salads and savory pastas to tender
            grilled meats and citrus-infused desserts, every plate is a
            celebration of fresh, wholesome flavors. The kitchen is passionate
            about bringing the essence of farm-to-table dining to the city,
            ensuring that every bite is not only delicious but thoughtfully
            prepared.
          </p>
        </div>
        <img src="/img/about.png" alt="Kitchen"></img>
      </div>
    </section>
  );
}

export default About;
