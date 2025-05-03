// src/components/Hero.jsx
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

const Hero = () => {
  // Typing effect
  const quotes = useMemo(
    () => [
      "🌐 Building the Future of the Web Where visual design meets powerful Python development., 💡 Designing Beyond Aesthetics: Engineering Experiences That Matter. |"
    ],
    []
  );
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentQuote = quotes[quoteIndex];
    if (charIndex < currentQuote.length) {
      const timer = setTimeout(() => {
        setDisplayedText(currentQuote.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 70);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
      }, 2000);
      return () => clearTimeout(resetTimer);
    }
  }, [charIndex, quoteIndex, quotes]);

  // Animations
  const container = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        staggerChildren: 0.05, 
        delayChildren: 0.2,
        duration: 0.8,
        ease: "easeOut"
      },
    },
  };
  const rolesContainer = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        staggerChildren: 0.3, 
        delayChildren: 1,
        duration: 0.8,
        ease: "easeOut"
      },
    },
  };
  const roleChild = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
  const quoteContainer = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: 1.5, 
        duration: 0.8,
        ease: "easeOut"
      } 
    },
  };

  // Badges
  const roles = [
    { text: "Full-Stack Developer", bgColor: "bg-[#ff7e29]", dot: "bg-[#ff7e29]" },
    { text: "NextJS Developer", bgColor: "bg-[#e94560]", dot: "bg-[#e94560]" },
    { text: "Python Developer", bgColor: "bg-[#a259ff]", dot: "bg-[#a259ff]" },
  ];

  return (
    <section className="w-full h-full flex flex-col justify-center items-center px-6 py-12 font-sans select-none max-w-4xl mx-auto" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
      {/* Greeting */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-2 mb-1"
      >
        <span className="text-[#a259ff] text-base">&#10022;</span>
        <span className="text-white text-base md:text-xl font-medium">Hey there, I'm Brian! <span className="inline-block">👋</span></span>
      </motion.div>
      {/* Headline */}
      <motion.h1
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-center font-bold leading-tight mb-1"
        style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', lineHeight: 1.2 }}
      >
        <span className="block text-white">Delivering <span className="text-gradient-hero">Innovative Solutions</span></span>
        <span className="block text-white">in design and code.</span>
      </motion.h1>
      {/* Badges */}
      <motion.div
        variants={rolesContainer}
        initial="hidden"
        animate="visible"
        className="mt-4 flex flex-wrap gap-2 justify-center"
      >
        {roles.map((role) => (
          <motion.span
            variants={roleChild}
            className={`flex items-center gap-1.5 ${role.bgColor} bg-opacity-20 border border-opacity-30 border-white px-2.5 py-0.5 rounded-full text-xs font-medium text-white`}
          >
            <span className={`inline-block w-1.5 h-1.5 rounded-full ${role.dot}`} />
            {role.text}
          </motion.span>
        ))}
      </motion.div>
      {/* Typing Quote */}
      <motion.div
        variants={quoteContainer}
        initial="hidden"
        animate="visible"
        className="mt-6"
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={quoteIndex}
            className="text-xs font-normal text-gray-300 flex items-center justify-center"
            style={{ fontFamily: 'Inter, Poppins, sans-serif', letterSpacing: '0.01em' }}
          >
            <span className="inline-block">{displayedText}</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-0.5 h-4 bg-white ml-1"
            />
          </motion.p>
        </AnimatePresence>
      </motion.div>
      {/* Custom gradients for headline */}
      <style jsx>{`
        .text-gradient-hero {
          background: linear-gradient(90deg, #ff7e29 0%, #e94560 50%, #a259ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Hero;