import MyPaginacion from "../Carousel"
import Tittle from "../Tittle"

const Testimonials = () => {
  return (
    <div className="border-b border-black/10 pb-10">
        <div className="text-center py-10 ">
            <Tittle tittle="Testimonials" subtittle="what my clients say" />
        </div>
        <div className="">
            <MyPaginacion />
        </div>
      
    </div>
  )
}

export default Testimonials
