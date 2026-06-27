import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp } from './animations';

// Target: July 4, 2026 at 7:00 AM (WAT = UTC+1)
const TARGET_DATE = new Date('2026-07-04T07:00:00+01:00').getTime();

function useCountdown(targetMs) {
  const calc = () => {
    const dist = targetMs - Date.now();
    if (dist <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(dist / (1000 * 60 * 60 * 24)),
      hours: Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((dist % (1000 * 60)) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

const Digit = ({ value, label }) => (
  <div className="flex flex-col items-center gap-3">
    <div className="relative w-20 h-24 md:w-28 md:h-32 lg:w-36 lg:h-40">
      <div className="absolute inset-0 bg-[#1a0f26] rounded-[20px] border border-mfm-gold/20 shadow-[0_0_30px_rgba(215,168,74,0.15)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
        <motion.span
          key={value}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-mfm-gold relative z-10"
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </div>
    </div>
    <span className="text-white/50 font-mono text-[10px] tracking-[0.2em] uppercase">{label}</span>
  </div>
);

export default function NextEventSection() {
  const t = useCountdown(TARGET_DATE);

  return (
    <section className="relative overflow-hidden py-0">
      {/* Full-bleed image background */}
      <div className="relative min-h-[85vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/next-event/img-1.jpg"
            alt="PMCH WATER OF FIRE"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0814]/95 via-[#0f0814]/80 to-[#0f0814]/40" />
        </div>

        {/* Gold glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mfm-gold/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Col: Info & Countdown */}
            <div className="text-left">
              <FadeUp>
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-mfm-gold/30 bg-mfm-gold/10 backdrop-blur-md text-mfm-gold font-mono text-[11px] tracking-[0.2em] uppercase mb-8 shadow-[0_0_20px_rgba(215,168,74,0.1)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mfm-gold opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-mfm-gold" />
                  </span>
                  Next National Event
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#f3eedd] mb-4 tracking-tight leading-tight">
                  PMCH<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-mfm-gold to-mfm-gold-light">
                    WATER OF FIRE
                  </span>
                </h2>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="text-white/60 flex flex-col gap-3 mb-10">
                  <p className="flex items-center gap-3">
                    <Calendar size={18} className="text-mfm-gold" />
                    <span className="font-mono text-sm tracking-wider">Saturday, July 4, 2026 • 7:00 AM</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <MapPin size={18} className="text-mfm-gold" />
                    <span className="text-sm">MFM International Headquarters, Lagos</span>
                  </p>
                </div>
              </FadeUp>

              {/* Countdown */}
              <FadeUp delay={0.2}>
                <div className="flex gap-4 md:gap-6 lg:gap-8 mb-12">
                  <Digit value={t.days} label="Days" />
                  <div className="text-mfm-gold font-display text-3xl md:text-4xl self-start mt-6 md:mt-10">:</div>
                  <Digit value={t.hours} label="Hours" />
                  <div className="text-mfm-gold font-display text-3xl md:text-4xl self-start mt-6 md:mt-10">:</div>
                  <Digit value={t.minutes} label="Minutes" />
                  <div className="text-mfm-gold font-display text-3xl md:text-4xl self-start mt-6 md:mt-10">:</div>
                  <Digit value={t.seconds} label="Seconds" />
                </div>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    to="/events"
                    className="group bg-mfm-gold hover:bg-[#d8a43f] text-[#1a0f26] px-10 py-4 rounded-full font-bold transition-all duration-300 flex items-center gap-3 shadow-[0_0_30px_rgba(215,168,74,0.3)] hover:shadow-[0_0_40px_rgba(215,168,74,0.5)] hover:scale-105"
                  >
                    View All Events <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/events"
                    className="border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-sm"
                  >
                    Register Now
                  </Link>
                </div>
              </FadeUp>
            </div>

            {/* Right Col: Flyer */}
            <div className="hidden lg:block relative">
              <FadeUp delay={0.4}>
                <div className="rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group relative max-w-sm ml-auto">
                  <img src="/images/next-event/img-1.jpg" alt="PMCH Flyer" className="w-full h-auto group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
