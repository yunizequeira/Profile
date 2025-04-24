import { JSX } from "react"

const Card = ({icon,name,text}:{icon:JSX.Element,name:string,text:string}) => {
  return (
    <div className="py-16 px-10  another-gradient boxShadow rounded-md space-y-5 text-slate-300 max-w-[600px] mx-auto">
      <div className="text-red-700 text-4xl mb-5">{icon}</div>
      <div>
        <h3 className="text-3xl font-bold mb-5">{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Card
