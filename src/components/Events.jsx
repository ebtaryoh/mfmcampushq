import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeUp } from './animations';

const EVENTS = [
  {
    date: 'FEB 14–16',
    category: 'PRAYER',
    title: 'National Campus Prayer Rain',
    location: 'Camp Ground • Lagos-Ibadan Expressway',
    img: '/images/national-program/img-1.jpg',
    link: '#register'
  },
  {
    date: 'MAR 8',
    category: 'LEADERSHIP',
    title: 'CF Leaders Summit 2026',
    location: 'MFM International HQ • Yaba',
    img: '/images/national-program/img-2.jpg',
    link: '#register'
  },
  {
    date: 'APR 18–20',
    category: 'EVANGELISM',
    title: 'Campus Evangelism Storm',
    location: 'All 140 Campuses Nationwide',
    img: '/images/national-program/img-3.jpg',
    link: '#register'
  }
];

export default function Events() {
  return (
    <section id="events" className="py-32 bg-[#efeae0] dark:bg-[#150c1f] transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <FadeUp>
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mfm-stone/20 bg-white/50 text-mfm-gold-dark font-mono text-xs tracking-widest font-bold mb-6">
              NATIONAL CALENDAR
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <Link to="/events" className="group">
                <h2 className="font-display text-4xl md:text-5xl text-mfm-purple-dark dark:text-mfm-cream group-hover:text-mfm-purple transition-colors">
                  Upcoming National Events
                </h2>
              </Link>
              <Link to="/events" className="text-mfm-purple-dark dark:text-mfm-gold font-bold hover:text-mfm-purple transition-colors flex items-center gap-2 text-sm">
                View full calendar &rarr;
              </Link>
            </div>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((evt, i) => (
            <FadeUp key={i} delay={0.1 * (i + 1)}>
              <Link to="/events" className="bg-[#fcfaf7] dark:bg-white/5 rounded-[32px] border border-[#e4d9c8] dark:border-white/10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col group overflow-hidden cursor-pointer block">
                <div className="h-48 w-full overflow-hidden">
                  <img src={evt.img} alt={evt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-between flex-grow">
                  <div>
                    <p className="text-mfm-gold-dark dark:text-mfm-gold text-xs font-mono font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                      <Calendar size={14} /> {evt.date} • {evt.category}
                    </p>
                    <h3 className="font-display text-3xl text-mfm-purple-dark dark:text-white mb-4 group-hover:text-mfm-purple transition-colors">
                      {evt.title}
                    </h3>
                    <p className="text-mfm-stone dark:text-mfm-stone/80 mb-12">
                      {evt.location}
                    </p>
                  </div>
                  
                  <span className="inline-flex items-center gap-2 font-bold text-mfm-purple-dark dark:text-mfm-cream group-hover:text-mfm-purple transition-colors mt-auto">
                    View Event <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
        
      </div>
    </section>
  );
}
