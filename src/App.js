import "./App.css";
import Hero from "./Hero";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <body>
        <NavBar></NavBar>

        <Hero></Hero>

        <section class="specials">
          <div class="container">
            <h2>Specials</h2>
            <div class="grid">
              <div class="card">
                <img src="greek-salad.jpg" alt="Greek Salad"></img>
                <h3>
                  Greek Salad <span>$12.99</span>
                </h3>
                <p>
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
                <button class="btn">
                  Order <img src="bike.svg" alt="Bike Delivery"></img>
                </button>
              </div>
              <div class="card">
                <img src="bruschetta.jpg" alt="Bruschetta"></img>
                <h3>
                  Bruschetta <span>$5.99</span>
                </h3>
                <p>
                  Our Bruschetta is made from grilled bread that has been
                  smeared with garlic and seasoned with salt and olive oil.
                </p>
                <button class="btn">
                  Order <img src="bike.svg" alt="Bike Delivery"></img>
                </button>
              </div>
              <div class="card">
                <img src="lemon-dessert.jpg" alt="Lemon Dessert"></img>
                <h3>
                  Lemon Dessert <span>$4.99</span>
                </h3>
                <p>
                  This comes straight from grandma's recipe book, every last
                  ingredient has been sourced and is as authentic as can be
                  imagined.
                </p>
                <button class="btn">
                  Order <img src="bike.svg" alt="Bike Delivery"></img>
                </button>
              </div>
            </div>
            <button class="btn center">Online Menu</button>
          </div>
        </section>

        <section class="testimonials">
          <div class="container">
            <h2>Testimonials</h2>
            <div class="grid">
              <div class="testimonial">
                <img src="person1.jpg" alt="Samantha Adams"></img>
                <div class="rating">
                  <img src="star.svg" alt="Star"></img>
                  <img src="star.svg" alt="Star"></img>
                  <img src="star.svg" alt="Star"></img>
                  <img src="star.svg" alt="Star"></img>
                  <img src="star-half.svg" alt="Half Star"></img>
                  <span>4.1</span>
                </div>
                <h3>Samantha Adams</h3>
                <p>
                  Little Lemon provided me with an unforgettable dining
                  experience. The cozy atmosphere and flavorful dishes made with
                  care left me wanting more. I can't wait to return to indulge
                  in their fresh offerings again!
                </p>
              </div>
              <div class="testimonial">
                <img src="person2.jpg" alt="Emily Hayes"></img>
                <div class="rating">
                  <img src="star.svg" alt="Star"></img>
                  <img src="star.svg" alt="Star"></img>
                  <img src="star.svg" alt="Star"></img>
                  <img src="star.svg" alt="Star"></img>
                  <img src="star-half.svg" alt="Half Star"></img>
                  <span>4.7</span>
                </div>
                <h3>Emily Hayes</h3>
                <p>
                  Little Lemon is my go-to for delicious and nourishing meals.
                  Their cozy spot and fresh, flavorful dishes always leave me
                  satisfied. The care put evident in every bite. I highly
                  recommend stopping by for a meal.
                </p>
              </div>
              <div class="testimonial">
                <img src="person3.jpg" alt="George Adams"></img>
                <div class="rating">
                  <img src="star.svg" alt="Star"></img>
                  <img src="star.svg" alt="Star"></img>
                  <img src="star.svg" alt="Star"></img>
                  <img src="star.svg" alt="Star"></img>
                  <img src="star.svg" alt="Star"></img>
                  <span>4.9</span>
                </div>
                <h3>George Adams</h3>
                <p>
                  Little Lemon is a hidden gem offering a cozy spot serving
                  fresh and flavorful dishes made with care. From the warm
                  ambiance to the delightful menu, every visit is a treat for
                  the senses.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="about">
          <div class="container">
            <h2>Little Lemon</h2>
            <h2>Chicago</h2>
            <p>
              Little Lemon is a charming, cozy restaurant nestled in the heart
              of Chicago, known for its vibrant and inviting atmosphere. The
              space is warm and intimate, with cheerful yellow accents and
              rustic wooden tables that make diners feel at home. Specializing
              in fresh, seasonal ingredients, Little Lemon offers a carefully
              crafted menu filled with flavorful dishes that highlight the
              natural goodness of each component. From zesty salads and savory
              pastas to tender grilled meats and citrus-infused desserts, every
              plate is a celebration of fresh, wholesome flavors. The kitchen is
              passionate about bringing the essence of farm-to-table dining to
              the city, ensuring that every bite is not only delicious but
              thoughtfully prepared.
            </p>
          </div>
          <div class="images">
            <img src="kitchen1.jpg" alt="Kitchen"></img>
            <img src="kitchen2.jpg" alt="Kitchen"></img>
          </div>
        </section>

        <footer>
          <div class="container">
            <div class="logo">
              <img src="logo.svg" alt="Little Lemon Logo"></img>
            </div>
            <div class="navigation">
              <h3>Navigation</h3>
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
              </ul>
            </div>
            <div class="contact">
              <h3>Contact</h3>
              <p>12345, Citrus Avenue Chicago, IL 60611</p>
              <p>contact@littlelemonchicago.com</p>
              <p>(312) 555-7890</p>
            </div>
            <div class="social-media">
              <h3>Social Media</h3>
              <ul>
                <li>
                  <a href="#">
                    <img src="instagram.svg" alt="Instagram"></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="pinterest.svg" alt="Pinterest"></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="tiktok.svg" alt="TikTok"></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="facebook.svg" alt="Facebook"></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p class="copyright">© 2024. All rights reserved.</p>
        </footer>
      </body>
    </div>
  );
}

export default App;
