import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink, ChevronDown, MapPin, Sun, Moon } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CAMPUSES } from '../data/campuses';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ openModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Prayer Altar', id: 'prayer' },
  ];

  // Group campuses by zone
  const zones = [...new Set(CAMPUSES.map(c => c.zone))];

  return (
    <>
      {/* Global Scrolling Announcement Bar */}
      <div className="absolute top-0 left-0 right-0 h-[40px] bg-[#2a0e20] text-mfm-gold flex items-center overflow-hidden z-40 text-[11px] font-mono font-bold tracking-widest uppercase border-b border-mfm-gold/10">
        <div className="flex gap-16 whitespace-nowrap animate-marquee">
          <span>• NEXT NATIONAL EVENT — PMCH WATER OF FIRE • SATURDAY, JULY 4, 2026</span>
          <span>• SCRIPTURE — Jeremiah 1:7 — "Say not, I am a youth..."</span>
          <span>• EVENT — CF Leaders Summit • March 8 • MFM HQ Yaba</span>
          <span>• SCRIPTURE — 1 Timothy 4:12 — "Let no man despise thy youth..."</span>
          <span>• EVENT — Sisters Conference 2026 • June 12 • Camp Ground</span>
          <span>• SCRIPTURE — Psalms 119:9 — "Wherewithal shall a young man cleanse his way?..."</span>
          <span>• EVENT — Campus Choir Competition • August 21 • Prayer City</span>
          
          {/* Duplicated for seamless scrolling */}
          <span>• ANNOUNCEMENT — National Campus Prayer Rain • April 15 • Prayer City</span>
          <span>• SCRIPTURE — Psalm 119:9 — "Wherewithal shall a young man cleanse his way?"</span>
          <span>• PRAYER — Join the National Prayer Altar daily at 12 Midnight</span>
          <span>• SCRIPTURE — Ecclesiastes 12:1 — "Remember now thy Creator in the days of thy youth..."</span>
        </div>
      </div>

      <header className={`fixed left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'top-0 bg-white/90 dark:bg-[#1a0f26]/90 backdrop-blur-md shadow-sm py-4 border-b border-mfm-stone/10' : 'top-[40px] bg-transparent py-6'}`}>
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-3 relative z-50">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/logo.webp" alt="MFMCF Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className={`font-display font-bold text-xl tracking-tight leading-none block ${scrolled ? 'text-mfm-purple-dark dark:text-mfm-cream' : 'text-mfm-purple-dark dark:text-mfm-cream'}`}>MFMCAMPUSHQ</span>
              <span className={`text-[10px] font-mono tracking-widest uppercase block ${scrolled ? 'text-mfm-stone dark:text-mfm-stone/80' : 'text-mfm-stone dark:text-mfm-stone/80'}`}>National Campus Fellowship</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('campuses')} 
              className={`font-medium hover:text-mfm-purple transition-colors text-[15px] ${scrolled ? 'text-mfm-ink dark:text-mfm-cream' : 'text-mfm-ink dark:text-mfm-cream'}`}
            >
              Campuses
            </button>
            <Link to="/events" className={`font-medium hover:text-mfm-purple transition-colors text-[15px] ${scrolled ? 'text-mfm-ink dark:text-mfm-cream' : 'text-mfm-ink dark:text-mfm-cream'}`}>Events</Link>
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link.id)} 
                className={`font-medium hover:text-mfm-purple transition-colors text-[15px] ${scrolled ? 'text-mfm-ink dark:text-mfm-cream' : 'text-mfm-ink dark:text-mfm-cream'}`}
              >
                {link.name}
              </button>
            ))}
            <a href="https://mountainoffire.org" target="_blank" rel="noopener noreferrer" className={`font-medium hover:text-mfm-purple transition-colors text-[15px] flex items-center gap-1 ${scrolled ? 'text-mfm-ink dark:text-mfm-cream' : 'text-mfm-ink dark:text-mfm-cream'}`}>
              MFM Global <ExternalLink size={14} />
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-mfm-stone/10 transition-colors text-mfm-ink dark:text-mfm-cream">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            {/* Mega Menu Toggle */}
            <div className="relative" onMouseLeave={() => setMegaMenuOpen(false)}>
              <button 
                onMouseEnter={() => setMegaMenuOpen(true)}
                className={`flex items-center gap-2 font-medium hover:text-mfm-purple transition-colors text-[15px] ${scrolled ? 'text-mfm-ink dark:text-mfm-cream' : 'text-mfm-ink dark:text-mfm-cream'}`}
              >
                All Campuses <ChevronDown size={16} />
              </button>
              
              <AnimatePresence>
                {megaMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-4 w-[600px] bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-mfm-stone/10 p-8 grid grid-cols-2 gap-8"
                  >
                    {zones.map(zone => (
                      <div key={zone}>
                        <h4 className="text-xs font-bold text-mfm-stone uppercase tracking-wider mb-4 border-b border-mfm-stone/10 pb-2">{zone}</h4>
                        <ul className="space-y-3">
                          {CAMPUSES.filter(c => c.zone === zone).map(campus => (
                            <li key={campus.id}>
                              <Link 
                                to={`/campus/${campus.id}`} 
                                className="group flex items-start gap-2"
                                onClick={() => setMegaMenuOpen(false)}
                              >
                                <MapPin size={16} className="text-mfm-stone/50 mt-0.5 group-hover:text-mfm-purple transition-colors" />
                                <span className="text-sm font-medium text-mfm-ink group-hover:text-mfm-purple transition-colors">{campus.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="col-span-2 pt-4 border-t border-mfm-stone/10">
                      <button onClick={() => { handleNavClick('campuses'); setMegaMenuOpen(false); }} className="text-sm font-bold text-mfm-purple hover:text-mfm-purple-dark transition-colors w-full text-center">
                        View Campus Directory &rarr;
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="w-px h-6 bg-mfm-stone/20 mx-2"></div>
            
            <button onClick={() => openModal('joinModal')} className="font-bold text-mfm-ink dark:text-mfm-cream hover:text-mfm-purple transition-colors border border-mfm-stone/20 px-6 py-2.5 rounded-full hover:border-mfm-purple">
              Join a Fellowship
            </button>
            <button onClick={() => openModal('giveModal')} className="bg-mfm-purple-dark dark:bg-mfm-gold text-white dark:text-[#1a0f26] px-6 py-2.5 rounded-full font-bold hover:bg-mfm-purple transition-colors">
              Give
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-mfm-stone/10 transition-colors text-mfm-ink dark:text-mfm-cream">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="text-mfm-ink dark:text-mfm-cream" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#1a0f26] pt-24 px-6 pb-6 overflow-y-auto transition-colors"
          >
            <div className="flex flex-col gap-6">
              <button onClick={() => handleNavClick('campuses')} className="text-2xl font-display text-mfm-purple-dark dark:text-mfm-cream text-left border-b border-mfm-stone/10 dark:border-white/10 pb-4">Campuses</button>
              <Link to="/events" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display text-mfm-purple-dark dark:text-mfm-cream text-left border-b border-mfm-stone/10 dark:border-white/10 pb-4">Events</Link>
              {navLinks.map((link) => (
                <button key={link.name} onClick={() => handleNavClick(link.id)} className="text-2xl font-display text-mfm-purple-dark dark:text-mfm-cream text-left border-b border-mfm-stone/10 dark:border-white/10 pb-4">{link.name}</button>
              ))}
              
              <div className="pt-4">
                <h3 className="text-sm font-bold text-mfm-stone dark:text-mfm-stone/80 mb-4 uppercase tracking-wider">All Campuses</h3>
                <ul className="space-y-4">
                  {CAMPUSES.map(campus => (
                    <li key={campus.id}>
                      <Link to={`/campus/${campus.id}`} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-mfm-ink dark:text-mfm-cream">{campus.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4 mt-8">
                <button onClick={() => { setMobileMenuOpen(false); openModal('joinModal'); }} className="w-full font-bold text-mfm-ink dark:text-mfm-cream border border-mfm-stone/20 dark:border-white/20 py-4 rounded-xl dark:hover:bg-white/5 transition-colors">Join a Fellowship</button>
                <button onClick={() => { setMobileMenuOpen(false); openModal('giveModal'); }} className="w-full bg-mfm-purple-dark dark:bg-mfm-gold text-white dark:text-[#1a0f26] py-4 rounded-xl font-bold">Give</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
