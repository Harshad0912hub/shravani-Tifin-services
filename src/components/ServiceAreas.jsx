import { motion } from 'framer-motion';
import { serviceAreas } from '../data';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function ServiceAreas() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4 w-full max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 dark:text-white tracking-tight transition-colors duration-500"
          >
            {t.areaTitle} <span className="text-[#FF6B35] dark:text-saffron-400 relative transition-colors duration-500">
              {t.areaTitleHighlight}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FF6B35]/20" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 dark:text-slate-300 max-w-2xl mx-auto text-lg font-medium transition-colors duration-500"
          >
            {t.areaSub}
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {serviceAreas.map((area, index) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white dark:bg-black/40 dark:backdrop-blur-xl px-8 py-6 rounded-[2rem] flex items-center gap-4 hover:border-orange-200 dark:hover:border-white/20 transition-all duration-500 cursor-default shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-white/10"
            >
              <div className="w-14 h-14 rounded-[1rem] bg-orange-50 dark:bg-white/5 flex items-center justify-center text-[#FF6B35] dark:text-saffron-400 transition-colors duration-500">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white transition-colors duration-500">{area}</h3>
                <p className="text-sm text-slate-400 dark:text-slate-500 font-semibold tracking-wide uppercase mt-1 transition-colors duration-500">Pune Region</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
