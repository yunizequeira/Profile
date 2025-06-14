import Image from "next/image";
const CardDescription = ({
  profession,
  comment,
}: {
  profession: string;
  comment: string;
}) => {
  return (
    <div className="w-full grid gap-4">
      <Image
        src="/Utils/comillas.png"
        width={100}
        height={100}
        alt="quote"
        className="h-auto w-24"
      />
      <div className="w-full another-gradient boxShadow p-10 rounded-2xl">
        <div className="py-5 border-b-2  border-black/10">
          <h3 className="text-2xl font-semibold text-white">{profession}</h3>
        </div>
        <p className="text-slate-300 text-lg pt-5">{comment}</p>
      </div>
    </div>
  );
};

export default CardDescription;
