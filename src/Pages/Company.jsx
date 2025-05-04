import React from "react";
import Hero from "../Sections/Company/Hero";
import About from "../Sections/Company/About";
import Leadership from "../Sections/Company/Leadership";
import Team from "../Sections/Company/Team";
import Investors from "../Sections/Company/Investors";
import Footer from "../Sections/Footer/Footer";

function Company() {
 return (
  <div className="gap-16 bg-[#070916] sm:gap-40 pt-20 sm:pt-44 pb-12 flex flex-col items-center px-3 sm:px-32">
   <Hero />
   <About />
   <Leadership />
   <Team />
   <Investors />
   <Footer />
  </div>
 );
}

export default Company;
