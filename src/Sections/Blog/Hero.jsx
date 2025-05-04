import React from "react";
import NeoButton from "../../Components/NeoButton";

function Hero() {
 return (
  <div className="bg-main gap-y-5 sm:gap-y-10 flex items-center justify-center flex-col px-4">
   <h1 className="font-bold text-white !text-3xl sm:!text-5xl sm:!mx-52 sm:text-inherit">Revolutionizing Cybersecurity</h1>
   <h2 className="text-lg sm:text-2xl sm:mx-48" style={{ fontFamily: "Inter" }}>
    StrikeReady Raises $12 Million for Next-Gen AI Security Command Platform.
   </h2>
   <NeoButton text="Read The Blog" onclick={() => console.log("Demo requested")} />
  </div>
 );
}

export default Hero;
