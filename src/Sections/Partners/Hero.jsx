import React from "react";
import NeoButton from "../../Components/NeoButton";

function Hero() {
 return (
  <div className="flex flex-col items-center gap-8 sm:gap-12">
   <h1 className="font-bold !text-[#66D8B5] !text-4xl sm:!text-6xl sm:mx-4 sm:text-inherit">Building Bridges, Breaking Barriers, Uniting in Partnership</h1>
   <h2 className="text-lg sm:text-2xl">Revolutionize security innovation by partnering with StrikeReady.</h2>
   <NeoButton text="Become a Partner" onclick={() => console.log("Demo requested")} />
  </div>
 );
}

export default Hero;
