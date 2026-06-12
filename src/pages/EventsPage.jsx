import { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, ArrowRight } from 'lucide-react';
import { FadeUp, PageWrapper } from '../components/animations';
import Footer from '../components/Footer';

const EVENTS = [
  {
    id: 1,
    title: 'National Campus Prayer Rain',
    date: '2026-06-25T17:00:00',
    type: 'National',
    location: 'MFM International Headquarters, Lagos',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'CF Leaders Summit',
    date: '2026-07-15T09:00:00',
    type: 'Leadership',
    location: 'Prayer City, Ogun State',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'South-West Regional Congress',
    date: '2026-08-10T10:00:00',
    type: 'Regional',
    location: 'OAU Campus, Ile-Ife',
    image: 'https://images.unsplash.com/photo-1525926477800-7a3b10316ac6?auto=format&fit=crop&w=800&q=80'
  }
];

export default function EventsPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const nextEvent = EVENTS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    const target = new Date(nextEvent.date).getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper className="bg-[#fcfaf7] min-h-screen">
      
      {/* Hero with Countdown */}
      <section className="bg-[#1a0f26] pt-40 pb-20 px-6 relative border-b border-white/10">
        <div className="max-w-[1200px] mx-auto text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mfm-gold/20 text-mfm-gold font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-8">
              Upcoming National Event
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-[#f3eedd] mb-6 tracking-tight">
              {nextEvent.title}
            </h1>
            <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto flex items-center justify-center gap-2">
              <MapPin size={18} /> {nextEvent.location}
            </p>

            <div className="flex justify-center gap-4 md:gap-8">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((t, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-20 h-24 md:w-28 md:h-32 bg-[#241334] rounded-[24px] border border-white/10 flex items-center justify-center mb-3 shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
                    <span className="font-display text-5xl md:text-6xl text-mfm-gold relative z-10">
                      {t.value.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-white/50 font-mono text-xs tracking-widest uppercase">{t.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button className="bg-mfm-gold hover:bg-[#d8a43f] text-[#1a0f26] px-10 py-4 rounded-full font-bold transition-colors">
                Register for Event
              </button>
            </div>
          </FadeUp>
        </div>
        
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-mfm-purple/20 blur-[100px] pointer-events-none"></div>
      </section>

      {/* Calendar Grid */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <FadeUp delay={0.2}>
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-4xl text-mfm-purple-dark">2026 Calendar</h2>
            <div className="hidden md:flex gap-2">
              <button className="px-6 py-2 rounded-full bg-mfm-purple-dark text-white font-bold text-sm">All Events</button>
              <button className="px-6 py-2 rounded-full border border-mfm-stone/20 text-mfm-stone hover:border-mfm-purple-dark hover:text-mfm-purple-dark font-bold text-sm transition-colors">National</button>
              <button className="px-6 py-2 rounded-full border border-mfm-stone/20 text-mfm-stone hover:border-mfm-purple-dark hover:text-mfm-purple-dark font-bold text-sm transition-colors">Regional</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENTS.map((event, i) => (
              <div key={i} className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-mfm-stone/10 group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="h-48 relative overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-mfm-purple-dark text-[10px] font-mono tracking-widest px-3 py-1.5 rounded-full font-bold uppercase">
                      {event.type}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl text-mfm-purple-dark mb-4">{event.title}</h3>
                  <div className="space-y-3 mb-8">
                    <p className="text-mfm-stone flex items-center gap-3 text-sm">
                      <CalendarIcon size={16} className="text-mfm-gold-dark" />
                      {new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                    <p className="text-mfm-stone flex items-center gap-3 text-sm">
                      <Clock size={16} className="text-mfm-gold-dark" />
                      {new Date(event.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                    <p className="text-mfm-stone flex items-center gap-3 text-sm">
                      <MapPin size={16} className="text-mfm-gold-dark" />
                      {event.location}
                    </p>
                  </div>
                  <button className="text-mfm-purple-dark font-bold group-hover:text-mfm-purple transition-colors flex items-center gap-2">
                    View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      <Footer />
    </PageWrapper>
  );
}
