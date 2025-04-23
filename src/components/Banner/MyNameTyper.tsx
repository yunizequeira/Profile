"use client";
import { Typewriter } from "react-simple-typewriter";

const TypewriterText = ({color}:{color:string}) => {
  return (
    <div className="">
      <p className={` ${color}`}>
         
         a <Typewriter
          words={["Web Developer .","Professional Coder .","Frontend Enthusiast ."]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          cursorBlinking
        />
      </p>
    </div>
  );
};

export default TypewriterText;