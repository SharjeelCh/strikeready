import React from "react";
import NeoButton from "../../Components/NeoButton";

function Complexity() {
 return (
  <div className="gap-y-5 sm:gap-y-12 flex items-center justify-center  flex-col bg-[#0C1021] w-screen py-16 sm:py-28">
   <h1 className="font-bold text-white !text-3xl sm:!text-5xl sm:!mx-72 sm:text-inherit" style={{ fontFamily: "Inter" }}>
    Do More with Less, Cut Complexity, Boost Efficiency
   </h1>
   <NeoButton text="Get Demo" onclick={() => console.log("Demo requested")} />
  </div>
 );
}

export default Complexity;
