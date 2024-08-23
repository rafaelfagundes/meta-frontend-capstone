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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">About</a>
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
