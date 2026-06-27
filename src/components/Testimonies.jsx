import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from './animations';

const TESTIMONIES = [
  {
    text: '"I joined MFMCF in 100 level broken. Three years later, I lead the intercessors team and my CGPA moved from 2.9 to 4.61. God still does miracles."',
    name: 'Deborah A.',
    campus: 'UNILAG — 300L',
  },
  {
    text: '"The prayer altar in MFMCF changed everything for me. I got a first class, won a scholarship to study abroad, and I met the most Spirit-filled friends of my life."',
    name: 'Emmanuel T.',
    campus: 'OAU — 400L',
  },
  {
    text: '"I came to campus as an atheist. A MFMCF member sat next to me at a lecture, invited me. That was five years ago. I\'m now the Secretary General of my campus CF."',
    name: 'Blessing O.',
    campus: 'UNIBEN — Postgraduate',
  },
  {
    text: '"During my final year crisis, MFMCF was my refuge. The fellowship prayed with me, supported me materially, and I graduated with distinction. God is real."',
    name: 'Samuel K.',
    campus: 'UNILORIN — 500L',
  },
];

export default function Testimonies() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setCurrent(p => (p + 1) % TESTIMONIES.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const go = (dir) => {
    setDirection(dir);
    setCurrent(p => (p + dir + TESTIMONIES.length) % TESTIMONIES.length);
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir < 0 ? 60 : -60, opacity: 0 }),
  };

  return (
    <section className="py-24 bg-[#f9f5ef] dark:bg-[#150c1f] transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Left Side: Testimonies */}
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mfm-gold/40 bg-mfm-gold/10 text-mfm-gold-dark font-mono text-xs tracking-widest font-bold mb-6">
              CAMPUS TESTIMONIES
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-mfm-purple-dark dark:text-mfm-cream mb-10 leading-[1.1]">
              What God is doing<br />on our campuses
            </h2>

            <div className="bg-white dark:bg-white/5 rounded-[40px] p-10 shadow-sm border border-mfm-stone/10 dark:border-white/10 relative backdrop-blur-sm overflow-hidden min-h-[220px]">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <p className="text-mfm-stone dark:text-mfm-stone/80 text-xl leading-relaxed mb-10">
                    {TESTIMONIES[current].text}
                  </p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-mfm-purple-dark dark:text-mfm-gold font-bold font-display text-lg">{TESTIMONIES[current].name}</p>
                      <p className="text-mfm-stone dark:text-mfm-stone/70 text-sm font-mono">{TESTIMONIES[current].campus}</p>
                    </div>
                    <p className="text-mfm-stone font-mono text-xs">{current + 1} / {TESTIMONIES.length}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={() => go(-1)}
                className="px-6 py-3 rounded-full border border-mfm-stone/20 dark:border-white/20 hover:border-mfm-purple dark:hover:border-mfm-gold transition-colors text-mfm-ink dark:text-mfm-cream font-medium"
              >
                ← Prev
              </button>
              <button
                onClick={() => go(1)}
                className="px-6 py-3 rounded-full border border-mfm-stone/20 dark:border-white/20 hover:border-mfm-purple dark:hover:border-mfm-gold transition-colors text-mfm-ink dark:text-mfm-cream font-medium"
              >
                Next →
              </button>
              <div className="flex gap-2 ml-2">
                {TESTIMONIES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-mfm-purple dark:bg-mfm-gold' : 'w-2 bg-mfm-stone/30 dark:bg-white/20'}`}
                  />
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Right Side: Leadership Structure */}
          <FadeUp delay={0.2}>
            <div className="bg-white dark:bg-white/5 rounded-[40px] p-10 shadow-sm border border-mfm-stone/10 dark:border-white/10 h-full backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mfm-gold/40 bg-mfm-gold/10 text-mfm-gold-dark font-mono text-xs tracking-widest font-bold mb-6">
                NATIONAL LEADERSHIP
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-mfm-purple-dark dark:text-mfm-cream mb-10 leading-[1.1]">
                National Coordinating<br />Structure
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-[#f9f5ef] dark:bg-white/5 p-6 rounded-3xl border border-mfm-stone/10 dark:border-white/10">
                  <p className="text-xs font-mono text-mfm-stone dark:text-mfm-stone/70 mb-2">NATIONAL</p>
                  <p className="font-bold text-mfm-ink dark:text-white mb-1">Pastor Gbenga</p>
                  <p className="text-mfm-stone dark:text-mfm-stone/70 text-sm">National Coordinator</p>
                </div>
                <div className="bg-[#f9f5ef] dark:bg-white/5 p-6 rounded-3xl border border-mfm-stone/10 dark:border-white/10">
                  <p className="text-xs font-mono text-mfm-stone dark:text-mfm-stone/70 mb-2">ASST. NATIONAL</p>
                  <p className="font-bold text-mfm-ink dark:text-white mb-1">Pastor Paul Adeniyi</p>
                  <p className="text-mfm-stone dark:text-mfm-stone/70 text-sm">Asst. National Coordinator</p>
                </div>
                <div className="bg-[#f9f5ef] dark:bg-white/5 p-6 rounded-3xl border border-mfm-stone/10 dark:border-white/10">
                  <p className="text-xs font-mono text-mfm-stone dark:text-mfm-stone/70 mb-2">ZONAL</p>
                  <p className="font-bold text-mfm-ink dark:text-white mb-1">6 Zonal Coordinators</p>
                  <p className="text-mfm-stone dark:text-mfm-stone/70 text-sm">SW, SE, SS, NC, NW, NE</p>
                </div>
                <div className="bg-[#f9f5ef] dark:bg-white/5 p-6 rounded-3xl border border-mfm-stone/10 dark:border-white/10">
                  <p className="text-xs font-mono text-mfm-stone dark:text-mfm-stone/70 mb-2">STATES</p>
                  <p className="font-bold text-mfm-ink dark:text-white mb-1">36 State Coordinators</p>
                  <p className="text-mfm-stone dark:text-mfm-stone/70 text-sm">+ FCT Campus Pastor</p>
                </div>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
