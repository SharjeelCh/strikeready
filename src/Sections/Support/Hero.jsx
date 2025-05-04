import React from "react";

function Hero() {
 return (
  <div className="flex flex-col items-center gap-8 sm:gap-12 sm:px-16">
   <h1 className="font-bold !text-[#66D8B5] !text-4xl sm:!text-6xl sm:mx-4 sm:text-inherit">Client Success & Support</h1>
   <h2 className="text-lg sm:text-2xl">
    Your satisfaction is our top priority. Whether you have a simple question, want to suggest a feature or have a problem to solve, we are committed to
    ensuring you maximize your experience with StrikeReady products and services.{" "}
   </h2>
   <h2 className="text-lg sm:text-2xl font-bold mt-5 sm:mt-10">Multiple Support Channels – Choose Your Own Adventure </h2>
   <div className="w-full px-4 sm:px-32 py-2 flex justify-center">
    <ul
     className="grid grid-cols-1 sm:mx-16 sm:gap-x-16  sm:grid-cols-1 gap-x-8 gap-y-4 sm:gap-y-7 list-disc list-inside text-left text-lg sm:text-2xl"
     style={{ fontFamily: "Inter" }}
    >
     <li class="intro-text">Submit a request below, and our team will address your request as soon as possible.</li>
     <li class="intro-text">
      Visit us on{" "}
      <a
       href="https://join.slack.com/share/enQtNjg1OTExOTYyNDM0MC1mMzY2NGEwZjNkM2JkNzlhZWJkY2M2OTJkZmExMGM1YTU0ZmRjOWJlMjVkMjJlYTk5ZDE1YmNlMGI4ODNiZDI1"
       target="_blank"
       className="!text-green-400 hover:!text-blue-400 underline transition-all duration-300 ease-in-out"
      >
       Slack
      </a>{" "}
      - Ask questions, access resources and open a support request with an expert.
     </li>
    </ul>
   </div>
  </div>
 );
}

export default Hero;
