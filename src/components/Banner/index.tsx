import Imagen from "../Imagen";
import InfoBanner from "../InfoBanner";

const Banner = ({ font }: { font: string }) => {
  return (
    <section  className="flex justify-center minh-[calc(100vh-100px)]">
      <div className=" relative z-10  text-white flex flex-col lg:flex-row-reverse gap-6 container lg:py-10">
        <div className="lg:w-1/2 flex justify-center items-center px-5 lg:px-10">
          <Imagen />
        </div>
        <div className="lg:w-2/3 h-full px-5">
          <InfoBanner font={font} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
