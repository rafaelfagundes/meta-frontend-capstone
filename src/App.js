import "./App.css";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import Specials from "./sections/Specials";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <div className="App">
      <body>
        <NavBar></NavBar>
        <Hero></Hero>
        <Specials></Specials>
        <Testimonials></Testimonials>
        <About></About>
        <Footer></Footer>
      </body>
    </div>
  );
}

export default App;
