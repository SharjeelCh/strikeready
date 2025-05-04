import React from "react";
import AutoText from "../../Components/AutoText";
import windoww from "../../assets/usecases/windoww.svg";

function Alert() {
 return (
  <div className="gap-y-5 sm:gap-y-10 flex items-center justify-center flex-col">
   <AutoText text={"Use Cases"} />
   <h1 className="font-bold text-white !text-3xl sm:!text-5xl sm:!mx-52 sm:text-inherit" style={{ fontFamily: "Inter" }}>Alert Resolution</h1>
   <h2 className="text-lg sm:text-2xl sm:mx-48" style={{ fontFamily: "Inter" }}>
    StrikeReady revolutionizes the alert resolution process by autonomously enriching, categorizing and prioritizing alerts according to their severity and
    relevance.{" "}
   </h2>

   <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-start justify-center sm:mt-4 sm:justify-between w-full max-w-[1200px] px-3 sm:px-0">
    <div className="w-full px-4 py-2 flex  justify-center">
     <ul
      className="grid grid-cols-1 sm:mx-16 sm:gap-x-16  sm:grid-cols-1 gap-x-8 gap-y-4 sm:gap-y-7 list-disc list-inside text-left text-lg sm:text-2xl"
      style={{ fontFamily: "Inter" }}
     >
      <li>Ingest alerts and data from every security asset</li>
      <li>Streamline threat intelligence application and alert handling</li>
      <li>Unify all teams required for response in a single platform</li>
      <li>Enhance threat visibility and risk management</li>
     </ul>
    </div>
    <img src={windoww} alt="" style={{ verticalAlign: "middle", maxWidth: "100%", outline: "none" }} />
   </div>
  </div>
 );
}

export default Alert;
