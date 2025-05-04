import React from "react";
import AutoText from "../../Components/AutoText";
import one from "../../assets/Leadership/Yasir Khalid.jpg";
import two from "../../assets/Leadership/Salim Scafuto.png";
import three from "../../assets/Leadership/Alex Lanstein.jpg";
import four from "../../assets/Leadership/adil.jpg";

import five from "../../assets/Leadership/lee.jpg";
import six from "../../assets/Leadership/Fuaad Ahmad.jpg";
import seven from "../../assets/Leadership/Adil Salahuddin.jpg";

function Leadership() {
 const Leadership = [
  { src: one, alt: "Layer 4", label: "Yasir Khalid", desg: "Founder & CEO" },
  { src: two, alt: "Layer 5", label: "Salim Scafuto", desg: "Chief Client Officer" },
  { src: three, alt: "Layer 6", label: "Alex Lanstein", desg: "CTO" },
  { src: four, alt: "Layer 7", label: "Adil Mufti", desg: "CISO" },
  { src: five, alt: "Layer 8", label: "Lee Weyers", desg: "VP Sales, US West" },
  { src: six, alt: "Layer 9", label: "Fuaad Ahmad", desg: "VP, Engineering" },
  { src: seven, alt: "Layer 10", label: "Adil Salahuddin", desg: "GM of META" },
 ];

 return (
  <div className="gap-y-5 sm:gap-y-12 flex items-center justify-center flex-col">
   <AutoText text={"Leadership Team"} />
   <h1 className="font-bold text-white !text-3xl sm:!text-5xl sm:mx-4 sm:text-inherit">Leadership Team </h1>

   {/* images card */}
   <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
    {Leadership.map((layer, index) => (
     <div key={index} className="flex flex-col items-center text-center space-y-3">
      <img src={layer.src} alt={layer.alt} className=" object-contain border-0 rounded-4xl" style={{ filter: 'grayscale(100%)' }} />
      <p className="text-lg sm:text-xl text-white font-bold">{layer.label}</p>
      <p className="text-base sm:text-base text-gray-400">{layer.desg}</p>
     </div>
    ))}
   </div>
  </div>
 );
}

export default Leadership;
