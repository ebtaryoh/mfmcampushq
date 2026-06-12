import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

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

export default function JoinModal({ closeModal }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(closeModal, 2000);
    }, 1500);
  };

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
        className="soft-card w-full max-w-xl relative z-10 overflow-hidden"
      >
        <button onClick={closeModal} className="absolute top-6 right-6 text-mfm-stone hover:text-mfm-purple bg-mfm-cream w-8 h-8 rounded-full flex items-center justify-center transition-colors">
          <X size={18} />
        </button>
        
        <div className="p-8 md:p-10">
          {success ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="font-display text-2xl text-mfm-purple-dark mb-2">Request Sent!</h3>
              <p className="text-mfm-stone">Your campus coordinator will contact you shortly.</p>
            </motion.div>
          ) : (
            <>
              <h3 className="font-display text-3xl text-mfm-purple-dark mb-2">Join a Chapter</h3>
              <p className="text-mfm-stone mb-8">Connect with the family on your campus.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-mfm-purple-dark mb-1">First Name</label>
                    <input required type="text" className="fi" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-mfm-purple-dark mb-1">Last Name</label>
                    <input required type="text" className="fi" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-mfm-purple-dark mb-1">Institution</label>
                  <select required className="fi">
                    <option value="">Select your school...</option>
                    <option value="unilag">University of Lagos</option>
                    <option value="ui">University of Ibadan</option>
                    <option value="abu">Ahmadu Bello University</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-mfm-purple-dark mb-1">WhatsApp Number</label>
                  <input required type="tel" className="fi" placeholder="+234..." />
                </div>
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-mfm-purple text-white py-4 rounded-xl font-bold hover:bg-mfm-purple-dark transition-colors mt-6 flex justify-center items-center h-[56px]"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : "Submit Request"}
                </button>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
