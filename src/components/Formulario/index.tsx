import React from "react";

const Formulario = () => {
  return (
    <form action="" className="py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2 mb-5">
          <div className="flex justify-start">
            <label
              htmlFor="name"
              className="uppercase text-xs text-slate-300 text-left"
            >
              Your Name
            </label>
          </div>
          <input
            id="name"
            type="text"
            className="p-3 w-full rounded-md bg-[#191b1e]  text-slate-300 shadow-md shadow-white/10"
          />
        </div>
        <div className="space-y-2 mb-5">
          <div className="flex justify-start">
            <label
              htmlFor="phone"
              className="uppercase text-xs text-slate-300 text-left"
            >
              Phone Number
            </label>
          </div>
          <input
            id="phone"
            type="text"
            className="p-3 w-full rounded-md bg-[#191b1e]  text-slate-300 shadow-md shadow-white/10"
          />
        </div>
      </div>
      <div className="space-y-2 mb-5">
        <div className="flex justify-start">
          <label
            htmlFor="email"
            className="uppercase text-xs text-slate-300 text-left"
          >
            Email
          </label>
        </div>
        <input
          id="email"
          type="email"
          className="p-3 w-full rounded-md bg-[#191b1e]  text-slate-300 shadow-md shadow-white/10"
        />
      </div>
      <div className="space-y-2 mb-5">
        <div className="flex justify-start">
          <label
            htmlFor="subject"
            className="uppercase text-xs text-slate-300 text-left"
          >
            Subject
          </label>
        </div>
        <input
          id="subject"
          type="text"
          className="p-3 w-full rounded-md bg-[#191b1e]  text-slate-300 shadow-md shadow-white/10 "
        />
      </div>
      <div className="space-y-2 mb-5">
        <div className="flex justify-start">
          <label
            htmlFor="message"
            className="uppercase text-xs text-slate-300 text-left"
          >
            Your Message
          </label>
        </div>
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          className="p-3 w-full rounded-md bg-[#191b1e]  text-slate-300 shadow-md shadow-white/10 resize-none"
        ></textarea>
      </div>
      <button className="w-full text-red-700 font-semibold uppercase other-gradient boxShadow shadow-md shadow-white/10 rounded-md p-3 hover:-translate-y-0.5 transition-transform duration-300 cursor-pointer">
        Send Message
      </button>
    </form>
  );
};

export default Formulario;
