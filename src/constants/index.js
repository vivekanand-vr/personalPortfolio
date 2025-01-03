import { javascript, ineuron, amber, e1 } from "../assets";
import { crmV, monopolyV, rentifyV, smpV, snackdashV, trackflowV } from "../assets";

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
    icon:  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg",
  },
  {
    name: "HTML 5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg", 
  },
  {
    name: "CSS 3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",   
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: "https://devicon-website.vercel.app/api/react/original-wordmark.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg",
  },
  {
    name: "Java",
    icon: "https://devicon-website.vercel.app/api/java/original-wordmark.svg",
  },
  {
    name: "spring",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
  },
  {
    name: "Docker",
    icon: "https://devicon-website.vercel.app/api/docker/original-wordmark.svg",
  },
  {
    name: "Redis",
    icon: "https://devicon-website.vercel.app/api/redis/original-wordmark.svg"
  },
  {
    name: "MySQL",
    icon: "https://devicon-website.vercel.app/api/mysql/original-wordmark.svg",
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
      "Developing custom Workday applications using Workday Extend and App Builder to meet client-specific needs and enhance functionality.",
      "Integrating and managing data across various systems through API integrations, enabling seamless data flow and efficient application performance.",
      "Writing PMD scripts to implement application-specific functionalities, ensuring smooth operation and tailored solutions.",
      "Working with Workday model components to create and customize business objects, business processes, and security domains, supporting complex business requirements.",
      "Actively participating in other development processes, collaborating with team members, and adhering to best practices in development and deployment."
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
    points:[
      "Simplifies the rental process by seamlessly connecting property owners with tenants based on their needs.",
      "Addresses the growing demand for real estate in high-population cities, making renting more efficient post-pandemic."
    ],
    video: rentifyV,
    source_code_link: "https://github.com/vivekanand-vr/Rentify",
  },
  {
    name: "TrackFlow",
    points:[
      "Streamlines job application management with a clean interface, making it easy to track and organize applications.",
      "Offers personalized dashboards and secure user authentication for a customized experience."
    ],
    video: trackflowV,
    source_code_link: "https://github.com/vivekanand-vr/trackFlow",
  },
  {
    name: "Monopoly",
    points:[
      "A two-player API based Monopoly game that can be played by sending API requests and transaction status will be recieved as response",
      "Includes a UI for playing ensuring an authentic game experience with interactive transaction messages",
    ],
    video: monopolyV,
    source_code_link: "https://github.com/vivekanand-vr/monopoly-2player",

  },

  {
    name: "Snack Dash",
    points:[
      "Delivers a seamless user experience with restaurant browsing, login, and cart functionality, inspired by Swiggy's popular interface.",
      "Efficiently manages restaurant data and user interactions, with more features in development to enhance convenience and variety.",
    ],
    video: snackdashV,
    source_code_link: "https://github.com/vivekanand-vr/snackdash.git",
  },

  {
    name: "Customer Relationship Manager",
    points:[
      "Facilitates smooth customer data management with seamless CRUD operations, enhancing operational efficiency.",
      "Combines dynamic web rendering with a modern, responsive interface for an intuitive and engaging user experience.",
    ],
    video: crmV,
    source_code_link: "https://github.com/vivekanand-vr/crmSystem-thymleaf.git",
  },

  {
    name: "Student Management Portal",
    points:[
      "Simplifies student record management with efficient CRUD operations, ensuring streamlined data handling and retrieval.",
      "Leverages the MVC architecture for clear separation of concerns and Hibernate for smooth database interaction.",
    ],
    video: smpV,
    source_code_link: "https://github.com/vivekanand-vr/student_management_portal.git",
  },
 
];

export { technologies, experiences, projects };