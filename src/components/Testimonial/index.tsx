import MyPaginacion from "../Carousel"
import Tittle from "../Tittle"

const Testimonials = () => {
  return (
    <div>
        <div className="text-center py-10">
            <Tittle tittle="Testimonials" subtittle="what my clients say" />
        </div>
        <div className="">
            <MyPaginacion />
        </div>
      
    </div>
  )
}

export default Testimonials
