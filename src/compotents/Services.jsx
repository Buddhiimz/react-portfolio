import React from 'react'; 
import { ArrowDownRight, Code, Laptop, Smartphone, Database, Terminal, Shield } from 'lucide-react'; 
import { motion } from "framer-motion";  

const ServiceCard = ({ title, description, icon: Icon, backgroundColor }) => (
  <motion.div 
    className="rounded-lg p-6 shadow-lg transition-all duration-300"
    style={{ backgroundColor }}
    whileHover={{ 
      scale: 1.05, 
      transition: { duration: 0.3 } 
    }}
  >
    <div className="absolute top-4 right-4">
      <ArrowDownRight className="w-6 h-6 text-white rounded-full p-1" />
    </div>
    <div className="space-y-4">
      <div className="text-white">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white font-poppins">{title}</h3>
      <p className="text-gray-100 font-poppins">
        {description}
      </p>
    </div>
  </motion.div>
);  

const ServicesGrid = () => {
  const services = [
    {
      title: 'Full Stack Developer',
      icon: Code,
      description: 'Building end-to-end web applications with modern technologies. Expertise in both frontend and backend development, from database design to user interfaces.',
      backgroundColor: '#1E40AF' // Deep Blue
    },
    {
      title: 'UI/UX Developer',
      icon: Laptop,
      description: 'Creating intuitive and responsive user interfaces with a focus on user experience. Implementing modern design principles and ensuring accessibility.',
      backgroundColor: '#10B981' // Emerald Green
    },
    {
      title: 'Mobile App Developer',
      icon: Smartphone,
      description: 'Developing cross-platform mobile applications using React Native and Flutter. Creating seamless mobile experiences for iOS and Android platforms.',
      backgroundColor: '#6366F1' // Indigo
    },
    {
      title: 'Software Developer',
      icon: Terminal,
      description: 'Building robust and scalable software solutions. Expertise in system architecture, clean code practices, and software design patterns.',
      backgroundColor: '#8B5CF6' // Purple
    },
    {
        title: 'Database Engineer',
        icon: Database,
        description: 'Designing and implementing efficient databases using SQL Server, MySQL, and Oracle DB. Specializing in database optimization, query performance, and ensuring data integrity.',
        backgroundColor: '#F43F5E' // Rose
    },      
    {
      title: 'Quality Assurance Engineer',
      icon: Shield,
      description: 'Ensuring software quality through comprehensive testing strategies, including manual, automated, and performance testing across different platforms.',
      backgroundColor: '#F97316' // Orange
    }
  ];   

  return (
    <div id="servicers"
    className="px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          className="text-3xl lg:text-4xl text-center mb-8 font-bold"
          style={{
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <span
            className="text-transparent bg-clip-text"
            style={{
              background: "linear-gradient(to right, #0ea5e9, #06b6d4, #14b8a6)",
              WebkitBackgroundClip: "text",
            }}
          >
            My Services
          </span>
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </div>
    </div>
  ); 
};  

export default ServicesGrid;