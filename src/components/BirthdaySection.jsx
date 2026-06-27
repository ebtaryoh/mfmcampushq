import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Cake } from 'lucide-react';
import { FadeUp } from './animations';

const BIRTHDAY_IMAGES = [
  '/images/birthday/img-1.jpg',
  '/images/birthday/img-2.jpg',
];

export default function BirthdaySection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setCurrent(p => (p + 1) % BIRTHDAY_IMAGES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const go = (dir) => {
    setDirection(dir);
    setCurrent(p => (p + dir + BIRTHDAY_IMAGES.length) % BIRTHDAY_IMAGES.length);
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir < 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#1a0f26] to-[#2a0e20] relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-mfm-gold/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mfm-purple/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <FadeUp>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Cake className="text-mfm-gold" size={28} />
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-mfm-gold/30 bg-mfm-gold/10 text-mfm-gold font-mono text-xs tracking-widest uppercase">
              Birthday Celebrations
            </div>
            <Cake className="text-mfm-gold" size={28} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-[#f3eedd] text-center mb-4">
            Celebrating Our Leaders
          </h2>
          <p className="text-white/50 text-center mb-14 max-w-xl mx-auto">
            Wishing our beloved national leaders God's continued blessings, wisdom and long life.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <FadeUp delay={0.1}>
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] shadow-[0_30px_80px_rgba(0,0,0,0.5)] border border-mfm-gold/20 group">
              <AnimatePresence custom={direction} mode="wait">
                <motion.img
                  key={current}
                  src={BIRTHDAY_IMAGES[current]}
                  alt="Birthday Celebration"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f26]/80 to-transparent" />

              {/* Nav arrows */}
              <button
                onClick={() => go(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center hover:bg-mfm-gold/30 hover:border-mfm-gold/50 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => go(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center hover:bg-mfm-gold/30 hover:border-mfm-gold/50 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {BIRTHDAY_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-mfm-gold' : 'w-2 bg-white/30'}`}
                  />
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Text Side */}
          <FadeUp delay={0.2}>
            <div className="space-y-8">
              <div className="border-l-4 border-mfm-gold pl-8">
                <p className="text-mfm-gold font-mono text-xs tracking-widest uppercase mb-3">Special Celebration</p>
                <p className="text-[#f3eedd] font-display text-2xl md:text-3xl leading-relaxed mb-4">
                  "May God continue to use you mightily for the expansion of His Kingdom on every campus in Nigeria and beyond."
                </p>
                <p className="text-white/50 text-sm">— MFMCF National Family</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: '140+', label: 'Campuses Led' },
                  { stat: '28k+', label: 'Students Impacted' },
                  { stat: '36', label: 'States Covered' },
                  { stat: '∞', label: 'Glory Ahead' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 rounded-[20px] p-6 border border-white/10 text-center hover:border-mfm-gold/30 transition-colors">
                    <p className="font-display text-3xl text-mfm-gold mb-1">{item.stat}</p>
                    <p className="text-white/50 text-xs font-mono tracking-wider uppercase">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <div className="flex-1 bg-mfm-gold/10 border border-mfm-gold/20 rounded-[20px] p-5 text-center">
                  <p className="text-mfm-gold font-bold text-lg mb-1">🎂 Happy Birthday</p>
                  <p className="text-white/70 text-sm">To our dear national leaders. We celebrate you today and always!</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
