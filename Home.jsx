import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

import Blitzbg from "../assets/blitzbg.svg";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";

export default function Home({ isTransitioning, currentSlide, onSlideChange, onNavigate }) {
  const navigate = useNavigate();
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const longPressTimer = useRef(null);
  const [animateLearnMore, setAnimateLearnMore] = useState(false);

  const heroData = [
  {
    id: 1,
    title:
      'Design with Purpose.<br/>Build for Impact.',
    desc: "Where ideas turn into structured, intelligent designs — crafted with clarity, precision, and creativity.",
    image: hero1,
  },
  {
    id: 2,
    title:
      'Strong Partnerships.<br/>Bold Solutions.',
    desc: "We collaborate with visionaries to create reliable, scalable, and high-performance digital products.",
    image: hero2,
  },
  {
    id: 3,
    title:
      'Teamwork that Drives <br/>Innovation.',
    desc: "A focused team turning complex challenges into seamless, elegant software experiences.",
    image: hero3,
  },
  {
    id: 4,
    title:
      'Think. Build.<br/>Transform.',
    desc: "From concept to code — we craft digital excellence with deep focus and modern engineering.",
    image: hero4,
  },
];

  const [current, setCurrent] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef(null);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % heroData.length);
    }, 7000);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const initialTimeout = setTimeout(() => setIsInitialLoad(false), 1500);
    resetInterval();
    return () => {
      clearTimeout(initialTimeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (currentSlide !== undefined && currentSlide !== current) {
      setDirection(currentSlide > current ? 1 : -1);
      setCurrent(currentSlide);
      resetInterval();
    }
  }, [currentSlide]);

  useEffect(() => {
    if (onSlideChange && !isInitialLoad) onSlideChange(current);
  }, [current]);

  const currentHero = heroData[current];

  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 300], [0, 50]);
  const yContent = useTransform(scrollY, [0, 300], [0, 30]);

  const fadeVariants = {
    enter: { opacity: 0, scale: 1.05 },
    center: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 1 } },
  };

  const handleLearnMore = () => {
    if (onNavigate) onNavigate("/about");
    else navigate("/about");
  };

  const goToSlide = (index) => {
    if (index !== current) {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
      resetInterval();
    }
  };

  const goToNext = () => goToSlide((current + 1) % heroData.length);
  const goToPrev = () => goToSlide((current - 1 + heroData.length) % heroData.length);

  // MOBILE SWIPE HANDLERS
  const onTouchStart = (e) => (touchStartX.current = e.changedTouches[0].clientX);
  const onTouchMove = (e) => (touchEndX.current = e.changedTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > 50) distance > 0 ? goToNext() : goToPrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // LEARN MORE LONG PRESS FOR MOBILE ONLY
  const startLongPress = () => {
    if (window.innerWidth > 768) return;
    longPressTimer.current = setTimeout(() => {
      setAnimateLearnMore(false);
      setTimeout(() => setAnimateLearnMore(true), 50);
    }, 200);
  };
  const endLongPress = () => clearTimeout(longPressTimer.current);

  const wipeVariants = {
    rest: { width: "0%", transition: { duration: 0.5, ease: "easeInOut" } },
    hover: { width: "100%", transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const textWipe = {
    rest: { width: "0%", transition: { duration: 0.45, ease: "easeInOut" } },
    hover: { width: "100%", transition: { duration: 0.45, ease: "easeInOut" } },
  };

  return (
    <section
      className="relative w-full h-screen bg-[#1B1716] text-white overflow-hidden mt-[60px]"
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh" }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <motion.img
        src={Blitzbg}
        alt="Blitz Background"
        className="absolute left-1/2 transform -translate-x-[85%] sm:-translate-x-1/2 z-[10] object-contain w-[1440px] h-[790px] max-w-none"
        style={{ top: "0px" }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isTransitioning ? 100 : 0, opacity: isTransitioning ? 0 : 1 }}
        transition={{ duration: isInitialLoad ? 1.2 : 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      />

      <AnimatePresence mode="wait" custom={direction}>
        {!isInitialLoad && (
          <motion.img
            key={`hero-img-${currentHero.id}`}
            src={currentHero.image}
            alt="Hero"
            custom={direction}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ y: yHero }}
            className="absolute top-[-10px] right-[-2%] z-0 object-contain sm:w-auto sm:h-auto w-[1200px] h-[790px] max-w-[1440px] max-h-[790px]"
          />
        )}
      </AnimatePresence>

      {!isInitialLoad && (
        <div className="relative z-10 h-full flex flex-col justify-center mt-[-130px] sm:mt-[0px] pl-[20px] sm:pl-[80px] -ml-2 max-w-3xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`content-${currentHero.id}`}
              variants={fadeVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ y: yContent }}
            >
              <h1
                className="text-[32px] sm:text-[48px] md:text-[64px] font-inter font-bold leading-tight whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: currentHero.title }}
              ></h1>

              <p className="mt-6 text-[18px] sm:text-[20px] md:text-[22px] font-inter text-gray-200 leading-relaxed max-w-xl">
                {currentHero.desc}
              </p>

              <motion.button
                className="mt-10 px-6 py-2.5 text-lg font-semibold relative overflow-hidden bg-[#1B1716] border border-[#D7001A] text-[#D7001A]"
                onClick={handleLearnMore}
                onTouchStart={startLongPress}
                onTouchEnd={endLongPress}
                initial="rest"
                animate={animateLearnMore ? "hover" : "rest"}
                whileHover="hover"
                whileTap={{ scale: 0.96 }}
              >
                <motion.div
                  variants={wipeVariants}
                  className="absolute inset-0 bg-[#D7001A] z-0"
                  style={{ right: 0, left: "auto" }}
                />

                <span className="relative z-10 block">
                  <div className="relative text-[#D7001A]">
                    Learn More
                    <motion.div
                      variants={textWipe}
                      className="absolute inset-0 overflow-hidden text-white whitespace-nowrap"
                    >
                      Learn More
                    </motion.div>
                  </div>
                </span>
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {!isInitialLoad && (
        <motion.div
          className="absolute right-4 sm:right-16 flex items-center gap-6 z-10 bottom-[200px] sm:bottom-[72px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: isTransitioning ? 0 : 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            key={`number-${currentHero.id}`}
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-[Impact] text-[36px] sm:text-[54px] text-white leading-none tracking-wider"
          >
            0{currentHero.id}
          </motion.span>

          <span className="text-gray-400 text-[20px] sm:text-[32px]">|</span>

          <div className="flex flex-col gap-2 sm:gap-3">
            {heroData.map((_, index) => (
              <motion.div
                key={index}
                className={`rounded-full cursor-pointer ${
                  index === current ? "bg-[#F81A27]" : "bg-gray-500"
                } w-[8px] h-[8px] sm:w-3 sm:h-3`}
                animate={{
                  scale: index === current ? 1.3 : 1,
                  opacity: index === current ? 1 : 0.6,
                }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={() => goToSlide(index)}
              ></motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
