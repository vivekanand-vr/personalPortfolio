import { javascript, html, css, tailwind, git, springBoot, mvc, snack, crm,
         monopoly, rentify, ineuron, amber } from "../assets";
import { calendlyV, crmV, monopolyV, rentifyV, smpV, snackdashV, trackflowV } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "git",
    icon:  git,
  },
  {
    name: "HTML 5",
    icon:  html, 
  },
  {
    name: "CSS 3",
    icon:  css,   
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: "https://devicon-website.vercel.app/api/react/original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Java",
    icon: "https://devicon-website.vercel.app/api/java/original.svg",
  },
  {
    name: "spring",
    icon: springBoot,
  },
  {
    name: "Docker",
    icon: "https://devicon-website.vercel.app/api/docker/original-wordmark.svg",
  },
  {
    name: "MySQL",
    icon: "https://devicon-website.vercel.app/api/mysql/original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://devicon-website.vercel.app/api/mongodb/original-wordmark.svg",
  }, 
];

const experiences = [
  
  {
    title: "Operations Support Intern",
    company_name: "Amber",
    icon: amber,
    iconBg: "#FF0000",
    date: "May 2024 - August 2024",
    points: [
      "Redesigned the website footer for both web and mobile, improving responsiveness and accessibility.",
      "Integrated new, detailed property cards to boost user interaction and engagement by approximately 30%",
      "Redesigned the property page, incorporating image carousels and additional sections to enhance visual appeal and navigation."
    ],
  }, 
  {
    title: "Full Stack Developer Intern",
    company_name: "iNeuron.ai",
    icon: ineuron,
    iconBg: "#1434A4",
    date: "January 2023 - January 2024",
    points: [
      "Employed React for the development of dynamic and interactive user interfaces in single-page applications.",
      "Contributed to the backend devlopment of web applications using Spring framework, JDBC, Servlets and integrated MySQL database to store and retrieve data.",
      "Collaborated with team members using version control systems like Git and GitHub.",
      "Engaged in continuous learning and exploration of emerging technologies and best practices.",
    ],
  },
];


const projects = [
  {
    name: "Rentify",
    description:
      "A platform that allows users to buy and sell their properties. It aims to bridge the gap between property owners and tenants.",
    image: rentify,
    video: rentifyV,
    source_code_link: "https://github.com/vivekanand-vr/Rentify",
  },
  {
    name: "Monopoly",
    description:
      "An API based 2-player monopoly game which can be played by sending post requests and in response it displayes transaction messages.",
    image: monopoly,
    video: monopolyV,
    source_code_link: "https://github.com/vivekanand-vr/monopoly-2player",

  },

  {
    name: "Snack Dash",
    description:
      "Food delivery application by the functionality of the popular Swiggy platform, allows users to search restaurants and add cuisines to cart and checkout.",
    image: snack,
    video: snackdashV,
    source_code_link: "https://github.com/vivekanand-vr/snackdash.git",
  },

  {
    name: "Customer Relationship Manager",
    description:
      "This web application is built using Spring MVC and it efficiently manages customer details, empowering users to seamlessly add, update, or delete records.",
    image: crm,
    video: crmV,
    source_code_link: "https://github.com/vivekanand-vr/crmSystem-thymleaf.git",
  },

  {
    name: "Student Management Portal",
    description:
      "A student management portal to facilitate CRUD operations on student records. Implemented MVC design pattern.",
    image: mvc,
    video: smpV,
    source_code_link: "https://github.com/vivekanand-vr/student_management_portal.git",
  },
 
];

export { technologies, experiences, projects };