
const Subtitle = ({tittle,subtittle}:{tittle:string,subtittle?:string}) => {
  return (
    <>
    <p className=" text-red-700 font-semibold capitalize">{subtittle}</p>
     <p className="text-2xl lg:text-5xl font-semibold text-white capitalize">
      {tittle}
    </p>
    </>
   
  )
}

export default Subtitle
