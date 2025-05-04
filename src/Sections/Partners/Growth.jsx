import React from "react";
import one from "../../assets/Growth/one.svg";
import two from "../../assets/Growth/two.svg";
import three from "../../assets/Growth/three.svg";
import AutoText from "../../Components/AutoText";

function Growth() {
 const Growth = [
  {
   src: one,
   alt: "Layer 4",
   title: "Platform Power",
   desc: "StrikeReady works with your existing solution and enables unmatched value of your cybersecurity services.",
  },
  {
   src: two,
   alt: "Layer 5",
   title: "Predictable Profitability",
   desc: "StrikeReady prioritizes your long-term growth through predictable revenue, strong margins and reduced customer churn.",
  },
  {
   src: three,
   alt: "Layer 6",
   title: "Effortless Collaboration",
   desc: "StrikeReady supports and facilitates smooth operations and strong collaborations between you and your customers.",
  },
 ];

 return (
  <div className="gap-y-5 sm:gap-y-10 flex items-center justify-center flex-col">
   <AutoText text={"Forge a New Path"} />
   <h1 className="font-bold text-white !text-3xl sm:!text-5xl sm:mx-4 sm:text-inherit">Accelerate Growth With StrikeReady </h1>
   <p class=" text-[15px] sm:text-[27px] text-center sm:text-left" style={{ fontFamily: "Inter" }}>
    At StrikeReady, we're not only revolutionizing security teams, we are also redefining cybersecurity partnerships. Our mission is to deliver unmatched value
    through our AI-driven security platform, driving efficiency, enabling profitability and fostering seamless collaboration for partners.
   </p>
   <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full">
    {Growth.map((layer, index) => (
     <div key={index} className="flex flex-col items-start bg-[#0C1021] rounded-2xl p-5 sm:p-6 text-left space-y-2">
      <img src={layer.src} alt={layer.alt} className="w-7 h-7 sm:w-9 sm:h-9 object-contain border-0 rounded-4xl" style={{ filter: "grayscale(100%)" }} />
      <p className="text-lg sm:text-xl text-white font-bold mt-2 text-[15px] sm:text-[27px]">{layer.title}</p>
      <p className="text-md sm:text-base text-white text-[15px] sm:text-[27px]">{layer.desc}</p>
     </div>
    ))}
   </div>
  </div>
 );
}

export default Growth;
