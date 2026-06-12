import { useState } from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FadeUp } from './animations';
import { CAMPUSES } from '../data/campuses';

export default function CampusFinder() {
  const [searchTerm, setSearchTerm] = useState('');
  const [zoneFilter, setZoneFilter] = useState('');
  const navigate = useNavigate();

  const filtered = CAMPUSES.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesZone = zoneFilter ? c.zone === zoneFilter : true;
    return matchesSearch && matchesZone;
  });

  return (
    <section id="campuses" className="py-32 bg-white relative z-10">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <FadeUp>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mfm-gold/40 bg-mfm-gold/10 text-mfm-gold-dark font-mono text-xs tracking-widest font-bold mb-6">
            CAMPUS DIRECTORY
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 mb-16">
            <h2 className="font-display text-5xl md:text-6xl text-mfm-purple-dark max-w-2xl leading-[1.1]">
              Find your MFMCF campus fellowship
            </h2>
            <p className="text-mfm-stone text-lg max-w-sm">
              140 fellowships across Nigeria's tertiary institutions. Can't find yours? Pioneer one in 14 days.
            </p>
          </div>
        </FadeUp>

        {/* Filters & Map Layout */}
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Area (Filters + Grid) */}
          <div className="lg:col-span-2">
            <FadeUp delay={0.1}>
              <div className="flex flex-col md:flex-row gap-4 mb-10">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-mfm-stone" size={20} />
                  <input 
                    type="text" 
                    placeholder="Search campus, city, state..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-mfm-stone/20 focus:border-mfm-purple focus:ring-1 focus:ring-mfm-purple outline-none transition-all text-mfm-ink"
                  />
                </div>
                <select 
                  value={zoneFilter} 
                  onChange={(e) => setZoneFilter(e.target.value)}
                  className="py-4 px-4 rounded-xl border border-mfm-stone/20 bg-white text-mfm-ink outline-none focus:border-mfm-purple transition-all md:w-48 appearance-none"
                >
                  <option value="">All Geo-Zones</option>
                  <option value="South-West">South-West</option>
                  <option value="South-East">South-East</option>
                  <option value="South-South">South-South</option>
                  <option value="North-West">North-West</option>
                  <option value="North-Central">North-Central</option>
                  <option value="North-East">North-East</option>
                </select>
                <button 
                  onClick={() => { setSearchTerm(''); setZoneFilter(''); }}
                  className="px-6 py-4 rounded-xl text-mfm-purple font-bold hover:bg-mfm-purple/5 transition-colors"
                >
                  Reset
                </button>
              </div>
            </FadeUp>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filtered.map((campus, i) => (
                <FadeUp key={campus.id} delay={0.1 * (i % 4)}>
                  <div 
                    className="group bg-white border border-mfm-stone/10 rounded-[32px] overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col"
                    onClick={() => navigate(`/campus/${campus.id}`)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-mfm-purple-dark/40 z-10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
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
                    <div className="p-6 flex items-center justify-between bg-white z-20 relative">
                      <p className="text-mfm-stone font-medium">{campus.university}</p>
                      <button className="text-mfm-purple-dark font-bold group-hover:text-mfm-purple transition-colors flex items-center gap-1 text-sm">
                        View page <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </FadeUp>
              ))}
              
              {filtered.length === 0 && (
                <div className="col-span-2 text-center py-20 bg-mfm-cream rounded-[32px]">
                  <p className="text-mfm-stone text-lg">No campuses found matching your criteria.</p>
                  <button 
                    onClick={() => { setSearchTerm(''); setZoneFilter(''); }}
                    className="mt-4 text-mfm-purple font-bold"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>

            <div className="mt-10 text-center">
              <button className="border border-mfm-stone/20 text-mfm-purple-dark font-bold px-8 py-4 rounded-full hover:border-mfm-purple transition-colors">
                Load all 140 campuses
              </button>
              <p className="text-mfm-stone font-mono text-xs tracking-widest uppercase mt-4">
                Showing {filtered.length} of 140 campuses
              </p>
            </div>
          </div>

          {/* Right Area (Map & Stats) */}
          <div className="lg:col-span-1">
            <FadeUp delay={0.4} className="sticky top-32">
              <div className="bg-white border border-mfm-stone/10 rounded-[32px] p-8 shadow-sm">
                <h3 className="font-display text-3xl text-mfm-purple-dark mb-2">Nigeria Campus Map</h3>
                <p className="text-mfm-stone mb-8">Tap a dot to jump to a zone fellowship.</p>
                
                {/* Simulated Map Graphic */}
                <div className="bg-[#efeae0] rounded-2xl p-6 aspect-square relative flex items-center justify-center mb-8 overflow-hidden">
                  <div className="absolute w-[80%] h-[60%] bg-[#d7a84a]/20 rounded-full blur-xl animate-pulse"></div>
                  <MapPin size={48} className="text-mfm-gold relative z-10" />
                  
                  {/* Decorative map dots */}
                  <div className="absolute top-[30%] left-[40%] w-3 h-3 bg-mfm-purple rounded-full"></div>
                  <div className="absolute top-[60%] left-[30%] w-3 h-3 bg-mfm-gold rounded-full"></div>
                  <div className="absolute top-[40%] right-[30%] w-3 h-3 bg-mfm-purple rounded-full"></div>
                  <div className="absolute bottom-[40%] right-[40%] w-3 h-3 bg-mfm-gold rounded-full"></div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-mfm-stone/10">
                    <span className="text-mfm-stone">South-West Campuses</span>
                    <span className="font-bold text-mfm-purple-dark">47</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-mfm-stone/10">
                    <span className="text-mfm-stone">South-South / South-East</span>
                    <span className="font-bold text-mfm-purple-dark">38</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-mfm-stone/10">
                    <span className="text-mfm-stone">North-Central / North</span>
                    <span className="font-bold text-mfm-purple-dark">55</span>
                  </div>
                </div>

                <button className="w-full bg-mfm-cream text-mfm-gold-dark border border-mfm-gold/30 font-bold py-4 rounded-xl hover:bg-mfm-gold hover:text-white transition-colors">
                  Don't see your school? Pioneer
                </button>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
