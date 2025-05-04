import React from "react";
import NeoButton from "../../Components/NeoButton";

function Transform() {
 return (
  <div className="gap-y-5 sm:gap-y-10 flex items-center justify-center flex-col">
   <h1 className="font-bold text-white !text-3xl sm:!text-5xl sm:mx-4 sm:text-inherit">
    Transforming the landscape of security organizations around the world.
   </h1>
   <NeoButton text="Become a Partner" onclick={() => console.log("Demo requested")} />
  </div>
 );
}

export default Transform;
