'use client';
import { useRef} from "react";
import {motion, useInView } from "framer-motion";

export function Section({ children ,id}: { children: React.ReactNode ,id:string}) { 
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.section
    id={id}
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="container mx-auto py-10 px-5 lg:px-10"
  >
    {children}
  </motion.section>
  );
}

