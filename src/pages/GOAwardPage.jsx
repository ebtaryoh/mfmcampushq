import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ChevronLeft, ChevronRight, X, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import { PageWrapper, FadeUp, ScaleIn } from '../components/animations';

const AWARD_IMAGES = [
  '/images/go-award/img-5.jpg',
  '/images/go-award/img-2.jpg',
  '/images/go-award/img-3.jpg',
  '/images/go-award/img-4.jpg',
  '/images/go-award/img-1.jpg',
  '/images/go-award/img-6.jpg',
  '/images/go-award/img-7.jpeg',
];

export default function GOAwardPage() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <PageWrapper className="bg-[#fcfaf7] dark:bg-[#150c1f] min-h-screen transition-colors duration-500">

      {/* Hero */}
      <section className="bg-[#0f0814] pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={AWARD_IMAGES[0]} alt="GO Award" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0814]/90 via-[#0f0814]/70 to-[#0f0814]" />
        </div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-mfm-gold/20 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-mono tracking-widest mb-10 transition-colors uppercase">
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-mfm-gold/20 border border-mfm-gold/40 flex items-center justify-center">
              <Award className="text-mfm-gold" size={28} />
            </div>
            <p className="text-mfm-gold text-xs font-bold tracking-[0.2em] uppercase font-mono">Annual National Recognition Program</p>
          </div>

          <h1 className="font-display text-5xl md:text-7xl text-[#f3eedd] mb-6 tracking-tight leading-[1.05]">
            G.O First Class<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mfm-gold to-mfm-gold-light">Award</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
            Recognizing MFMCF students who graduate with First Class honours — proving that prayer and academic excellence go hand in hand.
          </p>
        </div>
      </section>

      {/* About the Award */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-mfm-gold/40 bg-mfm-gold/10 text-mfm-gold font-mono text-xs tracking-widest uppercase mb-6">
                About the Award
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-mfm-purple-dark dark:text-mfm-cream mb-6 leading-tight">
                Where the Spirit Meets Academic Excellence
              </h2>
              <p className="text-mfm-stone dark:text-mfm-stone/80 text-lg leading-relaxed mb-6">
                The G.O First Class Award is a flagship recognition program by MFMCF National, presented personally by the General Overseer of Mountain of Fire and Miracles Ministries, Dr. D.K. Olukoya, to campus fellowship members who graduate with First Class degrees from their respective institutions.
              </p>
              <p className="text-mfm-stone dark:text-mfm-stone/80 text-lg leading-relaxed mb-10">
                This award is a powerful testimony that you do not have to choose between your faith and your academics. Every First Class awardee is celebrated at a special national ceremony, presented with a personalized award, and featured in MFMCF national publications.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { num: '5000+', label: 'Awardees' },
                  { num: '15+', label: 'Years Running' },
                  { num: '36', label: 'States' },
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 rounded-[20px] bg-white dark:bg-white/5 border border-mfm-stone/10 dark:border-white/10 shadow-sm">
                    <p className="font-display text-2xl text-mfm-gold mb-1">{item.num}</p>
                    <p className="text-mfm-stone dark:text-mfm-stone/70 text-xs font-mono uppercase tracking-wider">{item.label}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <ScaleIn delay={0.2}>
              <div className="rounded-[32px] overflow-hidden aspect-[4/5] shadow-2xl border border-mfm-stone/10 dark:border-white/10 group">
                <img src={AWARD_IMAGES[1]} alt="Award Ceremony" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </ScaleIn>
          </div>

          {/* Quote */}
          <FadeUp>
            <div className="bg-gradient-to-r from-[#1a0f26] to-[#2a0e20] rounded-[32px] p-10 md:p-16 text-center mb-24 border border-mfm-gold/20 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-mfm-gold/10 blur-[100px] rounded-full pointer-events-none" />
              <Star className="text-mfm-gold mx-auto mb-6" size={36} />
              <p className="font-display text-2xl md:text-4xl text-[#f3eedd] leading-relaxed mb-6 relative z-10">
                "A praying student is a prevailing student. Excellence in the classroom and in the Spirit are not mutually exclusive — they are divinely linked."
              </p>
              <p className="text-mfm-gold font-mono text-sm tracking-widest uppercase">— Dr. D.K. Olukoya, G.O, MFM Worldwide</p>
            </div>
          </FadeUp>

          {/* Gallery */}
          <FadeUp>
            <h2 className="font-display text-4xl text-mfm-purple-dark dark:text-mfm-cream mb-10">Award Gallery</h2>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {AWARD_IMAGES.map((img, i) => (
              <FadeUp key={i} delay={0.05 * i}>
                <div
                  className="aspect-square rounded-[20px] overflow-hidden cursor-pointer group relative shadow-md"
                  onClick={() => setLightbox(i)}
                >
                  <img src={img} alt={`Award ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-mfm-purple-dark/0 group-hover:bg-mfm-purple-dark/30 transition-colors flex items-center justify-center">
                    <div className="bg-white/90 text-mfm-purple-dark p-2 rounded-full opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8M3 16.2V21m0 0h4.8M3 21l6-6M21 7.8V3m0 0h-4.8M21 3l-6 6M3 7.8V3m0 0h4.8M3 3l6 6"/></svg>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-24 px-6 bg-white dark:bg-white/5 border-y border-mfm-stone/10 dark:border-white/10">
        <div className="max-w-[800px] mx-auto text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-mfm-gold/40 bg-mfm-gold/10 text-mfm-gold font-mono text-xs tracking-widest uppercase mb-8">
              Eligibility
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-mfm-purple-dark dark:text-mfm-cream mb-8">
              Are You Eligible?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-left mb-12">
              {[
                'Must be a registered member of MFMCF on your campus',
                'Must graduate with a First Class (4.50 GPA and above, or First Class equivalent)',
                'Must be known for prayerfulness, holiness, and active fellowship participation',
                'Must be nominated and endorsed by your Campus Coordinator',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start bg-mfm-cream dark:bg-white/5 rounded-[16px] p-5 border border-mfm-stone/10 dark:border-white/10">
                  <div className="w-6 h-6 rounded-full bg-mfm-gold/20 border border-mfm-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Star size={12} className="text-mfm-gold" />
                  </div>
                  <p className="text-mfm-stone dark:text-mfm-stone/80 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-mfm-stone dark:text-mfm-stone/80 mb-8">Contact your campus coordinator to start your nomination.</p>
            <a
              href="mailto:mfmnationalcf@yahoo.com"
              className="inline-flex items-center gap-3 bg-mfm-gold text-[#1a0f26] px-10 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Contact National Secretariat
            </a>
          </FadeUp>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white p-2" onClick={() => setLightbox(null)}>
              <X size={32} />
            </button>
            <button
              className="absolute left-8 text-white/50 hover:text-white p-4 rounded-full hover:bg-white/10"
              onClick={(e) => { e.stopPropagation(); setLightbox(p => (p - 1 + AWARD_IMAGES.length) % AWARD_IMAGES.length); }}
            >
              <ChevronLeft size={48} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={AWARD_IMAGES[lightbox]}
              alt="Award"
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-8 text-white/50 hover:text-white p-4 rounded-full hover:bg-white/10"
              onClick={(e) => { e.stopPropagation(); setLightbox(p => (p + 1) % AWARD_IMAGES.length); }}
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </PageWrapper>
  );
}
