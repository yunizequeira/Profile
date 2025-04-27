import Link from "next/link";
import TypewriterText from "../Banner/MyNameTyper";
import SocialMedia from "../SoacialMedia";

const InfoBanner = ({ font }: { font: string }) => {
  return (
    <div className="flex flex-col min-h-[500px] lg:min-h-[700px] py-3">
      <div className="space-y-7 py-10">
        <div className="">
          <p className="text-sm text-slate-300 uppercase font-semibold">
            Welcome to my world
          </p>
        </div>

        <div className={`${font} text-2xl sm:text-4xl  xl:text-5xl font-bold space-y-7`}>
          <h1>
            Hi, I{"'"}m Yunior Zequeira
          </h1>
          <div>
            <TypewriterText color="text-white" />
          </div>
        </div>
        <p className="text-slate-300 text-xl">
          I{"'"}m a frontend developer passionate about building modern, fast,
          and responsive web experiences. I specialize in React, Next.js, and
          TailwindCSS, helping businesses and entrepreneurs take their ideas to
          the next level.
        </p>
      </div>
      <div className="grid  space-y-5 gap-5 py-10 px-1 lg:px-5">
        <div className="flex justify-start">
            <Link
          href="/profile.pdf"
          target="_blank"
          download
          className=" py-3 px-5 another-gradient boxShadow inline-block rounded hover:scale-105 transition-transform duration-300 capitalize font-semibold text-red-700 text-lg shadow-md shadow-white/10"
        >
          Download my CV
        </Link>
        </div>
      
        <div className="space-y-5 ">
          <p className="text-slate-300 uppercase text-sm">find with me</p>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
