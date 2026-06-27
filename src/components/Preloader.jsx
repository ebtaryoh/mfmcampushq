import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#1a0f26] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-mfm-purple/20 blur-[100px] rounded-full"></div>
      
      {/* Logo container */}
      <motion.div 
        className="relative z-10 flex flex-col items-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="w-32 h-32 flex items-center justify-center mb-6 relative overflow-hidden">
          <img src="/logo.webp" alt="MFMCF Logo" className="w-full h-full object-contain relative z-10" />
          <motion.div 
            className="absolute inset-0 rounded-full border border-mfm-purple-light/20"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </div>

        {/* Text */}
        <div className="text-center overflow-hidden">
          <motion.h1 
            className="font-display text-3xl md:text-4xl text-[#f3eedd] tracking-tight mb-2"
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          >
            MFMCAMPUSHQ
          </motion.h1>
          <motion.p 
            className="text-mfm-gold font-mono text-[10px] tracking-[0.3em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            National Campus Fellowship
          </motion.p>
        </div>
      </motion.div>

      {/* Loading Progress Bar */}
      <div className="absolute bottom-12 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-mfm-gold"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
