import React from "react";

function NavBar() {
  return (
    <header>
      <div className="container navbar">
        <a href="#" className="logo">
          <img src="img/logo.png" alt="Little Lemon Logo"></img>
        </a>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#" className="cart">
                <img src="img/cart.svg" alt="Cart"></img>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
