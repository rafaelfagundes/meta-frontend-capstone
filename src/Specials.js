import React from "react";
import AddToOrderButton from "./components/AddToOrderButton";
import Button from "./components/Button";

const specialsData = [
  {
    name: "Greek Salad",
    price: "$12.99",
    image: "img/greek-salad.png",
    alt: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    name: "Bruschetta",
    price: "$5.99",
    image: "img/bruschetta.png",
    alt: "Bruschetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    name: "Lemon Dessert",
    price: "$4.99",
    image: "img/lemon-dessert.png",
    alt: "Lemon Dessert",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Specials() {
  return (
    <section className="specials" id="menu">
      <div className="container">
        <div className="row space-between specials-header">
          <h2 className="serif primary-text-color">Specials</h2>
          <Button type="secondary">Online Menu</Button>
        </div>
        <div className="grid">
          {specialsData.map((special) => (
            <div className="card border-radius">
              <img
                class="card-image"
                src={special.image}
                alt={special.alt}
              ></img>
              <div className="row space-between">
                <h3 className="serif primary-text-color">{special.name}</h3>
                <span className="terciary-text-color price">
                  {special.price}
                </span>
              </div>
              <p>{special.description}</p>
              <AddToOrderButton />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;
