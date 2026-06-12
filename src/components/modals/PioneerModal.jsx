import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

const overlayVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", damping: 25, stiffness: 300 } },
  exit: { opacity: 0, scale: 0.95, y: 20 }
};

export default function PioneerModal({ closeModal }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSuccess(true); setTimeout(closeModal, 2000); }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <motion.div variants={overlayVariants} initial="hidden" animate="visible" exit="hidden" onClick={closeModal} className="absolute inset-0 bg-mfm-ink/70 backdrop-blur-sm"></motion.div>
      <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit" className="soft-card w-full max-w-xl relative z-10 p-8 md:p-10">
        <button onClick={closeModal} className="absolute top-6 right-6 bg-mfm-cream w-8 h-8 rounded-full flex items-center justify-center"><X size={18} /></button>
        {success ? (
          <div className="text-center py-12"><CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" /><h3 className="font-display text-2xl mb-2">Application Received!</h3><p>We'll reach out within 48 hours.</p></div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3 className="font-display text-3xl mb-2">Pioneer a Chapter</h3>
            <p className="mb-6">Bring the fire to your campus.</p>
            <input required type="text" className="fi mb-4" placeholder="Your Name" />
            <input required type="text" className="fi mb-4" placeholder="Institution Name" />
            <input required type="tel" className="fi mb-6" placeholder="WhatsApp Number" />
            <button type="submit" disabled={loading} className="w-full bg-mfm-gold text-mfm-purple-dark py-4 rounded-xl font-bold flex justify-center items-center h-[56px]">
              {loading ? <div className="w-6 h-6 border-2 border-mfm-purple-dark/30 border-t-mfm-purple-dark rounded-full animate-spin"></div> : "Submit Application"}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
