import React from "react";
import NeoButton from "../../Components/NeoButton";

function Hero() {
 return (
  <div className="flex flex-col items-center gap-8 sm:gap-12">
   <h1 className="font-bold !text-[#66D8B5] !text-4xl sm:!text-6xl sm:mx-4 sm:text-inherit">Centralize Visibility, Integrate Everything, Empower Teams</h1>
   <h2 className="text-lg sm:text-2xl">Introducing the First AI-Powered Security Command Center</h2>
   <NeoButton text="Request a Demo" onclick={() => console.log("Demo requested")} />
  </div>
 );
}

export default Hero;
