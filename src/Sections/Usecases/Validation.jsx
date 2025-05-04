import React from "react";
import AutoText from "../../Components/AutoText";
import valid from "../../assets/usecases/validation.svg";

function Validation() {
 return (
  <div className="gap-y-5 sm:gap-y-10 flex items-center justify-center flex-col">
   <h1 className="font-bold text-white !text-3xl sm:!text-5xl sm:!mx-52 sm:text-inherit" style={{ fontFamily: "Inter" }}>
    Continuous Security Validation{" "}
   </h1>
   <h2 className="text-lg sm:text-2xl sm:mx-48" style={{ fontFamily: "Inter" }}>
    StrikeReady offers a holistic, real-time view of security operations, empowering security teams to conduct continuous assessments with confidence.{" "}
   </h2>

   <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-start justify-center sm:mt-4 sm:justify-between w-full max-w-[1200px] px-3 sm:px-0">
    <div className="w-full px-4 py-2 flex  justify-center">
     <ul
      className="grid grid-cols-1 sm:mx-16 sm:gap-x-16  sm:grid-cols-1 gap-x-8 gap-y-4 sm:gap-y-7 list-disc list-inside text-left text-lg sm:text-2xl"
      style={{ fontFamily: "Inter" }}
     >
      <li>Assess your security and risk posture instantly and safely</li>
      <li>Mitigate threats precisely via AI assisted execution of countermeasures</li>
     </ul>
    </div>
    <img src={valid} alt="" style={{ verticalAlign: "middle", maxWidth: "100%", outline: "none" }} />
   </div>
  </div>
 );
}

export default Validation;
