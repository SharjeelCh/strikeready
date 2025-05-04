import React from "react";
import "./index.css";
import NeoButton from "../../Components/NeoButton";

function Form() {
 return (
  <div className="main-bg flex px-2 sm:px-0 items-center justify-center min-h-screen bg-cover bg-center w-screen">
   <div className="mirror-bg sm:p-16 px-4 rounded-2xl shadow-xl min-w-full sm:min-w-3/4 gap-y-5 sm:gap-y-10 flex  flex-col">
    <h1 className="font-bold text-white !text-3xl  sm:!text-5xl  sm:text-inherit">See StrikeReady in Action</h1>
    <h2 className="text-lg sm:text-2xl " style={{ fontFamily: "Inter" }}>
     Request your StrikeReady demo today.{" "}
    </h2>
    <form className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 gap-6 text-white font-bold w-full">
     {/* form fields unchanged */}
     <div className="col-span-2 sm:col-span-1">
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" className="input-dark" placeholder="First Name" />
     </div>

     <div className="col-span-2 sm:col-span-1">
      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" className="input-dark" placeholder="Last Name" />
     </div>

     <div className="col-span-2 sm:col-span-1">
      <label htmlFor="jobTitle">Job Title</label>
      <input type="text" id="jobTitle" className="input-dark" placeholder="Job Title" />
     </div>

     <div className="col-span-2 sm:col-span-1">
      <label htmlFor="company">Company Name</label>
      <input type="text" id="company" className="input-dark" placeholder="Company Name" />
     </div>

     <div className="col-span-2 sm:col-span-1">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" className="input-dark" placeholder="Email" />
     </div>

     <div className="col-span-2 sm:col-span-1">
      <label htmlFor="phone">Phone Number</label>
      <input type="tel" id="phone" className="input-dark" placeholder="Phone Number" />
     </div>

     <div className="col-span-2">
      <label htmlFor="region">Region</label>
      <select id="region" className="input-dark">
       <option value="">Select...</option>
       <option value="NA">North America</option>
       <option value="EU">Europe</option>
       <option value="APAC">Asia Pacific</option>
       <option value="LATAM">Latin America</option>
      </select>
     </div>

     <div className="col-span-2">
      <label htmlFor="region">I am interested in:</label>
      <select id="region" className="input-dark">
       <option value="">Select...</option>

       <option value="">Contact Sales</option>
       <option value="NA">Partnership</option>
       <option value="EU">Other</option>
      </select>
     </div>
    </form>
    <div class="button-wrapper mt-4">
     <a
      class="button"
      target="_blank"
      className="!text-white !font-bold !px-4 py-[8px] sm:!py-[9px] text-lg sm:text-2xl !rounded-4xl hover:!text-black !bg-[#030712] !border-3 !border-grad-100 hover:!bg-linear hover:!bg-gradient-to-r hover:!from-grad-100 hover:!to-grad-300 !transition !duration-500 !ease-in-out"
     >
      <span> Request Demo</span>
     </a>
    </div>
   </div>
  </div>
 );
}

export default Form;
