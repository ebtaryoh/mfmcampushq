import { Flame } from 'lucide-react';
import { FadeUp } from './animations';

export default function PrayerAltar() {
  return (
    <section id="prayer" className="py-24 bg-[#f9f5ef] dark:bg-[#1a0f26] transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Left Side: Connection Form */}
          <FadeUp>
            <div className="bg-white dark:bg-white/5 rounded-[40px] p-10 md:p-14 shadow-sm border border-mfm-stone/10 dark:border-white/10 h-full backdrop-blur-sm">
              <h2 className="font-display text-4xl md:text-5xl text-mfm-purple-dark dark:text-mfm-cream mb-6 leading-tight">
                New to MFMCF?<br/>We'll connect you<br/>this week.
              </h2>
              <p className="text-mfm-stone dark:text-mfm-stone/80 mb-10 text-lg leading-relaxed">
                Fill this quick form. Your campus coordinator will reach you on WhatsApp in under 12 hours. Seriously.
              </p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First name" className="fi" />
                  <input type="text" placeholder="Last name" className="fi" />
                </div>
                <input type="tel" placeholder="WhatsApp number" className="fi" />
                <input type="email" placeholder="Email address" className="fi" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <select className="fi appearance-none text-mfm-stone">
                      <option value="">Select your campus</option>
                      <option value="unilag">University of Lagos</option>
                      <option value="oau">Obafemi Awolowo University</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 1l5 5 5-5"/></svg>
                    </div>
                  </div>
                  <input type="text" placeholder="Level / Year" className="fi" />
                </div>
                <input type="text" placeholder="Hall / Hostel (optional)" className="fi" />
                <div className="relative">
                  <select className="fi appearance-none text-mfm-stone">
                    <option value="">How did you hear about us?</option>
                    <option value="friend">A friend</option>
                    <option value="social">Social Media</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 1l5 5 5-5"/></svg>
                  </div>
                </div>

                <button type="button" className="w-full bg-mfm-purple-dark hover:bg-mfm-purple text-white font-bold py-4 rounded-full mt-4 transition-colors">
                  Join My Campus Fellowship &rarr;
                </button>
                <p className="text-center text-mfm-stone text-xs mt-4">
                  By joining, you agree to be contacted by your campus coordinator. Avg response: 4.2 hrs.
                </p>
              </form>

              <div className="mt-8 bg-mfm-cream border border-[#e8d0a3] p-6 rounded-2xl">
                <p className="text-[#8a5c1a] text-sm">
                  <span className="font-bold">First time?</span> Come 30 mins early this Sunday. Our Welcome Volunteers will meet you at the gate. — <span className="font-mono text-xs">MFMCF Care Team</span>
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Right Side: Prayer Altar */}
          <FadeUp delay={0.2}>
            <div className="bg-[#241334] rounded-[40px] p-10 md:p-14 shadow-xl border border-white/5 h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="font-display text-4xl md:text-5xl text-[#f3eedd] mb-4">
                    National Prayer Altar
                  </h2>
                  <p className="text-white/70">
                    Live fire from campuses across Nigeria. Post yours. Pray with others.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-mfm-gold text-xs font-mono font-bold tracking-widest uppercase mb-1">
                    LIVE PRAYING NOW
                  </div>
                  <div className="font-display text-4xl text-[#f3eedd]">2,731</div>
                </div>
              </div>

              {/* Submission Form */}
              <div className="bg-[#2e1f40] rounded-[24px] p-6 border border-white/5 mb-8">
                <textarea 
                  placeholder="Type your prayer request... (Visible to the national altar)"
                  className="w-full bg-transparent border-none text-white/80 placeholder-white/50 focus:ring-0 resize-none h-20 outline-none text-[15px]"
                ></textarea>
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <input type="text" placeholder="Name (or Anonymous)" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none focus:border-mfm-gold flex-1 w-full" />
                    <div className="relative flex-1 w-full">
                      <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-mfm-gold w-full appearance-none">
                        <option value="">Select campus</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="10" height="6" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 1l5 5 5-5"/></svg>
                      </div>
                    </div>
                    <label className="flex items-center gap-2 text-white/80 text-sm cursor-pointer whitespace-nowrap">
                      <input type="checkbox" className="rounded bg-white/10 border-white/20 text-mfm-gold w-4 h-4" /> Anonymous
                    </label>
                  </div>
                  <div className="flex justify-end mt-2">
                    <button className="bg-[#e4b553] text-[#241334] font-bold py-3 px-6 rounded-[14px] hover:bg-[#d8a43f] transition-colors whitespace-nowrap text-sm">
                      Post Prayer
                    </button>
                  </div>
                </div>
              </div>

              {/* Feed */}
              <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                {[
                  { name: 'Tomiwa', campus: 'UI', text: 'Please pray for my mum\'s surgery tomorrow.', prayed: 0 },
                  { name: 'Ife', campus: 'OAU', text: 'Marital settlement for my elder sister.', prayed: 5 },
                  { name: 'Favour', campus: 'LASU', text: 'God should help me overcome addiction.', prayed: 1 }
                ].map((p, i) => (
                  <div key={i} className="bg-white/5 rounded-[20px] p-6 border border-white/5">
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-white/60 font-mono text-xs uppercase tracking-widest">{p.name} • {p.campus}</p>
                      <span className="text-white/40 text-xs font-mono">now</span>
                    </div>
                    <p className="text-[#f3eedd] text-lg mb-4">{p.text}</p>
                    <div className="flex gap-6">
                      <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium">
                        <Flame size={16} className={p.prayed > 0 ? "text-mfm-gold" : ""} /> Prayed • {p.prayed}
                      </button>
                      <button className="text-white/60 hover:text-white transition-colors text-sm font-medium">Join chain</button>
                      <button className="text-white/60 hover:text-white transition-colors text-sm font-medium">Share</button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </FadeUp>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 4px; }
      `}} />
    </section>
  );
}
