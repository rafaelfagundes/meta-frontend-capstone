import About from "./About";
import "./App.css";
import Footer from "./Footer";
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
        <Footer></Footer>
      </body>
    </div>
  );
}

export default App;
