import ContenedorIcon from "./ContenedorIcon";
import Subtitle from "@/components/Subtitle";
import { skills } from "@/libs/const";
import Image from "next/image";

const SkillBanner = () => {
  return (
    <section className="space-y-5 px-1 lg:px-5" >
      <div className="py-5 border-b border-black/10">
        <Subtitle tittle="About My Skill " />
      </div>
      <div className="space-y-5 py-10">
        <h5 className="uppercase">Primary skills on</h5>
        <div className="flex flex-wrap gap-4">
          {skills.primary.map((skill) => (
            <ContenedorIcon key={skill}><Image src={`/Icons/${skill}.png`} width={32} height={32} alt={skill} className="h-full w-auto mx-auto"/></ContenedorIcon>
          ))}
        </div>
      </div>
      <div className="space-y-5 py-10">
        <h5 className="uppercase">Secondary Skills on</h5>
        <div className="flex flex-wrap gap-4">
          {skills.secundary.map((skill) => (
            <ContenedorIcon key={skill}><Image src={`/Icons/${skill}.png`} width={128} height={192} alt={skill} className="h-auto w-24" /></ContenedorIcon>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillBanner;
