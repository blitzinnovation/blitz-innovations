import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Target,
  Eye,
  Award,
  Users,
  Briefcase,
  TrendingUp,
  CheckCircle,
  Globe,
  Lightbulb,
  Shield,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  X,
} from "lucide-react";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const TEAM_DATA = [
  {
    name: "Keval Gadara",
    role: "Founder & CEO",
    imageUrl: "https://i.pinimg.com/736x/d6/36/d5/d636d53048eccf75fed71e3add231b94.jpg",
    description: "Visionary leader and head strategist.",
    overlayColor: "rgba(248, 26, 39, 0.75)",
  },
  {
    name: "Prit Chadamiya",
    role: "Director & CFO",
    imageUrl: "https://i.pinimg.com/736x/1d/36/03/1d36037951e66042f1b379a84b07a6c3.jpg",
    description: "Financial expert and corporate director.",
    overlayColor: "rgba(200, 20, 30, 0.8)",
  },
  {
    name: "Umang Patel",
    role: "CTO",
    imageUrl: "https://i.pinimg.com/736x/c2/3a/03/c23a0397c49922f805384defbefbd6c3.jpg",
    description: "Chief Technology Officer and architect of innovation.",
    overlayColor: "rgba(230, 0, 50, 0.7)",
  },
  {
    name: "Vruti Gadara",
    role: "CPO",
    imageUrl: "https://i.pinimg.com/736x/10/d3/74/10d374f94b1e73a8ec94a24c4ac4e92a.jpg",
    description: "Full-stack developer, operations, and product head.",
    overlayColor: "rgba(248, 26, 39, 0.85)",
  },
];

const ACHIEVEMENTS_DATA = [
  { icon: Users, number: "14+", text: "Satisfied Clients" },
  { icon: Globe, number: "5+ Years", text: "Industry Experience" },
  { icon: Award, number: "30+", text: "Project Done" },
  { icon: TrendingUp, number: "98%", text: "Client Retention" },
];

const VALUES_DATA = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly pushing boundaries with creative solutions",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Building trust through transparency and honesty",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Delivering quality that exceeds expectations",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working together to achieve remarkable results",
  },
];

const TeamSection = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const numItems = TEAM_DATA.length;

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? numItems - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === numItems - 1 ? 0 : prevIndex + 1));
  };

  React.useEffect(() => {
    if (sliderRef.current && window.innerWidth < 1024) {
      const firstChild = sliderRef.current.children[0];
      if (firstChild) {
        const gapSize = 24; 
        const cardWidth = firstChild.offsetWidth; 
        
        const scrollPosition = currentIndex * (cardWidth + gapSize);

        sliderRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
      }
    }
  }, [currentIndex]);
  
  return (
    <motion.section
      ref={sectionRef}
      id="team"
      className="px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Meet Our Leadership
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#F81A27] to-transparent mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            The visionaries driving Blitz Innovation forward
          </p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {TEAM_DATA.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="relative w-full h-[300px] border-4 border-[#2E2A29] rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundImage: `url(${member.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                borderRadius: "24px",
                transition: 'transform 0.5s ease-out, border-color 0.3s',
              }}
            >
              <div
                className="absolute inset-0 bg-black/40 transition-all duration-500 ease-out"
                style={{
                  backgroundColor: 'rgba(20, 20, 20, 0.3)',
                  transition: 'background-color 0.5s ease-out',
                }}
              ></div>
              
              <div
                className="absolute inset-0 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"
                style={{
                  backgroundColor: 'rgba(20, 20, 20, 0.4)',
                  }}
              ></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-center z-10">
                
                <div className="transition-transform duration-500 group-hover:translate-y-[-100px]">
                    <h3 className="text-lg sm:text-xl font-bold text-red-600 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-white font-bold text-sm sm:text-base">
                      {member.role}
                    </p>
                </div>
                
                <p
                  className="absolute bottom-4 left-0 right-0 p-4 text-white text-sm sm:text-base opacity-0 transition-opacity duration-300 delay-300 group-hover:opacity-100"
                >
                  {member.description}
                </p>
              </div>
              
            </motion.div>
          ))}
        </motion.div>
        <div className="lg:hidden">
          <motion.div
            ref={sliderRef}
            variants={staggerContainer}
            className="flex overflow-x-scroll snap-x snap-mandatory pb-4 space-x-6 sm:space-x-8 scrollbar-hide"
            style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
          >
            {TEAM_DATA.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex-shrink-0 w-[85vw] sm:w-[calc(50vw-24px)] md:w-[calc(33.33vw-24px)] relative h-[350px] border-4 border-[#2E2A29] rounded-xl overflow-hidden snap-center group cursor-pointer"
                style={{
                  marginLeft: index === 0 ? 'auto' : undefined,
                  marginRight: index === numItems - 1 ? 'auto' : undefined,
                  backgroundImage: `url(${member.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  transition: 'transform 0.5s ease-out, border-color 0.3s',
                }}
              >
                 
                <div
                  className="absolute inset-0 bg-black/50 transition-all duration-500 ease-out"
                ></div>
                
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"
                  style={{
                    backgroundColor: member.overlayColor,
                  }}
                >
                    <p className="text-white text-lg font-medium text-center leading-relaxed">
                        {member.description}
                    </p>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-center z-10 bg-black/50 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#F81A27] font-medium text-sm sm:text-base">
                      {member.role}
                    </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex justify-center mt-8 space-x-3">
            <motion.button
              onClick={goToPrev}
              className="w-12 h-12 bg-[#F81A27] text-white flex items-center justify-center transition-colors duration-200 rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous Team Member"
            >
              <ArrowLeft size={20} />
            </motion.button>

            <motion.button
              onClick={goToNext}
              className="w-12 h-12 bg-[#F81A27] text-white flex items-center justify-center transition-colors duration-200 rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next Team Member"
            >
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const HeroSection = () => {
  const sectionRef = useRef(null);
  return (
    <motion.section
      ref={sectionRef}
      id="hero"
      className="relative px-4 sm:px-8 lg:px-20 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.h1
        className="absolute right-4 sm:right-10 lg:right-16 top-16 sm:top-20 lg:top-24 text-6xl sm:text-8xl lg:text-[200px] font-extrabold text-white opacity-5 select-none leading-none pointer-events-none"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.05, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        About
      </motion.h1>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div variants={fadeUp} className="text-center lg:text-left">
          <div className="inline-block px-4 py-1 bg-[#F81A27]/10 border border-[#F81A27]/30 rounded-full mb-6">
            <span className="text-[#F81A27] text-sm font-medium">Who We Are</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            About <span className="text-[#F81A27]">Blitz</span> Innovation
          </h1>

          <div className="w-20 h-1 bg-gradient-to-r from-[#F81A27] to-transparent mb-8 mx-auto lg:mx-0"></div>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-4xl mb-8">
            At Blitz, we believe in the power of <span className="text-white font-semibold">innovation, precision, and excellence</span>. Founded with a vision to redefine industry standards, Blitz combines creativity, technology, and dedication to deliver impactful solutions that drive success.
          </p>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-4xl">
            Our team of passionate professionals works tirelessly to create value for our clients, partners, and community — ensuring every project we undertake reflects our commitment to quality and progress.
          </p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16"
        >
          {ACHIEVEMENTS_DATA.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-[#221E1D] border border-[#2E2A29] rounded-xl p-4 sm:p-6 hover:border-[#F81A27]/40 transition-all text-center"
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#F81A27] mx-auto mb-3" />
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F81A27] mb-2">
                  {item.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">{item.text}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

const MissionVisionSection = () => {
  const sectionRef = useRef(null);
  return (
    <motion.section
      ref={sectionRef}
      id="mission"
      className="px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#0a0a0a]/30 via-transparent to-[#0a0a0a]/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        <motion.div
          variants={fadeUp}
          className="bg-[#131313] border border-[#2E2A29] rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-[#F81A27]/5 rounded-full blur-3xl" />
          <Target className="w-12 h-12 sm:w-14 sm:h-14 text-[#F81A27] mb-6 relative z-10" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 relative z-10">
            Our Mission
          </h2>
          <div className="w-16 h-1 bg-[#F81A27] mb-6 relative z-10"></div>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed relative z-10">
            Our mission is to <span className="text-white font-semibold">empower growth through innovation and reliability</span>. We strive to provide top-quality products and services that enhance experiences, simplify complexities, and inspire trust. By integrating modern technology and customer-centric strategies, Blitz aims to become a trusted name known for delivering excellence in every aspect of our work.
          </p>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="bg-[#131313] border border-[#2E2A29] rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-[#F81A27]/5 rounded-full blur-3xl" />
          <Eye className="w-12 h-12 sm:w-14 sm:h-14 text-[#F81A27] mb-6 relative z-10" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 relative z-10">
            Our Vision
          </h2>
          <div className="w-16 h-1 bg-[#F81A27] mb-6 relative z-10"></div>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed relative z-10">
            Our vision is to be a <span className="text-white font-semibold">global leader in innovation and service excellence</span>, setting new benchmarks in our industry. We envision a future where Blitz becomes synonymous with creativity, sustainability, and customer satisfaction — continuously pushing boundaries to shape a better tomorrow.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

const ValuesSection = () => {
  const sectionRef = useRef(null);
  return (
    <motion.section
      ref={sectionRef}
      id="values"
      className="px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Core Values
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#F81A27] to-transparent mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {VALUES_DATA.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-[#221E1D] border border-[#2E2A29] rounded-xl p-6 hover:border-[#F81A27]/40 transition-all text-center"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#F81A27] mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

const AchievementsSection = () => {
  const sectionRef = useRef(null);
  const achievements = [
    "Successfully served 14+ satisfied clients.",
    "Leveraging 5+ years of valuable industry experience.",
    "Completed 30+ successful projects.",
    "Maintain a high client retention rate of 98%.",
  ];
  return (
    <motion.section
      ref={sectionRef}
      id="achievements"
      className="px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#0a0a0a]/30 via-transparent to-[#0a0a0a]/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-12 sm:mb-16">
          <Award className="w-12 h-12 sm:w-16 sm:h-16 text-[#F81A27] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#F81A27] to-transparent mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Milestones that define our journey of excellence
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex items-start gap-4 bg-[#131313] border border-[#2E2A29] rounded-xl p-4 sm:p-6 hover:border-[#F81A27]/40 transition-all"
            >
              <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-[#F81A27] flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {achievement}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};


const BorderFollowingButton = ({ children, onClick }) => {
  const buttonVariants = {
    rest: {
      scale: 1,
      rotateX: 0,
      backgroundColor: "#F81A27",
      transition: { duration: 0.4, ease: [0.65, 0, 0.35, 1] },
    },
    hover: {
      scale: 1.05,
      rotateX: 5,
      backgroundColor: "#141414",
      transition: { duration: 0.4, ease: [0.65, 0, 0.35, 1] },
    },
    tap: {
      scale: 0.95,
      rotateX: 0,
    },
  };

  const textVariants = {
    rest: { y: 0, color: "#ffffff", transition: { duration: 0.4 } },
    hover: { y: -2, color: "#ffffff", transition: { duration: 0.4 } },
  };


  return (
    <motion.button
      className="relative px-8 sm:px-10 py-3 sm:py-4 text-white font-semibold rounded-lg transition-all shadow-lg shadow-[#F81A27]/20 text-sm sm:text-base overflow-hidden"
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        border: '1px solid #F81A27',
      }}
    >
      <motion.span 
        className="relative z-10 flex items-center justify-center"
        variants={textVariants}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};


const CTASection = ({ onNavigate }) => {
  const sectionRef = useRef(null);

  const handleNavigation = () => {
    onNavigate("/contact");
  };

  return (
    <motion.section
      ref={sectionRef}
      id="cta"
      className="px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#221E1D] to-[#1B1716] border border-[#2E2A29] rounded-2xl p-8 sm:p-12 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-[#F81A27]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-[#F81A27]/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's Build the Future Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#F81A27] to-transparent mx-auto mb-8"></div>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Ready to innovate? Whether you're a startup or an enterprise, Blitz Innovation is here to bring your ideas to life through technology that performs, scales, and inspires.
          </p>

          <BorderFollowingButton onClick={handleNavigation}>
            Get in Touch →
          </BorderFollowingButton>
        </div>
      </div>
    </motion.section>
  );
};

const MobileQuickNav = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sections = [
    { id: "hero", label: "About Us" },
    { id: "mission", label: "Mission & Vision" },
    { id: "values", label: "Core Values" },
    { id: "achievements", label: "Achievements" },
    { id: "team", label: "Our Team" },
    { id: "cta", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    if (id === "cta") {
      onNavigate("/contact");
      setIsOpen(false);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="lg:hidden">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-0 left-0 z-50 h-[70px] bg-[#1B1716] text-white font-semibold flex items-center justify-center transition-all"
        style={{
          width: "calc(100vw - 60px)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
        whileTap={{ scale: 0.98 }}
      >
        Quick Menu
      </motion.button>
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-0 right-0 z-50 w-[70px] h-[70px] bg-[#1B1716] text-white flex items-center justify-center border-l border-[#FFFFFF]"
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50  bg-[#1B1716] border-t border-[#2E2A29] rounded-t-3xl p-6 max-h-[70vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Quick Navigation</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2E2A29] text-white hover:bg-[#F81A27] transition-all"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="space-y-3">
                {sections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(section.id)}
                    className="w-full text-left px-5 py-4 bg-[#221E1D] border border-[#2E2A29] rounded-xl text-white font-medium hover:border-[#F81A27] hover:bg-[#2E2A29] transition-all"
                  >
                    {section.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function About({ onNavigate, isTransitioning }) {
  
  const initialOpacity = isTransitioning ? 1 : 0;
  const animateOpacity = 1;
  const transitionDuration = isTransitioning ? 0 : 0.8;

  return (
    <>
      <motion.div
        className="relative w-full min-h-screen bg-[#1B1716] text-white overflow-hidden"
        initial={{ opacity: initialOpacity }}
        animate={{ opacity: animateOpacity }}
        transition={{ duration: transitionDuration }}
      >
        <HeroSection />
        <MissionVisionSection />
        <ValuesSection />
        <AchievementsSection />
        <TeamSection />
        <CTASection onNavigate={onNavigate} />
        <MobileQuickNav onNavigate={onNavigate} />
      </motion.div>
      <Footer />
    </>
  );
}