import React from "react";
import layer4 from "../../assets/Layers/layer 4.svg";
import layer5 from "../../assets/Layers/layer 5.svg";
import layer6 from "../../assets/Layers/layer 6.svg";
import layer7 from "../../assets/Layers/layer 7.svg";
import layer8 from "../../assets/Layers/layer 8.svg";

function Tailored() {
 const layers = [
  { src: layer4, alt: "Layer 4", label: "SOC Analyst" },
  { src: layer5, alt: "Layer 5", label: "Incident Responder" },
  { src: layer6, alt: "Layer 6", label: "Vulnerability Analyst" },
  { src: layer7, alt: "Layer 7", label: "Threat Analyst" },
  { src: layer8, alt: "Layer 8", label: "Red Team" },
 ];

 return (
  <div className="gap-y-5 sm:gap-y-10 flex items-center justify-center flex-col px-4">
   <h1 className="font-bold text-white !text-3xl sm:!text-5xl sm:!mx-52 sm:text-inherit text-center">
    Designed by Security Experts, Tailored for Security Professionals
   </h1>
   <h2 className="text-lg sm:text-2xl sm:mx-48 text-center" style={{ fontFamily: "Inter" }}>
    Out-of-box customization empowers your security team to focus time and resources on high-priority tasks and strategic initiatives.
   </h2>

   <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-10 w-full max-w-6xl">
    {layers.map((layer, index) => (
     <div key={index} className="flex flex-col items-center text-center space-y-2">
      <img src={layer.src} alt={layer.alt} className="w-24 h-24 sm:w-32 sm:h-32 object-contain border-1 border-white rounded-2xl" />
      <p className="text-sm sm:text-base text-white">{layer.label}</p>
     </div>
    ))}
   </div>
  </div>
 );
}

export default Tailored;
