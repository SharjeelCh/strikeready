import React from "react";
import Hero from "../Sections/Partners/Hero";
import Growth from "../Sections/Partners/Growth";
import Advantage from "../Sections/Partners/Advantage";
import Collaborators from "../Sections/Partners/Collaborators";
import Transform from "../Sections/Partners/Transform";
import Footer from "../Sections/Footer/Footer";

function Partners() {
 return (
  <div className="gap-16 bg-[#070916] sm:gap-40 pt-20 sm:pt-44 pb-12 flex flex-col items-center px-3 sm:px-32">
   <Hero />
   <Growth />
   <Advantage />
   <Collaborators />
   <Transform />
   <Footer />
  </div>
 );
}

export default Partners;
