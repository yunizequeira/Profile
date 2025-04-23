
const Tittle = ({tittle,subtittle}:{tittle:string,subtittle:string}) => {
  return (
    <div className="space-y-1">
        <p className="text-red-700 uppercase font-semibold">{subtittle}</p>
      <h2 className="text-4xl lg:text-7xl font-bold text-slate-300">{tittle}</h2>
    </div>
  )
}

export default Tittle
