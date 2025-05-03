import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Motion utilities
const slideInFromLeft = (delay = 0) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { delay, duration: 0.5 } },
});

const slideInFromTop = (delay = 0) => ({
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay, duration: 0.5 } },
});

const bounceIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
      delay: 0.5,
    },
  },
};

const MotionTag = ({ tag: Tag = "div", variants, initial, animate, className, children }) => {
  const MotionComponent = motion[Tag];
  return (
    <MotionComponent
      variants={variants}
      initial={initial}
      animate={animate}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

const gradients = [
  "radial-gradient(transparent, transparent, #A07CFE, #FE8FB5, #FFBE7B, transparent, transparent)",
  "radial-gradient(transparent, transparent, #FE8FB5, #FFBE7B, #A07CFE, transparent, transparent)",
  "radial-gradient(transparent, transparent, #FFBE7B, #A07CFE, #FE8FB5, transparent, transparent)",
];

const HireMeButton = ({ isSticky }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MotionTag
      tag="div"
      variants={isMobile ? slideInFromTop(1) : slideInFromLeft(1)}
      initial="hidden"
      animate="visible"
      className="flex justify-center lg:justify-center lg:py-4"
    >
      <motion.div
        variants={bounceIn}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        <motion.div
          animate={{
            boxShadow: [
              "0 0 10px rgba(255, 190, 123, 0.5)",
              "0 0 20px rgba(160, 124, 254, 0.7)",
              "0 0 10px rgba(254, 143, 181, 0.5)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-sm"
        />
        <div
          onClick={scrollToContact}
          className={`cursor-pointer ${!isSticky && "lg:hidden"}`}
        >
          <div className="relative w-28 h-9 lg:w-32 lg:h-10 overflow-hidden p-[1px] rounded-sm hover:scale-110 transition-all duration-300 ease-in-out">
            <motion.div
              animate={{
                background: gradients,
                rotate: [0, 360],
              }}
              transition={{
                background: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                },
                rotate: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="flex justify-center items-center absolute inset-0 w-full h-full blur-sm"
            ></motion.div>
            <button
              className="text-white text-[10px] lg:text-[11px] border border-[rgba(255,255,255,0.3)] font-bold tracking-widest bg-[#1a1a2e] px-4 py-2 rounded-md w-full h-full relative z-10"
            >
              HIRE ME
            </button>
          </div>
        </div>
      </motion.div>
    </MotionTag>
  );
};

export default HireMeButton;