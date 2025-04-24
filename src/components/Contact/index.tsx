import React from "react";
import Tittle from "../Tittle";
import ContactInfo from "./ContactInfo";
import Formulario from "../Formulario";

const Contact = () => {
  return (
    <div>
      <div className="text-center">
        <Tittle tittle="Contact With Me" subtittle="Contact" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-5">
          <ContactInfo />
          <div className="p-5 other-gradient boxShadow shadow-md shadow-white/10 rounded-md space-y-5 text-slate-300">
            <Formulario />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
