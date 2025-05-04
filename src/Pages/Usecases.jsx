import React from "react";
import Hero from "../Sections/Usecases/Hero";
import Alert from "../Sections/Usecases/Alert";
import Incident from "../Sections/Usecases/Incident";
import Automation from "../Sections/Usecases/Automation";
import Socs from "../Sections/Usecases/Socs";
import Intel from "../Sections/Usecases/Intel";
import Vulnerability from "../Sections/Usecases/Vulnerability";
import Validation from "../Sections/Usecases/Validation";
import Form from "../Sections/Form/Form";
import Footer from "../Sections/Footer/Footer";

function Usecases() {
 return (
  <div className="gap-16 bg-[#070916] sm:gap-40 pt-20 sm:pt-44 pb-12 flex flex-col items-center px-3 sm:px-32">
   <Hero />
   <Alert />
   <Incident />
   <Automation />
   <Socs />
   <Intel />
   <Vulnerability />
   <Validation />
   <Form />
   <Footer />
  </div>
 );
}

export default Usecases;
