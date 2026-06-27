import { BookOpen, Calendar, Radio, ArrowRight } from 'lucide-react';
import { FadeUp } from './animations';

export default function Resources() {
  const resources = [
    {
      title: "Sermon Library",
      desc: "Sunday fire messages, midweek teachings. Audio & notes.",
      link: "Browse sermons",
      icon: <BookOpen className="text-mfm-gold-dark" size={24} />
    },
    {
      title: "Daily Devotional",
      desc: "Campus Fire Devotional. 5-min read. New every 5AM.",
      link: "Read today",
      icon: <Calendar className="text-mfm-gold-dark" size={24} />
    },
    {
      title: "MFMCF Radio",
      desc: "24/7 worship, prayer rain replays, campus testimonies.",
      link: "Listen live",
      icon: <Radio className="text-mfm-gold-dark" size={24} />
    }
  ];

  return (
    <section id="resources" className="py-24 bg-[#f9f5ef] dark:bg-[#1a0f26] transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((item, i) => (
            <FadeUp key={i} delay={0.1 * i} className="h-full">
              <div className="bg-white dark:bg-white/5 rounded-[40px] p-10 shadow-sm border border-mfm-stone/10 dark:border-white/10 h-full flex flex-col group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
                
                {/* Icon Wrapper */}
                <div className="w-16 h-16 rounded-2xl border border-[#e8d0a3] bg-[#fbf4e6] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                
                <h3 className="font-display text-3xl text-mfm-purple-dark dark:text-mfm-cream mb-4 group-hover:text-mfm-purple transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-mfm-stone dark:text-mfm-stone/80 text-lg leading-relaxed mb-12 flex-1">
                  {item.desc}
                </p>
                
                <a href="#" className="inline-flex items-center gap-2 font-bold text-mfm-purple-dark dark:text-mfm-gold group-hover:text-mfm-purple transition-colors">
                  {item.link} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
