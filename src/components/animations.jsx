import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Timings mapping
const timing = {
  fast: 0.15,
  medium: 0.3,
  slow: 0.5
};

// Fade Up Reveal
export const FadeUp = ({ children, delay = 0, duration = 'slow', className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: timing[duration], delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// Scale In Reveal
export const ScaleIn = ({ children, delay = 0, duration = 'medium', className = "" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: timing[duration], delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// Staggered Container for grouping items
export const StaggerContainer = ({ children, className = "", staggerDelay = 0.1 }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "", yOffset = 20 }) => {
  const item = {
    hidden: { opacity: 0, y: yOffset },
    visible: { opacity: 1, y: 0, transition: { duration: timing.medium, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
};

// Staggered Text Reveal (Word by Word)
export const StaggeredText = ({ text, className = "" }) => {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15, stiffness: 100 } },
    hidden: { opacity: 0, y: 30 },
  };

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block mr-[0.25em]">
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

// Parallax Image Wrapper
export const ParallaxImage = ({ src, alt, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.img 
        src={src} 
        alt={alt} 
        style={{ y, scale: 1.15 }}
        className="absolute inset-0 w-full h-full object-cover" 
      />
    </div>
  );
};

// Page Transition Wrapper
export const PageWrapper = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: timing.slow, ease: "easeInOut" }}
    className={className}
  >
    {children}
  </motion.div>
);
