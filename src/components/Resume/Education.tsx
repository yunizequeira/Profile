import {motion} from "framer-motion";
import { education } from "@/libs/const";
import Subtitle from "../Subtitle";

const Education = () => {
  return (
   <div className="py-10">
    <Subtitle tittle="Education and certificates" subtittle="education"/>
     <motion.div
      initial={{ opacity: 0 , y:30}}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
     className="py-10 grid grid-cols-1 sm:grid-cols-2 gap-5 border-b border-black/10">
      {education.map((item) => (
        <div
          className="py-10 px-10 other-gradient boxShadow shadow-md shadow-white/10 rounded-md space-y-5 text-slate-300 max-w-[600px] w-full mx-auto"
          key={item.name}
        >
          <div className="py-5 border-b border-black/10 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              {item.name}
            </h3>
            <h4 className="text-sm font-semibold ">{item.place}</h4>
          </div>
          <ul>
            {item.learn.map((item) => (
              <li key={item} className="list-disc ">
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
   </div>
  );
};

export default Education;
