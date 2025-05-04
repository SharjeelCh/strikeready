import React from "react";
import AutoText from "../../Components/AutoText";
import one from "../../assets/Investors/one.svg";
import two from "../../assets/Investors/two.svg";
import three from "../../assets/Investors/three.svg";
import four from "../../assets/Investors/four.svg";
import five from "../../assets/Investors/five.svg";
import six from "../../assets/Investors/six.svg";

function Investors() {
 const Investors = [
  { src: one, alt: "Layer 4" },
  { src: two, alt: "Layer 5" },
  { src: three, alt: "Layer 6" },
  { src: four, alt: "Layer 7" },
  { src: five, alt: "Layer 8" },
  { src: six, alt: "Layer 9" },
 ];

 return (
  <div className="gap-y-5 sm:gap-y-12 flex items-center justify-center flex-col">
   <AutoText text={"Investors"} />
   
   {/* icons */}
   <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-8 sm:gap-x-20 mt-10 w-full max-w-6xl">
    {Investors.map((layer, index) => (
     <div key={index} className="flex flex-col items-center text-center space-y-2">
      <img src={layer.src} alt={layer.alt} className="object-contain border-0" />
      <p className="text-sm sm:text-base text-white font-bold">{layer.label}</p>
     </div>
    ))}
   </div>
  
  </div>
 );
}

export default Investors;
