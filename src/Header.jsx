import React, { useState } from "react";
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import logo from "./assets/logo.svg";
import "./App.css";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router";

export default function Header() {
 const [drawerOpen, setDrawerOpen] = useState(false);
 const [hoverOpen, setHoverOpen] = useState(false);
 const [drawerMenuOpen, setDrawerMenuOpen] = useState(false);
 const location = useLocation();

 const toggleDrawer = () => setDrawerOpen(!drawerOpen);

 const navLinks = [
  { label: "Platform", to: "/" },
  { label: "Use Cases", to: "/use-cases" },
  { label: "Partners", to: "/partners" },
  { label: "Company", to: "/company" },
  { label: "Support", to: "/support" },
 ];

 const resourcesLinks = [
  { label: "News", href: "#" },
  { label: "Blog", href: "/blog" },
  { label: "Resource Library", href: "#" },
 ];

 const isActive = (path) => location.pathname === path;

 return (
  <header className="fixed top-0 left-0 z-50 w-full bg-black text-white shadow-md px-4 py-3 sm:py-7 flex items-center justify-between sm:justify-center gap-x-14">
   <Link to="/">
    <img src={logo} alt="Logo" className="object-contain w-56 sm:w-fit sm:h-fit cursor-pointer" />
   </Link>
   <nav className="hidden lg:flex items-center gap-7">
    {navLinks.map(({ label, to }) => (
     <Link key={label} to={to} className={`relative !font-bold group ${isActive(to) ? "!text-[#66D8B5]" : "!text-white hover:!text-[#66D8B5]"}`}>
      {label}
      <span
       className={`absolute bottom-0 h-[1px] bg-[#66D8B5] transition-all duration-300 ease-in-out ${
        isActive(to) ? "left-0 w-full" : "left-1/2 w-0 group-hover:left-0 group-hover:w-full"
       }`}
      />
     </Link>
    ))}

    <div className="relative" onMouseEnter={() => setHoverOpen(true)} onMouseLeave={() => setHoverOpen(false)}>
     <button className="flex items-center gap-1 !bg-transparent relative !font-bold !text-white hover:!text-[#66D8B5] group hover:!border-0">
      Resources
      <span className="absolute left-1/2 bottom-0 h-[1px] w-0 bg-[#66D8B5] transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full" />
      {hoverOpen ? <FaChevronUp size={13} /> : <FaChevronDown size={13} />}
     </button>
     {hoverOpen && (
      <motion.div
       className="absolute top-full mt-0 w-40 bg-[#1C223B] border border-gray-700 p-2 z-10"
       initial={{ opacity: 0, y: -10 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: -10 }}
      >
       {resourcesLinks.map(({ label, href }) => (
        <Link key={label} to={href} className="relative block !font-bold !text-white hover:!text-[#66D8B5] group">
         {label}
         <span className="absolute left-1/2 bottom-0 h-[1px] w-0 bg-[#66D8B5] transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full" />
        </Link>
       ))}
      </motion.div>
     )}
    </div>

    <button className="text-white !font-bold px-4 py-1 !rounded-4xl hover:!text-black !bg-transparent !border-3 !border-grad-100 hover:!bg-linear hover:!bg-gradient-to-r hover:!from-grad-100 hover:!to-grad-300 !transition !duration-500 !ease-in-out">
     Get a Demo
    </button>
   </nav>

   <button className="lg:hidden text-2xl text-black !bg-gradient-to-r !from-grad-100 !to-grad-300 !p-1.5 !rounded-md" onClick={toggleDrawer}>
    <FaBars size={22} />
   </button>

   <AnimatePresence>
    {drawerOpen && (
     <motion.div
      className="fixed inset-0 z-5 bg-black bg-opacity-60"
      onClick={toggleDrawer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
     >
      <motion.div
       initial={{ x: "-100%" }}
       animate={{ x: 0 }}
       exit={{ x: "-100%" }}
       transition={{ duration: 0.3, ease: "easeInOut" }}
       className="fixed top-0 left-0 w-full h-full bg-black text-white shadow-md py-3 px-4 flex flex-col justify-start items-center gap-4"
       onClick={(e) => e.stopPropagation()}
      >
       <div className="flex items-center justify-between w-full mb-2">
        <img src={logo} alt="" className="object-contain w-56 sm:w-fit sm:h-fit cursor-pointer" />
        <button className="lg:hidden text-2xl text-black !bg-gradient-to-r !from-grad-100 !to-grad-300 !p-1.5 !rounded-md" onClick={toggleDrawer}>
         <AiOutlineClose size={22} />
        </button>
       </div>

       {navLinks.map(({ label, to }) => (
        <Link
         key={label}
         to={to}
         onClick={toggleDrawer}
         className={`relative !font-bold group ${isActive(to) ? "!text-[#66D8B5]" : "!text-white hover:!text-[#66D8B5]"}`}
        >
         {label}
         <span
          className={`absolute bottom-0 h-[1px] bg-[#66D8B5] transition-all duration-300 ease-in-out ${
           isActive(to) ? "left-0 w-full" : "left-1/2 w-0 group-hover:left-0 group-hover:w-full"
          }`}
         />
        </Link>
       ))}

       <div className="w-full flex flex-col items-center">
        <button
         onClick={() => setDrawerMenuOpen(!drawerMenuOpen)}
         className="flex items-center gap-2 !bg-transparent !font-bold !text-white hover:!text-[#66D8B5] group"
        >
         Resources
         {drawerMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {drawerMenuOpen && (
         <motion.div
          className="mt-2 w-full text-center flex flex-col gap-2 bg-[#1C223B] py-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
         >
          {resourcesLinks.map(({ label, href }) => (
           <Link key={label} to={href} className="relative block !font-bold !text-white hover:!text-[#66D8B5] group">
            {label}
            <span className="absolute left-1/2 bottom-0 h-[1px] w-0 bg-[#66D8B5] transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full" />
           </Link>
          ))}
         </motion.div>
        )}
       </div>

       <button className="text-white !font-bold px-3 py-0 !rounded-4xl !bg-[#0D1122] !border-3 !border-grad-100">Get a Demo</button>
      </motion.div>
     </motion.div>
    )}
   </AnimatePresence>
  </header>
 );
}
