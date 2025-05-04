import React from "react";
import NeoButton from "../../Components/NeoButton";

function Hero() {
 return (
  <div className="flex flex-col items-center gap-8 sm:gap-12 ">
   <h1 className="font-bold !text-[#66D8B5] !text-4xl sm:!text-6xl sm:mx-4 sm:text-inherit">Empowering People. Revolutionizing Security.</h1>
   <h2 className="text-lg sm:text-2xl">Join us in our mission to make the digital world safer for everyone. Together, we can build a more secure future.</h2>
   <NeoButton text="Contact Us" onclick={() => console.log("Demo requested")} />
  </div>
 );
}

export default Hero;
