'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ParallaxSection() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full pt-32 h-[500px] lg:h-[600px] relative overflow-hidden">
      <div className="w-full h-full rounded another-gradient boxShadow other-gradient"></div>

      <div
        className="w-full h-full absolute top-0 left-0 flex items-end justify-center px-4"
        style={{
          transform: `translateY(${offsetY * 0.3}px)`, // mueve más lento que el scroll (0.3 = intensidad)
          transition: "transform 0.1s ease-out",
          willChange: "transform",
        }}
      >
        <Image
          src="/people/Yuni.webp"
          alt="Yunior Zequeira"
          width={700}
          height={960}
          // priority
          className="max-h-full w-auto h-auto object-contain drop-shadow-xl"
        />
      </div>
    </div>
  );
}
