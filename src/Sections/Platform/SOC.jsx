import React from "react";
import AutoText from "../../Components/AutoText";

function SOC() {
 return (
  <div className="gap-y-5 sm:gap-y-10 flex items-center justify-center flex-col">
   <AutoText text={"Powering the Modern SOC"} />
   <h1 className="font-bold text-white !text-3xl sm:!text-5xl sm:mx-4 sm:text-inherit">
    Unify, Automate, Outsmart: StrikeReady's Next-Gen Security Command Center
   </h1>
   <p class=" text-[15px] sm:text-[27px] text-center sm:text-left" style={{ fontFamily: "Inter" }}>
    StrikeReady delivers a revolutionary, <strong>AI-powered</strong> security command center that is changing the way SOC teams work and defend. The platform
    is the first to be truly <strong>vendor neutral</strong> and <strong>seamless</strong>, providing a <strong>unified, end-to-end view</strong> of your entire
    security operation.
   </p>
   <p class="text-[15px] sm:text-[27px] text-center sm:text-left" style={{ fontFamily: "Inter" }}>
    {" "}
    <strong> Transform your SOC team into a proactive cyber task force </strong> by streamlining and centralizing security operations, empowering your team to{" "}
    <strong> optimize </strong> intelligence, <strong> automate </strong> alert handling and <strong> expedite </strong> incident response. StrikeReady’s user
    centric design provides <strong> dynamic insights and real-time guidance </strong> enabling your team to make smarter, faster decisions. The platform also
    continuously learns and evolves ensuring security teams stay ahead of the ever-changing threat landscape.
   </p>
  </div>
 );
}

export default SOC;
