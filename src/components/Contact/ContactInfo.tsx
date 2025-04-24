import Image from "next/image";
import React from "react";
import SocialMedia from "../SoacialMedia";

const ContactInfo = () => {
  return (
    <div className="p-5 other-gradient boxShadow shadow-md shadow-white/10 rounded-md space-y-5 text-slate-300 max-w-[600px] w-full mx-auto">
      <div className="group">
        <div className="h-72 w-full rounded-2xl overflow-hidden">
          <Image
            src="/Utils/close-bussines.jpg"
            alt="contact"
            width={500}
            height={500}
            className="w-full h-full rounded-2xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-5 py-5 px-2">
          <h3 className="text-2xl font-semibold text-white">
            Yunior Zequeira Moreno
          </h3>
          <div className="text-slate-300 space-y-3 lg:text-lg">
            <p className="text-slate-300 lg:text-lg">Frontend Web Developer</p>
            <p>
              I am available for freelance work. Connect with me via and call in
              to my account.{" "}
            </p>
            <p>Phone: +1 (702) 415-0982</p>
            <p>Email: yunizequeira@gmail.com</p>
            <p>Location: Las Vegas, NV</p>
          </div>
          <div className="flex justify-center">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
