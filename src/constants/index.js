import { javascript, html, css, tailwind, git, springBoot, ineuron, amber, e1 } from "../assets";
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
    title: "Software Developer",
    company_name: "E1 Consulting",
    icon: e1,
    iconBg: "#000000",
    date: "October 2024 - Present",
    points: [
      "Developing custom applications within the Workday ecosystem using Workday App Builder, ensuring seamless integration with Workday processes.",
      "Utilizing Graph API, SOAP, and REST APIs to connect and manage data across various systems, enabling efficient application functionality.",
      "Working with Workday model objects and orchestrations to design scalable and optimized workflows that align with business requirements.",
      "Collaborating with cross-functional teams to integrate and test applications, while adhering to Workday's best practices for security and performance.",
    ],
  }, 
  
  {
    title: "SDE Intern - Frontend",
    company_name: "Amber",
    icon: amber,
    iconBg: "#FF0000",
    date: "February 2024 - July 2024",
    points: [
      "Redesigned the website footer for both web and mobile, improving responsiveness and accessibility.",
      "Integrated new, detailed property cards to boost user interaction and engagement by approximately 30%",
      "Redesigned the property page, incorporating image carousels and additional sections to enhance visual appeal and navigation.",
      "Built a reusable, custom UI component library from scratch to streamline future development and maintain design consistency.",
      "Fixed key bugs and collaborated with backend and product teams to enhance overall UI and UX, improving performance by 40%."
    ],
  }, 
  {
    title: "Full Stack Developer Intern",
    company_name: "iNeuron.ai",
    icon: ineuron,
    iconBg: "#1434A4",
    date: "January 2023 - January 2024",
    points: [
      "Led the back-end development of web applications using Spring Framework, JDBC, and Servlets, enhancing data processing efficiency by 30% through optimized integration with MySQL database.",
      "Developed dynamic and interactive user interfaces using React JS, boosting user engagement by 20 and reducing page load time by 15% for single-page applications.",
      "Collaborated with a team of 5 developers utilizing Git and GitHub for version control, improving code deployment speed by 25% and ensuring 100% successful feature rollouts.",
    ],
  },
];


const projects = [
  
  {
    name: "Rentify",
    description:
      "A platform that allows users to buy and sell their properties. It aims to bridge the gap between property owners and tenants.",
    video: rentifyV,
    source_code_link: "https://github.com/vivekanand-vr/Rentify",
  },
  {
    name: "TrackFlow",
    description:
      "TrackFlow is a simple and efficient job application tracking system that allows users to add, track, and manage their job applications with ease.",
    video: trackflowV,
    source_code_link: "https://github.com/vivekanand-vr/trackFlow",
  },
  {
    name: "Calendly",
    description:
      "Calendly is an event scheduling application which provides users with a calendar view to manage their events.",
    video: calendlyV,
    source_code_link: "https://github.com/vivekanand-vr/calendly",
  },
  {
    name: "Monopoly",
    description:
      "An API based 2-player monopoly game which can be played by sending post requests and in response it displayes transaction messages.",
    video: monopolyV,
    source_code_link: "https://github.com/vivekanand-vr/monopoly-2player",

  },

  {
    name: "Snack Dash",
    description:
      "Food delivery application by the functionality of the popular Swiggy platform, allows users to search restaurants and add cuisines to cart and checkout.",
    video: snackdashV,
    source_code_link: "https://github.com/vivekanand-vr/snackdash.git",
  },

  {
    name: "Customer Relationship Manager",
    description:
      "This web application that efficiently manages customer details, empowering users to seamlessly manage records.",
    video: crmV,
    source_code_link: "https://github.com/vivekanand-vr/crmSystem-thymleaf.git",
  },

  {
    name: "Student Management Portal",
    description:
      "A student management portal to facilitate CRUD operations on student records. Implemented MVC design pattern.",
    video: smpV,
    source_code_link: "https://github.com/vivekanand-vr/student_management_portal.git",
  },
 
];

export { technologies, experiences, projects };