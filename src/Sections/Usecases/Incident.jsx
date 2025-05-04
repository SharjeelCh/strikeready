import React from "react";
import AutoText from "../../Components/AutoText";
import incident from "../../assets/usecases/Incident.svg";

function Incident() {
 return (
  <div className="gap-y-5 sm:gap-y-10 flex items-center justify-center flex-col">
   <h1 className="font-bold text-white !text-3xl sm:!text-5xl sm:!mx-52 sm:text-inherit" style={{ fontFamily: "Inter" }}>
    Incident Response
   </h1>
   <h2 className="text-lg sm:text-2xl sm:mx-48" style={{ fontFamily: "Inter" }}>
    StrikeReady centralizes incident data and delivers real-time visibility, leading to rapid and coordinated responses to security incidents.{" "}
   </h2>

   <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-start justify-center sm:mt-4 sm:justify-between w-full max-w-[1200px] px-3 sm:px-0">
    <img src={incident} alt="" style={{ verticalAlign: "middle", maxWidth: "100%", outline: "none" }} />

    <div className="w-full px-4 py-2 flex  justify-center">
     <ul
      className="grid grid-cols-1 sm:mx-16 sm:gap-x-16  sm:grid-cols-1 gap-x-8 gap-y-4 sm:gap-y-7 list-disc list-inside text-left text-lg sm:text-2xl"
      style={{ fontFamily: "Inter" }}
     >
      <li>Provide full risk and impact context around an incident without lifting a finger</li>
      <li>Speed mitigation responses via AI-based guidance</li>
      <li>Improve collaboration by streamlining communication across internal and external teams</li>
     </ul>
    </div>
   </div>
  </div>
 );
}

export default Incident;
