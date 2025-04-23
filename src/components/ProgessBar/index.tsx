'use client'
import { Progress } from "@/components/ui/progress"
import { useEffect,useState } from "react"

const ProgressBar = ({value,label}: {value: number,label: string}) => {
  const [progress, setProgress] = useState(0)
 
  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 1000)
    return () => clearTimeout(timer)
  }, [value])
 
  return (
    <div className="w-full  text-slate-300">
    <div className="flex justify-between text-sm mb-1">
      <span className="uppercase tracking-wide">{label}</span>
      <span>{value}%</span>
    </div>
    <div className="w-full h-3 rounded-full overflow-hidden">
      <Progress
        className="h-full"
        value={progress}
        aria-label="Progress"
      />
    </div>
  </div>
  )
}

export default ProgressBar
