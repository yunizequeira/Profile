import { projects } from "@/libs/const";
import Tittle from "../Tittle";
import CardProject from "./Card";

const Projects = () => {
  return (
    <div className="space-y-10 border-b border-black/10 py-10">
        <div className="text-center">
            <Tittle tittle="My Portfolio" subtittle="Visit my portfolio and keep your feedback" />
        </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10 ">
        {projects.map((item) => (
          <div key={item.name} className="">
            <CardProject key={item.name} {...item} subtitle = "web development" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
