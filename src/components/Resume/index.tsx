"use client";
import { useState } from "react";
import Tittle from "../Tittle";
import Skills from "./Skills";
import Education from "./Education";

const Resume = () => {
  const [selected, setSelected] = useState<string>("skills");
  return (
    <div>
      <div className="text-center mb-5">
        <Tittle tittle="My Resume" subtittle="Skills" />
      </div>
      {/* Menu */}
      <div className="other-gradient shadow-md shadow-white/10 rounded-md grid grid-cols-1 md:grid-cols-2">
        <button
          onClick={() => setSelected("skills")}
          className={
            selected === "skills"
              ? "w-full p-10 boxShadow rounded-md text-red-700 text-xl font-semibold cursor-pointer"
              : "w-full p-10 text-xl font-semibold text-slate-300 cursor-pointer hover:shadow-2xl hover:shadow-white/10 hover:rounded-md hover:text-red-700 hover:font-semibold transition-all duration-300"
          }
        >
          Professional Skills
        </button>
        <button
          onClick={() => setSelected("education")}
          className={
            selected === "education"
              ? "w-full p-10 boxShadow rounded-md text-red-700 text-xl font-semibold cursor-pointer"
              : "w-full p-10 text-xl font-semibold text-slate-300 cursor-pointer hover:shadow-2xl hover:shadow-white/10 hover:rounded-md hover:text-red-700 hover:font-semibold transition-all duration-300"
          }
        >
          Education
        </button>
        {/* <button
          onClick={() => setSelected("experience")}
          className={
            selected === "experience"
              ? "w-full p-10 shadow-2xl shadow-white/10 rounded-md text-red-700 text-xl font-semibold cursor-pointer"
              : "w-full p-10 text-xl font-semibold text-slate-300 cursor-pointer hover:shadow-2xl hover:shadow-white/10 hover:rounded-md hover:text-red-700 hover:font-semibold transition-all duration-300"
          }
        >
          Experience
        </button> */}
      </div>
      {selected === "skills" && <Skills/>}
      {selected === "education" && <Education/>}
    </div>
  );
};

export default Resume;
