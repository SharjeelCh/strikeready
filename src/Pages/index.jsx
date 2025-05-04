import React from "react";
import Hero from "../Sections/Platform/Hero";
import SOC from "../Sections/Platform/SOC";
import Cara from "../Sections/Platform/Cara";
import Complexity from "../Sections/Platform/Complexity";
import Stack from "../Sections/Platform/Stack";
import Cyber from "../Sections/Platform/Cyber";
import Tailored from "../Sections/Platform/Tailored";
import Threat from "../Sections/Platform/Threat";
import Form from '../Sections/Form/Form'
import Footer from "../Sections/Footer/Footer";

function index() {
 return (
  <div className="gap-16 bg-[#070916] sm:gap-40 pt-20 sm:pt-44 pb-12 flex flex-col items-center px-3 sm:px-32">
   <Hero />
   <SOC />
   <Cara />
   <Complexity />
   <Stack />
   <Cyber />
   <Tailored />
   <Threat />
   <Form />
   <Footer />
  </div>
 );
}

export default index;
