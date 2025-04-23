import Image from "next/image";
import { Card, CardContent, CardDescription } from "../ui/card";
import Link from "next/link";

const CardCarrousel = ({
  name,
  image,
  subtitle,
  url,
}: {
  name: string;
  image: string;
  subtitle: string;
  url: string;
}) => {
  return (
    <div className="h-full flex items-center">
      <Card className="other-gradient border border-slate-200/10 shadow-2xl shadow-white/10  mx-auto h-96">
        <CardContent className="rounded-md h-full">
          <div className="h-64 w-full rounded-md overflow-hidden">
            <Image
              src={image}
              width={500}
              height={500}
              alt="imagen"
              className="h-full w-full rounded-md group-hover:scale-105 transition-transform duration-300 "
            />
          </div>
        </CardContent>
        <CardDescription className="px-6 ">
          <div className="relative">
            <div className="w-full flex justify-between ">
              <p className="uppercase text-xs text-red-700 font-semibold ">
                {subtitle}
              </p>
            </div>

            <h3 className="text-2xl font-bold text-slate-300">{name}</h3>
            <Link
              href={url}
              target="_blank"
              className=" absolute top-0 right-2 px-3py-2"
            >
              <p className="text-red-700 text-xs text-center uppercase">
                profile
              </p>
            </Link>
          </div>
        </CardDescription>
      </Card>
    </div>
  );
};

export default CardCarrousel;
