import React from "react";
import AutoText from "../../Components/AutoText";
import one from "../../assets/About/one.svg";
import two from "../../assets/About/two.svg";
import three from "../../assets/About/three.svg";
import four from "../../assets/About/four.svg";
import five from "../../assets/About/five.svg";

function About() {
 const About = [
  { src: one, alt: "Layer 4", label: "Vendor Lock In" },
  { src: two, alt: "Layer 5", label: "Limited Resources" },
  { src: three, alt: "Layer 6", label: "Tecnology Exhaustion" },
  { src: four, alt: "Layer 7", label: "Fragmented Processes" },
  { src: five, alt: "Layer 8", label: "Siloed Teams" },
 ];

 return (
  <div className="gap-y-5 sm:gap-y-12 flex items-center justify-center flex-col">
   <AutoText text={"Our Story"} />
   <h1 className="font-bold text-white !text-3xl sm:!text-5xl sm:mx-4 sm:text-inherit">About StrikeReady </h1>

   <p class="text-[15px] sm:text-[27px] text-center sm:text-left" style={{ fontFamily: "Inter" }}>
    At StrikeReady, we’re on a mission to <strong> empower cybersecurity defenders </strong> and revolutionize security operations. Founded in 2019 by seasoned
    cyber security software veterans, our team brings decades of experience managing global-scale security networks. We understand the challenges faced by
    security teams and have developed innovative solutions to tackle issues that plague cyber security defenders.
   </p>
   {/* icons */}
   <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-10 w-full max-w-6xl">
    {About.map((layer, index) => (
     <div key={index} className="flex flex-col items-center text-center space-y-2">
      <img src={layer.src} alt={layer.alt} className="w-32 h-32 sm:w-36 sm:h-36 object-contain border-0" />
      <p className="text-sm sm:text-base text-white font-bold">{layer.label}</p>
     </div>
    ))}
   </div>
   <p class="text-[15px] sm:text-[27px] text-center sm:text-left" style={{ fontFamily: "Inter" }}>
    With a relentless focus on people-first cybersecurity, we're dedicated to creating cutting-edge solutions that enable defenders to work smarter, faster, and
    more effectively. Our goal is to not only bridge the skill gap and alleviate talent shortages but also to foster a culture of seamless collaboration and
    resilience in the face of evolving digital security threats.
   </p>
  </div>
 );
}

export default About;
