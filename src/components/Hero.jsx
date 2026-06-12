import { ArrowRight, Play } from 'lucide-react';
import { FadeUp, StaggeredText } from './animations';

export default function Hero({ openModal }) {
  const scrollToCampus = () => {
    const el = document.getElementById('campuses');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 pt-40 pb-32">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=2500&q=80" 
          alt="Students worshipping" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2a0e20]/70 mix-blend-multiply"></div>
        {/* Deep gradient to blend into the next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a0e20]/40 via-[#2a0e20]/80 to-[#fcfaf7]"></div>
        {/* Premium glowing orb in the center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[1000px] lg:h-[1000px] bg-mfm-purple/40 blur-[160px] rounded-full z-10 pointer-events-none mix-blend-screen"></div>
      </div>

      <div className="relative z-20 w-full max-w-[1000px] mx-auto text-center flex flex-col items-center">
        
        {/* Animated Top Pill */}
        <FadeUp delay={0.1}>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-mfm-gold/30 bg-mfm-purple-dark/50 backdrop-blur-md text-mfm-gold font-mono text-[11px] tracking-widest font-bold mb-10 shadow-[0_0_30px_rgba(215,168,74,0.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mfm-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-mfm-gold"></span>
            </span>
            140+ CAMPUSES ACROSS NIGERIA
          </div>
        </FadeUp>
        
        {/* Massive Typography */}
        <StaggeredText 
          text="Igniting Campuses."
          className="font-display text-6xl md:text-[80px] lg:text-[110px] leading-[0.9] text-[#f3eedd] tracking-tight drop-shadow-2xl"
        />
        <StaggeredText 
          text="Raising Giants."
          className="font-display text-6xl md:text-[80px] lg:text-[110px] leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-mfm-gold via-mfm-gold-light to-[#f3eedd] tracking-tight drop-shadow-2xl mt-2 mb-8"
        />

        {/* Subtitle */}
        <FadeUp delay={0.4}>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed font-light text-shadow-sm">
            The official national campus fellowship network of Mountain of Fire and Miracles Ministries. Join a fire-full fellowship this week.
          </p>
        </FadeUp>

        {/* Action Buttons */}
        <FadeUp delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button onClick={scrollToCampus} className="w-full sm:w-auto bg-mfm-gold text-[#2a0e20] px-10 py-5 rounded-full font-bold hover:bg-[#d8a43f] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group shadow-[0_0_40px_rgba(215,168,74,0.3)]">
              Find My Campus <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => openModal('genericModal')} className="w-full sm:w-auto bg-white/10 backdrop-blur-lg border border-white/20 text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-[#2a0e20] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              <Play size={18} fill="currentColor" /> Watch Welcome Video
            </button>
          </div>
        </FadeUp>

        {/* Trust/Stats Footer */}
        <FadeUp delay={0.8} className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 border-t border-white/10 pt-10">
          <div className="text-center">
            <p className="font-display text-4xl text-mfm-gold mb-1 shadow-black drop-shadow-md">140+</p>
            <p className="text-[10px] font-mono text-white/60 tracking-widest uppercase">Campuses</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10"></div>
          <div className="text-center">
            <p className="font-display text-4xl text-mfm-gold mb-1 shadow-black drop-shadow-md">28k+</p>
            <p className="text-[10px] font-mono text-white/60 tracking-widest uppercase">Students</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10"></div>
          <div className="text-center">
            <p className="font-display text-4xl text-mfm-gold mb-1 shadow-black drop-shadow-md">36</p>
            <p className="text-[10px] font-mono text-white/60 tracking-widest uppercase">States + FCT</p>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
