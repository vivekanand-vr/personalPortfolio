import { javascript } from "../assets";
import { rentifyV, snackdashV, trackflowV, sigmanextV, codeblocksV, fitjourneyV } from "../assets";

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
    name: "Sigma Next",
    description: "Sigma Next is an e-learning platform that helps students improve their skills in DSA, competitive programming, quizzes, and code snippets. It features progress tracking, categorized challenges, and a scalable microservices architecture for seamless learning",
    video: sigmanextV,
    tags: ["Java", "React JS", "Spring Boot"],
    source_code_link: "https://sigmanext.netlify.app/"
  },
  {
    name: "Code Blocks",
    description: "A customizable React UI library offering reusable components categorized for easy access. Integrate directly into projects to streamline development and focus on business logic.",
    video: codeblocksV,
    tags: ["JavaScript", "React JS", "Tailwind CSS"],
    source_code_link: "https://github.com/vivekanand-vr/code_blocks",
  },
  {
    name: "Fit Journey",
    description: "Fit Journey is a fitness tracking app that records workouts, displays progress graphs, and manages exercise stats. It features a personalized dashboard with user insights and top workout records.",
    video: fitjourneyV,
    tags: ["Java", "React JS", "Spring Boot", "MySQL"],
    source_code_link: "https://github.com/vivekanand-vr/fit_journey",
  },
  {
    name: "Rentify",
    description: "A platform that streamlines the rental process by connecting property owners with tenants based on their needs. Designed to enhance efficiency in high-demand urban real estate markets, especially in the post-pandemic era.",
    video: rentifyV,
    tags: ["Java", "React JS", "Spring Boot"],
    source_code_link: "https://github.com/vivekanand-vr/Rentify",
  },
  {
    name: "TrackFlow",
    description: "A job application management platform with a clean interface for tracking and organizing applications. Features personalized dashboards and secure authentication for a tailored user experience.",
    video: trackflowV,
    tags: ["JavaScript", "React JS", "Tailwind CSS"],
    source_code_link: "https://github.com/vivekanand-vr/trackFlow",
  },
  {
    name: "Snack Dash",
    description: "A restaurant browsing platform with login, cart functionality, and efficient data management. Inspired by Swiggy, it enhances user interactions and continues to evolve with new features for added convenience and variety.",
    video: snackdashV,
    tags: ["JavaScript", "React JS", "Tailwind CSS"],
    source_code_link: "https://github.com/vivekanand-vr/snackdash.git",
  },
 
];

export { technologies, experiences, projects };