import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  
  // 3D Tilt Setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-32 pb-20 perspective-[1000px]">
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-8 mt-12 lg:mt-24 w-full max-w-7xl">
        
        {/* Images Composition with Nomio Soft Shadows */}
        <div className="relative mb-12 lg:mb-0 flex justify-center items-center w-full lg:w-1/2 perspective-[1500px]">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="cursor-pointer relative z-40 w-64 md:w-80 aspect-[4/5] rounded-[3rem] p-2 bg-white/50 dark:bg-black/20 shadow-[0_0_80px_rgba(255,183,77,0.6)] dark:shadow-[0_0_120px_rgba(255,200,100,0.4)] border border-white dark:border-saffron-500/50 ring-4 ring-white/50 dark:ring-saffron-400/30 transition-colors duration-500"
          >
            {/* Inner glow / light ring */}
            <div 
              className="absolute inset-0 rounded-[3rem] shadow-[inset_0_0_50px_rgba(255,255,255,0.8)] dark:shadow-[inset_0_0_50px_rgba(255,166,41,0.3)] pointer-events-none z-20"
              style={{ transform: "translateZ(30px)" }}
            ></div>
            
            <div 
               className="w-full h-full rounded-[2.5rem] overflow-hidden bg-white dark:bg-black flex items-center justify-center relative transition-colors duration-500"
               style={{ transform: "translateZ(10px)" }}
            >
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-20 pointer-events-none mix-blend-overlay"
                style={{ transform: "translateZ(80px)" }}
              >
                <span className="text-6xl mb-2 drop-shadow-2xl">🕉️</span>
                <span className="text-slate-100 text-xs font-bold tracking-widest uppercase drop-shadow-lg">|| श्री स्वामी समर्थ ||</span>
              </div>
              
              <img 
                src="/swami-samarth.jpg" 
                alt="Swami Samarth Maharaj" 
                className="w-full h-full object-cover relative z-10"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </motion.div>

          {/* Decorative geometric blobs behind the image */}
          <motion.div 
            className="absolute -right-8 -bottom-8 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute -left-8 -top-8 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60"
            animate={{ scale: [1, 1.1, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Huge Clean Typography Content */}
        <motion.div 
          className="text-center lg:text-left w-full lg:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-saffron-500/10 border border-orange-100 dark:border-saffron-500/20 text-[#FF6B35] dark:text-saffron-400 tracking-widest text-xs font-bold mb-8 uppercase transition-colors duration-500">
            <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse"></span>
            {t.heroTag}
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 text-slate-800 dark:text-white tracking-tight leading-[1.1] transition-colors duration-500">
            {t.heroTitle1} <br className="md:hidden" />
            <span className="text-[#FF6B35] dark:text-saffron-400 relative transition-colors duration-500">
              {t.heroTitle2}
              <svg className="absolute w-full h-4 -bottom-1 left-0 text-[#FF6B35]/20" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-300 font-medium mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-colors duration-500">
            {t.heroSubtitle}, <span className="text-slate-800 dark:text-white font-bold transition-colors duration-500">{t.heroSubtitleHighlight}</span>. Beautifully prepared.
          </p>

          <motion.a 
            href="#booking"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FF6B35] text-white rounded-[100px] font-bold text-xl shadow-[0_10px_30px_rgba(255,107,53,0.3)] hover:shadow-[0_15px_40px_rgba(255,107,53,0.4)] transition-all duration-300"
          >
            {t.heroBtn}
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
