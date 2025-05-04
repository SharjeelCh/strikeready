import React from "react";
import AutoText from "../../Components/AutoText";

function Cyber() {
 return (
  <div className="gap-y-5 sm:gap-y-10 flex items-center justify-center flex-col">
   <AutoText text={"How We Do It"} />
   <h1 className="font-bold text-white !text-3xl sm:!text-5xl sm:!mx-52 sm:text-inherit">Pioneering Cybersecurity AI Since Day One</h1>
   <h2 className="text-lg sm:text-2xl sm:mx-48" style={{ fontFamily: "Inter" }}>
    First Gartner Tech Innovator in Advanced Virtual Assistant and Conversational Artificial Intelligence.{" "}
   </h2>
   {/*use cases*/}
   <div className="w-full px-4 py-2 flex  justify-center">
    <ul className="grid grid-cols-1 sm:mx-32 sm:gap-x-16 sm:grid-cols-2 gap-x-8 gap-y-4 list-disc list-inside text-left text-lg sm:text-2xl" style={{ fontFamily: "Inter" }}>
     <li>Advanced AI capabilities, incorporating over 25+ industry-leading analysis engines.</li>
     <li>Context-aware, accurate and actionable security analysis and advisory designed for optimal response.</li>
     <li>Seamless integration with your entire security stack, setting it apart from AI solutions limited to specific vendors</li>
     <li>Centralized knowledge, intelligence and collaboration to upskill and cross-skill your entire security team.</li>
    </ul>
   </div>
  </div>
 );
}

export default Cyber;
