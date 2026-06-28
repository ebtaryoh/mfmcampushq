import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ChevronDown } from 'lucide-react';

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

const SCHOOLS = [
  'Ahmadu Bello University',
  'Babcock University',
  'Covenant University',
  'Federal University of Technology, Akure',
  'Lagos State University',
  'Obafemi Awolowo University',
  'University of Abuja',
  'University of Benin',
  'University of Ibadan',
  'University of Ilorin',
  'University of Jos',
  'University of Lagos',
  'University of Maiduguri',
  'University of Nigeria, Nsukka',
  'University of Port Harcourt',
];

export default function JoinModal({ closeModal }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [school, setSchool] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
        className="w-full max-w-xl relative z-10 overflow-hidden bg-white dark:bg-[#1e1030] border border-mfm-stone/10 dark:border-white/10 rounded-[22px] shadow-[0_4px_24px_rgba(45,16,66,.12)]"
      >
        <button onClick={closeModal} className="absolute top-6 right-6 text-mfm-stone hover:text-mfm-purple dark:text-mfm-stone/60 dark:hover:text-white bg-mfm-cream dark:bg-white/10 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
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
              <h3 className="font-display text-2xl text-mfm-purple-dark dark:text-mfm-cream mb-2">Request Sent!</h3>
              <p className="text-mfm-stone dark:text-mfm-stone/70">Your campus coordinator will contact you shortly.</p>
            </motion.div>
          ) : (
            <>
              <h3 className="font-display text-3xl text-mfm-purple-dark dark:text-mfm-cream mb-2">Join a Chapter</h3>
              <p className="text-mfm-stone dark:text-mfm-stone/70 mb-8">Connect with the family on your campus.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-mfm-purple-dark dark:text-mfm-cream mb-1">First Name</label>
                    <input required type="text" className="fi dark:!bg-white/5 dark:!border-white/15 dark:!text-white dark:placeholder:!text-white/40" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-mfm-purple-dark dark:text-mfm-cream mb-1">Last Name</label>
                    <input required type="text" className="fi dark:!bg-white/5 dark:!border-white/15 dark:!text-white dark:placeholder:!text-white/40" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-mfm-purple-dark dark:text-mfm-cream mb-1">Institution</label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(o => !o)}
                      className="fi dark:!bg-white/5 dark:!border-white/15 dark:!text-white flex items-center justify-between text-left"
                    >
                      <span className={school ? 'text-mfm-ink dark:text-white' : 'text-[#9d9098] dark:text-white/40'}>
                        {school || 'Select your school...'}
                      </span>
                      <ChevronDown size={16} className={`text-mfm-stone dark:text-white/50 transition-transform flex-shrink-0 ml-2 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 bg-white dark:bg-[#2a1a40] border border-mfm-stone/15 dark:border-white/15 rounded-[14px] shadow-xl overflow-hidden max-h-56 overflow-y-auto"
                        >
                          {SCHOOLS.map(s => (
                            <li key={s}>
                              <button
                                type="button"
                                onClick={() => { setSchool(s); setDropdownOpen(false); }}
                                className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-mfm-gold/10 dark:hover:bg-white/10
                                  ${school === s
                                    ? 'text-mfm-purple dark:text-mfm-gold font-semibold bg-mfm-gold/5 dark:bg-white/5'
                                    : 'text-mfm-ink dark:text-white/90'
                                  }`}
                              >
                                {s}
                              </button>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-mfm-purple-dark dark:text-mfm-cream mb-1">WhatsApp Number</label>
                  <input required type="tel" className="fi dark:!bg-white/5 dark:!border-white/15 dark:!text-white dark:placeholder:!text-white/40" placeholder="+234..." />
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
