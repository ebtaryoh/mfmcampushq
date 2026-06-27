import { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, ArrowRight, X } from 'lucide-react';
import { FadeUp, PageWrapper } from '../components/animations';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';

// Target: July 4, 2026 at 7:00 AM WAT
const TARGET_DATE = new Date('2026-07-04T07:00:00+01:00').getTime();

function useCountdown(targetMs) {
  const calc = () => {
    const dist = targetMs - Date.now();
    if (dist <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(dist / (1000 * 60 * 60 * 24)),
      hours: Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((dist % (1000 * 60)) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id); }, []);
  return t;
}

const EVENTS = [
  {
    id: 1,
    title: 'National Campus Prayer Rain',
    date: '2026-07-04T07:00:00+01:00',
    type: 'National',
    location: 'MFM International Headquarters, Lagos',
    image: '/images/next-event/img-1.jpg',
    description: 'The most powerful student prayer gathering of the year. Come expecting your miracle!',
  },
  {
    id: 2,
    title: 'National Program — Session 1',
    date: '2026-07-10T09:00:00+01:00',
    type: 'National',
    location: 'MFM HQ, Lagos',
    image: '/images/national-program/img-1.jpg',
    description: 'Opening session of the national fellowship program for all campus coordinators.',
  },
  {
    id: 3,
    title: 'National Program — Session 2',
    date: '2026-07-11T09:00:00+01:00',
    type: 'National',
    location: 'MFM HQ, Lagos',
    image: '/images/national-program/img-2.jpg',
    description: 'Deep Word and Prayer session with anointed ministers.',
  },
  {
    id: 4,
    title: 'CF Leaders Summit',
    date: '2026-07-15T09:00:00+01:00',
    type: 'Leadership',
    location: 'Prayer City, Ogun State',
    image: '/images/national-program/img-3.jpg',
    description: 'Annual summit for all campus fellowship presidents and coordinators.',
  },
  {
    id: 5,
    title: 'National Program — Session 3',
    date: '2026-07-18T10:00:00+01:00',
    type: 'National',
    location: 'MFM HQ, Lagos',
    image: '/images/national-program/img-4.jpg',
    description: 'Campus evangelism strategy and equipping session.',
  },
  {
    id: 6,
    title: 'South-West Regional Congress',
    date: '2026-08-10T10:00:00+01:00',
    type: 'Regional',
    location: 'OAU Campus, Ile-Ife',
    image: '/images/national-program/img-5.jpg',
    description: 'South-West zone annual regional campus congress.',
  },
  {
    id: 7,
    title: 'National Program — Session 4',
    date: '2026-08-15T08:00:00+01:00',
    type: 'National',
    location: 'MFM HQ, Lagos',
    image: '/images/national-program/img-6.jpg',
    description: 'Holiness and consecration intensive.',
  },
  {
    id: 8,
    title: 'National Program — Session 5',
    date: '2026-08-22T08:00:00+01:00',
    type: 'National',
    location: 'MFM HQ, Lagos',
    image: '/images/national-program/img-7.jpg',
    description: 'Thanksgiving and testimonies from campuses nationwide.',
  },
  {
    id: 9,
    title: 'South-East Regional Congress',
    date: '2026-09-05T09:00:00+01:00',
    type: 'Regional',
    location: 'UNEC Campus, Enugu',
    image: '/images/national-program/img-8.jpg',
    description: 'South-East zone annual regional campus congress.',
  },
  {
    id: 10,
    title: 'G.O First Class Award Ceremony',
    date: '2026-09-20T10:00:00+01:00',
    type: 'Special',
    location: 'MFM International HQ, Lagos',
    image: '/images/national-program/img-9.jpg',
    description: 'Annual award ceremony celebrating graduating First Class students.',
  },
  {
    id: 11,
    title: 'National Program — Session 6',
    date: '2026-09-28T08:00:00+01:00',
    type: 'National',
    location: 'MFM HQ, Lagos',
    image: '/images/national-program/img-10.jpg',
    description: 'Spiritual warfare and deliverance training for campus workers.',
  },
  {
    id: 12,
    title: 'North-Central Regional Congress',
    date: '2026-10-10T09:00:00+01:00',
    type: 'Regional',
    location: 'UNIABUJA Campus, FCT',
    image: '/images/national-program/img-11.jpg',
    description: 'North-Central zone annual regional campus congress.',
  },
  {
    id: 13,
    title: 'End-of-Year Campus Summit',
    date: '2026-11-20T09:00:00+01:00',
    type: 'National',
    location: 'Prayer City, Ogun State',
    image: '/images/national-program/img-12.jpg',
    description: 'Year-end gathering for all campus fellowship leaders and volunteers.',
  },
];

const TYPES = ['All', 'National', 'Regional', 'Leadership', 'Special'];

export default function EventsPage() {
  const t = useCountdown(TARGET_DATE);
  const [filter, setFilter] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = filter === 'All' ? EVENTS : EVENTS.filter(e => e.type === filter);

  const CountDigit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="w-20 h-24 md:w-28 md:h-32 bg-[#241334] rounded-[24px] border border-white/10 flex items-center justify-center mb-3 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
        <motion.span
          key={value}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="font-display text-5xl md:text-6xl text-mfm-gold relative z-10"
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </div>
      <span className="text-white/50 font-mono text-xs tracking-widest uppercase">{label}</span>
    </div>
  );

  return (
    <PageWrapper className="bg-[#fcfaf7] dark:bg-[#150c1f] min-h-screen transition-colors duration-500">

      {/* Hero with Countdown — uses next-event image */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/next-event/img-1.jpg"
            alt="PMCH WATER OF FIRE"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0814]/95 via-[#0f0814]/80 to-[#0f0814]/40" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-mfm-purple/20 blur-[100px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Col: Info & Countdown */}
            <div className="text-left">
              <FadeUp>
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-mfm-gold/30 bg-mfm-gold/10 backdrop-blur-md text-mfm-gold font-mono text-[11px] tracking-[0.2em] uppercase mb-8 shadow-[0_0_20px_rgba(215,168,74,0.1)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mfm-gold opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-mfm-gold" />
                  </span>
                  Next National Event
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#f3eedd] mb-4 tracking-tight leading-tight">
                  PMCH<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-mfm-gold to-mfm-gold-light">
                    WATER OF FIRE
                  </span>
                </h2>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="text-white/60 flex flex-col gap-3 mb-10">
                  <p className="flex items-center gap-3">
                    <CalendarIcon size={18} className="text-mfm-gold" />
                    <span className="font-mono text-sm tracking-wider">Saturday, July 4, 2026 • 7:00 AM</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <MapPin size={18} className="text-mfm-gold" />
                    <span className="text-sm">MFM International Headquarters, Lagos</span>
                  </p>
                </div>
              </FadeUp>

              {/* Countdown */}
              <FadeUp delay={0.2}>
                <div className="flex gap-4 md:gap-6 lg:gap-8 mb-12">
                  <CountDigit value={t.days} label="Days" />
                  <div className="text-mfm-gold font-display text-3xl md:text-4xl self-start mt-6 md:mt-10">:</div>
                  <CountDigit value={t.hours} label="Hours" />
                  <div className="text-mfm-gold font-display text-3xl md:text-4xl self-start mt-6 md:mt-10">:</div>
                  <CountDigit value={t.minutes} label="Minutes" />
                  <div className="text-mfm-gold font-display text-3xl md:text-4xl self-start mt-6 md:mt-10">:</div>
                  <CountDigit value={t.seconds} label="Seconds" />
                </div>
              </FadeUp>

              <FadeUp delay={0.3}>
                <button className="bg-mfm-gold hover:bg-[#d8a43f] text-[#1a0f26] px-10 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_30px_rgba(215,168,74,0.3)]">
                  Register for Event
                </button>
              </FadeUp>
            </div>

            {/* Right Col: Flyer */}
            <div className="hidden lg:block relative">
              <FadeUp delay={0.4}>
                <div className="rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group relative max-w-sm ml-auto">
                  <img src="/images/next-event/img-1.jpg" alt="PMCH Flyer" className="w-full h-auto group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Grid */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-mfm-purple-dark dark:text-mfm-cream">2026 National Calendar</h2>
              <p className="text-mfm-stone dark:text-mfm-stone/80 mt-2">All national, regional, and special programs for the year</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {TYPES.map(type => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
                    filter === type
                      ? 'bg-mfm-purple-dark dark:bg-mfm-gold text-white dark:text-[#1a0f26] shadow-lg'
                      : 'border border-mfm-stone/20 dark:border-white/20 text-mfm-stone dark:text-mfm-stone/80 hover:border-mfm-purple-dark dark:hover:border-mfm-gold hover:text-mfm-purple-dark dark:hover:text-mfm-gold'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((event, i) => (
            <FadeUp key={event.id} delay={0.05 * (i % 6)}>
              <div 
                className="bg-white dark:bg-white/5 rounded-[32px] overflow-hidden shadow-sm border border-mfm-stone/10 dark:border-white/10 group cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
                onClick={() => setSelectedEvent(event)}
              >
                {/* Image */}
                <div className="h-52 relative overflow-hidden shrink-0">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f26]/70 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`text-[10px] font-mono tracking-widest px-3 py-1.5 rounded-full font-bold uppercase backdrop-blur-md ${
                      event.type === 'National' ? 'bg-mfm-purple/90 text-white' :
                      event.type === 'Special' ? 'bg-mfm-gold/90 text-[#1a0f26]' :
                      event.type === 'Leadership' ? 'bg-[#1a0f26]/90 text-mfm-gold border border-mfm-gold/40' :
                      'bg-white/90 text-mfm-purple-dark'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-display text-2xl text-mfm-purple-dark dark:text-white mb-3 group-hover:text-mfm-purple dark:group-hover:text-mfm-gold transition-colors leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-mfm-stone dark:text-mfm-stone/80 text-sm mb-5 leading-relaxed flex-1">{event.description}</p>
                  <div className="space-y-2 mb-6">
                    <p className="text-mfm-stone dark:text-mfm-stone/70 flex items-center gap-2 text-sm">
                      <CalendarIcon size={14} className="text-mfm-gold shrink-0" />
                      {new Date(event.date).toLocaleDateString('en-NG', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                    <p className="text-mfm-stone dark:text-mfm-stone/70 flex items-center gap-2 text-sm">
                      <Clock size={14} className="text-mfm-gold shrink-0" />
                      {new Date(event.date).toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                    <p className="text-mfm-stone dark:text-mfm-stone/70 flex items-center gap-2 text-sm">
                      <MapPin size={14} className="text-mfm-gold shrink-0" />
                      {event.location}
                    </p>
                  </div>
                  <button className="text-mfm-purple-dark dark:text-mfm-gold font-bold group-hover:text-mfm-purple transition-colors flex items-center gap-2 text-sm">
                    View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <Footer />

      {/* Modal for Calendar Cards */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0 }}
              className="bg-white dark:bg-[#1a0f26] w-full max-w-2xl rounded-[32px] overflow-hidden shadow-2xl flex flex-col border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80 w-full overflow-hidden shrink-0">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full text-white flex items-center justify-center transition-colors"
                >
                  <X size={20} />
                </button>
                <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f26] to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className={`inline-block text-[10px] font-mono tracking-widest px-3 py-1.5 rounded-full font-bold uppercase mb-3 ${
                    selectedEvent.type === 'National' ? 'bg-mfm-purple/90 text-white' :
                    selectedEvent.type === 'Special' ? 'bg-mfm-gold/90 text-[#1a0f26]' :
                    selectedEvent.type === 'Leadership' ? 'bg-white/90 text-[#1a0f26]' :
                    'bg-white/20 text-white backdrop-blur-md'
                  }`}>
                    {selectedEvent.type}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl text-white">{selectedEvent.title}</h2>
                </div>
              </div>

              <div className="p-8">
                <p className="text-mfm-stone dark:text-mfm-stone/80 text-lg mb-8 leading-relaxed">
                  {selectedEvent.description}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 bg-mfm-cream dark:bg-white/5 p-6 rounded-[20px] mb-8 border border-mfm-stone/10 dark:border-white/10">
                  <div>
                    <p className="text-xs font-mono tracking-widest uppercase text-mfm-stone dark:text-mfm-stone/60 mb-1">Date & Time</p>
                    <p className="font-bold text-mfm-ink dark:text-white flex items-center gap-2">
                      <CalendarIcon size={16} className="text-mfm-purple dark:text-mfm-gold" />
                      {new Date(selectedEvent.date).toLocaleDateString('en-NG', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                    <p className="font-bold text-mfm-ink dark:text-white flex items-center gap-2 mt-1">
                      <Clock size={16} className="text-mfm-purple dark:text-mfm-gold" />
                      {new Date(selectedEvent.date).toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-widest uppercase text-mfm-stone dark:text-mfm-stone/60 mb-1">Location</p>
                    <p className="font-bold text-mfm-ink dark:text-white flex items-start gap-2">
                      <MapPin size={16} className="text-mfm-purple dark:text-mfm-gold mt-1 shrink-0" />
                      {selectedEvent.location}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-mfm-purple-dark dark:bg-mfm-gold text-white dark:text-[#1a0f26] py-4 rounded-xl font-bold hover:bg-mfm-purple dark:hover:bg-mfm-gold-light transition-colors text-center">
                    Register Now
                  </button>
                  <button className="flex-1 bg-white dark:bg-white/5 text-mfm-ink dark:text-white border border-mfm-stone/20 dark:border-white/20 py-4 rounded-xl font-bold hover:bg-mfm-cream dark:hover:bg-white/10 transition-colors text-center">
                    Add to Calendar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
