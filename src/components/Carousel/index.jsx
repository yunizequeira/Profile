"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { perfiles } from "@/libs/const";
import CardCarrousel from "./CardCarrousel";
import CardDescription from "./CardDescription";

const MyPaginacion = () => {
  return (
    <div className="">
      <Carousel className="w-full h-full ">
        <div className=" w-full z-20 flex justify-end">
          <div className="flex gap-4 z-30 pb-5">
            <div>
              <CarouselPrevious />
            </div>

            <div>
              <CarouselNext />
            </div>
          </div>
        </div>
        <CarouselContent>
          {perfiles.map((item, index) => (
            <CarouselItem
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2"
            >
              <div className="w-full lg:px-10 ">
                <CardCarrousel {...item} />
              </div>
              <div>
                <CardDescription {...item} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default MyPaginacion;
