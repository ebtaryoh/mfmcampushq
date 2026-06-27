import { useState } from 'react';
import { Search, MapPin, ArrowRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FadeUp } from './animations';
import { CAMPUSES } from '../data/campuses';

// Nigeria geo-zones with approximate SVG positions
const ZONES = [
  { id: 'South-West', label: 'South-West', short: 'SW', x: 108, y: 280, color: '#7c3aed' },
  { id: 'South-East', label: 'South-East', short: 'SE', x: 230, y: 298, color: '#2563eb' },
  { id: 'South-South', label: 'South-South', short: 'SS', x: 175, y: 335, color: '#059669' },
  { id: 'North-Central', label: 'North-Central', short: 'NC', x: 175, y: 195, color: '#d97706' },
  { id: 'North-West', label: 'North-West', short: 'NW', x: 88, y: 145, color: '#dc2626' },
  { id: 'North-East', label: 'North-East', short: 'NE', x: 265, y: 148, color: '#db2777' },
];

export default function CampusFinder() {
  const [searchTerm, setSearchTerm] = useState('');
  const [zoneFilter, setZoneFilter] = useState('');
  const [hoveredZone, setHoveredZone] = useState('');
  const navigate = useNavigate();

  const filtered = CAMPUSES.filter(c => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesZone = zoneFilter ? c.zone === zoneFilter : true;
    return matchesSearch && matchesZone;
  });

  const selectZone = (zoneId) => {
    setZoneFilter(prev => (prev === zoneId ? '' : zoneId));
  };

  return (
    <section id="campuses" className="py-32 bg-white dark:bg-[#1a0f26] transition-colors duration-500 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6">

        <FadeUp>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mfm-gold/40 bg-mfm-gold/10 text-mfm-gold-dark font-mono text-xs tracking-widest font-bold mb-6">
            CAMPUS DIRECTORY
          </div>
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 mb-16">
            <h2 className="font-display text-5xl md:text-6xl text-mfm-purple-dark dark:text-mfm-cream max-w-2xl leading-[1.1]">
              Find your MFMCF campus fellowship
            </h2>
            <p className="text-mfm-stone dark:text-mfm-stone/80 text-lg max-w-sm">
              140 fellowships across Nigeria's tertiary institutions. Can't find yours? Pioneer one in 14 days.
            </p>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left: Filters + Campus Grid */}
          <div className="lg:col-span-2">
            <FadeUp delay={0.1}>
              <div className="flex flex-col md:flex-row gap-4 mb-10">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-mfm-stone" size={20} />
                  <input
                    type="text"
                    placeholder="Search campus, city, state..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-mfm-stone/20 dark:border-white/10 dark:bg-white/5 focus:border-mfm-purple focus:ring-1 focus:ring-mfm-purple outline-none transition-all text-mfm-ink dark:text-white"
                  />
                </div>
                {zoneFilter && (
                  <button
                    onClick={() => setZoneFilter('')}
                    className="flex items-center gap-2 px-5 py-4 rounded-xl bg-mfm-purple-dark text-white font-bold text-sm"
                  >
                    <X size={16} /> {zoneFilter}
                  </button>
                )}
                <button
                  onClick={() => { setSearchTerm(''); setZoneFilter(''); }}
                  className="px-6 py-4 rounded-xl text-mfm-purple dark:text-mfm-gold font-bold hover:bg-mfm-purple/5 dark:hover:bg-mfm-gold/10 transition-colors"
                >
                  Reset
                </button>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 gap-6">
              {filtered.map((campus, i) => (
                <FadeUp key={campus.id} delay={0.1 * (i % 4)}>
                  <div
                    className="group bg-white dark:bg-white/5 border border-mfm-stone/10 dark:border-white/10 rounded-[32px] overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col"
                    onClick={() => navigate(`/campus/${campus.id}`)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-mfm-purple-dark/40 z-10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />
                      <img
                        src={campus.img}
                        alt={campus.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-black/30 backdrop-blur-md text-white text-[10px] font-mono tracking-widest px-3 py-1.5 rounded-full font-bold uppercase">
                          {campus.zone}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 z-20">
                        <p className="text-white/90 text-xs font-mono tracking-widest mb-1">{campus.location}</p>
                        <h3 className="text-white font-display text-3xl">{campus.name}</h3>
                      </div>
                    </div>
                    <div className="p-6 flex items-center justify-between bg-white dark:bg-[#150c1f] z-20 relative transition-colors">
                      <p className="text-mfm-stone dark:text-mfm-stone/80 font-medium">{campus.university}</p>
                      <button className="text-mfm-purple-dark dark:text-mfm-gold font-bold group-hover:text-mfm-purple transition-colors flex items-center gap-1 text-sm">
                        View page <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </FadeUp>
              ))}

              {filtered.length === 0 && (
                <div className="col-span-2 text-center py-20 bg-mfm-cream dark:bg-white/5 rounded-[32px]">
                  <MapPin size={48} className="text-mfm-gold mx-auto mb-4" />
                  <p className="text-mfm-stone dark:text-mfm-stone/80 text-lg">No campuses found.</p>
                  <button onClick={() => { setSearchTerm(''); setZoneFilter(''); }} className="mt-4 text-mfm-purple dark:text-mfm-gold font-bold">
                    Clear Filters
                  </button>
                </div>
              )}
            </div>

            <div className="mt-10 flex flex-col items-center gap-4">
              <p className="text-mfm-stone dark:text-mfm-stone/70 font-mono text-xs tracking-widest uppercase">
                Showing {Math.min(filtered.length, 8)} of 140 campuses
              </p>
              <button className="bg-white/5 backdrop-blur-lg border border-mfm-stone/20 dark:border-white/20 text-mfm-ink dark:text-white px-8 py-3 rounded-full font-bold hover:bg-mfm-purple-dark dark:hover:bg-mfm-gold dark:hover:text-[#1a0f26] hover:text-white hover:border-transparent transition-all duration-300">
                Load more campuses
              </button>
            </div>
          </div>

          {/* Right: Interactive Nigeria Map */}
          <div className="lg:col-span-1">
            <FadeUp delay={0.4} className="sticky top-32">
              <div className="bg-white dark:bg-white/5 border border-mfm-stone/10 dark:border-white/10 rounded-[32px] p-8 shadow-sm backdrop-blur-sm">
                <h3 className="font-display text-3xl text-mfm-purple-dark dark:text-mfm-cream mb-2">Nigeria Campus Map</h3>
                <p className="text-mfm-stone dark:text-mfm-stone/80 mb-6 text-sm">
                  {zoneFilter ? `Filtering: ${zoneFilter}` : 'Click a zone to filter campuses'}
                </p>

                {/* SVG Map */}
                <div className="bg-[#efeae0] dark:bg-[#0f0814] rounded-2xl p-4 mb-6 border border-mfm-stone/10 dark:border-white/10">
                  <svg viewBox="30 60 310 330" className="w-full" xmlns="http://www.w3.org/2000/svg">
                    {/* NW region */}
                    <polygon
                      points="50,80 165,80 165,160 100,160 55,135"
                      fill="#dc2626" fillOpacity={zoneFilter === 'North-West' ? 0.4 : 0.15}
                      stroke="#dc2626" strokeWidth="1.5" strokeOpacity="0.7"
                      className="cursor-pointer"
                      onClick={() => selectZone('North-West')}
                    />
                    {/* NE region */}
                    <polygon
                      points="165,78 315,95 308,165 165,160"
                      fill="#db2777" fillOpacity={zoneFilter === 'North-East' ? 0.4 : 0.15}
                      stroke="#db2777" strokeWidth="1.5" strokeOpacity="0.7"
                      className="cursor-pointer"
                      onClick={() => selectZone('North-East')}
                    />
                    {/* NC region */}
                    <polygon
                      points="100,160 308,165 290,250 125,250"
                      fill="#d97706" fillOpacity={zoneFilter === 'North-Central' ? 0.4 : 0.15}
                      stroke="#d97706" strokeWidth="1.5" strokeOpacity="0.7"
                      className="cursor-pointer"
                      onClick={() => selectZone('North-Central')}
                    />
                    {/* SW region */}
                    <polygon
                      points="50,240 125,250 120,370 80,375 50,340"
                      fill="#7c3aed" fillOpacity={zoneFilter === 'South-West' ? 0.4 : 0.15}
                      stroke="#7c3aed" strokeWidth="1.5" strokeOpacity="0.7"
                      className="cursor-pointer"
                      onClick={() => selectZone('South-West')}
                    />
                    {/* SS region */}
                    <polygon
                      points="120,300 185,300 180,380 145,390 115,370"
                      fill="#059669" fillOpacity={zoneFilter === 'South-South' ? 0.4 : 0.15}
                      stroke="#059669" strokeWidth="1.5" strokeOpacity="0.7"
                      className="cursor-pointer"
                      onClick={() => selectZone('South-South')}
                    />
                    {/* SE region */}
                    <polygon
                      points="185,255 290,255 275,375 210,385 185,370"
                      fill="#2563eb" fillOpacity={zoneFilter === 'South-East' ? 0.4 : 0.15}
                      stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.7"
                      className="cursor-pointer"
                      onClick={() => selectZone('South-East')}
                    />

                    {/* Country border outline */}
                    <polygon
                      points="50,80 315,95 308,165 290,255 275,375 210,385 145,390 80,375 50,340 50,240 100,160 55,135"
                      fill="none"
                      stroke="#d7a84a"
                      strokeWidth="2"
                      strokeDasharray="5 4"
                      opacity="0.5"
                    />

                    {/* Zone dots + labels */}
                    {ZONES.map(zone => (
                      <g
                        key={zone.id}
                        onClick={() => selectZone(zone.id)}
                        onMouseEnter={() => setHoveredZone(zone.id)}
                        onMouseLeave={() => setHoveredZone('')}
                        className="cursor-pointer"
                      >
                        {(zoneFilter === zone.id) && (
                          <circle cx={zone.x} cy={zone.y} r="22" fill={zone.color} fillOpacity="0.12">
                            <animate attributeName="r" values="18;26;18" dur="1.8s" repeatCount="indefinite" />
                          </circle>
                        )}
                        <circle
                          cx={zone.x}
                          cy={zone.y}
                          r={zoneFilter === zone.id || hoveredZone === zone.id ? 15 : 12}
                          fill={zone.color}
                          stroke="white"
                          strokeWidth="2.5"
                          style={{ transition: 'r 0.2s' }}
                        />
                        <text
                          x={zone.x} y={zone.y + 4}
                          textAnchor="middle"
                          fill="white"
                          fontSize="8.5"
                          fontWeight="bold"
                          fontFamily="monospace"
                        >
                          {zone.short}
                        </text>
                        {hoveredZone === zone.id && (
                          <g>
                            <rect x={zone.x - 48} y={zone.y - 36} width="96" height="22" rx="6" fill={zone.color} />
                            <text x={zone.x} y={zone.y - 20} textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
                              {zone.label}
                            </text>
                          </g>
                        )}
                      </g>
                    ))}

                    {/* Compass */}
                    <text x="308" y="80" fill="#9d9098" fontSize="10" fontFamily="monospace" opacity="0.5">N</text>
                    <line x1="312" y1="84" x2="312" y2="100" stroke="#9d9098" strokeWidth="1" opacity="0.4" />
                  </svg>
                </div>

                {/* Zone legend */}
                <div className="space-y-2">
                  {ZONES.map(zone => {
                    const count = CAMPUSES.filter(c => c.zone === zone.id).length;
                    return (
                      <button
                        key={zone.id}
                        onClick={() => selectZone(zone.id)}
                        className={`w-full flex items-center justify-between py-2.5 px-4 rounded-xl transition-all text-sm ${
                          zoneFilter === zone.id ? 'text-white font-bold shadow-md' : 'text-mfm-stone dark:text-mfm-stone/80 hover:bg-mfm-cream/50 dark:hover:bg-white/5'
                        }`}
                        style={zoneFilter === zone.id ? { backgroundColor: zone.color } : {}}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: zone.color }} />
                          <span>{zone.label}</span>
                        </div>
                        <span className={`font-mono font-bold text-xs px-2 py-0.5 rounded-full ${zoneFilter === zone.id ? 'bg-white/20' : 'bg-mfm-cream dark:bg-white/10'}`}>
                          {count > 0 ? count : '—'}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => selectZone('')}
                  className="w-full mt-6 bg-mfm-cream dark:bg-white/5 text-mfm-gold-dark dark:text-mfm-gold border border-mfm-gold/30 font-bold py-4 rounded-xl hover:bg-mfm-gold hover:text-[#1a0f26] dark:hover:bg-mfm-gold dark:hover:text-[#1a0f26] transition-all"
                >
                  {zoneFilter ? 'Show All Zones' : "Don't see your school? Pioneer"}
                </button>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
