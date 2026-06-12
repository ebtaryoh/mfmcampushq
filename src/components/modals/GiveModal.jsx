import { motion } from 'framer-motion';
import { X, Heart } from 'lucide-react';

const overlayVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", damping: 25, stiffness: 300 } },
  exit: { opacity: 0, scale: 0.95, y: 20 }
};

export default function GiveModal({ closeModal }) {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <motion.div variants={overlayVariants} initial="hidden" animate="visible" exit="hidden" onClick={closeModal} className="absolute inset-0 bg-mfm-ink/70 backdrop-blur-sm"></motion.div>
      <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit" className="soft-card w-full max-w-md relative z-10 p-8 md:p-10 text-center">
        <button onClick={closeModal} className="absolute top-6 right-6 bg-mfm-cream w-8 h-8 rounded-full flex items-center justify-center"><X size={18} /></button>
        <div className="w-16 h-16 bg-mfm-gold-pale text-mfm-gold rounded-full flex items-center justify-center mx-auto mb-6"><Heart size={32} /></div>
        <h3 className="font-display text-3xl mb-2">Partner with us</h3>
        <p className="text-mfm-stone mb-6">Your giving powers the spread of the gospel across campuses.</p>
        
        <div className="bg-mfm-cream rounded-xl p-4 mb-6 text-left">
          <p className="text-xs text-mfm-stone font-bold uppercase mb-1">Bank Transfer (NGN)</p>
          <p className="font-display text-xl text-mfm-purple-dark font-bold">1234567890</p>
          <p className="text-sm font-medium">MFM Campus Fellowship HQ</p>
          <p className="text-xs text-mfm-stone">Zenith Bank</p>
        </div>

        <button onClick={() => window.open('https://paystack.com', '_blank')} className="w-full bg-mfm-purple text-white py-4 rounded-xl font-bold flex justify-center items-center">
          Give Online via Card
        </button>
      </motion.div>
    </div>
  );
}
