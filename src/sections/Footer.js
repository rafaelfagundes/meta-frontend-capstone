import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-row">
          <div className="logo">
            <img src="img/footer-logo.png" alt="Little Lemon Logo"></img>
          </div>
          <div className="footer-links">
            <div className="navigation">
              <h3 className="serif secondary-text-color">Navigation</h3>
              <ul>
                <li>
                  <a href="/#home">Home</a>
                </li>
                <li>
                  <a href="/#menu">Menu</a>
                </li>
                <li>
                  <a href="/#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="/#about">About</a>
                </li>
              </ul>
            </div>
            <div className="contact">
              <h3 className="serif secondary-text-color">Contact</h3>
              <p>12345, Citrus Avenue Chicago, IL 60611</p>
              <p>contact@littlelemonchicago.com</p>
              <p>(312) 555-7890</p>
            </div>
            <div className="social-media">
              <h3 className="serif secondary-text-color">Social Media</h3>
              <ul>
                <li>
                  <a href="#">
                    <img src="/img/instagram.svg" alt="Instagram"></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/threads.svg" alt="Threads"></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/tiktok.svg" alt="TikTok"></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/facebook.svg" alt="Facebook"></img>
                  </a>
                </li>
              </ul>
              <p className="copyright">© 2024. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
