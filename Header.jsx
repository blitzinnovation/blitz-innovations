import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Blitzlogo.png";
import { FaXTwitter } from "react-icons/fa6";
import {
  Send,
  X,
  Home,
  Info,
  Briefcase,
  FileText,
  FolderOpen,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Header({ currentSlide, onSlideChange, totalSlides, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const buttons = [
    { color: "#C70008", label: "Menu" },
    { color: "#EF1C22", icon: <Send size={28} />, label: "Share" },
  ];

  const menuItems = [
    { icon: <Home size={22} color="white" />, label: "Home", page: "/" },
    { icon: <Info size={22} color="white" />, label: "About", page: "/about" },
    { icon: <Briefcase size={22} color="white" />, label: "Services", page: "/services" },
    { icon: <FileText size={22} color="white" />, label: "Blogs", page: "/blogs" },
    { icon: <FolderOpen size={22} color="white" />, label: "Projects", page: "/projects" },
    { icon: <Phone size={22} color="white" />, label: "Contact Us", page: "/contact" },
  ];

  const shareItems = [
    { icon: <FaInstagram size={20} />, label: "Instagram", url: "https://www.instagram.com/blitz.innovation?igsh=MTZ6aW9heTFmOWkxag==" },
    { icon: <FaLinkedinIn size={20} />, label: "LinkedIn", url: "https://www.linkedin.com/company/blitz-innovations/" },
    { icon: <FaXTwitter size={20} />, label: "Twitter", url: "https://x.com/BlitzInnovation" },
    { icon: <FaWhatsapp size={20} />, label: "WhatsApp", url: "https://wa.me/916353274199?text=hello%20blitz" },
  ];

  const handleMenuClick = () => {
    if (shareOpen) setShareOpen(false);
    setMenuOpen(!menuOpen);
  };

  const handleShareClick = () => {
    if (menuOpen) setMenuOpen(false);
    setShareOpen(!shareOpen);
  };

  const handleMenuItemClick = (page) => {
    setMenuOpen(false);
    setTimeout(() => {
      if (onNavigate) {
        onNavigate(page);
      } else {
        navigate(page);
      }
    }, 300);
  };

  const handleLogoClick = () => {
    if (currentPath !== "/") {
      if (menuOpen) setMenuOpen(false);
      if (shareOpen) setShareOpen(false);
      if (onNavigate) {
        onNavigate("/");
      } else {
        navigate("/");
      }
    }
  };

  const handlePrevSlide = () => {
    if (onSlideChange && totalSlides && !isChanging) {
      setIsChanging(true);
      const newSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
      onSlideChange(newSlide);
      setTimeout(() => setIsChanging(false), 600);
    }
  };

  const handleNextSlide = () => {
    if (onSlideChange && totalSlides && !isChanging) {
      setIsChanging(true);
      const newSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
      onSlideChange(newSlide);
      setTimeout(() => setIsChanging(false), 600);
    }
  };

  const handleExploreClick = () => {
    if (onNavigate) {
      onNavigate("/about");
    } else {
      navigate("/about");
    }
  };

  const handleShareItemClick = (url) => {
    setShareOpen(false);
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 300);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full h-[70px] sm:h-[65px] z-40 flex items-center justify-between backdrop-blur-xl bg-[rgba(27,23,22,0.6)] border-b border-[rgba(255,255,255,0.15)] shadow-[0_8px_32px_rgba(0,0,0,0.37)]"
        style={{
          WebkitBackdropFilter: "blur(3px)",
          backdropFilter: "blur(9px)",
        }}
      >
        <div className="flex items-center ml-[-7px] sm:ml-[30px]">
          <img
            src={logo}
            alt="Blitz Logo"
            className="h-13 sm:h-[55px] cursor-pointer transition-transform duration-500 hover:scale-105"
            onClick={handleLogoClick}
          />
        </div>

        <div className="flex fixed top-0 right-0">
          {buttons.map((btn, i) => (
            <div
              key={i}
              className="btn-flip-container group relative w-[70px] h-[70px] sm:w-[65px] sm:h-[65px] flex justify-center items-center cursor-pointer"
              style={{
                backgroundColor: btn.color,
                boxShadow: "0 0px 0px rgba(248,26,39,0.3)",
                backdropFilter: "blur(10px)",
              }}
            >
              {btn.label === "Menu" ? (
                <button
                  onClick={handleMenuClick}
                  className="btn-flip-menu focus:outline-none w-full h-full flex items-center justify-center"
                >
                  
                  {menuOpen ? (
                    
                    <X className="text-[#1B1716]" size={26} />
                  ) : (
                    
                    <>
                      
                      <div className="btn-flip-front">
                        <div className="flex flex-col justify-between w-[18px] h-[18px]">
                          <div className="bg-[#1B1716] h-[3px] w-1/2 rounded"></div>
                          <div className="bg-[#1B1716] h-[2px] rounded"></div>
                          <div className="bg-[#1B1716] h-[3px] w-1/2 rounded self-end"></div>
                        </div>
                      </div>
                      <div className="btn-flip-back">
                        <span className="text-[#fff] font-semibold text-xs">MENU</span>
                      </div>
                    </>
                  )}
                  
                </button>
              ) : (
                <button
                  onClick={handleShareClick}
                  className="btn-flip-share focus:outline-none w-full h-full flex items-center justify-center"
                >
                  
                  {shareOpen ? (
                    
                    <X size={26} className="text-[#1B1716]" />
                  ) : (
                    
                    <>
                      
                      <div className="btn-flip-front">
                        <span style={{ color: "#1B1716", fontWeight: "600", fontSize: "13px" }}>SHARE</span>
                      </div>
                      
                      <div className="btn-flip-back">
                        <Send size={24} className="text-[#fff]" />
                      </div>
                    </>
                  )}
                  
                </button>
              )}
            </div>
          ))}
        </div>

        
        <div className="fixed top-[70px] sm:top-[65px] right-0 z-30 flex flex-col items-end pointer-events-none">
          {menuItems
            .filter((item) => item.page !== currentPath)
            .map((item, index) => (
              <div
                key={index}
                onClick={() => handleMenuItemClick(item.page)}
                className="flex items-center overflow-hidden cursor-pointer transition-all duration-300 menu-item-hover"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateX(0)" : "translateX(200px)",
                  transition: `all 0.6s ${
                    menuOpen
                      ? "cubic-bezier(0.22, 1, 0.36, 1)"
                      : "cubic-bezier(0.77, 0, 0.175, 1)"
                  } ${menuOpen ? index * 0.1 : (menuItems.filter((item) => item.page !== currentPath).length - index - 1) * 0.1}s`,
                  pointerEvents: menuOpen ? "auto" : "none",
                }}
              >
                <div
                  className="flex items-center justify-center md:w-[60px] md:h-[60px]"
                  style={{
                    width: "50px",
                    height: "55px",
                    background: "rgba(248,26,39,0.85)",
                    color: "white",
                    borderBottom: "1px solid rgba(255,255,255,0.2)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  {item.icon}
                </div>
                <div
                  className="flex items-center pl-4 md:w-[150px] md:h-[60px]"
                  style={{
                    width: "140px",
                    height: "55px",
                    background: "rgba(27,23,22,0.9)",
                    color: "white",               
                    fontWeight: 500,
                    fontSize: "14px",
                    borderBottom: "1px solid rgba(255,255,255,0.15)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
        </div>

        
        <div className="fixed top-[70px] sm:top-[65px] right-0 z-30 flex flex-col items-end pointer-events-none">
          {shareItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleShareItemClick(item.url)}
              className="flex items-center justify-center cursor-pointer transition-all duration-300 share-item-hover"
              style={{
                width: "60px",
                height: "60px",
                background: "rgba(199,0,8,0.75)",
                borderBottom: "1px solid rgba(255,255,255,0.15)",
                color: "white",
                opacity: shareOpen ? 1 : 0,
                transform: shareOpen ? "translateX(0)" : "translateX(200px)",
                transition: `all 0.6s ${
                  shareOpen
                    ? "cubic-bezier(0.22, 1, 0.36, 1)"
                    : "cubic-bezier(0.77, 0, 0.175, 1)"
                } ${shareOpen ? index * 0.1 : (shareItems.length - index - 1) * 0.1}s`,
                backdropFilter: "blur(12px)",
                pointerEvents: shareOpen ? "auto" : "none",
              }}
            >
              {item.icon}
            </div>
          ))}
        </div>

        
        <style jsx>{`
          @keyframes slide-up {
            0% {
              transform: translateY(30px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .animate-slide-up {
            animation: slide-up 0.8s ease-out forwards;
          }

          @media (max-width: 640px) {
            header img {
              margin-left: 20px !important;
            }
            .menu-item {
              width: 140px !important;
              height: 55px !important;
            }
            
            .btn-flip-menu:hover .btn-flip-front,
            .btn-flip-menu:active .btn-flip-front,
            .btn-flip-share:hover .btn-flip-front,
            .btn-flip-share:active .btn-flip-front {
              
              transform: translateY(0) rotateX(0);
              opacity: 1;
              transition: none; 
            }

            .btn-flip-menu:hover .btn-flip-back,
            .btn-flip-menu:active .btn-flip-back,
            .btn-flip-share:hover .btn-flip-back,
            .btn-flip-share:active .btn-flip-back {
              
              transform: translateY(-50%) rotateX(90deg);
              opacity: 0;
              transition: none; 
            }
          }

          
          .btn-flip-menu,
          .btn-flip-share {
            position: relative;
            perspective: 1000px;
          }

          .btn-flip-front,
          .btn-flip-back {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            backface-visibility: hidden;
            transition: transform 0.5s, opacity 0.5s;
          }

          .btn-flip-front {
            transform: translateY(0) rotateX(0);
            opacity: 1;
          }

          .btn-flip-back {
            transform: translateY(-50%) rotateX(90deg);
            opacity: 0;
            background: #141414;
          }

          
          

          
          @media (min-width: 641px) {
            .btn-flip-menu:hover .btn-flip-front,
            .btn-flip-menu:active .btn-flip-front {
              transform: translateY(50%) rotateX(90deg);
              opacity: 0;
            }

            .btn-flip-menu:hover .btn-flip-back,
            .btn-flip-menu:active .btn-flip-back {
              transform: translateY(0) rotateX(0);
              opacity: 1;
            }
          }

          
          @media (min-width: 641px) {
            .btn-flip-share:hover .btn-flip-front,
            .btn-flip-share:active .btn-flip-front {
              transform: translateY(50%) rotateX(90deg);
              opacity: 0;
            }

            .btn-flip-share:hover .btn-flip-back,
            .btn-flip-share:active .btn-flip-back {
              transform: translateY(0) rotateX(0);
              opacity: 1;
            }
          }
          
          
          .btn-flip-arrow {
            position: relative;
            perspective: 1000px;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .arrow-flip-front,
          .arrow-flip-back {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            backface-visibility: hidden;
            transition: transform 0.5s, opacity 0.5s;
          }

          .arrow-flip-front {
            transform: translateY(0) rotateX(0);
            opacity: 1;
          }

          .arrow-flip-back {
            transform: translateY(-50%) rotateX(90deg);
            opacity: 0;
            background: #141414;
          }

          
          .btn-flip-arrow:hover .arrow-flip-front,
          .btn-flip-arrow:active .arrow-flip-front {
            transform: translateY(50%) rotateX(90deg);
            opacity: 0;
          }

          .btn-flip-arrow:hover .arrow-flip-back,
          .btn-flip-arrow:active .arrow-flip-back {
            transform: translateY(0) rotateX(0);
            opacity: 1;
          }

          
          @media (hover: hover) and (pointer: fine) {
            .menu-item-hover:hover {
              filter: brightness(1.1);
            }

            .share-item-hover:hover {
              filter: brightness(1.25);
              transform: scale(1.1);
            }
          }
        `}</style>
      </header>

      
      {currentPath === "/" && (
        <div className="fixed bottom-0 left-0 z-30 flex">

          <div
      className="absolute bottom-0 left-0"
      style={{
        width: "140px",
        height: "70px",
        backgroundColor: "#000",
        zIndex: -10,
      }}
    ></div>

          
          <div
            onClick={handlePrevSlide}
            className={`w-[70px] h-[70px] sm:w-[70px] sm:h-[70px] cursor-pointer ${
              isChanging ? "opacity-80 pointer-events-none" : ""
            }`}
            style={{
              backgroundColor: "#C70008",
            }}
          >
            <div className="btn-flip-arrow">
              <div className="arrow-flip-front">
                <ChevronLeft size={28} color="white" />
              </div>
              <div className="arrow-flip-back">
                <span className="text-white font-semibold text-xs">PREVIOUS</span>
              </div>
            </div>
          </div>

          
          <div
            onClick={handleNextSlide}
            className={`w-[70px] h-[70px] sm:w-[70px] sm:h-[70px] cursor-pointer ${
              isChanging ? "opacity-80 pointer-events-none" : ""
            }`}
            style={{
              backgroundColor: "#F81A27",
            }}
          >
            <div className="btn-flip-arrow">
              <div className="arrow-flip-front">
                <ChevronRight size={28} color="white" />
              </div>
              <div className="arrow-flip-back">
                <span className="text-white font-semibold text-xs">NEXT</span>
              </div>
            </div>
          </div>

          
          <div
            onClick={handleExploreClick}
            className="sm:hidden flex items-center justify-center h-[70px] cursor-pointer transition-all duration-300 hover:opacity-80 hover:bg-opacity-90"
            style={{
              backgroundColor: "#1B1716",
              color: "white",
              fontWeight: 600,
              fontSize: "16px",
              width: "calc(100vw - 140px)",
            }}
          >
            Explore Now
          </div>
        </div>
      )}
    </>
  );
}