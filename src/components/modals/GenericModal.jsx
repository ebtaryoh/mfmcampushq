import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 300 }
  },
  exit: { opacity: 0, scale: 0.95, y: 20 }
};

export default function GenericModal({ title, desc, closeModal }) {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <motion.div 
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={closeModal}
        className="absolute inset-0 bg-mfm-ink/70 backdrop-blur-sm"
      ></motion.div>
      
      <motion.div 
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="soft-card w-full max-w-md relative z-10 overflow-hidden text-center p-10"
      >
        <button onClick={closeModal} className="absolute top-6 right-6 text-mfm-stone hover:text-mfm-purple bg-mfm-cream w-8 h-8 rounded-full flex items-center justify-center transition-colors">
          <X size={18} />
        </button>
        
        <div className="w-16 h-16 bg-mfm-purple-light text-mfm-purple rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">✨</span>
        </div>
        <h3 className="font-display text-2xl text-mfm-purple-dark mb-2">{title}</h3>
        <p className="text-mfm-stone mb-8">{desc}</p>
        
        <button onClick={closeModal} className="bg-mfm-purple text-white px-8 py-3 rounded-xl font-medium hover:bg-mfm-purple-dark transition-colors">
          Close
        </button>
      </motion.div>
    </div>
  );
}
