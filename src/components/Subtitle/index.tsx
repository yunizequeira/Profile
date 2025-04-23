
const Subtitle = ({tittle,subtittle}:{tittle:string,subtittle?:string}) => {
  return (
    <>
    <p className=" text-red-700 font-semibold capitalize">{subtittle}</p>
     <h2 className="text-2xl lg:text-5xl font-semibold text-slate-300 capitalize">
      {tittle}
    </h2>
    </>
   
  )
}

export default Subtitle
