import { FadeUp } from './animations';

export default function Testimonies() {
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
              What God is doing<br/>on our campuses
            </h2>
            
            <div className="bg-white dark:bg-white/5 rounded-[40px] p-10 shadow-sm border border-mfm-stone/10 dark:border-white/10 relative backdrop-blur-sm">
              <p className="text-mfm-stone dark:text-mfm-stone/80 text-xl leading-relaxed mb-10">
                “I joined MFMCF in 100 level broken. Three years later, I lead the intercessors team and my CGPA moved from 2.9 to 4.61. God still does miracles.”
              </p>
              
              <div className="flex justify-between items-end">
                <p className="text-mfm-purple-dark dark:text-mfm-gold font-bold font-display text-lg">Deborah A., UNILAG - 300L</p>
                <p className="text-mfm-stone font-mono text-xs">1 / 4</p>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button className="px-6 py-3 rounded-full border border-mfm-stone/20 dark:border-white/20 hover:border-mfm-purple dark:hover:border-mfm-gold transition-colors text-mfm-ink dark:text-mfm-cream font-medium">
                &larr; Prev
              </button>
              <button className="px-6 py-3 rounded-full border border-mfm-stone/20 dark:border-white/20 hover:border-mfm-purple dark:hover:border-mfm-gold transition-colors text-mfm-ink dark:text-mfm-cream font-medium">
                Next &rarr;
              </button>
            </div>
          </FadeUp>

          {/* Right Side: Leadership Structure */}
          <FadeUp delay={0.2}>
            <div className="bg-white dark:bg-white/5 rounded-[40px] p-10 shadow-sm border border-mfm-stone/10 dark:border-white/10 h-full backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mfm-gold/40 bg-mfm-gold/10 text-mfm-gold-dark font-mono text-xs tracking-widest font-bold mb-6">
                MFMCF LEADERSHIP
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-mfm-purple-dark dark:text-mfm-cream mb-10 leading-[1.1]">
                National Coordinating<br/>Structure
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-[#f9f5ef] dark:bg-white/5 p-6 rounded-3xl border border-mfm-stone/10 dark:border-white/10">
                  <p className="text-xs font-mono text-mfm-stone dark:text-mfm-stone/70 mb-2">NATIONAL</p>
                  <p className="font-bold text-mfm-ink dark:text-white mb-1">Pastor Michael A. Oluwafemi</p>
                  <p className="text-mfm-stone text-sm">National Campus Coordinator</p>
                </div>
                <div className="bg-[#f9f5ef] dark:bg-white/5 p-6 rounded-3xl border border-mfm-stone/10 dark:border-white/10">
                  <p className="text-xs font-mono text-mfm-stone dark:text-mfm-stone/70 mb-2">ASST. NATIONAL</p>
                  <p className="font-bold text-mfm-ink dark:text-white mb-1">Pst. (Mrs) Grace Adeniyi</p>
                  <p className="text-mfm-stone text-sm">Asst. National Coordinator</p>
                </div>
                <div className="bg-[#f9f5ef] dark:bg-white/5 p-6 rounded-3xl border border-mfm-stone/10 dark:border-white/10">
                  <p className="text-xs font-mono text-mfm-stone dark:text-mfm-stone/70 mb-2">ZONAL</p>
                  <p className="font-bold text-mfm-ink dark:text-white mb-1">6 Regional Coordinators</p>
                  <p className="text-mfm-stone text-sm">SW, SE, SS, NC, NW, NE</p>
                </div>
                <div className="bg-[#f9f5ef] dark:bg-white/5 p-6 rounded-3xl border border-mfm-stone/10 dark:border-white/10">
                  <p className="text-xs font-mono text-mfm-stone dark:text-mfm-stone/70 mb-2">STATES</p>
                  <p className="font-bold text-mfm-ink dark:text-white mb-1">36 State Coordinators</p>
                  <p className="text-mfm-stone text-sm">+ FCT Campus Pastor</p>
                </div>
                <div className="sm:col-span-2 bg-[#f9f5ef] p-6 rounded-3xl border border-mfm-stone/10">
                  <p className="text-xs font-mono text-mfm-stone mb-2">VOLUNTEER LEADS</p>
                  <p className="font-bold text-mfm-ink dark:text-white mb-1">Prayer • Evangelism • Media • Welfare • Music • Protocols</p>
                  <p className="text-mfm-stone text-sm">in every campus fellowship</p>
                </div>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
