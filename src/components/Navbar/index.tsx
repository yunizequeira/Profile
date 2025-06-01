import Image from "next/image";
import Navigation from "../Navigation";
import SideBar from "../SideBar";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full lg:relative px-10 py-2 h-20 shadow text-white bg-[#212428] uppercase">
        <div className="w-full container mx-auto h-full flex justify-between items-center p-2 md:p-0">
          <Link href="/">
            <Image src={"/Icons/logo.png"} width={50} height={50} alt="logo" />
          </Link>
          <div className="">
            <SideBar />
          </div>
          <div className="lg:block hidden ">
              <Navigation />
            </div>
        </div>
      </div>
  );
};

export default Navbar;
