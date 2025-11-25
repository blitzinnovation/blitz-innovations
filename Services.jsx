import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

const AnimatedButton = ({ text, onClick }) => {

  const buttonVariants = {
    rest: {
      color: "rgb(255, 255, 255)",
      borderColor: "rgb(255, 255, 255)",
    },
    hover: {
      color: "rgb(0, 0, 0)",
      borderColor: "rgb(255, 255, 255)",
      transition: {
        color: { duration: 0.2, delay: 0.15 },
        borderColor: { duration: 0.2 },
      },
    },
  };

  const backgroundVariants = {
    rest: {
      backgroundColor: "#37474f",
      transform: "translateX(-100%) translateY(-100%)",
      transition: {
        type: "tween",
        duration: 0.5,
        ease: [0.2, 1, 0.3, 1]
      }
    },
    hover: {
      backgroundColor: "white",
      transform: "translateX(0%) translateY(0%)",
      transition: {
        type: "tween",
        duration: 0.5,
        ease: [0.2, 1, 0.3, 1]
      }
    },
  };

  return (
    <motion.button
      className="button relative w-[170px] h-12 p-0 border-3 border-white font-poppins text-base overflow-hidden mt-4"
      variants={buttonVariants}
      whileHover="hover"
      initial="rest"
      onClick={onClick}
      style={{
        color: 'white',
        borderWidth: '3px',
        borderStyle: 'solid',
        borderColor: 'white',
      }}
    >
      <span className="relative z-20 text-center block leading-10">
        {text}
      </span>
      
      <motion.div
        className="absolute inset-0 z-10"
        variants={backgroundVariants}
      />
    </motion.button>
  );
};

const ServiceCardDesign = ({ title, desc, index, activeCard, setActiveCard }) => {
  const isExpanded = activeCard === index;
  const colors = ["#3953a4", "#6abd45", "#ed2024", "#FF5733", "#33FF57", "#5733FF"];
  const color = colors[index % colors.length];

  const toggleExpand = () => {
    setActiveCard(isExpanded ? null : index);
  };

  const highlightTitle = (text) => {
    return text
      .replace(/Workflow/gi, '<span class="text-red-500">Workflow</span>')
      .replace(/Custom Software/gi, '<span class="text-red-500">Custom Software</span>')
      .replace(/Web Application/gi, '<span class="text-red-500">Web Application</span>')
      .replace(/UI\/UX/gi, '<span class="text-red-500">UI/UX</span>')
      .replace(/Hire Dedicated/gi, '<span class="text-red-500">Hire Dedicated</span>')
      .replace(/\bIT\b/gi, '<span class="text-red-500">IT</span>');
  };

  return (
    <motion.div
      layout
      className="relative flex flex-col justify-center items-center w-full mx-auto overflow-hidden bg-black text-white transition-all duration-1000 ease-in-out"
      animate={{ height: isExpanded ? 650 : 400 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute w-[600px] h-[600px] opacity-10 blur-xl"
          animate={{
            scale: isExpanded ? 0.8 : 1.2,
            rotate: isExpanded ? 30 : 0,
            backgroundColor: isExpanded ? color : "#212121",
          }}
          transition={{ type: "spring", stiffness: 50, damping: 10, duration: 1 }}
          style={{
            backgroundColor: color,
            borderRadius: "50% 30% 70% 40% / 60% 40% 60% 40%",
          }}
        />
      </div>

      <motion.div
        layout="position"
        className="relative z-10 w-full max-w-4xl flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-8"
        animate={{ y: isExpanded ? -20 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:w-1/2 text-left mb-6 md:mb-0">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 font-poppins"
            dangerouslySetInnerHTML={{ __html: highlightTitle(title) }}
          ></motion.h1>

          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.p
                key="detail-desc"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white text-md sm:text-lg max-w-lg font-light leading-relaxed font-poppins pt-4"
              >
                <strong>Detailed Information for {title}:</strong> {desc} This service includes extensive consultation, deployment, and post-launch support tailored to modern business requirements. We guarantee 99.9% uptime and dedicated senior developer allocation.
              </motion.p>
            ) : (
              <motion.p
                key="short-desc"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gray-400 text-md sm:text-lg max-w-sm font-light leading-relaxed font-poppins"
              >
                {desc}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right w-full">
          <AnimatePresence mode="wait">
            {!isExpanded && (
              <motion.div
                key="read-more-btn"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedButton text="Read More >" onClick={toggleExpand} />
              </motion.div>
            )}
            {isExpanded && (
              <motion.div
                key="close-btn"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedButton text="< Close" onClick={toggleExpand} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Services() {
  const services = [
    {
      title: "Workflow Automation",
      desc: "Streamline processes, reduce manual effort, and boost productivity with our custom workflow automation tools.",
    },
    {
      title: "Custom Software Development",
      desc: "Tailor-made software solutions designed to match your business goals and enhance efficiency effortlessly.",
    },
    {
      title: "Web Application Development",
      desc: "Responsive, scalable, and secure web applications crafted with modern technologies for exceptional performance.",
    },
    {
      title: "UI/UX Designing",
      desc: "Engaging and intuitive digital experiences that blend creativity with functionality for seamless interaction.",
    },
    {
      title: "Hire Dedicated Developers",
      desc: "Access highly skilled developers who integrate seamlessly with your team to meet your project goals.",
    },
    {
      title: "IT Consultancy",
      desc: "Expert technology guidance to optimize your architecture and unlock new opportunities for digital transformation.",
    },
  ];

  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col font-poppins overflow-hidden">
      <header className="w-full pt-16 pb-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-left ml-4 md:ml-20 text-[35px] mt-10 md:text-[48px] font-bold text-white font-inter"
        >
          Our Core <span className="text-red-500">Services</span>
        </motion.h1>
      </header>

      <main className="flex-grow">
        <div className="flex flex-col gap-0">
          {services.map((service, index) => (
            <ServiceCardDesign
              key={index}
              title={service.title}
              desc={service.desc}
              index={index}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}