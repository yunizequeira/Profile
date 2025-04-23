"use client";
import { IconMenu2 } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import LinkSide from "../LinkSide";

const SideBar = () => {
  const [open, setOpen] = useState(false);
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
        <div className="bg-slate-800/50 shadow rounded-full p-2" onClick={toggle}>
          <IconMenu2 size={32}  className="text-red-700" />
        </div>
      </div>

      {open && (
        <div className="fixed top-0 left-0 h-screen bg-black/60 shadow-sm w-full lg:hidden z-30 " onClick={toggle}>
          <LinkSide toogle={toggle} />
        </div>
      )}
    </div>
  );
};

export default SideBar;
