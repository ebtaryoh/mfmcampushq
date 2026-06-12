import { ArrowRight } from 'lucide-react';
import { FadeUp } from './animations';

export default function PioneerCTA({ openModal }) {
  return (
    <section className="bg-[#241334] py-32 relative overflow-hidden border-b border-white/5">
      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        
        <FadeUp>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mfm-gold/20 text-mfm-gold font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-10">
            Pioneer a campus fellowship
          </div>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#f3eedd] mb-8 leading-tight">
            No MFMCF on your campus yet?<br/>Let's start one together.
          </h2>
          
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            We provide training, a launch kit, an assigned state coordinator, prayer covering, and startup materials. Average launch time: 14 days.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button 
              onClick={() => openModal('pioneerModal')}
              className="w-full sm:w-auto bg-mfm-gold hover:bg-[#d8a43f] text-[#241334] font-bold px-10 py-4 rounded-full transition-colors flex items-center justify-center gap-2 group"
            >
              Apply to Pioneer <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto border border-white/20 hover:border-white text-white font-bold px-10 py-4 rounded-full transition-colors">
              Download Starter Pack
            </button>
          </div>

          <div className="mt-16 text-white/50 font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase">
            48 New Pioneer Fellowships Launched in 2025
          </div>
        </FadeUp>

      </div>
      
      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-mfm-purple/20 to-transparent blur-3xl -z-10 pointer-events-none opacity-50"></div>
    </section>
  );
}
