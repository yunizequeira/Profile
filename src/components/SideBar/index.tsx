"use client";
import { IconMenu2 } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import LinkSide from "../LinkSide";
import * as motion from "framer-motion/client";

const SideBar = () => {
  const [open, setOpen] = useState<boolean | null>(null);
  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div>
      <div className="cursor-pointer lg:hidden">
        <div
          className="bg-slate-800/50 shadow rounded-full p-2"
          onClick={toggle}
        >
          <IconMenu2 size={32} className="text-red-700" />
        </div>
      </div>

      {open ? (
        <div className="fixed top-0 left-0 h-screen bg-black/60 shadow-sm w-full lg:hidden z-30 ">
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onClick={toggle}
            className="h-full w-full "
          >
            <LinkSide toogle={toggle} />
          </motion.div>
        </div>
      ) : (
        open === false && (
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 0, x: -500 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 h-screen bg-black/60 shadow-sm w-full lg:hidden z-30 "
            onClick={toggle}
          >
            <LinkSide toogle={toggle} />
          </motion.div>
        )
      )}
    </div>
  );
};

export default SideBar;
