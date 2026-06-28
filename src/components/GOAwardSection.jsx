import { Link } from 'react-router-dom';
import { ArrowRight, Award } from 'lucide-react';
import { FadeUp, ScaleIn } from './animations';

const AWARD_IMAGES = [
  '/images/go-award/img-6.jpg',
  '/images/go-award/img-2.jpg',
  '/images/go-award/img-3.jpg',
  '/images/go-award/img-4.jpg',
  '/images/go-award/img-5.jpg',
  '/images/go-award/img-1.jpg',
];

export default function GOAwardSection() {
  return (
    <section className="py-32 bg-[#fcfaf7] dark:bg-[#150c1f] transition-colors duration-500 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mfm-gold/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-mfm-purple/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image Mosaic */}
          <ScaleIn delay={0.1}>
            <div className="grid grid-cols-3 gap-3 order-2 lg:order-1">
              {/* Large image top-left spanning 2 cols */}
              <div className="col-span-2 row-span-2 rounded-[24px] overflow-hidden aspect-square relative group shadow-xl">
                <img src={AWARD_IMAGES[0]} alt="GO Award" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f26]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              {/* Small images on the right */}
              {AWARD_IMAGES.slice(1, 5).map((img, i) => (
                <div key={i} className="rounded-[16px] overflow-hidden aspect-square relative group shadow-md">
                  <img src={img} alt={`Award ${i + 2}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </ScaleIn>

          {/* Right: Text */}
          <div className="order-1 lg:order-2">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-mfm-gold/40 bg-mfm-gold/10 text-mfm-gold font-mono text-xs tracking-widest uppercase mb-8">
                <Award size={14} /> G.O First Class Award
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-mfm-purple-dark dark:text-mfm-cream mb-6 leading-[1.1]">
                Excellence.<br />
                <span className="text-mfm-gold">Recognized.</span><br />
                Celebrated.
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-mfm-stone dark:text-mfm-stone/80 text-lg leading-relaxed mb-6">
                The G.O First Class Award recognizes outstanding campus fellowship students who demonstrate academic excellence, spiritual fire, and godly character across our campuses nationwide.
              </p>
              <p className="text-mfm-stone dark:text-mfm-stone/80 text-lg leading-relaxed mb-10">
                Every year, our General Overseer, Dr. D.K. Olukoya, personally celebrates students who finish their academic journey with distinction — proving that you can excel both in the Spirit and in the classroom.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { num: '5000+', label: 'Awardees' },
                  { num: '15+', label: 'Years Running' },
                  { num: 'All', label: 'Disciplines' },
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 rounded-[20px] bg-white dark:bg-white/5 border border-mfm-stone/10 dark:border-white/10 shadow-sm">
                    <p className="font-display text-2xl text-mfm-gold mb-1">{item.num}</p>
                    <p className="text-mfm-stone dark:text-mfm-stone/70 text-xs font-mono uppercase tracking-wider">{item.label}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <Link
                to="/go-award"
                className="group inline-flex items-center gap-3 bg-mfm-purple-dark dark:bg-mfm-gold text-white dark:text-[#1a0f26] px-10 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Explore the Award <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
