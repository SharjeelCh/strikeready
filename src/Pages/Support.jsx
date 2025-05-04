import React from "react";
import Hero from "../Sections/Support/Hero";
import Form from "../Sections/Form/Form";
import Footer from "../Sections/Footer/Footer";

function Support() {
 return <div className="gap-16 bg-[#070916] sm:gap-40 pt-20 sm:pt-44 pb-12 flex flex-col items-center px-3 sm:px-32">
    <Hero />
    <Form />
    <Footer />
 </div>;
}

export default Support;
