import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, CheckCircle2, ChevronDown, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const InstagramIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const XIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FacebookIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

import Footer from '../components/Footer';
import { PageWrapper, FadeUp, ScaleIn, StaggeredText } from '../components/animations';
import { CAMPUSES } from '../data/campuses';

const MOCK_DATA = {
  description: 'We are a vibrant campus fellowship raising fire-brand students across the nation. Word, Prayer, Holiness. Weekly power-packed services, departmental cell fellowships, and campus-wide evangelism.',
  members: '~430 active members',
  venue: 'MFMCF Chapel',
  mapUrl: 'https://maps.google.com/',
  leadership: [
    { role: 'PRESIDENT', name: 'Campus President', title: 'Overall Coordinator' },
    { role: 'VICE PRESIDENT', name: 'Vice President', title: 'Assists the President' },
    { role: 'SECRETARY GENERAL', name: 'Secretary General', title: 'Administrative Head' },
    { role: 'SISTERS COORDINATOR', name: 'Sisters Coordinator', title: 'Coordinates Sisters Unit' },
  ],
  announcements: [
    'Sunday First-timers reception — arrive 7:30AM, Welcome team waiting.',
    'Prayer Rain this Friday — "My Star Must Shine"',
    'Cell fellowship registration closes Wednesday.',
    'Campus Evangelism Storm — this Saturday 9AM.'
  ],
  upcoming: [
    { date: 'Feb 14-16', event: 'National Campus Prayer Rain' },
    { date: 'Mar 8', event: 'CF Leaders Summit' },
    { date: 'Every Friday', event: 'Power Night' }
  ],
  contact: {
    phone: '+234 80X XXX 6012'
  }
};

export default function CampusPage({ openModal }) {
  const { id } = useParams();
  const [isGalleryExpanded, setIsGalleryExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  
  const baseCampus = CAMPUSES.find(c => c.id === id) || CAMPUSES[0];
  
  const campus = {
    ...MOCK_DATA,
    id: baseCampus.id,
    zone: baseCampus.zone.toUpperCase(),
    state: baseCampus.location.split(', ')[1]?.toUpperCase() || 'STATE',
    shortName: baseCampus.name,
    longName: `${baseCampus.university} • ${baseCampus.location}`,
    slogan: baseCampus.slogan || "Igniting the Campus with the Fire of the Holy Ghost",
    image: baseCampus.img,
    venue: `MFMCF Chapel, ${baseCampus.university}`,
    mapUrl: `https://maps.google.com/?q=${encodeURIComponent(baseCampus.university)}`,
    members: baseCampus.stats ? `~${baseCampus.stats.members} active members` : MOCK_DATA.members,
    schedule: baseCampus.schedule || [],
    contact: {
      ...MOCK_DATA.contact,
      phone: '08062704913',
      email: 'mfmnationalcf@yahoo.com',
      instagram: `@mfmcf_${baseCampus.id}`,
      facebook: `MFMCF ${baseCampus.id.toUpperCase()}`,
      twitter: `@mfmcf_${baseCampus.id}`,
      address: `MFMCF Chapel, ${baseCampus.university}`
    },
    gallery: baseCampus.gallery || [],
    upcomingEventImg: baseCampus.upcomingEventImg || baseCampus.img
  };

  const galleryImages = isGalleryExpanded ? campus.gallery : campus.gallery.slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Handle keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, galleryImages.length]);

  return (
    <PageWrapper className="bg-[#fcfaf7] dark:bg-[#150c1f] transition-colors duration-500 min-h-screen relative selection:bg-mfm-purple selection:text-white">
      {/* Subtle Background Texture */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40 dark:opacity-10 mix-blend-multiply dark:mix-blend-lighten" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2" onClick={() => setLightboxIndex(null)}>
              <X size={32} />
            </button>
            
            <button 
              className="absolute left-8 text-white/50 hover:text-white transition-colors p-4 rounded-full hover:bg-white/10"
              onClick={() => setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
            >
              <ChevronLeft size={48} />
            </button>

            <motion.img 
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={galleryImages[lightboxIndex]} 
              alt="Enlarged gallery view" 
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl" 
            />

            <button 
              className="absolute right-8 text-white/50 hover:text-white transition-colors p-4 rounded-full hover:bg-white/10"
              onClick={() => setLightboxIndex((prev) => (prev + 1) % galleryImages.length)}
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Hero Section */}
      <section className="bg-[#0f0814] pt-40 pb-24 px-6 relative border-b border-white/10 overflow-hidden z-10 group">
        <div className="absolute inset-0 z-0">
          <img src={campus.image} alt="Background" className="w-full h-full object-cover opacity-60 mix-blend-luminosity scale-105 group-hover:scale-100 transition-transform duration-[20s] ease-out" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0814]/90 via-[#0f0814]/70 to-[#0f0814] z-0"></div>
          <div className="absolute inset-0 bg-black/50 z-0"></div>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mfm-gold/20 blur-[150px] rounded-full z-0 mix-blend-screen pointer-events-none animate-pulse"></div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-mono tracking-widest mb-10 transition-colors uppercase">
            <ArrowLeft size={14} /> ALL CAMPUSES
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="text-mfm-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
                {campus.zone} • {campus.state}
              </p>
              <h1 className="font-display text-5xl md:text-7xl text-[#f3eedd] mb-2 tracking-tight drop-shadow-lg">
                {campus.shortName}
              </h1>
              <p className="text-mfm-gold-light text-xl italic font-display mb-4">
                "{campus.slogan}"
              </p>
              <p className="text-white/90 text-lg md:text-xl font-light">
                {campus.longName}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pb-2">
              <button 
                onClick={() => openModal('joinModal')}
                className="bg-mfm-gold hover:bg-[#d8a43f] text-[#1a0f26] px-8 py-3.5 rounded-full font-bold transition-colors shadow-[0_0_20px_rgba(215,168,74,0.4)] hover:shadow-[0_0_30px_rgba(215,168,74,0.6)]"
              >
                Join this Campus
              </button>
              <a 
                href={`tel:${campus.contact.phone.replace(/\s/g, '')}`}
                className="border border-white/30 hover:border-white text-white px-8 py-3.5 rounded-full font-bold transition-colors flex items-center backdrop-blur-sm bg-white/5"
              >
                Contact Coordinator
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Banner */}
      <div className="max-w-[1200px] mx-auto px-6 py-8 relative z-20 -mt-16">
        <div className="bg-white/70 dark:bg-[#1a0f26]/80 backdrop-blur-2xl rounded-[24px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] border border-white dark:border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-white/90 dark:hover:bg-[#1a0f26]">
          <p className="text-mfm-stone dark:text-mfm-stone/80 text-lg">
            <span className="font-bold text-mfm-purple-dark dark:text-mfm-gold flex items-center gap-2 mb-1 md:mb-0"><MapPin size={20}/> Venue:</span> {campus.venue}
          </p>
          <a href={campus.mapUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-mfm-purple dark:text-mfm-ink hover:text-white dark:hover:text-white hover:bg-mfm-purple dark:hover:bg-mfm-purple bg-mfm-purple/10 dark:bg-mfm-gold px-8 py-3 rounded-full transition-all shrink-0 text-center shadow-sm">
            Get Directions &rarr;
          </a>
        </div>
      </div>

      {/* Horizontal Scrolling Images Section */}
      <div className="w-full overflow-hidden py-12 relative z-10 flex">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 120, repeat: Infinity }}
          className="flex gap-6 px-6 whitespace-nowrap"
        >
          {campus.gallery.map((img, i) => (
            <div key={i} className="w-[300px] md:w-[450px] h-[200px] md:h-[300px] shrink-0 rounded-[24px] overflow-hidden shadow-lg border border-mfm-stone/10 dark:border-white/10">
              <img src={img} alt="Campus Scene" className="w-full h-full object-cover" />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {campus.gallery.map((img, i) => (
            <div key={`dup-${i}`} className="w-[300px] md:w-[450px] h-[200px] md:h-[300px] shrink-0 rounded-[24px] overflow-hidden shadow-lg border border-mfm-stone/10 dark:border-white/10">
              <img src={img} alt="Campus Scene" className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Grid Content */}
      <main className="max-w-[1200px] mx-auto px-6 pb-32 relative z-10">
        
        {/* Full-width About Section */}
        <div className="mb-6">
          <FadeUp duration="slow">
            <div className="bg-white dark:bg-white/5 rounded-[32px] p-8 md:p-12 shadow-sm border border-mfm-stone/10 dark:border-white/10 flex flex-col lg:flex-row gap-8 backdrop-blur-sm">
              <div className="lg:w-1/2 flex flex-col justify-center">
                <h2 className="font-display text-4xl text-mfm-purple-dark dark:text-mfm-cream mb-6">About {campus.shortName}</h2>
                <p className="text-mfm-stone dark:text-mfm-stone/80 leading-relaxed text-lg mb-8">{campus.description}</p>
                <div className="flex flex-wrap gap-3 mb-10">
                  <span className="bg-mfm-cream dark:bg-mfm-purple-dark text-mfm-stone dark:text-mfm-cream text-sm font-bold px-5 py-2.5 rounded-full border border-mfm-stone/10 dark:border-white/5">Prayer Rain</span>
                  <span className="bg-mfm-cream dark:bg-mfm-purple-dark text-mfm-stone dark:text-mfm-cream text-sm font-bold px-5 py-2.5 rounded-full border border-mfm-stone/10 dark:border-white/5">Bible Study</span>
                  <span className="bg-mfm-cream dark:bg-mfm-purple-dark text-mfm-stone dark:text-mfm-cream text-sm font-bold px-5 py-2.5 rounded-full border border-mfm-stone/10 dark:border-white/5">Evangelism</span>
                </div>
                <div className="rounded-[24px] overflow-hidden aspect-[16/9] relative shadow-2xl group border border-mfm-stone/10 dark:border-white/10 hidden lg:block">
                  <img src={campus.image} alt="Fellowship" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="rounded-[24px] overflow-hidden aspect-video relative shadow-2xl border border-mfm-stone/10 dark:border-white/10 bg-black mb-4">
                  {['funaab', 'lasu', 'oau', 'uniben', 'unilag', 'unilorin', 'unn'].includes(campus.id.toLowerCase()) ? (
                    <video 
                      src={`/videos/campus-about-videos/${campus.id.toUpperCase()}/${campus.id.toUpperCase()}.mp4`} 
                      autoPlay
                      muted
                      loop
                      controls 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-mfm-cream/20 dark:bg-white/5">
                      <p className="font-display text-2xl text-mfm-stone dark:text-white/50">Coming Soon</p>
                    </div>
                  )}
                </div>
                
                <div className="rounded-[24px] overflow-hidden aspect-[16/9] relative shadow-2xl group border border-mfm-stone/10 dark:border-white/10 block lg:hidden mb-4">
                  <img src={campus.image} alt="Fellowship" className="w-full h-full object-cover" />
                </div>
                
                <p className="text-sm text-mfm-stone dark:text-mfm-stone/80 font-mono text-center mt-2">{campus.members}</p>
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* LEFT COLUMN (Spans 2) */}
          <div className="lg:col-span-2 space-y-6">

            {/* Weekly Schedule */}
            <FadeUp delay={0.1}>
              <div className="bg-white dark:bg-white/5 rounded-[32px] p-8 md:p-12 shadow-sm border border-mfm-stone/10 dark:border-white/10 backdrop-blur-sm">
                <h2 className="font-display text-3xl text-mfm-purple-dark dark:text-mfm-cream mb-3">Weekly Schedule</h2>
                <p className="text-mfm-stone dark:text-mfm-stone/70 mb-10">Every week is packed with Word, Prayer, and Community. Come hungry — leave transformed.</p>

                {/* Full schedule cards */}
                {(() => {
                  const FULL_SCHEDULE = [
                    {
                      day: 'Sunday',
                      name: 'Sunday Service',
                      time: '8:00 AM — 11:00 AM',
                      tag: 'Main Fellowship',
                      description: 'The flagship weekly gathering. Anointed preaching, power praise & worship, fervent prayer, and powerful altar call. Every first-timer receives a personal welcome pack.',
                      img: campus.gallery[0] || campus.image,
                      badge: 'bg-mfm-purple text-white',
                    },
                    {
                      day: 'Wednesday',
                      name: 'Bible Study',
                      time: '5:30 PM — 7:00 PM',
                      tag: 'Word Depth',
                      description: 'Deep, systematic study of the Word of God. Topics include holiness, spiritual warfare, campus victory, and fire-brand Christian living. Notes provided.',
                      img: campus.gallery[1] || campus.image,
                      badge: 'bg-blue-600 text-white',
                    },
                    {
                      day: 'Friday',
                      name: 'Prayer Rain',
                      time: '5:00 PM — 7:30 PM',
                      tag: 'Power Night',
                      description: 'The most intense prayer meeting on campus. Heavy spiritual warfare, midnight-style decrees, and personal deliverance. Come with your prayer points.',
                      img: campus.gallery[2] || campus.image,
                      badge: 'bg-red-600 text-white',
                    },
                    {
                      day: 'Saturday',
                      name: 'Campus Evangelism',
                      time: '9:00 AM — 12:00 PM',
                      tag: 'Campus Storm',
                      description: 'Aggressive but loving campus-wide gospel outreach. Teams spread across hostels, lecture halls, and campus grounds. Souls are won every single week.',
                      img: campus.gallery[3] || campus.image,
                      badge: 'bg-orange-500 text-white',
                    },
                    {
                      day: 'Saturday',
                      name: 'Workers Meeting',
                      time: '4:00 PM — 6:00 PM',
                      tag: 'Executives & Volunteers',
                      description: 'Strategic planning and spiritual alignment for all department heads, volunteer leads, and executive members. Not open to non-workers.',
                      img: campus.gallery[4] || campus.image,
                      badge: 'bg-mfm-gold text-[#1a0f26]',
                    },
                    {
                      day: 'Weekdays',
                      name: 'Cell Fellowships',
                      time: 'Varies by Cell',
                      tag: 'Departmental',
                      description: 'Small intimate fellowship groups organized by faculty, hostel, or department. The heartbeat of pastoral care, discipleship, and community within the campus fellowship.',
                      img: campus.gallery[5] || campus.gallery[0] || campus.image,
                      badge: 'bg-green-600 text-white',
                    },
                  ];
                  return (
                    <div className="grid md:grid-cols-2 gap-6">
                      {FULL_SCHEDULE.map((s, i) => (
                        <div
                          key={i}
                          className="rounded-[24px] overflow-hidden border border-mfm-stone/10 dark:border-white/10 shadow-md group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col bg-mfm-cream/50 dark:bg-white/5"
                        >
                          {/* Large image */}
                          <div className="relative h-52 overflow-hidden shrink-0">
                            <img
                              src={s.img}
                              alt={s.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            {/* Day badge */}
                            <div className="absolute top-4 left-4">
                              <span className={`text-[10px] font-mono tracking-widest px-3 py-1.5 rounded-full font-bold uppercase ${s.badge}`}>
                                {s.day}
                              </span>
                            </div>
                            {/* Time on image */}
                            <div className="absolute bottom-4 left-4 right-4">
                              <p className="text-white font-bold text-xl font-display">{s.name}</p>
                              <p className="text-mfm-gold font-mono text-sm">{s.time}</p>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6 flex-1">
                            <div className="inline-block bg-white dark:bg-white/10 text-mfm-stone dark:text-mfm-stone/80 text-xs font-bold px-3 py-1 rounded-full border border-mfm-stone/10 dark:border-white/10 mb-3">
                              {s.tag}
                            </div>
                            <p className="text-mfm-stone dark:text-mfm-stone/80 text-sm leading-relaxed">
                              {s.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })()}
              </div>
            </FadeUp>

            {/* Announcements & Upcoming (2-col grid) */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Announcements */}
              <FadeUp delay={0.2}>
                <div className="bg-white dark:bg-white/5 rounded-[32px] p-8 shadow-sm border border-mfm-stone/10 dark:border-white/10 h-full backdrop-blur-sm">
                  <h2 className="font-display text-2xl text-mfm-purple-dark dark:text-mfm-cream mb-6">Campus Announcements</h2>
                  <ul className="space-y-5">
                    {campus.announcements.map((a, i) => (
                      <li key={i} className="text-mfm-stone dark:text-mfm-stone/80 flex gap-3 items-start">
                        <CheckCircle2 size={20} className="text-mfm-purple dark:text-mfm-gold shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              {/* Upcoming */}
              <FadeUp delay={0.3}>
                <div className="bg-white dark:bg-white/5 rounded-[32px] p-8 shadow-sm border border-mfm-stone/10 dark:border-white/10 h-full backdrop-blur-sm">
                  <h2 className="font-display text-2xl text-mfm-purple-dark dark:text-mfm-cream mb-6">Upcoming at this Campus</h2>
                  <div className="space-y-6">
                    {campus.upcoming.map((u, i) => (
                      <div key={i} className="border-l-2 border-mfm-gold pl-4">
                        <span className="font-bold text-mfm-ink dark:text-white block mb-1">{u.date}</span>
                        <span className="text-mfm-stone dark:text-mfm-stone/80">{u.event}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Fellowship Gallery */}
            <FadeUp delay={0.4}>
              <div className="bg-white dark:bg-white/5 rounded-[32px] p-8 md:p-12 shadow-sm border border-mfm-stone/10 dark:border-white/10 backdrop-blur-sm">
                <div className="flex items-end justify-between mb-8">
                  <h2 className="font-display text-3xl text-mfm-purple-dark dark:text-mfm-cream">Fellowship Gallery</h2>
                  <button onClick={() => setIsGalleryExpanded(!isGalleryExpanded)} className="font-bold text-mfm-purple dark:text-mfm-gold hover:text-mfm-purple-dark dark:hover:text-mfm-gold-light transition-colors text-sm flex items-center gap-1">
                    {isGalleryExpanded ? 'Show less' : 'See all'} <ChevronDown size={16} className={`transform transition-transform ${isGalleryExpanded ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {galleryImages.map((img, i) => (
                    <div key={i} onClick={() => setLightboxIndex(i)} className="aspect-square rounded-[16px] overflow-hidden group relative shadow-sm cursor-pointer">
                      <img src={img} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-mfm-purple-dark/0 group-hover:bg-mfm-purple-dark/30 transition-colors flex items-center justify-center">
                        <div className="bg-white/90 text-mfm-purple-dark p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100 duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8M3 16.2V21m0 0h4.8M3 21l6-6M21 7.8V3m0 0h-4.8M21 3l-6 6M3 7.8V3m0 0h4.8M3 3l6 6"/></svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

          </div>

          {/* RIGHT COLUMN (Sidebar) */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Next Event Flyer */}
            <ScaleIn delay={0.2}>
              <div className="bg-gradient-to-br from-[#1a0f26] to-[#2a0e20] rounded-[32px] p-1 shadow-[0_20px_60px_rgba(42,14,32,0.3)] border border-mfm-gold/30 group relative overflow-hidden">
                <div className="absolute inset-0 bg-mfm-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="bg-white/5 backdrop-blur-xl rounded-[28px] p-8 relative z-10 h-full">
                  <h2 className="font-display text-3xl text-mfm-gold mb-3 flex items-center justify-between">
                    Next Event
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mfm-gold opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-mfm-gold"></span>
                    </span>
                  </h2>
                  <p className="text-white/70 text-sm mb-6">Don't miss our upcoming power-packed service. Share this with a friend!</p>
                  <div className="rounded-[20px] overflow-hidden aspect-[4/5] relative border border-white/10 group-hover:border-mfm-gold/40 transition-colors shadow-2xl">
                    <img src={campus.upcomingEventImg} alt="Next Event Flyer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                       <a href={campus.upcomingEventImg} download className="block text-center bg-white text-mfm-purple-dark font-bold py-4 px-4 rounded-xl hover:bg-mfm-gold transition-colors shadow-lg">
                         Download Flyer
                       </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScaleIn>

            {/* Campus Leadership */}
            <FadeUp delay={0.3}>
              <div className="bg-white dark:bg-white/5 rounded-[32px] p-8 shadow-sm border border-mfm-stone/10 dark:border-white/10 backdrop-blur-sm">
                <h2 className="font-display text-2xl text-mfm-purple-dark dark:text-mfm-cream mb-2">Leadership</h2>
                <p className="text-mfm-stone dark:text-mfm-stone/70 text-sm mb-6">Executive team for the current fellowship session</p>
                <div className="space-y-4">
                  {[
                    { role: 'PRESIDENT', name: 'Bro. Emmanuel A.', icon: '👑', color: 'from-purple-600 to-purple-800' },
                    { role: 'VICE PRESIDENT', name: 'Bro. Samuel K.', icon: '⭐', color: 'from-blue-600 to-blue-800' },
                    { role: 'SECRETARY GENERAL', name: 'Sis. Mary J.', icon: '📋', color: 'from-green-600 to-green-800' },
                    { role: 'SISTERS COORDINATOR', name: 'Sis. Grace O.', icon: '🌸', color: 'from-pink-600 to-pink-800' },
                  ].map((l, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-[16px] bg-mfm-cream/60 dark:bg-white/5 border border-mfm-stone/10 dark:border-white/10 hover:border-mfm-gold/40 transition-colors">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${l.color} flex items-center justify-center text-xl shrink-0 shadow-lg`}>
                        {l.icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-mono font-bold tracking-[0.15em] text-mfm-gold uppercase mb-0.5">{l.role}</p>
                        <p className="font-bold text-mfm-ink dark:text-white">{l.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Contact & Socials */}
            <FadeUp delay={0.4}>
              <div className="bg-white dark:bg-white/5 rounded-[32px] p-8 shadow-sm border border-mfm-stone/10 dark:border-white/10 backdrop-blur-sm">
                <h2 className="font-display text-2xl text-mfm-purple-dark dark:text-mfm-cream mb-6">Contact & Socials</h2>
                <div className="space-y-4 mb-8">
                  <a href="tel:08062704913" className="flex items-center gap-2 text-mfm-stone dark:text-mfm-stone/80 hover:text-mfm-purple-dark dark:hover:text-white transition-colors">
                    <span className="font-bold text-mfm-ink dark:text-white">Phone / WA:</span> 0806 270 4913
                  </a>
                  <a href="mailto:mfmnationalcf@yahoo.com" className="flex items-center gap-2 text-mfm-stone dark:text-mfm-stone/80 hover:text-mfm-purple-dark dark:hover:text-white transition-colors">
                    <span className="font-bold text-mfm-ink dark:text-white">Email:</span> mfmnationalcf@yahoo.com
                  </a>
                </div>
                
                <div className="flex flex-col gap-3">
                  <a href={`https://wa.me/${campus.contact.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#e6faee] dark:bg-[#008a40]/20 text-[#008a40] dark:text-[#5ce69a] font-bold text-sm px-6 py-4 rounded-xl border border-[#008a40]/20 hover:bg-[#d0f5e0] dark:hover:bg-[#008a40]/30 transition-colors">
                    <Phone size={20} /> WhatsApp Us
                  </a>
                  <a href={`https://instagram.com/${campus.contact.instagram.replace('@','')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#fceef5] dark:bg-[#b01e68]/20 text-[#b01e68] dark:text-[#f89acb] font-bold text-sm px-6 py-4 rounded-xl border border-[#b01e68]/20 hover:bg-[#fadceb] dark:hover:bg-[#b01e68]/30 transition-colors">
                    <InstagramIcon size={20} /> Instagram
                  </a>
                  <a href={`https://twitter.com/${campus.contact.twitter?.replace('@','')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-mfm-ink/5 dark:bg-white/10 text-mfm-ink dark:text-white font-bold text-sm px-6 py-4 rounded-xl border border-mfm-ink/10 dark:border-white/10 hover:bg-mfm-ink/10 dark:hover:bg-white/20 transition-colors">
                    <XIcon size={20} /> Twitter (X)
                  </a>
                  <a href={`https://facebook.com/${campus.contact.facebook}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#e8f0fe] dark:bg-[#1877F2]/20 text-[#1877F2] dark:text-[#7ab0f5] font-bold text-sm px-6 py-4 rounded-xl border border-[#1877F2]/20 hover:bg-[#d4e4fd] dark:hover:bg-[#1877F2]/30 transition-colors">
                    <FacebookIcon size={20} /> Facebook
                  </a>
                  <a href="https://youtube.com/mfmministries" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#fdeeee] dark:bg-[#cc0000]/20 text-[#cc0000] dark:text-[#f56666] font-bold text-sm px-6 py-4 rounded-xl border border-[#cc0000]/20 hover:bg-[#facccc] dark:hover:bg-[#cc0000]/30 transition-colors">
                    <YoutubeIcon size={20} /> YouTube
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* First time this Sunday? */}
            <FadeUp delay={0.5}>
              <div className="bg-[#f8f1e3] dark:bg-[#2d2210] rounded-[32px] p-8 shadow-sm border border-[#e8ddc5] dark:border-mfm-gold/30">
                <h2 className="font-display text-2xl text-mfm-purple-dark dark:text-mfm-gold mb-4">First time this Sunday?</h2>
                <p className="text-[#7a684b] dark:text-mfm-gold-light/80 mb-6 leading-relaxed">
                  Text “NEW - {campus.id.toUpperCase()}” to the coordinator. We’ll save you a seat and meet you at the entrance.
                </p>
                <button 
                  onClick={() => openModal('joinModal')}
                  className="w-full bg-[#d8a43f] hover:bg-[#c29032] text-[#332200] py-4 rounded-xl font-bold transition-colors shadow-lg"
                >
                  Join this campus now
                </button>
              </div>
            </FadeUp>

          </div>
        </div>
      </main>
      <Footer />
    </PageWrapper>
  );
}
