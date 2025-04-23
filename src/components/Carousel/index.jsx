"use client";
import { Card, CardContent } from "@/components/ui/card";
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
          <div className="flex gap-4 z-30">
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
            <CarouselItem key={index} className="lg:px-10 w-full">
              <div className="p-1">
                {/* <Card> */}
                  <CardContent className="w-full grid lg:grid-cols-2 gap-3 lg:p-6 h-full rounded-md">
                    <div className="h-full ">
                      <CardCarrousel
                        key={item.name}
                        {...item}
                        subtitle="web development"
                      />
                    </div>
                    <div>
                      <CardDescription
                        description={item.comment}
                        profession={item.profession}
                      />
                    </div>
                  </CardContent>
                {/* </Card> */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default MyPaginacion;
