import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../data';
import { useLanguage } from '../LanguageContext';

export default function Menu() {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('veg');

  const filters = [
    { id: 'veg', labelKey: 'menuVeg' },
    { id: 'non-veg', labelKey: 'menuNonVeg' },
    { id: 'special', labelKey: 'menuSpecial' },
  ];

  const filteredItems = menuItems.filter(item => item.category === activeFilter);

  return (
    <section id="menu" className="py-24 bg-transparent relative z-10 w-full">
      <div className="container mx-auto px-4 w-full max-w-6xl">

        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-800 dark:text-white mb-6 tracking-tight transition-colors duration-500">
            {t.menuTitle} <span className="text-[#FF6B35] dark:text-saffron-400">{t.menuTitleHighlight}</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-300 text-lg md:text-xl font-medium max-w-2xl mx-auto transition-colors duration-500">
            {t.menuSub}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-8 py-3 rounded-[100px] text-sm font-bold tracking-wide transition-all duration-300 ${activeFilter === filter.id
                  ? 'bg-[#FF6B35] dark:bg-saffron-500 text-white shadow-[0_8px_15px_rgba(255,107,53,0.25)] dark:shadow-[0_8px_15px_rgba(255,166,41,0.25)]'
                  : 'bg-white dark:bg-white/10 text-slate-500 dark:text-white hover:bg-slate-50 dark:hover:bg-white/20 hover:text-slate-800 dark:hover:text-white shadow-sm border border-slate-200 dark:border-white/10 backdrop-blur-md'
                }`}
            >
              {t[filter.labelKey]}
            </button>
          ))}
        </div>

        {/* Menu Hero Image (Changes based on selection) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-4xl mx-auto h-72 md:h-[450px] rounded-[2rem] overflow-hidden mb-16 shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-white/10 relative group bg-white dark:bg-black/40 dark:backdrop-blur-xl transition-colors duration-500"
          >
            {/* Soft blurred background layer */}
            <div className="absolute inset-0 z-0 overflow-hidden mix-blend-multiply opacity-50">
              <img
                src={activeFilter === 'veg' ? '/veg_thali.png' : activeFilter === 'non-veg' ? '/non_veg_thali.png' : '/puran_poli.png'}
                alt="blur-bg"
                className="w-full h-full object-cover blur-3xl scale-150 opacity-40"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 dark:from-black/80 via-transparent to-transparent z-10 pointer-events-none transition-colors duration-500" />

            {/* The main un-cropped image */}
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <img
                src={activeFilter === 'veg' ? '/veg_thali.png' : activeFilter === 'non-veg' ? '/non_veg_thali.png' : '/puran_poli.png'}
                alt={`${activeFilter} special`}
                className="w-full h-full object-contain relative z-20 transform group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-xl"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white dark:bg-black/40 dark:backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_30px_rgba(245,135,10,0.05)] border-2 border-slate-200 dark:border-white/20 hover:border-orange-300 dark:hover:border-saffron-400 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_32px_0_rgba(245,135,10,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-col mb-5">
                    <h3 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-500 dark:from-white dark:to-saffron-200 leading-tight pr-2 transition-colors duration-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.05)] dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] flex items-start group-hover:to-slate-600 dark:group-hover:to-saffron-300">
                      <span className="text-[#FF6B35] dark:text-saffron-500 text-xl mr-2 mt-0.5 inline-block transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 drop-shadow-sm">✦</span>
                      <span>{lang === 'mr' ? item.nameMr : lang === 'hi' ? item.nameHi : item.name}</span>
                    </h3>
                    <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#FF6B35] dark:from-saffron-400 to-transparent mt-4 transition-all duration-700 ease-out group-hover:w-2/3 opacity-70 group-hover:opacity-100"></div>
                  </div>

                  <p className="text-slate-500 dark:text-slate-300 font-medium leading-relaxed mb-6 transition-colors duration-500">
                    {lang === 'mr' ? item.descMr : lang === 'hi' ? item.descHi : item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
