import { javascript } from "../assets";
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
    name: "Node JS",
    icon: "https://devicon-website.vercel.app/api/nodejs/original.svg"
  },
  {
    name: "Express JS",
    icon: "https://devicon-website.vercel.app/api/express/original-wordmark.svg?color=%23FFFFFF"
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
    name: "junit5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original-wordmark.svg",
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
    name: "Apache Kafka",
    icon: "https://devicon-website.vercel.app/api/apachekafka/original-wordmark.svg?color=%23FFFCFD"
  },
  {
    name: "MySQL",
    icon: "https://devicon-website.vercel.app/api/mysql/original-wordmark.svg",
  },
  {
    name: "MongoDB",
    icon: "https://devicon-website.vercel.app/api/mongodb/original-wordmark.svg",
  },
  {
    name: "GraphQL",
    icon: "https://devicon-website.vercel.app/api/graphql/plain-wordmark.svg"
  } 
];

const experiences = [

  {
    title: "Software Developer",
    company_name: "E1 Consulting",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQEFX9q77L0pkg/company-logo_200_200/company-logo_200_200/0/1718343735792/e1_consulting_logo?e=2147483647&v=beta&t=eUSuuuTH44a-qCGCxOTkRK-0rx_Kd5WLfyBYqAPu2f8",
    iconBg: "#000000",
    date: "October 2024 - Present",
    points: [
      "Developed and maintained the Recognition Admin Application using React.js and Tailwind CSS, creating reusable components and implementing secure routing with restricted access, resulting in a 20% improvement in user efficiency.",
      "Built a scalable backend using Node.js and Express.js, integrating MySQL with Sequelize ORM for efficient database transactions, implementing JWT-based authentication and authorization, following MVC architecture.",
      "Ensured robust error handling and scalability by designing custom exceptions, optimizing backend queries, and implementing a modular code structure.",
      "Built and deployed 6+ Workday Extend applications from app catalog, using the App Builder to create PMD pages and workflows.",
    ],
  }, 
  
  {
    title: "SDE Intern - Frontend",
    company_name: "Amber",
    icon: "https://s3-eu-west-1.amazonaws.com/tpd/logos/579c87e70000ff000592e82f/0x0.png",
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
    title: "Full Stack Developer",
    company_name: "Freelance",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/upwork-icon.png",
    iconBg: "#1434A4",
    date: "January 2023 - January 2024",
    points: [
      "Designed and developed responsive landing pages using React.js and Bootstrap for a small-scale startup, improving client engagement",
      "Worked on Maven multi-module project, creating modules and packaging them into a single WAR file for deployment.",
      "Migrated two landing pages from HTML, CSS, and JavaScript to React.js, improving performance and maintainability.",
      "Assisted in maintaining and troubleshooting the application under the guidance of a mentor, ensuring smooth operations and deployment."
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