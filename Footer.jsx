import React from "react";
import logo from "../assets/Blitzlogo.png";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { icon: <FaInstagram size={18} />, href: "https://www.instagram.com/blitz.innovation?igsh=MTZ6aW9heTFmOWkxag==" },
    { icon: <FaLinkedinIn size={18} />, href: "https://www.linkedin.com/company/blitz-innovations/" },
   { icon: <FaXTwitter size={18} />, href: "https://x.com/BlitzInnovation" },
    { icon: <FaWhatsapp size={18} />, href: "https://wa.me/916353274199?text=hello%20blitz" },
  ];

  const services = [
    "Web Development",
    "App Development",
    "UI/UX Design",
    "Custom Software",
  ];

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-[rgba(27,23,22,0.8)] backdrop-blur-xl border-t border-[rgba(255,255,255,0.1)] shadow-[0_-8px_32px_rgba(0,0,0,0.4)]"></div>

      <motion.div
        className="relative z-10 flex flex-col md:flex-row justify-between items-start text-left px-8 md:px-20 py-12 space-y-10 md:space-y-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-start space-y-4 w-full md:w-1/3">
          <motion.img
            src={logo}
            alt="Blitz Innovation Logo"
            className="w-[130px] cursor-pointer select-none"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          />
          <p className="text-gray-400 text-sm leading-relaxed font-inter pr-4">
            Blitz Digital is a creative software agency providing innovative and
            high-performance digital solutions — transforming ideas into modern,
            scalable products.
          </p>
          <div className="flex gap-4 mt-2">
            {socials.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-gray-300 hover:text-white bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-full w-9 h-9 flex justify-center items-center transition-all duration-500 hover:shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start space-y-3 w-full md:w-1/4">
          <h3 className="text-white font-semibold text-lg tracking-wide mb-2">
            Services
          </h3>
          {services.map((service, index) => (
            <motion.a
              key={index}
              className="text-gray-400 hover:text-white text-sm transition-all duration-300"
              whileHover={{ x: 6 }}
            >
              {service}
            </motion.a>
          ))}
        </div>

        <div className="flex flex-col items-start space-y-3 w-full md:w-1/4">
          <h3 className="text-white font-semibold text-lg tracking-wide mb-2">
            Quick Links
          </h3>

          {links.map((item, index) => (
            <motion.div key={index} whileHover={{ x: 6 }}>
              <Link
                to={item.path}
                className="text-gray-400 hover:text-white text-sm transition-all duration-300"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-start space-y-3 w-full md:w-1/4">
          <h3 className="text-white font-semibold text-lg tracking-wide mb-2">
            Contact
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            blitzinnovations@gmail.com
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            +91 63532 74199 
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            +91 74588 83333
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Morbi, Gujarat, India
          </p>
        </div>
      </motion.div>

      <motion.div
        className="relative z-10 w-[90%] mx-auto h-[1px] bg-[rgba(255,255,255,0.1)]"
        initial={{ width: 0 }}
        whileInView={{ width: "90%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="relative z-10 py-5 text-center text-gray-400 text-sm font-inter"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        © {year} <span className="text-white font-medium">Blitz Innovation</span> — All rights reserved.
      </motion.div>

      <div className="absolute top-0 left-1/4 w-[250px] h-[250px] bg-[#F81A27] opacity-10 blur-[100px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-[200px] h-[200px] bg-[#C70008] opacity-10 blur-[100px] rounded-full animate-pulse delay-700"></div>
    </footer>
  );
}