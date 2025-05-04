import React from "react";
import AutoText from "../../Components/AutoText";
import layerone from "../../assets/LayerOne.svg";
function Stack() {
 return (
  <div className="gap-y-5 sm:gap-y-10 flex items-center justify-center flex-col">
   <AutoText text={"How We Do It"} />
   <h1 className="font-bold text-white !text-3xl sm:!text-5xl sm:!mx-52 sm:text-inherit">Universal Integration For Every Security Tool In Your Stack</h1>
   <h2 className="text-lg sm:text-2xl sm:mx-48" style={{ fontFamily: "Inter" }}>
    Cross-platform integration breaks down information silos by enabling bi-directional flow of security intelligence.
   </h2>
   <img src={layerone} alt="" style={{ verticalAlign: "middle", maxWidth: "100%", outline: "none" }} />
   {/*use cases*/}
   <div className="w-full px-4 py-2 flex  justify-center">
    <ul className="grid grid-cols-1 sm:mx-32 sm:gap-x-16  sm:grid-cols-2 gap-x-8 gap-y-4 list-disc list-inside text-left text-lg sm:text-2xl" style={{ fontFamily: "Inter" }}>
     <li>Rapid deployment in hours not months</li>
     <li>Serverless infrastructure accommodating multiple tenants</li>
     <li>
      Hybrid architecture scales across any environment: Cloud, <br /> On-premise, Hybrid, IT/OT
     </li>
     <li>Unites siloed data across disparate systems at machine speed</li>
     <li>400+ 2-way integrations</li>
     <li>No vendor lock in</li>
    </ul>
   </div>
  </div>
 );
}

export default Stack;
