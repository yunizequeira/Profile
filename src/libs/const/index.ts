type Option = {
  id: number;
  name: string;
  url: string;
};

export interface Options {
  options: Option[];
}
const options: Options["options"] = [
  {
    id: 1,
    name: "Home",
    url: "home",
  },
  {
    id: 2,
    name: "features",
    url: "features",
  },
  {
    id: 5,
    name: "Skills",
    url: "skills",
  },
  {
    id: 4,
    name: "Portfolio",
    url: "portfolio",
  },
  {
    id: 6,
    name: "Resume",
    url: "resume",
  },
  {
    id: 7,
    name: "Testimonials",
    url: "testimonials",
  },
  {
    id: 3,
    name: "Contact Us",
    url: "contact",
  },
];

const skills = {
  primary: [
    "html",
    "css",
    "javascript",
    "tailwind",
    "react",
    "nextjs",
    "node",
    "mongo",
    "sql",
    "ts",
  ],
  secundary: [
    "aws",
    "figma",
    "stripe",
    "pinteres",
    "chrome",
    "firefox",
    "ps",
    "vscode",
    "vercel",
    "github",
  ],
};

const projects = [
  {
    name: "Moreture",
    image: "/My-Projects/moreture.png",
    description:
      "At Moreture, we are proud to have an exceptional team of drivers who embody excellence and professionalism in every service we provide. With years of experience in the industry and an unwavering commitment to customer satisfaction, our drivers are the heart and soul of our company.",
    url: "https://www.moreturevegas.com/",
    values: {
      performance: 100,
      accessibility: 94,
      bestPractices: 96,
      seo: 100,
    },
    link: "https://pagespeed.web.dev/analysis/https-frontend-mentor-dessert-vercel-app/g3pq7gi6ko?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext",
  },
  {
    name: "AQB Towing Service",
    image: "/My-Projects/towing.png",
    description:
      "At AQB Towing, We take pride in delivering excellent service by getting our tow trucks on the road. We guarantee fast and reliable assistance, backed by a well-trained team and an unwavering commitment to customer satisfaction.",
    url: "https://www.aqbtowingservice.com/",
    values: {
      performance: 100,
      accessibility: 94,
      bestPractices: 96,
      seo: 100,
    },
    link: "https://pagespeed.web.dev/analysis/https-frontend-mentor-dessert-vercel-app/g3pq7gi6ko?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext",
  },
  {
    name: "Real Estate",
    image: "/My-Projects/real.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugiat nam libero voluptatum harum molestias iusto quo eius? Tempora amet corrupti reiciendis vitae, quidem expedita laboriosam qui rem facilis accusantium!",
    url: "https://realtor-firebase-lilac.vercel.app/",
    values: {
      performance: 100,
      accessibility: 94,
      bestPractices: 96,
      seo: 100,
    },
    link: "https://pagespeed.web.dev/analysis/https-frontend-mentor-dessert-vercel-app/g3pq7gi6ko?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext",
  },
  {
    name: "My Movies",
    image: "/My-Projects/movies.png",
    description:
      "In the vibrant heart of Las Vegas, we bring to life unforgettable experiences for the Latino community. We are more than event organizers; we are architects of moments that celebrate the rich diversity and joy of our culture.Our Picture a place where Latin music fills the air, where every corner is infused with the flavor and spirit of our traditions. At The 4K Group, we create gatherings that go beyond the ordinary, blending the excitement of music, dance, and gastronomy to deliver not just events, but true celebrations.",
    url: "https://mymovies-omega.vercel.app/",
    values: {
      performance: 100,
      accessibility: 96,
      bestPractices: 96,
      seo: 100,
    },
    link: "https://pagespeed.web.dev/analysis/https-frontend-mentor-dessert-vercel-app/g3pq7gi6ko?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext",
  },
  {
    name: "Travel Agent",
    image: "/My-Projects/travel.png",
    description:
      "Travels agenncy website that helps you to book your next trip",
    url: "https://travel-lilac-pi.vercel.app/",
    values: {
      performance: 99,
      accessibility: 93,
      bestPractices: 100,
      seo: 100,
    },
    link: "https://pagespeed.web.dev/analysis/https-travel-lilac-pi-vercel-app/vkzp6wr5v2?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext",
  },
  {
    name: "Dessert Shop",
    image: "/My-Projects/dessert.png",
    description:
      "Dessert shop website that helps you to buy your favorite desserts",
    url: "https://frontend-mentor-dessert.vercel.app/",
    values: {
      performance: 100,
      accessibility: 94,
      bestPractices: 96,
      seo: 100,
    },
    link: "https://pagespeed.web.dev/analysis/https-frontend-mentor-dessert-vercel-app/g3pq7gi6ko?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext",
  },
];

const primarySkills = [
  {
    name: "HTML",
    value: 95,
  },
  {
    name: "CSS",
    value: 95,
  },
  {
    name: "Javascript",
    value: 85,
  },
  {
    name: "React",
    value: 80,
  },
  {
    name: "Next.js",
    value: 80,
  },
];

const secondarySkills = [
  {
    name: "aws",
    value: 70,
  },
  {
    name: "vercel",
    value: 90,
  },
  {
    name: "stripe",
    value: 80,
  },
  {
    name: "photophop",
    value: 90,
  },
  {
    name: "github",
    value: 85,
  },
];

const perfiles = [
  {
    name:"Michael Brug",
    image:"/people/michael.jpg",
    url:"https://www.linkedin.com/in/michael-brug/",
    profession:"Frontend Developer",
    comment:"Working with Yunior has been a great experience. He’s a highly skilled frontend developer with a strong focus on performance, clean code, and user experience. He’s proficient in React and Next.js, and always brings thoughtful solutions to the table. Beyond his technical skills, he’s a great team player—collaborative, reliable, and always ready to support the team. Any development team would be lucky to have him."
  },{
    name :"Lionys Ruiz",
    image:"/people/Lionys.jpg",
    url:"https://www.linkedin.com/in/lionys-julio-ruiz-casanova",
    profession:"Backend Developer",
    comment:"Working with Yunior has been a great experience. He’s a highly skilled frontend developer with a strong focus on performance, clean code, and user experience. He’s proficient in React and Next.js, and always brings thoughtful solutions to the table. Beyond his technical skills, he’s a great team player—collaborative, reliable, and always ready to support the team. Any development team would be lucky to have him."
  },{
    name:"Yusvel Ibañez",
    image:"/people/Yusvel.jpg",
    profession:"Backend Developer",
    url:"https://www.linkedin.com/in/yusvel-ibañez-salas-502820198",
    comment:"Working with Yunior has been a great experience. He’s a highly skilled frontend developer with a strong focus on performance, clean code, and user experience. He’s proficient in React and Next.js, and always brings thoughtful solutions to the table. Beyond his technical skills, he’s a great team player—collaborative, reliable, and always ready to support the team. Any development team would be lucky to have him."
  },{
    name:"Reynier Arias",
    image:"/people/reynier.jpg",
    url:"https://www.linkedin.com/in/reyarias0421",
    profession:"IT Support Specialist",
    comment:"Working with Yunior has been a great experience. He’s a highly skilled frontend developer with a strong focus on performance, clean code, and user experience. He’s proficient in React and Next.js, and always brings thoughtful solutions to the table. Beyond his technical skills, he’s a great team player—collaborative, reliable, and always ready to support the team. Any development team would be lucky to have him."
  }
]

const education = [
  {
    name: "🎓 Bachelor of Science in Computer Science",
    place: "University of Informatics Sciences - Havana, Cuba",
    learn: [
      "Algorithms and data structures",
      "Software development & system architecture",
      "Agile methodologies and collaborative projects",
      "Foundation in JavaScript, HTML, CSS, and databases",
    ],
  },
  {
    name: "🎨 Modern CSS Course",
    place: "Udemy",
    learn: [
      "Flexbox and Grid layouts",
      "Responsive design techniques",
      "Animations, transitions, and custom variables",
    ],
  },
  {
    name: "💻 Advanced JavaScript Course",
    place: "Udemy",
    learn: [
      "Closures, Promises, Async/Await",
      "Advanced DOM manipulation",
      "Code optimization and best practices",
    ],
  },
  {
    name: "⚛️ Web Development with ReactJS",
    place: "Udemy",
    learn: [
      "Custom hooks & global state management",
      "Reusable components and routing",
      "Responsive design and API integration",
    ],
  },
  {
    name: "🌐 Next.js: The React Framework for Production",
    place: "Udemy",
    learn: [
      "Server-side rendering and static generation",
      "Performance and SEO optimization",
      "Dynamic routes and middleware usage",
    ],
  },

  {
    name: "🚀 Node.js and Express Course",
    place: "Udemy",
    learn: [
      "Building RESTful APIs",
      "Middleware and routing",
      "MongoDB integration and authentication",
    ],
  },
];
export { options, skills, projects, primarySkills, secondarySkills, education ,perfiles};
