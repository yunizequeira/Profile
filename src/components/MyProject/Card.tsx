"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import HeartComponent from "./Heart";
import Image from "next/image";
import Link from "next/link";
import ProjectDescription from "../ProjectsDescriptions";
import Circularprogress from "../CircularProgress";
import { motion } from "framer-motion";

interface Project {
  name: string;
  image: string;
  description: string;
  url: string;
  values: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  link: string;
  subtitle: string;
}

const CardProject = ({ name, image, description, url, values,subtitle }: Project) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);
  return (
    <>
      <Card
        className="other-gradient border border-slate-200/10 shadow-2xl shadow-white/10  lg:mx-0 group cursor-pointer max-w-96 mx-auto"
        onClick={() => setOpen(!open)}
      >
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
            <div className="w-full  flex justify-between ">
              <p className="uppercase text-xs text-red-700 font-semibold ">
                {subtitle}
              </p>
              <div>
                <HeartComponent />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-300">{name}</h3>
          </div>
        </CardDescription>
      </Card>
      {open && (
        <motion.div
          initial={{ opacity: 0,y:30 }}
          animate={{ opacity: 1,y:0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
         className="w-screen h-screen fixed top-0 left-0  bg-[#212428] p-2 lg:p-10 rounded-md mt-20 lg:px-10 min-h-screen z-40 overflow-y-scroll text-slate-400 pb-16">
          <div className="xl:container mx-auto other-gradient shadow-2xl shadow-white/10 px-2 lg:px-10 rounded-2xl relative min-h-screen py-20">
            <div
              className="absolute top-5 right-5 rounded-full p-2 cursor-pointer bg-[#212428] w-10 h-10 flex items-center justify-center shadow-2xl shadow-white"
              onClick={() => setOpen(!open)}
            >
              <button className="text-red-700 font-bold text-xl cursor-pointer">X</button>
            </div>
            <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-5 border-b border-black/10">
              <figure className="p-5">
                <Image
                  src={image}
                  width={500}
                  height={500}
                  alt="imagen"
                  className=" lg:h-96 w-auto rounded-md"
                />
              </figure>

              <article className="space-y-5 p-5">
                <h2 className="text-xl lg:text-4xl font-bold text-slate-300">
                  {name}
                </h2>
                <p>{description}</p>
                <div className="grid grid-cols-4 h-32 lg:h-40 gap-2">
                  <Circularprogress
                    progress={values.performance}
                    text="Performance"
                  />
                  <Circularprogress
                    progress={values.accessibility}
                    text="Accessibility"
                  />
                  <Circularprogress
                    progress={values.bestPractices}
                    text="Best Practices"
                  />
                  <Circularprogress progress={values.seo} text="SEO-Friendly" />
                </div>
                <div className="">
                  <Link
                    href={url}
                    target="_blank"
                    download
                    className=" py-3 px-5 other-gradient inline-block rounded hover:scale-105 transition-transform duration-300  font-semibold text-red-700  shadow-md shadow-white/10 uppercase"
                  >
                    View project
                  </Link>
                </div>
              </article>
            </div>
            <div>
              <ProjectDescription />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default CardProject;
