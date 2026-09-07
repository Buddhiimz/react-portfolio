export const HERO_CONTENT = `I am a passionate Full Stack Developer with a strong focus on building robust, scalable, and user-friendly web applications. I’m skilled in front-end technologies like ReactJS, NextJS, and Angular, as well as back-end technologies such as Node.js, Express.js, .NET, and PHP. I also have experience with databases like MySQL, MSSQL, and MongoDB. My goal is to leverage my technical expertise to create innovative solutions that enhance performance, drive business growth, and deliver exceptional user experiences.`;

export const CONTACT = {
  address: "Plot.12, Prime Princess, Hawpigewatta, Poddala, Galle, Sri Lanka",
  phoneNo: "+94 76 5831021 ",
  email: "buddhima.v.dev@gmail.com",
};

import FProject1 from "../assets/projects/FProject1.png";
import FProject2 from "../assets/projects/FProject2.png";
import FProject3 from "../assets/projects/FProject3.png";
import Alankara from "../assets/projects/Alankara.png";
import SmartJob from "../assets/projects/SmartJob.png";
import SBBOxygen from "../assets/projects/sbb.png";
import PremoHeritage from "../assets/projects/premo.png";
import Orbi from "../assets/projects/orbi.png";

export const PROJECTS = [
  {
    id: 1,
    product: true,
    title: "ORBI – AI Website Companion",
    description:
      "My own product: a drop-in AI robot companion that lives on a website, reacts to what a visitor does, guides them between sections and answers questions about the business in plain language. A 12-phase personality engine (flight, docking, section reactions, synthesised sound, hidden Easter eggs) runs fully deterministic with zero API calls \u2014 only \u201cAsk\u201d reaches an LLM, and the model can never touch the page: it returns one of six validated enum actions, with a knowledge base generated from the site\u2019s own data so prices never go stale. ~19K lines across 41 files, 210 tests, pluggable Anthropic/Gemini providers, and three licensed tiers.",
    image: Orbi,
    technologies: [
      "Next.js",
      "React 19",
      "TypeScript",
      "GSAP",
      "Tailwind CSS",
      "Anthropic SDK",
      "Google Gemini",
      "Web Audio API",
    ],
    link: "www.caliburlabz.com/orbi",
    category: "AI Product",
  },
  {
    id: 2,
    client: true,
    title: "SBB Oxygen House – Industrial Gas E-Commerce Platform",
    description:
      "E-commerce platform for an industrial gas and welding equipment supplier, built as a TypeScript monorepo with a public storefront, admin dashboard and REST API. Built a Next.js storefront with product catalog, search, cart and full checkout, backed by a NestJS + Prisma + PostgreSQL API with JWT auth, role-based access and PayHere payments. Delivered an admin dashboard for products, inventory, orders and reports, deployed to a Hetzner VPS with a GitHub Actions CI pipeline.",
    image: SBBOxygen,
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "PayHere",
      "Cloudinary",
      "Nginx",
      "PM2",
      "GitHub Actions",
    ],
    link: "https://sbboxygen.com/",
    category: "Full Stack Development",
  },
  {
    id: 3,
    client: true,
    title: "Premo Heritage Villa – Luxury Villa Booking Website",
    description:
      "Developed a luxury heritage villa website with an immersive hero experience, gallery, nearby destinations guide and an online booking and enquiry flow. Built with Next.js for image-optimised, responsive pages across mobile and desktop, backed by Firebase for booking data and content storage, and deployed on Vercel for global edge delivery and instant preview deployments.",
    image: PremoHeritage,
    technologies: [
      "Next.js",
      "Firebase",
      "Vercel",
      "Tailwind CSS",
      "Framer Motion",
    ],
    link: "https://www.premoheritage.com/",
    category: "Full Stack Development",
  },
  {
    id: 4,
    client: true,
    title: "Alankara Interior Web Application",
    description:
      "Developed a responsive web application for Alankara Interior using WordPress, combining static pages with dynamic content powered by Advanced Custom Fields (ACF). Implemented custom SCSS styling for a modern, responsive layout and optimized performance using browser developer tools before deployment to enhance overall user experience.",
    image: Alankara,
    technologies: [
      "HTML",
      "SCSS",
      "JavaScript",
      "Bootstrap",
      "Wordpress",
    ],
    link: "https://dev.alankara.itqubes.lk/",
    category: "Web Development",
  },  {
    id: 5,
    client: true,
    title: "Smart Job Web Application",
    description:
      "Developed a responsive Smart Job web application using WordPress, featuring both static and dynamic pages to manage job listings and content efficiently. Implemented custom SCSS for responsive UI design, and optimized performance and responsiveness using browser developer tools prior to deployment.",
    image: SmartJob,
    technologies: [
      "HTML",
      "SCSS",
      "JavaScript",
      "Bootstrap",
      "Wordpress",
    ],
    link: "https://staging.smartjobssl.lk/",
    category: "Web Development",
  },
  {
    id: 6,
    client: true,
    title: "GreenGleam Cleaning Platform",
    description:
      "Built a booking management platform with flexible scheduling, real-time validation, and checkout integration, enabling 100+ users to book services with a 99% success rate. Implemented service-type-based discount logic and integrated Google Review widget for customer feedback.",
    image: FProject3,
    technologies: [
      "HTML",
      "PHP",
      "JavaScript",
      "MySQL",
      "Bootstrap",
      "WordPress",
    ],
    link: "https://greengleam.com.au/",
    category: "Web Development",
  },
  {
    id: 7,
    client: true,
    title: "illumin-labs Portfolio Web Application",
    description:
      "Developed a responsive portfolio website with modern UI/UX using React and Tailwind CSS. Implemented project showcase, smooth animations, and integrated contact form with EmailJS. Improved Lighthouse performance score by 20% through image compression.",
    image: FProject2,
    technologies: [
      "ReactJS",
      "Tailwind CSS",
      "JavaScript",
      "EmailJS",
      "Framer Motion",
    ],
    link: "https://illuminlabs.net/",
    category: "Full Stack Development",
  },
  {
    id: 8,
    client: true,
    title: "Planet First Web Application",
    description:
      "Developed an eco-focused web platform to promote sustainable living and user engagement. Built and deployed a Carbon Footprint Calculator, enabling 200+ users to track sustainability. Integrated PHPMailer for contact form and FPDF for automated PDF report generation.",
    image: FProject1,
    technologies: [
      "HTML",
      "Bootstrap",
      "PHP",
      "JavaScript",
      "PHPMailer",
      "FPDF",
    ],
    link: "https://theplanetfirst.org/",
    category: "AI & Web Development",
  },
  {
    id: 9,
    title: "Orchid Species Identification System",
    description:
      "Developed a deep learning–based web application capable of identifying 52 orchid species from uploaded images. Integrated CNN model (InceptionV3) using transfer learning for high accuracy and real-time predictions. Built an Angular frontend for interactive image uploads and result visualization.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800",
    technologies: [
      "Angular",
      "TensorFlow",
      "Keras",
      "Flask",
      "Python",
      "Deep Learning",
    ],
    link: "https://github.com/Buddhiimz/Orchid-Species-Identifier",
    category: "AI & Web Development",
  },
  {
    id: 10,
    title: "Restaurant Management Service – Food Delivery System",
    description:
      "Developed a microservice-based food delivery platform with restaurant registration, menu management, and role-based access. Implemented owner-level logic, admin approval workflows, and an API Gateway for service routing. Built the frontend using React & Tailwind CSS, and performed end-to-end testing with Cypress.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
    technologies: [
      "ReactJS",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "Cypress",
    ],
    link: "https://github.com/Y3-S2-project-group",
    category: "Full Stack Development",
  },
  {
    id: 11,
    title: "FieldExpert - Farm Management System",
    description:
      "Developed a web application to help farmers manage their agricultural data, such as crop records, pest and disease information. Implemented a Sales and Distribution function to streamline the sales process and enhance distribution efficiency.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
    technologies: [
      "MERN Stack Technology",
      "Tailwind CSS",
      "ChartJs",
      "EmailJS",
    ],
    link: "https://github.com/Y3-S1-project-group",
    category: "Web Development",
  },
  {
    id: 12,
    title: "MediCare - Hospital Management Web Application",
    description:
      "Developed a full-stack web application using the MERN stack to manage medical tasks such as patient records, appointments, and prescriptions. Implemented an Appointment Management function that allows users to view available times for doctors upon selection, enhancing scheduling efficiency.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    technologies: [
      "MERN Stack Technology",
      "Tailwind CSS",
      "ChartJs",
      "EmailJS",
    ],
    link: "https://github.com/Y3-S1-project-group",
    category: "Web Development",
  },
  {
    id: 13,
    title: "OceanicCare - Mobile Application",
    description:
      "Developed a mobile application focused on marine conservation, featuring functionalities such as a Marine Life Encyclopedia, Beach Cleanup Events, Sustainable Seafood Guide, and Ocean Pollution.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    technologies: ["Flutter", "Firebase", "Dart"],
    link: "https://github.com/Buddhiimz/OceanicCare_App",
    category: "Mobile Development",
  },
  {
    id: 14,
    title: "Angular Login System",
    description:
      "Developed a full-stack web application with an Angular frontend featuring user registration, login, dashboard, and password recovery modules. Implemented a secure .NET backend using JWT authentication and password hashing. Designed and optimized an MSSQL database with stored procedures for efficient data management.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    technologies: ["Angular", "TypeScript", ".NET", "MSSQL", "JWT"],
    link: "https://github.com/Buddhiimz/Auth-fe",
    category: "Web Development",
  },
];


