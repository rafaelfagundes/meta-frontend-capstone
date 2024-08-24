import React from "react";
import About from "../sections/About";
import Hero from "../sections/Hero";
import Specials from "../sections/Specials";
import Testimonials from "../sections/Testimonials";

function Home() {
  return (
    <>
      <Hero></Hero>
      <Specials></Specials>
      <Testimonials></Testimonials>
      <About></About>
    </>
  );
}

export default Home;
