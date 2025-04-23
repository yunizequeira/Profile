import { primarySkills, secondarySkills } from "@/libs/const"
import ProgressBar from "../ProgessBar"
import Subtitle from "../Subtitle"

const Skills = () => {
  return (
    <div className="py-10 grid grid-cols-1 sm:grid-cols-2 border-b border-black/10">
    <div className="space-y-7 w-full p-5 lg:p-10">
      <div>
        <Subtitle tittle="Primary Skills" subtittle="features" />
      </div>
      {primarySkills.map((skill) => (
        <ProgressBar
          key={skill.name}
          value={skill.value}
          label={skill.name}
        />
      ))}
    </div>
    <div className="space-y-7 w-full p-5 lg:p-10">
      <div>
        <Subtitle tittle="Secondary Skills" subtittle="features" />
      </div>

      {secondarySkills.map((skill) => (
        <ProgressBar
          key={skill.name}
          value={skill.value}
          label={skill.name}
        />
      ))}
    </div>
  </div>
  )
}

export default Skills;
