import React from "react";
import AutoText from "../../Components/AutoText";
import NeoButton from "../../Components/NeoButton";
import './Team.css'
function Team() {
 return (
  <div className="bg-main gap-y-5 sm:gap-y-10 flex items-center justify-center flex-col">
   <AutoText text={"Careers"} />
   <h1 className="font-bold text-white !text-3xl sm:!text-5xl sm:!mx-52 sm:text-inherit">Join Our Dynamic Team</h1>
   <h2 className="text-lg sm:text-2xl sm:mx-48" style={{ fontFamily: "Inter" }}>
    We're dedicated to empowering our people, Strikers, to shape the future of digital security. If you're ready to make a difference and be part of a
    collaborative, fast-paced environment that values creativity and expertise, explore our career opportunities today.
   </h2>
   <NeoButton text="Contact Us" onclick={() => console.log("Demo requested")} />
  </div>
 );
}

export default Team;
