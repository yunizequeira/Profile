"use client";
import * as motion from "framer-motion/client";

export const DivAnimation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9,translateX:-500 }}
      animate={{ opacity: 1, y: 0, scale: 1 ,translateX:0}}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
