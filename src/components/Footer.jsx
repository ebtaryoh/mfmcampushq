import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a0f26] pt-24 pb-8 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-24">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 pr-8">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="/logo.webp" alt="MFMCAMPUSHQ Logo" className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
              </div>
              <div>
                <span className="font-display font-bold text-xl tracking-tight text-[#f3eedd] leading-none block group-hover:text-mfm-gold transition-colors">MFMCAMPUSHQ</span>
                <span className="text-[10px] font-mono text-white/50 tracking-[0.2em] uppercase block -mt-[1px]">NATIONAL CAMPUS FELLOWSHIP</span>
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed mb-8 max-w-sm">
              A campus mission network of Mountain of Fire and Miracles Ministries Worldwide. Raising fire-full, word-rooted, prayer-addicted campus saints.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#1a0f26] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#1a0f26] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Campuses */}
          <div>
            <h4 className="text-[#f3eedd] font-bold mb-6">Campuses</h4>
            <ul className="space-y-4">
              <li><button onClick={() => scrollTo('campuses')} className="text-white/60 hover:text-white transition-colors">Find a Campus</button></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Pioneer</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Leaders Portal</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Volunteer</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-[#f3eedd] font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="https://www.mountainoffire.org/resources/prayer-points" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Downloads</a></li>
              <li><a href="https://mountainoffire.org/pmch" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">PMCH</a></li>
              <li><a href="https://dkoebooks.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">D. K. O E-Books</a></li>
              <li><a href="https://dkofoundation.org" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">D. K. O Foundation M.T.U</a></li>
              <li><a href="https://mountainoffire.org/ebooks" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">MFM E-books</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-[#f3eedd] font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-white/60">MFMCAMPUSHQ National Secretariat<br/>Lagos, Nigeria</li>
              <li><a href="mailto:mfmnationalcf@yahoo.com" className="text-white/60 hover:text-white transition-colors">mfmnationalcf@yahoo.com</a></li>
              <li><a href="tel:08062704913" className="text-white/60 hover:text-white transition-colors">0806 270 4913</a></li>
              <li><button onClick={() => scrollTo('campuses')} className="text-mfm-gold font-bold hover:text-[#d8a43f] transition-colors mt-2">Join this week &rarr;</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-white/50 text-sm text-center lg:text-left">
            &copy; 2026 MFMCAMPUSHQ • Mountain of Fire & Miracles Ministries. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="bg-[#241334] hover:bg-[#341b4d] border border-white/10 text-white px-6 py-3 rounded-full font-bold transition-colors flex items-center gap-2 text-sm">
              <MessageCircle size={16} /> Opening WhatsApp Channel
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
