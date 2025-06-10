"use client";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Formulario = () => {
  const { register, handleSubmit, reset } = useForm();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) {
      setTimeout(() => {
        setDone(false);
      }, 5000);
    }
  }, [done]);

  const onSubmit = (data: FieldValues) => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => setDone(true))
      .then(() => reset());
  };
  return (
    <form className="py-5" onSubmit={handleSubmit((data) => onSubmit(data))}>
      {done && (
        <div className="bg-[#191b1e] shadow-md shadow-white/10 rounded-md text-slate-300 max-w-[600px] mx-auto p-5">
          <p className="text-center">Your message has been sent</p>
        </div>
      )}
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
            {...register("name", { required: true })}
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
            {...register("phone", { required: true })}
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
          {...register("email", { required: true })}
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
          {...register("subject", { required: true })}
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
          id="message"
          cols={30}
          rows={10}
          className="p-3 w-full rounded-md bg-[#191b1e]  text-slate-300 shadow-md shadow-white/10 resize-none"
          {...register("message", { required: true })}
        ></textarea>
      </div>
      <button className="w-full text-red-700 font-semibold uppercase other-gradient boxShadow shadow-md shadow-white/10 rounded-md p-3 hover:-translate-y-0.5 transition-transform duration-300 cursor-pointer">
        Send Message
      </button>
    </form>
  );
};

export default Formulario;
