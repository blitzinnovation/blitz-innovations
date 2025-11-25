import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Twitter, Instagram, Linkedin, Send, Download } from "lucide-react";
import Footer from "../components/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const FormInput = ({ label, type = "text", isTextArea = false, value, onChange, name }) => (
  <motion.div variants={itemVariants} className="w-full">
    {isTextArea ? (
      <textarea
        rows="4"
        className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-gray-500 focus:border-b-white py-3 text-white placeholder-gray-300 focus:outline-none transition duration-300 resize-none"
        placeholder={label}
        aria-label={label}
        value={value}
        onChange={onChange}
        name={name}
      />
    ) : (
      <input
        type={type}
        className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-gray-500 focus:border-b-white py-3 text-white placeholder-gray-300 focus:outline-none transition duration-300"
        placeholder={label}
        aria-label={label}
        value={value}
        onChange={onChange}
        name={name}
      />
    )}
  </motion.div>
);

const FlipButton = ({ text, isSending, onClick, disabled }) => {
  const buttonVariants = {
    initial: {
      backgroundColor: "#F81A27",
      color: "#FFFFFF",
    },
    hover: {
      backgroundColor: "#121212",
      color: "#FFFFFF",
      scale: 1.02,
      rotateX: 5,
      transition: {
        duration: 0.4,
        ease: [0.65, 0, 0.35, 1],
      },
    },
    tap: {
      scale: 0.98,
      rotateX: 0,
    },
    disabled: {
      backgroundColor: "#3a3a3a",
      color: "#999999",
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.button
      type="submit"
      disabled={disabled || isSending}
      onClick={onClick}
      variants={buttonVariants}
      initial="initial"
      whileHover={disabled || isSending ? "disabled" : "hover"}
      whileTap={disabled || isSending ? "disabled" : "tap"}
      animate={disabled || isSending ? "disabled" : "initial"}
      className="py-3 px-8 text-sm font-semibold uppercase tracking-widest transition duration-300 flex items-center justify-center relative overflow-hidden"
      style={{
        borderRadius: "0px",
        perspective: "1000px",
        transformStyle: "preserve-3d",
        minWidth: "150px",
      }}
    >
      <AnimatePresence mode="wait">
        {isSending ? (
          <motion.span
            key="sending"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            Sending...
          </motion.span>
        ) : (
          <motion.span
            key="send"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2"
          >
            {text} <Send className="w-4 h-4" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

const DownloadBrochureButton = () => {
  const BROCHURE_LINK = "https://drive.google.com/file/d/130dc6rJKYjoLTlq-j9onltY7yFG-mVDQ/view?usp=sharing";
  
  const buttonVariants = {
    initial: {
      backgroundColor: "#F81A27",
      color: "#FFFFFF",
    },
    hover: {
      backgroundColor: "#121212", 
      scale: 1.03,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.97,
    },
  };

  return (
    <motion.a
      href={BROCHURE_LINK}
      target="_blank"
      rel="noopener noreferrer"
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      className="mt-6 py-3 px-8 text-sm font-semibold uppercase tracking-widest transition duration-300 flex items-center justify-center gap-2"
      style={{
        borderRadius: "0px",
        textDecoration: "none",
        minWidth: "150px",
      }}
      aria-label="Download Company Brochure"
    >
      Download Brochure <Download className="w-4 h-4" />
    </motion.a>
  );
};

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [mapZ, setMapZ] = useState(0);
  const [contentZ, setContentZ] = useState(20);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (showMap) {
      setTimeout(() => {
        setMapZ(10);
        setContentZ(0);
      }, 400);
    } else {
      setTimeout(() => {
        setMapZ(0);
        setContentZ(20);
      }, 400);
    }
  }, [showMap]);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    validateEmail(formData.email) &&
    formData.phone.replace(/\s/g, '').length === 10 &&
    formData.message.trim() !== "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, '');
      const limitedValue = numericValue.slice(0, 10);
      let formattedValue = limitedValue;
      if (limitedValue.length > 5) {
        formattedValue = limitedValue.slice(0, 5) + ' ' + limitedValue.slice(5);
      }
      setFormData((prev) => ({ ...prev, [name]: formattedValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const sendEmail = async (data) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "067401e6-df31-46f1-9059-85504349082d",
          subject: "New Contact Form Submission from Blitz Innovations Website",
          from_name: data.name,
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          to_email: "blitzinnovations@gmail.com",
          replyto: data.email,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        return { success: true };
      } else {
        console.error("Web3Forms Error:", result);
        throw new Error(result.message || "Failed to send email");
      }
    } catch (error) {
      console.error("Email sending error:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid || isSending) return;

    setIsSending(true);

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        alert("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      alert("Failed to send message. Please try again later or email us directly at blitzinnovations@gmail.com");
    } finally {
      setIsSending(false);
    }
  };

  const RAJKOT_COORDS = "22.3072,70.8022";
  const MAP_ZOOM = 12;
  const mapUrl = `https://maps.google.com/maps?q=22.842653,70.864822&hl=en&z=15&output=embed`; 

  const MAIN_BG = "#121212";
  const TEXT_COLOR = "#FFFFFF";
  
  const SOCIAL_LINKS = [
    { Icon: Twitter, href: "https://x.com/BlitzInnovation", label: "Twitter (X)" },
    { Icon: Instagram, href: "https://www.instagram.com/blitz.innovation?igsh=MTZ6aW9heTFmOWkxag==", label: "Instagram" },
    { Icon: Linkedin, href: "https://www.linkedin.com/company/blitz-innovations/", label: "LinkedIn" },
    
  ];

  return (
    <>
      <div
        className="min-h-screen relative flex flex-col items-center justify-start pt-12 pb-24 font-sans overflow-hidden"
        style={{ backgroundColor: MAIN_BG }}
      >
        <motion.div
          key="map-layer"
          className="absolute inset-0 map-wrapper"
          initial={{ opacity: 0 }}
          animate={{
            opacity: showMap ? 1 : 0.6,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          style={{
            zIndex: mapZ,
            transition: "z-index 0s linear 0.8s",
          }}
        >
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Rajkot Office Location"
            allowFullScreen
            style={{
              border: 0,
              minHeight: "100vh",
              pointerEvents: showMap ? "auto" : "none",
            }}
          ></iframe>
        </motion.div>

        <motion.div
          className="absolute inset-0 gradient-overlay pointer-events-none"
          animate={{
            opacity: showMap ? 1 : 1,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `linear-gradient(to top, ${MAIN_BG} 0%, rgba(18,18,18,0.7) 40%, ${MAIN_BG} 100%)`,
            zIndex: 2,
          }}
        ></motion.div>

        <motion.div
          className="relative max-w-7xl w-full mx-auto p-4 sm:p-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            opacity: showMap ? 0 : 1,
            zIndex: contentZ,
            pointerEvents: showMap ? "none" : "auto",
            transition:
              "opacity 0.8s ease-in-out, z-index 0s linear 0.8s, pointer-events 0.8s ease-in-out",
          }}
        >
          <div className="flex flex-col lg:flex-row justify-between">
            
            <div className="w-full lg:w-2/3 xl:w-7/12 space-y-10 lg:space-y-14 mb-8 lg:mb-0 text-white">
              <motion.h1
                variants={itemVariants}
                className="text-5xl mt-[50px] md:mt-0 md:text-6xl font-light"
              >
                Contact <span className="text-red-500">us</span>
              </motion.h1>

              <div className="flex flex-col sm:flex-row gap-8 sm:gap-10">
                <motion.div variants={itemVariants} className="space-y-3">
                  <p className="text-xs uppercase tracking-widest text-red-500 font-bold">
                    ADDRESS
                  </p>
                  <p className="text-sm font-light">Morbi Halvad Road,</p>
                  <p className="text-sm font-light">Mahendra Nagar,</p>
                  <p className="text-sm font-light">Morbi - 363642</p>
                  <p className="text-sm font-light">Gujarat, India.</p>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-3">
                  <p className="text-xs uppercase tracking-widest text-red-500 font-bold">
                    CONTACTS
                  </p>
                  <p className="text-sm font-light">blitzinnovations@gmail.com </p>
                  <p className="text-sm font-light">+91  63532 74199 </p>
                  <p className="text-sm font-light">+91  74588 83333 </p>
                </motion.div>
              </div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col items-start gap-4 mt-6"
              >
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <p className="text-sm uppercase tracking-widest text-white">— follow us</p>
                  {SOCIAL_LINKS.map(({ Icon, href, label }, i) => (
                    <motion.a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className="text-white hover:text-red-500 transition"
                      aria-label={`Follow us on ${label}`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
                
                <DownloadBrochureButton />
              </motion.div>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="w-full mt-10 lg:mt-[100px] lg:ml-8 lg:w-2/5 xl:w-5/12 space-y-6"
              variants={containerVariants}
              style={{
                color: TEXT_COLOR,
                position: "relative",
                zIndex: showMap ? 0 : 10,
              }}
            >
              <motion.p
                variants={itemVariants}
                className="text-xs uppercase tracking-widest mb-4 text-white"
              >
                FEEDBACK FORM
              </motion.p>

              <FormInput label="Name" type="text" value={formData.name} onChange={handleChange} name="name" />
              <FormInput label="E-mail" type="email" value={formData.email} onChange={handleChange} name="email" />
              <FormInput label="Phone" type="text" value={formData.phone} onChange={handleChange} name="phone" />
              <FormInput label="Message" isTextArea value={formData.message} onChange={handleChange} name="message" />

              <div className="flex justify-end items-center pt-4">
                <FlipButton 
                  text="Send" 
                  isSending={isSending} 
                  onClick={handleSubmit}
                  disabled={!isFormValid}
                />
              </div>
            </motion.form>
          </div>
        </motion.div>

        <div
          className="absolute bottom-4 right-10 text-white text-xs opacity-60 hidden sm:block"
          style={{ zIndex: contentZ }}
        >
          
          <p className="mt-1"></p>
        </div>

        <motion.button
          onClick={() => setShowMap(!showMap)}
          animate={{
            opacity: [0.8, 1],
            backgroundColor: showMap ? "#3a3a3a" : "#C70008",
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          whileHover={{ opacity: 1, backgroundColor: showMap ? "#4a4a4a" : "#F81A27" }}
          whileTap={{ scale: 0.97 }}
          className="fixed bottom-0 left-0 w-[65px] h-[65px] flex items-center justify-center text-white text-sm font-semibold uppercase tracking-widest transition duration-300"
          style={{
            borderRadius: "0px",
            zIndex: 9999,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={showMap ? "back" : "find"}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {showMap ? "Back" : "Find"}
            </motion.span>
          </AnimatePresence>
        </motion.button>

        <style>{`
          .map-wrapper iframe {
            filter: grayscale(100%) invert(90%) brightness(130%) hue-rotate(180deg);
          }
        `}</style>
      </div>

      <Footer />
    </>
  );
}