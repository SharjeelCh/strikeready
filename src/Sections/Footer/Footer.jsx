import React from "react";
import logo from "../../assets/logo.svg";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";
import footer1 from "../../assets/footer/footer logo 1.svg";
import footer2 from "../../assets/footer/footer logo 2.svg";
import footer3 from "../../assets/footer/footer logo 3.svg";
import footer4 from "../../assets/footer/footer logo 4.svg";

function Footer() {
 return (
  <div className="w-screen px-0 sm:px-68  bg-[#0C1021]">
   <header className="w-full text-white shadow-md px- py-9 sm:py-9 flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-y-6 sm:gap-y-0 sm:gap-x-24">
    {/* Logo */}
    <div className="flex flex-col gap-y-6">
     <img src={logo} alt="Logo" className="object-contain w-48 sm:w-fit sm:h-fit" />
     <h5 className=" color-green  text-center sm:text-left justify-center text-md sm:text-lg" style={{ fontFamily: "Roboto Mono", color: "#66D8B5" }}>
      Powering the Modern SOC{" "}
     </h5>
    </div>
    {/* Responsive, wrapping Nav */}
    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-screen-md">
     {["Platform", "Use Cases", "Partners", "Company", "Contact Us", "Request a Demo", "News", "Blog"].map((item) => (
      <a key={item} href="#" className="relative !text-sm sm:!text-inherit !font-bold !text-white hover:!text-[#66D8B5] group">
       {item}
       <span className="absolute left-1/2 bottom-0 h-[1px] w-0 bg-[#66D8B5] transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full" />
      </a>
     ))}
    </nav>
   </header>
   {/* Footer icons Section */}
   <div className="w-full text-white shadow-md px- py-9 sm:py-7 flex flex-col sm:flex-row items-center sm:items-center sm:justify-between gap-y-6 sm:gap-y-0 sm:gap-x-24">
    <span className="flex flex-row gap-x-4 justify-center items-center">
     <a href="">
      <FaLinkedin className="text-white text-3xl" />
     </a>
     <a href="">
      <FaFacebook className="text-white text-3xl" />
     </a>
     <a href="">
      <FaTwitter className="text-white text-3xl" />
     </a>
     <a href="">
      <FaYoutube className="text-white text-3xl" />
     </a>
    </span>
    <span className="flex flex-row gap-x-4 justify-center items-center">
     <img src={footer1} alt="" className="w-12 h-12 object-contain sm:w-16 sm:h-16" />
     <img src={footer2} alt="" className="w-12 h-12 object-contain sm:w-16 sm:h-16" />
     <img src={footer3} alt="" className="w-12 h-12 object-contain sm:w-16 sm:h-16" />
     <img src={footer4} alt="" className="w-12 h-12 object-contain sm:w-16 sm:h-16" />
    </span>
   </div>
   {/* Copyright */}
   <div className="w-full text-white shadow-md px- py-9 sm:py-7 flex flex-col sm:flex-row items-center sm:items-center sm:justify-between gap-y-6 sm:gap-y-0 sm:gap-x-24">
   <span className="flex flex-row gap-x-4 justify-center items-center">

    {["Terms", "Privacy"].map((item) => (
     <a key={item} href="#" className="relative !text-sm sm:!text-inherit !font-bold !text-white hover:!text-[#66D8B5] group">
      {item}
      <span className="absolute left-1/2 bottom-0 h-[1px] w-0 bg-[#66D8B5] transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full" />
     </a>
    ))}
    </span>
    <p className="text-center text-sm sm:text-base text-white">© 2024 StrikeReady. All Rights Reserved.</p>
   </div>
  </div>
 );
}

export default Footer;
