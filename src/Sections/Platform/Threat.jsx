import React from "react";
import threatimg from "../../assets/threat-img.png";
function Threat() {
 return (
  <div className="gap-y-5 sm:gap-y-10 flex items-center justify-center flex-col px-4">
   <h1 className="font-bold text-white !text-3xl sm:!text-5xl sm:!mx-52 sm:text-inherit text-center">Threat Intelligence Exchange</h1>
   <h2 className="text-lg sm:text-2xl sm:mx-48 text-center" style={{ fontFamily: "Inter" }}>
    Empowers detection, prevention and response with curated threat intelligence feeds.{" "}
   </h2>
   <img src={threatimg} alt="" style={{ verticalAlign: "middle", maxWidth: "100%", outline: "none" }} />
   {/*use cases*/}
   <div className="w-full px-4 py-2 flex  justify-center">
    <ul
     className="grid grid-cols-1 sm:mx-32 sm:gap-x-16  sm:grid-cols-2 gap-x-8 gap-y-4 list-disc list-inside text-left text-lg sm:text-2xl"
     style={{ fontFamily: "Inter" }}
    >
     <li>100+ active threat intelligence sources</li>
     <li>Pre-built analysis engines, and sandbrowser</li>
     <li>Creates a united and interconnected cybersecurity information exchange</li>
     <li>Curated threat intelligence, campaign and attack scenarios, dark web, and patch advisories</li>
    </ul>
   </div>
  </div>
 );
}

export default Threat;
