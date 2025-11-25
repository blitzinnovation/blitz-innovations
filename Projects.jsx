import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code, Smartphone, Palette, Layers } from "lucide-react";
import Footer from "../components/Footer";

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const transition = { duration: 0.75, ease: "easeInOut" };

export default function Projects() {
  const [expandedSection1, setExpandedSection1] = useState("none");
  const [expandedSection2, setExpandedSection2] = useState("none");

  const toggleSection = (section, side) => {
    if (section === 1) {
      setExpandedSection1((prev) => (prev === side ? "none" : side));
    } else if (section === 2) {
      setExpandedSection2((prev) => (prev === side ? "none" : side));
    }
  };

  const webProjects = [
    {
      name: "E-Commerce Platform",
      tech: "React, Node.js, MongoDB",
      description: "Full-featured online shopping experience with real-time inventory",
    },
    {
      name: "SaaS Dashboard",
      tech: "Next.js, TypeScript, PostgreSQL",
      description: "Analytics dashboard with advanced data visualization",
    },
    {
      name: "Corporate Website",
      tech: "React, Tailwind CSS, Strapi",
      description: "Modern corporate site with CMS integration",
    },
  ];

  const appProjects = [
    {
      name: "Fitness Tracker App",
      tech: "React Native, Firebase",
      description: "Cross-platform fitness tracking with social features",
    },
    {
      name: "Food Delivery App",
      tech: "Flutter, Node.js, Redis",
      description: "Real-time order tracking and delivery management",
    },
    {
      name: "Banking App",
      tech: "React Native, AWS, GraphQL",
      description: "Secure mobile banking with biometric authentication",
    },
  ];

  const designProjects = [
    {
      name: "Brand Identity System",
      tools: "Figma, Adobe Illustrator",
      description: "Complete brand guidelines and visual identity",
    },
    {
      name: "Mobile App UI Kit",
      tools: "Figma, Sketch",
      description: "Reusable component library for iOS and Android",
    },
    {
      name: "Dashboard Interface",
      tools: "Figma, Adobe XD",
      description: "Data-rich analytics interface with dark mode",
    },
  ];

  const softwareProjects = [
    {
      name: "Inventory Management System",
      tech: "Python, Django, PostgreSQL",
      description: "Enterprise inventory tracking and reporting system",
    },
    {
      name: "CRM Platform",
      tech: "React, Express, MongoDB",
      description: "Customer relationship management with automation",
    },
    {
      name: "HR Management Suite",
      tech: "Vue.js, Laravel, MySQL",
      description: "Complete HR solution for employee management",
    },
  ];

  const getPanelMotionProps = (expandedSide, currentSide) => {
    const isExpanded = expandedSide === currentSide;
    const isCollapsed = expandedSide !== 'none' && !isExpanded;

    return {
      layout: true, 
      initial: false,
      animate: {
        flexGrow: isExpanded ? 100 : isCollapsed ? 0 : 1, 
        width: isExpanded ? "100%" : isCollapsed ? "0%" : "50%",
        height: "100vh", 
      },
      transition: transition,
      className: `
        ${currentSide === 'left' ? 'bg-[#0a0a0a] text-white z-10' : 'bg-white text-black z-0'} 
        relative overflow-hidden 
        min-h-[100vh] sm:min-h-screen 
        w-full 
        flex flex-col 
      `,
    };
  };

  const CollapsibleContent = ({ isExpanded, children }) => (
    <motion.div
      initial={false}
      animate={{ 
        opacity: isExpanded ? 1 : 0, 
        y: isExpanded ? 0 : 20 
      }}
      transition={{ duration: 0.3, delay: isExpanded ? 0.3 : 0 }}
      className={`w-full h-full ${isExpanded ? 'pointer-events-auto' : 'pointer-events-none'} overflow-y-auto text-center`}
    >
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
    
  const PanelContent = ({ expanded, icon, title, subtitle, projects, isDark, side }) => (
    <div className="flex flex-col items-center justify-center p-8 md:p-20 lg:p-32 h-full w-full text-center">
      {expanded ? (
        <CollapsibleContent isExpanded={expanded}>
          {React.cloneElement(icon, { 
            className: `w-12 h-12 md:w-16 md:h-16 text-[#F81A27] mx-auto mb-4 md:mb-6` 
          })}
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-10">{title}</h2>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs md:text-lg mb-8 max-w-2xl mx-auto`}>
            {subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl  mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`${isDark ? 'bg-[#1a1a1a] border-[#2E2A29]' : 'bg-white border-gray-300'} border rounded-xl p-4 md:p-6 hover:border-[#F81A27]/60 transition-all text-left ${isDark ? '' : 'hover:shadow-xl'}`}
              >
                <h3 className={`text-base md:text-xl font-bold ${isDark ? 'text-white' : 'text-black'} mb-1`}>
                  {project.name}
                </h3>
                <p className="text-[#F81A27] text-xs mb-2 font-medium">
                  {project.tech || project.tools}
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs md:text-sm mb-3`}>
                  {project.description}
                </p>
                <button className={`flex items-center ${isDark ? 'text-white hover:text-[#F81A27]' : 'text-black hover:text-[#F81A27] font-semibold'} transition-colors text-xs md:text-sm`}>
                  View Project <ExternalLink className="ml-2" size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </CollapsibleContent>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center text-center justify-center h-full"
          layout
        >
          {React.cloneElement(icon, { 
            className: `w-16 h-16 md:w-20 md:h-20 text-[#F81A27] mb-4 md:mb-6` 
          })}
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            {title.toUpperCase()}
          </h2>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mt-2 text-xs md:text-base`}>
            Click to explore our {title.split(' ')[0].toLowerCase()} projects
          </p>
        </motion.div>
      )}
    </div>
  );

  const ExpandButton = ({ section, side, Icon, isLeft, isExpanded }) => {
    const isWhite = isLeft; 
    const bgColor = isWhite ? 'bg-white text-black' : 'bg-black text-white';
    const hoverColor = isWhite ? 'hover:bg-gray-300' : 'hover:bg-gray-700';
    
    const positionClasses = isLeft 
      ? 'right-0 top-0 h-full w-48 justify-end' 
      : 'left-0 top-0 h-full w-48 justify-start'; 

    return (
      <div className={`absolute flex items-center ${positionClasses} z-20`}>
        <div
          onClick={() => toggleSection(section, side)}
          className={`
            w-12 h-12 md:w-[120px] md:h-[150px]
            flex items-center justify-center 
            cursor-pointer transition duration-500 
            ${bgColor} ${hoverColor} font-semibold shadow-lg 
            ${isLeft ? 'rounded-tl-lg md:rounded-tl-none rounded-bl-lg md:rounded-bl-none' : 'rounded-tr-lg md:rounded-tr-none rounded-br-lg md:rounded-br-none'}
            
            
            absolute ${isLeft ? 'top-0 right-0' : 'top-0 left-0'} w-16 h-16 md:relative md:w-[120px] md:h-48
          `}
        >
          {React.cloneElement(Icon, { className: "mr-0 md:mr-2", size: 20 })}
          <span className="hidden md:inline">{isExpanded ? "Close" : "View"}</span>
        </div>
      </div>
    );
  };


  return (
    <div className="flex flex-col w-full bg-[#1B1716]">
      <section className="min-h-[60vh] flex flex-col items-left justify-left text-left ml-4 md:ml-10 text-[35px] ml-4 md:text-[48px md:px-20 pt-32 pb-16 bg-gradient-to-b from-[#0a0a0a]/30 to-transparent">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl  md:text-5xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
        >
          Our <span className="text-[#F81A27]">Projects</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-300 text-sm md:text-lg lg:text-xl max-w-3xl leading-relaxed mb-4"
        >
          At <span className="font-semibold text-white">Blitz Innovation</span>,
          we craft digital experiences that combine creativity, functionality,
          and performance.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-400 text-xs md:text-base lg:text-lg max-w-2xl"
        >
          Explore some of our featured works that showcase our passion for
          design, development, and seamless user experience.
        </motion.p>
      </section>

      <div className="flex flex-row h-[100vh] relative overflow-hidden"> 
        <motion.div
          {...getPanelMotionProps(expandedSection1, "left")}
          style={{
            backgroundImage: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          }}
        >
          <ExpandButton 
            section={1} 
            side="left" 
            Icon={<Code />} 
            isLeft={true} 
            isExpanded={expandedSection1 === "left"}
          />
          <PanelContent 
            expanded={expandedSection1 === "left"}
            icon={<Code />}
            title="Web Development"
            subtitle="Building responsive, scalable, and high-performance web applications that deliver exceptional user experiences."
            projects={webProjects}
            isDark={true}
            side="left"
          />
        </motion.div>

        <motion.div
          {...getPanelMotionProps(expandedSection1, "right")}
          style={{
            backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
          }}
        >
          <ExpandButton 
            section={1} 
            side="right" 
            Icon={<Smartphone />} 
            isLeft={false} 
            isExpanded={expandedSection1 === "right"}
          />
          <PanelContent 
            expanded={expandedSection1 === "right"}
            icon={<Smartphone />}
            title="App Development"
            subtitle="Creating native and cross-platform mobile applications with seamless performance and intuitive interfaces."
            projects={appProjects}
            isDark={false}
            side="right"
          />
        </motion.div>
      </div>

      <div className="flex flex-row h-[100vh] relative overflow-hidden">
        <motion.div
          {...getPanelMotionProps(expandedSection2, "left")}
          style={{
            backgroundImage: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          }}
        >
          <ExpandButton 
            section={2} 
            side="left" 
            Icon={<Palette />} 
            isLeft={true} 
            isExpanded={expandedSection2 === "left"}
          />
          <PanelContent 
            expanded={expandedSection2 === "left"}
            icon={<Palette />}
            title="UI / UX Design"
            subtitle="Designing beautiful, intuitive interfaces that prioritize user experience and brand identity."
            projects={designProjects}
            isDark={true}
            side="left"
          />
        </motion.div>

        <motion.div
          {...getPanelMotionProps(expandedSection2, "right")}
          style={{
            backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
          }}
        >
          <ExpandButton 
            section={2} 
            side="right" 
            Icon={<Layers />} 
            isLeft={false} 
            isExpanded={expandedSection2 === "right"}
          />
          <PanelContent 
            expanded={expandedSection2 === "right"}
            icon={<Layers />}
            title="Custom Software Development"
            subtitle="Tailored software solutions designed to meet your unique business needs and drive operational efficiency."
            projects={softwareProjects}
            isDark={false}
            side="right"
          />
        </motion.div>
      </div>

      <Footer />
    </div>
    
  );
}