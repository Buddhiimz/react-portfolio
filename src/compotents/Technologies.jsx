import React from 'react';
import { RiReactjsLine, RiJavaFill, RiBootstrapFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiMongodb, SiPostman, SiCplusplus, SiCoursera, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiExpress, SiKotlin, SiPython, SiGit, SiGithub, SiMysql, SiSqlite, SiMicrosoftsqlserver } from 'react-icons/si';
import { motion } from "framer-motion";

const TechnologyCard = ({ icon: Icon, title, subtitle, color }) => (
  <div className="bg-neutral-900 rounded-xl p-4 flex items-center gap-3 hover:bg-neutral-800 transition-colors duration-300"
  style={{ fontFamily: "'Poppins', sans-serif" }}>
    <Icon className="text-2xl" style={{ color: color }} />
    <div>
      <h3 className="text-white font-medium">{title}</h3>
      <p className="text-neutral-400 text-sm">{subtitle}</p>
    </div>
  </div>
);

const TestComponent = () => {
  const technologies = [
    { icon: SiCoursera, title: "C", subtitle: "Progamming", color: '#0056D2' },
    { icon: SiCplusplus, title: "C++", subtitle: "Programming", color: '#00599C' },
    { icon: RiJavaFill, title: "Java", subtitle: "Programming", color: '#5382A1' },
    { icon: SiJavascript, title: "JavaScript", subtitle: "Programming", color: '#F7DF1E' },
    { icon: SiHtml5, title: "HTML5", subtitle: "Markup", color: '#E34F26' },
    { icon: SiCss3, title: "CSS3", subtitle: "Styling", color: '#1572B6' },
    { icon: RiBootstrapFill, title: "Bootstrap", subtitle: "Framework", color: '#7952B3' },
    { icon: RiTailwindCssFill, title: "Tailwind", subtitle: "Framework", color: '#06B6D4' },    
    { icon: RiReactjsLine, title: "React", subtitle: "Framework", color: '#61DAFB' },
    { icon: SiMongodb, title: "MongoDB", subtitle: "Database", color: '#47A248' },
    { icon: SiNodedotjs, title: "Node.js", subtitle: "Runtime", color: '#339933' },
    { icon: SiExpress, title: "Express", subtitle: "Framework", color: '#000000' },
    { icon: SiKotlin, title: "Kotlin", subtitle: "Programming", color: '#0095D5' },
    { icon: SiPython, title: "Python", subtitle: "Programming", color: '#3776AB' },
    { icon: SiGit, title: "Git", subtitle: "Version Control", color: '#F05032' },
    { icon: SiGithub, title: "GitHub", subtitle: "Platform", color: '#cccccc' },
    { icon: SiMysql, title: "MySQL", subtitle: "Database", color: '#4479A1' },
    { icon: SiSqlite, title: "SQLite", subtitle: "Database", color: '#003B57' },
    { icon: SiMicrosoftsqlserver, title: "SQL Server", subtitle: "Database", color: '#CC2927' },
    { icon: SiPostman, title: "Postman", subtitle: "API Testing", color: '#FF6C37' }
  ];

  return (
    <div id="tech" className="pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="text-3xl lg:text-4xl text-center mb-3 mt-10 font-bold font-['Poppins']">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-500">
          Technologies
        </span>
      </motion.h1>
      <div className="font-[Poppins] text-netraul-600 mb-10">
        <p className="text-center max-w-2xl mx-auto">
          Discover the powerful Tools and Technologies I used to create high-performing websites & mobile Applications.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4">
        {technologies.map((tech, index) => (
          <TechnologyCard
            key={index}
            icon={tech.icon}
            title={tech.title}
            subtitle={tech.subtitle}
            color={tech.color}
          />
        ))}
      </div>
    </div>
  );
};

export default TestComponent;