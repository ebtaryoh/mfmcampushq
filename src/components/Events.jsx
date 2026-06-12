import { ArrowRight, Calendar } from 'lucide-react';
import { FadeUp } from './animations';

const EVENTS = [
  {
    date: 'FEB 14–16',
    category: 'PRAYER',
    title: 'National Campus Prayer Rain',
    location: 'Camp Ground • Lagos-Ibadan Expressway',
    link: '#register'
  },
  {
    date: 'MAR 8',
    category: 'LEADERSHIP',
    title: 'CF Leaders Summit 2026',
    location: 'MFM International HQ • Yaba',
    link: '#register'
  },
  {
    date: 'APR 18–20',
    category: 'EVANGELISM',
    title: 'Campus Evangelism Storm',
    location: 'All 140 Campuses Nationwide',
    link: '#register'
  }
];

export default function Events() {
  return (
    <section id="events" className="py-32 bg-[#efeae0]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <FadeUp>
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mfm-stone/20 bg-white/50 text-mfm-gold-dark font-mono text-xs tracking-widest font-bold mb-6">
              NATIONAL CALENDAR
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="font-display text-4xl md:text-5xl text-mfm-purple-dark">
                Upcoming National Events
              </h2>
              <button className="text-mfm-purple-dark font-bold hover:text-mfm-purple transition-colors flex items-center gap-2 text-sm">
                View full calendar &rarr;
              </button>
            </div>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((evt, i) => (
            <FadeUp key={i} delay={0.1 * (i + 1)}>
              <div className="bg-[#fcfaf7] rounded-[32px] p-8 md:p-10 border border-[#e4d9c8] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <p className="text-mfm-gold-dark text-xs font-mono font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                    <Calendar size={14} /> {evt.date} • {evt.category}
                  </p>
                  <h3 className="font-display text-3xl text-mfm-purple-dark mb-4 group-hover:text-mfm-purple transition-colors">
                    {evt.title}
                  </h3>
                  <p className="text-mfm-stone mb-12">
                    {evt.location}
                  </p>
                </div>
                
                <a href={evt.link} className="inline-flex items-center gap-2 font-bold text-mfm-purple-dark group-hover:text-mfm-purple transition-colors">
                  Register free <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
        
      </div>
    </section>
  );
}
