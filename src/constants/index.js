import {
  javascript,
  html,
  css,
  tailwind,
  git,

  sb,
  mvc, 
  forms,
  wfa,
  snack,
  crm,
  monopoly,
  rentify,

  ineuron,
  amber,
} from "../assets";

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
    icon: sb,
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
      "Managed booking processes with partner properties on designated platforms, ensuring smooth transactions for customers.",
      "Resolved tickets within agreed timelines, maintaining customer satisfaction and operational efficiency.",
      "Engaged with the sales team through Slack, enabling efficient resolution of customer inquiries and issues."
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
    tags: [
      {
        name: "React JS, Redux, Spring Boot, MySQL",
        color: "#E5E4E2",
      },
    ],
    image: rentify,
    source_code_link: "https://github.com/vivekanand-vr/Rentify",
  },
  {
    name: "Monopoly",
    description:
      "An API based 2-player monopoly game which can be played by sending post requests and in response it displayes transaction messages.",
    tags: [
      {
        name: "React JS, Spring Boot, MySQL",
        color: "#E5E4E2",
      },
    ],
    image: monopoly,
    source_code_link: "https://github.com/vivekanand-vr/monopoly-2player",

  },

  {
    name: "Snack Dash",
    description:
      "Food delivery application by the functionality of the popular Swiggy platform, allows users to search restaurants and add cuisines to cart and checkout.",
    tags: [
      {
        name: "React JS, Redux Toolkit, Tailwind CSS",
        color: "#E5E4E2",
      },
    ],
    image: snack,
    source_code_link: "https://github.com/vivekanand-vr/snackdash.git",
  },

  {
    name: "Customer Relationship Manager",
    description:
      "This web application is built using Spring MVC and it efficiently manages customer details, empowering users to seamlessly add, update, or delete records.",
    tags: [
      {
        name: "Spring Boot, Thymleaf, MySQL",
        color: "#E5E4E2",
      },
    ],
    image: crm,
    source_code_link: "https://github.com/vivekanand-vr/crmSystem-thymleaf.git",
  },
  {
    name: "Profile Harbor",
    description: "Web application that provides a user-friendly interface for users to input their personal information, technical skills, preferences, and upload their resume.",
    tags: [
      {
        name: "React JS, Spring Boot, MySQL",
        color: "#E5E4E2",
      },
    ],
    image: forms,
    source_code_link: "https://github.com/vivekanand-vr/profileHarbor.git",
  },

  {
    name: "Student Management Portal",
    description:
      "A student management portal to facilitate CRUD operations on student records. Implemented MVC design pattern.",
    tags: [
      {
        name: "Java, JEE, Hibernate, MySQL",
        color: "#E5E4E2",
      },
    ],
    image: mvc,
    source_code_link: "https://github.com/vivekanand-vr/student_management_portal.git",
  },
 
];

export { technologies, experiences, projects };

/* Additional Projects
 {
    name: "Weather Forecast Application",
    description:
      "An application to display weather details according to city. Integrated OpenWeather APIs for real-time weather data retrieval",
    tags: [
      {
        name: "React JS, Tailwind CSS",
        color: "#E5E4E2",
      },
    ],
    image: wfa,
    source_code_link: "https://github.com/vivekanand-vr/weather-forecast-app.git",
  },
  
  
  */