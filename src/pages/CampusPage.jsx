import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, CheckCircle2, ChevronDown } from 'lucide-react';

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
import Footer from '../components/Footer';
import { PageWrapper } from '../components/animations';
import { CAMPUSES } from '../data/campuses';

const MOCK_DATA = {
  id: 'uniben',
  zone: 'SOUTH-SOUTH',
  state: 'EDO STATE',
  shortName: 'MFMCF UNIBEN',
  longName: 'University of Benin • Benin, Edo',
  description: 'We are a vibrant campus fellowship raising fire-brand students at University of Benin. Word, Prayer, Holiness. Weekly power-packed services, departmental cell fellowships, and campus-wide evangelism.',
  members: '~430 active members',
  image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
  venue: 'MFMCF Chapel, University of Benin, Benin, Edo.',
  mapUrl: 'https://maps.google.com/?q=University+of+Benin',
  leadership: [
    { role: 'CAMPUS COORDINATOR', name: 'Bro. Emmanuel A.', title: 'President, MFMCF UNIBEN' },
    { role: 'ASST. COORDINATOR', name: 'Sis. Grace O.', title: '' },
    { role: 'STATE COORDINATOR', name: 'Pastor Edo State CF Pastor', title: '' },
    { role: 'ZONAL / REGIONAL', name: 'South-South Zonal Coordinator', title: '' },
    { role: 'VOLUNTEER LEAD', name: 'Prayer • Media • Welfare • Music', title: '' }
  ],
  schedule: [
    { name: 'Sunday Service', time: '8:00 AM — 11:00 AM', tag: 'Main Fellowship' },
    { name: 'Bible Study', time: 'Wed 5:30 PM — 7:00 PM', tag: 'Word Depth' },
    { name: 'Prayer Rain', time: 'Fri 5:00 PM — 7:30 PM', tag: 'Power Night' },
    { name: 'Workers Meeting', time: 'Sat 4:00 PM', tag: 'Executives & Volunteers' },
    { name: 'Evangelism', time: 'Sat 9:00 AM', tag: 'Campus Storm' }
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
    phone: '+234 80X XXX 6012',
    email: 'uniben@mfmcfhq.org',
    instagram: '@mfmcf_uniben',
    address: 'MFMCF Chapel, University of Benin, Benin, Edo'
  },
  gallery: [
    'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1494172961521-33799dd43b07?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=400&q=80'
  ]
};

export default function CampusPage({ openModal }) {
  const { id } = useParams();
  const [isGalleryExpanded, setIsGalleryExpanded] = useState(false);
  
  // Find campus by ID, or use UNILAG as default if not found
  const baseCampus = CAMPUSES.find(c => c.id === id) || CAMPUSES[0];
  
  // Merge with mock details for the extended view
  const campus = {
    ...MOCK_DATA,
    id: baseCampus.id,
    zone: baseCampus.zone.toUpperCase(),
    state: baseCampus.location.split(', ')[1]?.toUpperCase() || 'STATE',
    shortName: baseCampus.name,
    longName: `${baseCampus.university} • ${baseCampus.location}`,
    image: baseCampus.img,
    venue: `MFMCF Chapel, ${baseCampus.university}`,
    mapUrl: `https://maps.google.com/?q=${encodeURIComponent(baseCampus.university)}`,
    members: baseCampus.stats ? `~${baseCampus.stats.members} active members` : MOCK_DATA.members,
    schedule: baseCampus.schedule ? baseCampus.schedule.map(s => ({
      name: s.event,
      time: `${s.day} ${s.time}`,
      tag: s.loc
    })) : MOCK_DATA.schedule,
    contact: {
      ...MOCK_DATA.contact,
      email: `${baseCampus.id}@mfmcfhq.org`,
      instagram: `@mfmcf_${baseCampus.id}`,
      address: `MFMCF Chapel, ${baseCampus.university}`
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <PageWrapper className="bg-[#fcfaf7] min-h-screen relative selection:bg-mfm-purple selection:text-white">
      {/* Subtle Background Texture */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>

      {/* Premium Hero Section */}
      <section className="bg-[#1a0f26] pt-40 pb-20 px-6 relative border-b border-white/10 overflow-hidden z-10">
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
          <img src={campus.image} alt="Background" className="w-full h-full object-cover blur-md scale-110" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f26] via-transparent to-transparent z-0"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mfm-purple/20 blur-[120px] rounded-full z-0 mix-blend-screen pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-mono tracking-widest mb-10 transition-colors uppercase">
            <ArrowLeft size={14} /> ALL CAMPUSES
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="text-mfm-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
                {campus.zone} • {campus.state}
              </p>
              <h1 className="font-display text-5xl md:text-7xl text-[#f3eedd] mb-4 tracking-tight">
                {campus.shortName}
              </h1>
              <p className="text-white/80 text-lg md:text-xl font-light">
                {campus.longName}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pb-2">
              <button 
                onClick={() => openModal('joinModal')}
                className="bg-mfm-gold hover:bg-[#d8a43f] text-[#1a0f26] px-8 py-3.5 rounded-full font-bold transition-colors"
              >
                Join this Campus
              </button>
              <a 
                href={`tel:${campus.contact.phone.replace(/\s/g, '')}`}
                className="border border-white/30 hover:border-white text-white px-8 py-3.5 rounded-full font-bold transition-colors flex items-center"
              >
                Contact Coordinator
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Banner */}
      <div className="max-w-[1200px] mx-auto px-6 py-8 relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-sm border border-mfm-stone/10 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:shadow-md">
          <p className="text-mfm-stone">
            <span className="font-bold text-mfm-purple-dark flex items-center gap-2 mb-1 md:mb-0"><MapPin size={16}/> Venue:</span> {campus.venue}
          </p>
          <a href={campus.mapUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-mfm-purple hover:text-mfm-purple-dark bg-mfm-purple/5 px-6 py-3 rounded-full transition-colors shrink-0 text-center">
            Get Directions &rarr;
          </a>
        </div>
      </div>

      {/* Main Grid Content */}
      <main className="max-w-[1200px] mx-auto px-6 pb-32 relative z-10">
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* LEFT COLUMN (Spans 2) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* About Card */}
            <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-sm border border-mfm-stone/10 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h2 className="font-display text-3xl text-mfm-purple-dark mb-6">About {campus.shortName}</h2>
                <p className="text-mfm-stone leading-relaxed mb-6">{campus.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-mfm-cream text-mfm-stone text-xs font-bold px-4 py-2 rounded-full border border-mfm-stone/10">Prayer Rain</span>
                  <span className="bg-mfm-cream text-mfm-stone text-xs font-bold px-4 py-2 rounded-full border border-mfm-stone/10">Bible Study</span>
                  <span className="bg-mfm-cream text-mfm-stone text-xs font-bold px-4 py-2 rounded-full border border-mfm-stone/10">Evangelism</span>
                </div>
              </div>
              <div className="w-full md:w-64 shrink-0">
                <div className="rounded-[16px] overflow-hidden aspect-[4/3] relative">
                  <img src={campus.image} alt="Fellowship" className="w-full h-full object-cover" />
                </div>
                <p className="text-xs text-mfm-stone font-mono mt-3 text-center">{campus.members}</p>
              </div>
            </div>

            {/* Weekly Schedule */}
            <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-sm border border-mfm-stone/10">
              <h2 className="font-display text-3xl text-mfm-purple-dark mb-8">Weekly Schedule</h2>
              <div className="divide-y divide-mfm-stone/10">
                {campus.schedule.map((s, i) => (
                  <div key={i} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <span className="font-bold text-mfm-ink w-48">{s.name}</span>
                    <span className="text-mfm-stone flex-1">{s.time}</span>
                    <span className="text-mfm-stone text-sm">{s.tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Announcements & Upcoming (2-col grid) */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Announcements */}
              <div className="bg-white rounded-[24px] p-8 shadow-sm border border-mfm-stone/10">
                <h2 className="font-display text-2xl text-mfm-purple-dark mb-6">Campus Announcements</h2>
                <ul className="space-y-5">
                  {campus.announcements.map((a, i) => (
                    <li key={i} className="text-mfm-stone flex gap-3 items-start">
                      <CheckCircle2 size={18} className="text-mfm-purple-dark shrink-0 mt-1" />
                      <span className="leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Upcoming */}
              <div className="bg-white rounded-[24px] p-8 shadow-sm border border-mfm-stone/10">
                <h2 className="font-display text-2xl text-mfm-purple-dark mb-6">Upcoming at this Campus</h2>
                <div className="space-y-5">
                  {campus.upcoming.map((u, i) => (
                    <div key={i}>
                      <span className="font-bold text-mfm-ink block">{u.date}</span>
                      <span className="text-mfm-stone">— {u.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fellowship Gallery */}
            <div className="bg-white rounded-[24px] p-8 shadow-sm border border-mfm-stone/10">
              <div className="flex items-end justify-between mb-6">
                <h2 className="font-display text-2xl text-mfm-purple-dark">Fellowship Gallery</h2>
                <button onClick={() => setIsGalleryExpanded(!isGalleryExpanded)} className="font-bold text-mfm-purple hover:text-mfm-purple-dark transition-colors text-sm flex items-center gap-1">
                  {isGalleryExpanded ? 'Show less' : 'See all'} <ChevronDown size={14} className={`transform transition-transform ${isGalleryExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {(isGalleryExpanded ? [...campus.gallery, ...campus.gallery] : campus.gallery).map((img, i) => (
                  <div key={i} className="aspect-square rounded-[16px] overflow-hidden group relative">
                    <img src={img} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer" />
                    <div className="absolute inset-0 bg-mfm-purple-dark/0 group-hover:bg-mfm-purple-dark/20 transition-colors pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (Sidebar) */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Campus Leadership */}
            <div className="bg-white rounded-[24px] p-8 shadow-sm border border-mfm-stone/10">
              <h2 className="font-display text-2xl text-mfm-purple-dark mb-6">Campus Leadership</h2>
              <div className="space-y-6">
                {campus.leadership.map((l, i) => (
                  <div key={i}>
                    <p className="text-xs font-mono text-mfm-stone mb-1">{l.role}</p>
                    <p className="font-bold text-mfm-ink">{l.name}</p>
                    {l.title && <p className="text-sm text-mfm-stone">{l.title}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Socials */}
            <div className="bg-white rounded-[24px] p-8 shadow-sm border border-mfm-stone/10">
              <h2 className="font-display text-2xl text-mfm-purple-dark mb-6">Contact & Socials</h2>
              <div className="space-y-4 mb-8">
                <p className="text-mfm-stone"><span className="font-bold text-mfm-ink">Phone / WhatsApp:</span> {campus.contact.phone}</p>
                <p className="text-mfm-stone"><span className="font-bold text-mfm-ink">Email:</span> {campus.contact.email}</p>
                <p className="text-mfm-stone"><span className="font-bold text-mfm-ink">Instagram:</span> {campus.contact.instagram}</p>
                <p className="text-mfm-stone"><span className="font-bold text-mfm-ink">Address:</span> {campus.contact.address}</p>
              </div>
              
              <div className="flex flex-col gap-3">
                <a href={`https://wa.me/${campus.contact.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#e6faee] text-[#008a40] font-bold text-sm px-6 py-4 rounded-xl border border-[#008a40]/20 hover:bg-[#d0f5e0] transition-colors">
                  <Phone size={18} /> WhatsApp Coordinator
                </a>
                <a href={`https://instagram.com/${campus.contact.instagram.replace('@','')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#fceef5] text-[#b01e68] font-bold text-sm px-6 py-4 rounded-xl border border-[#b01e68]/20 hover:bg-[#fadceb] transition-colors">
                  <InstagramIcon size={18} /> Instagram
                </a>
                <a href="https://youtube.com/mfmministries" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#fdeeee] text-[#cc0000] font-bold text-sm px-6 py-4 rounded-xl border border-[#cc0000]/20 hover:bg-[#facccc] transition-colors">
                  <YoutubeIcon size={18} /> YouTube
                </a>
                <a href={`mailto:${campus.contact.email}`} className="flex items-center gap-3 bg-mfm-purple/10 text-mfm-purple-dark font-bold text-sm px-6 py-4 rounded-xl border border-mfm-purple/20 hover:bg-mfm-purple/20 transition-colors">
                  <Mail size={18} /> Email Campus
                </a>
              </div>
            </div>

            {/* Campus Map Pin */}
            <div className="bg-white rounded-[24px] p-8 shadow-sm border border-mfm-stone/10">
              <h2 className="font-display text-2xl text-mfm-purple-dark mb-6">Campus Map Pin</h2>
              <div className="bg-[#f2eadc] rounded-[16px] aspect-[4/3] flex items-center justify-center p-6 text-center border border-[#e4d9c8] mb-6 relative overflow-hidden">
                <MapPin size={48} className="absolute text-[#e4d9c8] opacity-50 scale-150" />
                <p className="font-mono text-sm text-mfm-purple-dark relative z-10 leading-relaxed">
                  {campus.longName}<br/>Fellowship Chapel
                </p>
              </div>
              <a href={campus.mapUrl} target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-white text-mfm-ink border border-mfm-stone/20 py-3 rounded-xl font-bold hover:border-mfm-purple transition-colors">
                Get Directions
              </a>
            </div>

            {/* First time this Sunday? */}
            <div className="bg-[#f8f1e3] rounded-[24px] p-8 shadow-sm border border-[#e8ddc5]">
              <h2 className="font-display text-2xl text-mfm-purple-dark mb-4">First time this Sunday?</h2>
              <p className="text-[#7a684b] mb-6 leading-relaxed">
                Text “NEW - {campus.id.toUpperCase()}” to the coordinator. We’ll save you a seat and meet you at the entrance.
              </p>
              <button 
                onClick={() => openModal('joinModal')}
                className="w-full bg-[#d8a43f] hover:bg-[#c29032] text-[#332200] py-3 rounded-xl font-bold transition-colors"
              >
                Join this campus now
              </button>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </PageWrapper>
  );
}
