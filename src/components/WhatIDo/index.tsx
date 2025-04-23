import {
  IconDeviceLaptop,
  IconPalette,
  IconTrendingUp,
  IconTerminal2,
  IconDeviceMobile,
  IconSearch,
} from "@tabler/icons-react";
import Card from "./Card";
import Tittle from "../Tittle";

const whatIDoArray = [
  {
    id: 1,
    name: "Web Development",
    icon: <IconDeviceLaptop size={50} />,
    text: "I build modern, fast, and responsive websites, optimized for all devices and designed to offer the best user experience.",
  },
  {
    id: 2,
    name: "Logo Design",
    icon: <IconPalette size={50} />,
    text: "I create unique and memorable logos that capture your brand's essence and help you stand out from the competition.",
  },
  {
    id: 3,
    name: "Digital Marketing",
    icon: <IconTrendingUp size={50} />,
    text: "I implement effective strategies in social media, online advertising, and SEO to increase your visibility and attract more customers.",
  },
  {
    id: 4,
    name: "Web Developer",
    icon: <IconTerminal2 size={50} />,
    text: "As a web developer, I turn ideas into functional web apps using modern technologies like React, Next.js, and TailwindCSS.",
  },
  {
    id: 5,
    name: "Responsive Design",
    icon: <IconDeviceMobile size={50} />,
    text: "I ensure your website looks and works perfectly on any screen, from desktops to mobile phones.",
  },
  {
    id: 6,
    name: "SEO Optimization",
    icon: <IconSearch size={50} />,
    text: "I optimize your site to appear in top Google search results, boosting your organic traffic and online presence.",
  },
];

const WhatIDo = () => {
  return (
    <section className="py-10 space-y-10 ">
      <div className="text-center md:text-start">
        <Tittle tittle="What I Do" subtittle="Features" />
      </div>
        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {whatIDoArray.map((item) => (
          <Card
            key={item.id}
            icon={item.icon}
            name={item.name}
            text={item.text}
          />
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
