import About from "./About";
import "./App.css";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

function App() {
  return (
    <div className="App">
      <body>
        <NavBar></NavBar>
        <Hero></Hero>
        <Specials></Specials>
        <Testimonials></Testimonials>
        <About></About>

        <footer>
          <div className="container">
            <div className="logo">
              <img src="logo.svg" alt="Little Lemon Logo"></img>
            </div>
            <div className="navigation">
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
            <div className="contact">
              <h3>Contact</h3>
              <p>12345, Citrus Avenue Chicago, IL 60611</p>
              <p>contact@littlelemonchicago.com</p>
              <p>(312) 555-7890</p>
            </div>
            <div className="social-media">
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
          <p className="copyright">© 2024. All rights reserved.</p>
        </footer>
      </body>
    </div>
  );
}

export default App;
