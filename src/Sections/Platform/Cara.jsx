import React from "react";
import AutoText from "../../Components/AutoText";
import cara from "../../assets/Cara.svg";
import arrowedpc from '../../assets/arrowedpc.png';
import arrowedmobile from '../../assets/arrowedmobile.png';

function Cara() {
 return (
  <div className="gap-y-5 sm:gap-y-10 flex items-center justify-center flex-col">
   <AutoText text={"AI-Powered Analyst: CARA"} />
   <h1 className="font-bold text-white !text-3xl sm:!text-5xl sm:mx-4 sm:text-inherit">AI Efficiency Empowering Human Brilliance </h1>
   <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-center justify-center sm:justify-between w-full max-w-[1200px] px-3 sm:px-0">
    <img src={cara} alt="" style={{ verticalAlign: "middle", maxWidth: "100%", outline: "none" }} />
    <div className="space-y-6 sm:space-y-12">
     <p class=" text-[15px] sm:text-[27px] text-left" style={{ fontFamily: "Inter" }}>
      Introducing CARA, the world's first Cyber AI Response Analyst, built natively into the StrikeReady platform. This virtual, conversational AI-powered
      analyst seamlessly integrates with your workflow, acting as your <strong> expert advisor, threat hunter and incident responder.</strong>
     </p>
     <p class="text-[15px] sm:text-[27px] text-left" style={{ fontFamily: "Inter" }}>
      <strong>Eliminate the burden of repetitive tasks. </strong> CARA is engineered to automate these aspects of security operations, enabling your security
      team to focus on addressing complex challenges and driving innovation.
     </p>
     <p class="text-[15px] sm:text-[27px] text-left" style={{ fontFamily: "Inter" }}>
      <strong> Unleash the power of AI. </strong> Unlike conventional point solutions that offer limited AI coverage or bind you to proprietary technologies,
      CARA offers a <strong> holistic understanding </strong> of your end-to-end security landscape. CARA was built to become an integral part of the analyst
      experience by informing, accelerating and advising your team with the insights needed to make informed decisions and stay ahead of an ever-evolving threat
      landscape.
     </p>
    </div>
   </div>
   {/*arrow cards*/}
   <img src={arrowedpc} alt="" className="w-full hidden sm:block object-cover"/>
    <img src={arrowedmobile} alt="" className="w-full sm:hidden object-cover"/>
  </div>
 );
}

export default Cara;
