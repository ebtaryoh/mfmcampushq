import { FadeUp } from './animations';
import { Target, Eye } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#fcfaf7] dark:bg-[#150c1f] transition-colors duration-500 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-mfm-purple/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text */}
          <div>
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mfm-purple/20 text-mfm-purple dark:text-mfm-gold font-mono text-xs tracking-widest uppercase mb-8 bg-white/50 dark:bg-white/5 backdrop-blur-sm">
                About Us
              </div>
            </FadeUp>
            
            <FadeUp delay={0.1}>
              <h2 className="font-display text-4xl md:text-6xl text-mfm-purple-dark dark:text-mfm-cream mb-8 leading-[1.1]">
                Empowering the next generation of spiritual leaders.
              </h2>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <p className="text-lg text-mfm-stone dark:text-mfm-stone/80 mb-6 leading-relaxed font-light">
                Mountain of Fire and Miracles Ministries Campus Fellowship (MFMCF) is the youth and student wing of MFM Worldwide. We are established across higher institutions to raise a generation of fire-brand students who excel academically while maintaining undeniable spiritual fire.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-lg text-mfm-stone dark:text-mfm-stone/80 mb-12 leading-relaxed font-light">
                Through deep teachings, intense prayer sessions, and vibrant community life, we equip students to navigate campus life victoriously and become vessels of transformation in their respective spheres of influence.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-white/5 px-8 py-6 rounded-[24px] border border-mfm-stone/10 dark:border-white/10 shadow-sm hover:shadow-md transition-all group backdrop-blur-sm">
                  <div className="w-12 h-12 bg-mfm-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Target className="text-mfm-gold" size={24} />
                  </div>
                  <p className="text-mfm-purple-dark dark:text-white font-display text-xl mb-2">Our Mission</p>
                  <p className="text-mfm-stone dark:text-white text-sm leading-relaxed">To propagate the gospel and raise spiritual giants on campuses.</p>
                </div>
                
                <div className="bg-white dark:bg-white/5 px-8 py-6 rounded-[24px] border border-mfm-stone/10 dark:border-white/10 shadow-sm hover:shadow-md transition-all group backdrop-blur-sm">
                  <div className="w-12 h-12 bg-mfm-purple/10 dark:bg-mfm-purple/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Eye className="text-mfm-purple dark:text-[#f89acb]" size={24} />
                  </div>
                  <p className="text-mfm-purple-dark dark:text-white font-display text-xl mb-2">Our Vision</p>
                  <p className="text-mfm-stone dark:text-mfm-stone/80 text-sm leading-relaxed">A fire-full fellowship in every tertiary institution.</p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right Image Layout */}
          <div className="relative">
            <FadeUp delay={0.2} className="relative h-[500px] lg:h-[700px] rounded-[40px] overflow-hidden shadow-2xl border border-mfm-stone/10 dark:border-white/10">
              <img 
                src="/images/about/dko17.webp" 
                alt="Dr. D.K. Olukoya"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-mfm-purple-dark/20 mix-blend-overlay"></div>
            </FadeUp>

            <FadeUp delay={0.5} className="absolute -bottom-12 -left-12 hidden md:block z-20">
              <div className="bg-[#2a0e20] p-8 rounded-[32px] max-w-xs shadow-2xl border border-white/10">
                <p className="font-display text-3xl text-[#f3eedd] mb-4">"A praying student is a prevailing student."</p>
                <p className="text-mfm-gold font-mono text-xs uppercase tracking-widest">— Dr. D.K. Olukoya</p>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
