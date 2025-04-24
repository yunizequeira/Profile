import Image from "next/image";
import { Card, CardContent} from "../ui/card";
import Link from "next/link";

const CardCarrousel = ({
  name,
  image,
  profession,
  url,
}: {
  name: string;
  image: string;
  profession: string;
  url: string;
}) => {
  return (
    <Card className="w-full max-w-96 mx-auto h-full flex items-center another-gradient boxShadow">
      <CardContent className="w-full h-full flex flex-col items-center justify-center gap-4">
        <Image
          src={image}
          width={500}
          height={500}
          alt="imagen"
          className="w-full h-64 rounded"
        />
        <p className="text-lg">{profession}</p>
        <h2 className="text-3xl font-bold">{name}</h2>
        <Link href={url} className="text-red-700 px-4 py-2 rounded-md  uppercase">
          profile
        </Link>
      </CardContent>
        
    </Card>
  );
};

export default CardCarrousel;
