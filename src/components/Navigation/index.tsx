"use client";
import { options } from "@/libs/const";
import {useMenu} from '@/store/menu'

const Navigation = () => {
  const {asignarId,id} = useMenu();
  const handleClick = (url: string) => {
    asignarId(url);
    document.getElementById(url)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <ul className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 h-full ">
      {options.map((option) => (
        <li key={option.id}>
          <p
            className={
              option.url === id
                ? "p-2 border-b-2 border-red-700 cursor-pointer"
                : "p-2 hover:border-b-2 hover:border-red-700 transition-colors duration-300 text-xl lg:text-base font-extralight text-slate-400 cursor-pointer"
            }
            onClick={() => handleClick(option.url)}
          >
            {option.name}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
