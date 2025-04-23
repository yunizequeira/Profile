"use client";
import { options } from "@/libs/const";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import SocialMedia from "../SoacialMedia";
import { useMenu } from "@/store/menu";

const LinkSide = ({ toogle }: { toogle: () => void }) => {
  const {asignarId,id} = useMenu();
    const handleClick = (url: string) => {
      asignarId(url);
      toogle();
      document.getElementById(url)?.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <div className="w-3/4 bg-[#212428] h-full flex justify-between items-start relative overflow-y-scroll">
      <ul className="w-full flex flex-col lg:flex-row gap-8 h-full max-w-96 px-5 py-10">
        <Link href={"/"}>
          <Image src={"/Icons/logo.png"} width={50} height={50} alt="logo" />
        </Link>
        {options.map((option) => (
          <li key={option.id}>
            <p
              className={
                option.url === id ? "p-2 text-red-700 cursor-pointer" : "p-2 text-white transition-colors duration-300 text-xl lg:text-base font-extralight cursor-pointer"
              }
              onClick={() => handleClick(option.url)}
            >
              {option.name}
            </p>
          </li>
        ))}
        <div className="space-y-5 py-5 border-t border-slate-200/10">
          <p className="text-slate-300 uppercase text-sm">find with me</p>
          <SocialMedia />
        </div>
      </ul>
      <div className="p-2 absolute top-2 right-2 ">
        <div
          className="bg-slate-800/50 to-white shadow rounded-full p-2 cursor-pointer"
          onClick={toogle}
        >
          <IconX size={32} className="text-red-700" />
        </div>
      </div>
    </div>
  );
};

export default LinkSide;
