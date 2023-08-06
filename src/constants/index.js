import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  bootstrap,
  sass,
} from "../assets";
import nifty from "../assets/nifty2.jpeg";
import banksit from "../assets/banksit.png";
import Omnifood from "../assets/Omnifood.jpg";

import kalbonyan from "../assets/company/ka.jpg";
import whynot from "../assets/company/whynot.png";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  // {
  //   title: "Web Developer",
  //   icon: web,
  // },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "Git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Full stack Developer Intern",
    company_name: "Kalbonyan Elmarsos",
    icon: kalbonyan,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Oct 2022",
    points: [
      "This is an online internship with mentoring from senior software engineers.",
      "Gives me  learning tasks that sculpted my software and programming skill.",
      "During this Internship I do about 6 projects now and taken 15 Project-Based courses.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Why Not Tech",
    icon: whynot,
    iconBg: "#383E56",
    date: "Feb 2023 - Apr 2023",
    points: [
      "worked as a freelance developer to create an e-commerce website for a client.",
      "I created a responsive and user-friendly e-commerce website using ReactJS.",
      "I focused on developing a seamless user experience and utilized React's component-based architecture to build complex UI elements. ",
      "The end result was a successful e-commerce website that met the client's needs and exceeded their expectations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Trending Movies",
    description:
      "Welcome to MTrend -  Our website is dedicated to bringing you the latest and greatest trending movies, TV shows, and popular celebrities from around the globe",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ahmedelgenius/Trending-movies-app",
    demo: "https://trending-movies-app.vercel.app/",
  },
  {
    name: "Nifty",
    description:
      " explore our website and learn more about the exciting world of Nifty! ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nifty,
    source_code_link: "https://github.com/ahmedelgenius",
    demo: "https://nifty-website-two.vercel.app/",
  },
  {
    name: "Bankist",
    description: "website for A simpler banking experience for a simpler life.",
    tags: [
      {
        name: "html",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
    ],
    image: banksit,
    source_code_link:
      "https://github.com/ahmedelgenius/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Jonas/Projects/Bankist-Site",
    demo: "https://bankist-site-ahmed.netlify.app/",
  },
  {
    name: "Omnifood",
    description: "The site is the landing page of a restaurant",
    tags: [
      {
        name: "html",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
    ],
    image: Omnifood,
    source_code_link:
      "https://github.com/ahmedelgenius/Kalbonyan-Elmarsos/tree/main/02-Udemy/-01-HTML-CSS-Jonas/Projects/Omnifood",
    demo: "https://omnifood-ahmedhany.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
