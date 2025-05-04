import React from "react";
import AutoText from "../../Components/AutoText";
import buttonBg from "../../assets/button-bg.png";

function Collaborators() {
 const partners = [
  {
   url: "https://www.cisco.com/site/us/en/index.html",
   img: "https://strikeready.com/images/partner-logo1.svg",
  },
  {
   url: "https://www.crowdstrike.com/en-us/",
   img: "https://strikeready.com/images/partner-logo2.svg",
  },
  {
   url: "https://www.dragos.com/",
   img: "https://strikeready.com/images/partner-logo3.svg",
  },
  {
   url: "https://www.trellix.com/",
   img: "https://strikeready.com/images/Trellix_LOGO_Wht.svg",
  },
  {
   url: "https://www.fortinet.com/",
   img: "https://strikeready.com/images/partner-logo5.svg",
  },
  {
   url: "https://www.ibm.com/services/security",
   img: "https://strikeready.com/images/partner-logo6.svg",
  },
  {
   url: "https://www.infoblox.com/",
   img: "https://strikeready.com/images/partner-logo7.svg",
  },
  {
   url: "https://www.atlassian.com/software/jira",
   img: "https://strikeready.com/images/partner-logo8.svg",
  },
  {
   url: "https://www.vmware.com/",
   img: "https://strikeready.com/images/aws.svg",
  },
  {
   url: "https://www.manageengine.com/index-1.html",
   img: "https://strikeready.com/images/partner-logo10.svg",
  },
  {
   url: "https://www.microsoft.com/en-us/security/business/microsoft-defender",
   img: "https://strikeready.com/images/partner-logo11.svg",
  },
  {
   url: "https://www.netskope.com/",
   img: "https://strikeready.com/images/partner-logo12.svg",
  },
  {
   url: "https://www.paloaltonetworks.com/",
   img: "https://strikeready.com/images/partner-logo13.svg",
  },
  {
   url: "https://www.sentinelone.com/",
   img: "https://strikeready.com/images/partner-logo14.svg",
  },
  {
   url: "https://www.splunk.com/",
   img: "https://strikeready.com/images/partner-logo15.svg",
  },
  {
   url: "https://www.tenable.com/",
   img: "https://strikeready.com/images/partner-logo16.svg",
  },
 ];

 return (
  <div className="gap-y-5 sm:gap-y-10 flex items-center justify-center flex-col px-4">
   <AutoText text={"Technology Partners"} />
   <h1 className="font-bold text-white !text-3xl sm:!text-5xl sm:!mx-52 sm:text-inherit">Enhanced Collaboration</h1>
   <h2 className="text-lg sm:text-2xl sm:mx-48" style={{ fontFamily: "Inter" }}>
    We're known for our seamless integrations. With 400+ 2-way integrations and counting, we're constantly expanding our portfolio.
   </h2>

   {/* Cards */}
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl mt-8">
    {partners.map((partner, index) => (
     <a
      key={index}
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative bg-[#0C1021] border border-[#66D8B5] rounded-xl flex items-center justify-center p-6 h-40 overflow-hidden hover:bg-[#112333] transition ease-in-out duration-300"
     >
      {/* Glow Image */}
      <img src={buttonBg} alt="" className="absolute -bottom-2.5   left-0 w-full h-auto pointer-events-none" />

      {/* Partner Logo */}
      <img src={partner.img} alt="Tech Logo" className="max-h-12 z-10" />
     </a>
    ))}
   </div>
  </div>
 );
}

export default Collaborators;
