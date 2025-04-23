import Image from "next/image";

const Imagen = () => {
  return (
    <div className="w-full pt-32 h-[500px] lg:h-[700px] relative">
      <div className="w-full h-full  rounded shadow-md shadow-white/10  gradiente other-gradient"></div>
      <div className="w-full h-full absolute top-0 left-0  flex items-center justify-center">
        <Image
          src="/people/Yuni.png"
          width={700}
          height={960}
          alt="imagen"
          className="h-full w-auto aspect-auto"
        />
      </div>
    </div>
  );
};

export default Imagen;
