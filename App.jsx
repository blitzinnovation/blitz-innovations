import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const totalSlides = 4;
  const navigate = useNavigate();
  const location = useLocation();

  const handleSlideChange = (newSlide) => {
    setCurrentSlide(newSlide);
  };

  const tileColors = ["#E50922", "#F81A27", "#C70008", "#F81A27", "#E50922"];

  const handleNavigation = (route) => {
    if (route !== location.pathname) {
      setIsLoading(true);
      setTimeout(() => {
        navigate(route);
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }, 400);
    }
  };

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const core = document.querySelector(".cursor-core");

    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    };

    const clickCursor = () => {
      core.classList.add("expand");
      setTimeout(() => core.classList.remove("expand"), 500);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("click", clickCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("click", clickCursor);
    };
  }, []);

  return (
    <div className="bg-[#1B1716] min-h-screen text-white font-inter relative">

    
      <div className="cursor">
        <div className="cursor-core"></div>
      </div>

      
      <div
        className={`fixed right-0 z-[35] transition-all ${
          isLoading ? "w-full delay-0" : "w-0 delay-[400ms]"
        }`}
        style={{
          top: "60px",
          height: "calc(100vh - 60px)",
          transitionProperty: "width",
          transitionDuration: "0s",
          transitionTimingFunction: "ease",
        }}
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={`absolute right-0 h-[20%] transition-all duration-200 ease-in-out ${
              isLoading ? "w-full" : "w-0"
            }`}
            style={{
              top: `${index * 20}%`,
              backgroundColor: tileColors[index],
              transitionDelay: isLoading
                ? `${index * 0.05}s`
                : `${(4 - index) * 0.05}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <Header
        currentSlide={currentSlide}
        onSlideChange={handleSlideChange}
        totalSlides={totalSlides}
        onNavigate={handleNavigation}
      />

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              currentSlide={currentSlide}
              onSlideChange={handleSlideChange}
              onNavigate={handleNavigation}
              isTransitioning={isLoading}
            />
          }
        />

        <Route 
          path="/about" 
          element={
            <About 
              onNavigate={handleNavigation} 
              isTransitioning={isLoading}
            />
          } 
        />

        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
