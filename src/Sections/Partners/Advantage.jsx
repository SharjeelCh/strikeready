import React from "react";
import AutoText from "../../Components/AutoText";
import one from "../../assets/Advantage/one.svg";
import two from "../../assets/Advantage/two.svg";
import three from "../../assets/Advantage/three.svg";
import four from "../../assets/Advantage/four.svg";
import five from "../../assets/Advantage/five.svg";
import six from "../../assets/Advantage/six.svg";
import NeoButton from "../../Components/NeoButton";

function Advantage() {
 const Advantage = [
  {
   src: one,
   alt: "Layer 4",
   title: "Gartner",
   desc: "Tech Innovator",
  },
  {
   src: two,
   alt: "Layer 5",
   title: "Intellyx",
   desc: "Innovator",
  },
  {
   src: three,
   alt: "Layer 6",
   title: "Security Today New",
   desc: "Product of the Year",
  },
  {
   src: four,
   alt: "Layer 7",
   title: "CRN",
   desc: "Stellar Startups",
  },
  {
   src: five,
   alt: "Layer 8",
   title: "Globee Cybersecurity",
   desc: "Awards - Grand Winner",
  },
  {
   src: six,
   alt: "Layer 9",
   title: "CDM Global",
   desc: "InfoSec Awards",
  },
 ];
 return (
  <div className="gap-y-5 sm:gap-y-10 flex items-center justify-center flex-col">
   <AutoText text={"Our Advantage"} />
   <h1 className="font-bold text-white !text-3xl sm:!text-5xl sm:!mx-52 sm:text-inherit">Why Partner With Us</h1>
   <h2 className="text-lg sm:text-2xl sm:mx-48" style={{ fontFamily: "Inter" }}>
    StrikeReady is not just another cybersecurity tool; it's a revolutionary force designed to empower human defenders like never before.
   </h2>
   {/*cards*/}
   <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-16 w-full sm:max-w-3/4">
    {Advantage.map((layer, index) => (
     <div key={index} className="flex flex-col items-center border-1 border-[#525356] rounded-2xl pb-4 sm:pb-9 sm:px-0 text-center space-y-0">
      <img src={layer.src} alt={layer.alt} className="w-20 h-20 sm:w-28 sm:h-28 object-contain border-0 rounded-4xl" style={{ filter: "grayscale(100%)" }} />
      <p className="text-lg sm:text-xl text-white font-bold mt-2 text-[15px] sm:text-[27px]">{layer.title}</p>
      <p className="text-md sm:text-base text-white text-[15px] sm:text-[27px]">{layer.desc}</p>
     </div>
    ))}
   </div>
   <NeoButton text="Become a Partner" onclick={() => console.log("Demo requested")} />
  </div>
 );
}

export default Advantage;
