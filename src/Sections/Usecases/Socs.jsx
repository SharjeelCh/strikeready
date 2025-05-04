import React from "react";
import NeoButton from "../../Components/NeoButton";

function Socs() {
 return (
  <div className="gap-y-5 sm:gap-y-12 flex items-center justify-center  flex-col bg-[#0C1021] w-screen py-16 sm:py-28">
   <h1 className="font-bold text-white !text-3xl sm:!text-5xl sm:!mx-72 sm:text-inherit" style={{ fontFamily: "Inter" }}>
    Adaptive Security for SOCs Modern Challenges{" "}
   </h1>
   <NeoButton text="Get Demo" onclick={() => console.log("Demo requested")} />
  </div>
 );
}

export default Socs;
