import React, { useEffect, useState } from "react";
import "./AutoText.css";

function AutoText({ text }) {
 const [typedText, setTypedText] = useState("");
 const [currentWordIndex, setCurrentWordIndex] = useState(0);
 const words = text.split(" ");

 useEffect(() => {
  if (currentWordIndex < words.length) {
   const timer = setTimeout(() => {
    setTypedText((prevText) => prevText + " " + words[currentWordIndex]);
    setCurrentWordIndex((prevIndex) => prevIndex + 1);
   }, 350); 

   return () => clearTimeout(timer); // Cleanup on unmount or re-render
  }
 }, [currentWordIndex, words]);

 return (
  <h5 className="subtitle color-green secondary-font text-center items-center justify-center" style={{ fontFamily: "Roboto Mono", color: "#66D8B5" }}>
   <span className="typing-wrapper">
    <span>//</span>
    <span className="typing-text-ani visible" style={{letterSpacing: "0.06rem"}}>{typedText}</span>
   </span>
  </h5>
 );
}

export default AutoText;
