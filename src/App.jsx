import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Menu from './components/Menu';
import ServiceAreas from './components/ServiceAreas';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import { MessageCircle, ChefHat, Sun, Moon } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: -1000,
        opacity: 0,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-[#0a0a0a]"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Saffron Logo Box */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-20 h-20 rounded-[2rem] bg-[#FF6B35] flex items-center justify-center shadow-[0_20px_40px_rgba(255,107,53,0.3)] mb-8"
        >
          <ChefHat className="w-10 h-10 text-white" />
        </motion.div>

        {/* Brand Name Reveal */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white"
          >
            Shravani
          </motion.h1>
        </div>
        
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="text-[0.65rem] md:text-xs tracking-[0.4em] text-[#FF6B35] uppercase font-bold"
          >
            Tiffin Services
          </motion.p>
        </div>

        {/* Spiritual Tagline Fade In */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="absolute -bottom-24 whitespace-nowrap text-slate-400 dark:text-slate-600 font-medium tracking-widest italic"
        >
          "Serving Love, Purity & Tradition"
        </motion.p>
      </div>
      
      {/* Background decoration */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute w-[500px] h-[500px] rounded-full bg-orange-100/50 dark:bg-saffron-500/5 blur-[120px] -z-10" 
      />
    </motion.div>
  );
};

function App() {
  const { lang, setLang } = useLanguage();
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 2.5s
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Interactive Mouse position tracking
  const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  // Simple language switcher UI representation
  const languages = [
    { code: 'mr', label: 'मराठी' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'en', label: 'English' },
  ];

  return (
    <div className="font-sans antialiased text-slate-800 dark:text-gray-100 bg-[#FAFAFA] dark:bg-[#0a0a0a] min-h-screen selection:bg-[#FF6B35] selection:text-white relative overflow-hidden transition-colors duration-500">
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>

      {/* Nomio-Style Abstract Colorful Background Vectors */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-orange-200/50 dark:bg-[#FF6B35]/20 blur-[120px] transition-colors duration-500" />
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-pink-200/50 dark:bg-purple-900/20 blur-[120px] transition-colors duration-500" />
        <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full bg-yellow-100/60 dark:bg-amber-900/10 blur-[150px] transition-colors duration-500" />
        <div className="absolute inset-0 bg-white/40 dark:bg-black/60 backdrop-blur-[2px] transition-colors duration-500" />
      </div>

      {/* Dynamic Mouse Follower Glow (Divine Aura) - desktop only */}
      <motion.div
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full mix-blend-screen pointer-events-none z-0 hidden lg:block outline-none"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 20, mass: 0.8 }}
      >
        <div className="w-full h-full rounded-full bg-[#FF6B35]/30 dark:bg-saffron-500/10 blur-[100px]"></div>
      </motion.div>

      {/* Ambient Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-saffron-500/40 dark:bg-gold/40"
            style={{
              width: Math.random() * 5 + 2 + 'px',
              height: Math.random() * 5 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -150, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Clean Nomio-Style Navbar */}
        <header className="fixed top-0 inset-x-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center bg-white/70 dark:bg-black/40 backdrop-blur-xl border-b border-slate-100 dark:border-white/10 shadow-sm transition-all duration-500">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-2xl bg-[#FF6B35] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white leading-none">Shravani</span>
              <span className="text-[0.65rem] tracking-[0.2em] text-slate-500 dark:text-slate-400 uppercase mt-0.5 font-semibold">Tiffin Services</span>
            </div>
          </div>

          {/* Actions Container */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20 transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Language Switcher */}
            <div className="flex gap-1 bg-slate-100 dark:bg-white/10 p-1.5 rounded-2xl border border-slate-200/50 dark:border-white/5 transition-colors duration-500">
              {languages.map(l => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 ${lang === l.code
                      ? 'bg-white dark:bg-black text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                    }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        <main>
          <Hero />
          <ServiceAreas />
          <Menu />
          <Testimonials />
          <ContactForm />
        </main>

        {/* Sticky WhatsApp Button */}
        <motion.a
          href="https://wa.me/919823784142?text=Hello%20Shravani%20Tiffin%20Services!"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center gap-3 bg-[#25D366] text-white px-5 py-4 md:w-16 md:h-16 md:px-0 rounded-[2rem] shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.4)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.063-.173-.302-.018-.465.13-.613.134-.135.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
          <span className="font-bold px-2 whitespace-nowrap block md:hidden md:group-hover:block transition-all duration-300">
            Chat with us
          </span>
        </motion.a>

        {/* Nomio-Style Footer -> Dark Mode glass styling */}
        <footer className="bg-white dark:bg-black/40 dark:backdrop-blur-xl border-t border-slate-100 dark:border-white/10 pt-24 pb-12 text-center relative mt-16 transition-colors duration-500">
          <div className="container mx-auto px-4 relative flex flex-col items-center">
            <div className="w-16 h-16 rounded-[1.5rem] bg-orange-50 dark:bg-white/10 flex items-center justify-center mb-8 border border-orange-100 dark:border-white/10 transition-colors duration-500">
              <ChefHat className="w-8 h-8 text-[#FF6B35]" />
            </div>

            <h3 className="text-3xl md:text-5xl text-slate-800 dark:text-white font-extrabold mb-6 tracking-tight transition-colors duration-500">
              "अन्नदाता सुखी भव:"
            </h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto mb-12 font-medium text-lg leading-relaxed transition-colors duration-500">
              Serving the warmth of a mother's kitchen and pure blessings. May every meal bring you health, peace, and immense joy.
            </p>

            <div className="w-full h-px bg-slate-100 dark:bg-white/10 mb-8 max-w-4xl transition-colors duration-500" />

            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl px-4 text-slate-400 text-sm font-semibold tracking-wide">
              <p>&copy; {new Date().getFullYear()} Shravani Tiffin Services. All rights reserved.</p>
              <p className="mt-4 md:mt-0">Pune, Maharashtra</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
