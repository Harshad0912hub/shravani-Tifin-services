import { useState } from 'react';
import { motion } from 'framer-motion';
import { serviceAreas } from '../data';
import { Send, Phone } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    area: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.area) return;

    const text = `*New Tiffin Request*%0A%0A*Name:* ${formData.name}%0A*Mobile:* ${formData.mobile}%0A*Area:* ${formData.area}${formData.message ? `%0A*Message:* ${formData.message}` : ''}`;
    const whatsappUrl = `https://wa.me/919823784142?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-transparent relative">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-saffron-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10 flex flex-col md:flex-row justify-between items-center gap-16 lg:gap-32">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-5/12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-500">
            {t.contactTitle} <br />
            <span className="text-gradient hover:opacity-90">{t.contactTitleHighlight}</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-200 text-lg mb-10 max-w-md transition-colors duration-500">
            {t.contactSub}
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 glass p-4 rounded-xl max-w-sm border-slate-200 dark:border-white/5 transition-colors duration-500">
              <div className="w-12 h-12 bg-saffron-500/10 dark:bg-saffron-500/20 rounded-full flex items-center justify-center text-saffron-500 dark:text-saffron-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-300 font-medium transition-colors duration-500">{t.primaryContact}</p>
                <p className="text-lg font-semibold text-slate-800 dark:text-white transition-colors duration-500">+91 9823784142</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 glass p-4 rounded-xl max-w-sm border-slate-200 dark:border-white/5 transition-colors duration-500">
              <div className="w-12 h-12 bg-gold/10 dark:bg-gold/20 rounded-full flex items-center justify-center text-gold-dark dark:text-gold">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-300 font-medium transition-colors duration-500">{t.alternateContact}</p>
                <p className="text-lg font-semibold text-slate-800 dark:text-white transition-colors duration-500">+91 9823964030</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-6/12"
        >
          <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl relative overflow-hidden transition-all duration-500 border-slate-200 dark:border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-saffron-400 to-gold" />
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2 transition-colors duration-500">{t.contactName}</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-saffron-400 dark:focus:border-saffron-500 focus:ring-1 focus:ring-saffron-400 dark:focus:ring-saffron-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2 transition-colors duration-500">{t.contactMobile}</label>
                <input 
                  type="tel" 
                  name="mobile" 
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full bg-white/50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-saffron-400 dark:focus:border-saffron-500 focus:ring-1 focus:ring-saffron-400 dark:focus:ring-saffron-500 transition-colors"
                  placeholder="+91 00000 00000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2 transition-colors duration-500">{t.contactArea}</label>
                <select 
                  name="area" 
                  required
                  value={formData.area}
                  onChange={handleChange}
                  className="w-full bg-white/50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-saffron-400 dark:focus:border-saffron-500 focus:ring-1 focus:ring-saffron-400 dark:focus:ring-saffron-500 transition-colors appearance-none"
                >
                  <option value="" disabled className="dark:bg-slate-900 bg-white">{t.contactSelectArea}</option>
                  {serviceAreas.map(area => (
                    <option key={area} value={area} className="dark:bg-slate-900 bg-white">{area}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2 transition-colors duration-500">{t.contactMessage}</label>
                <textarea 
                  name="message" 
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-saffron-400 dark:focus:border-saffron-500 focus:ring-1 focus:ring-saffron-400 dark:focus:ring-saffron-500 transition-colors"
                  placeholder="Any special requests?"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-saffron-400 to-saffron-500 dark:from-saffron-500 dark:to-saffron-600 hover:from-saffron-500 hover:to-saffron-600 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(255,195,92,0.3)] dark:shadow-[0_0_20px_rgba(245,135,10,0.3)] transition-all"
              >
                <Send className="w-5 h-5" />
                {t.contactBtn}
              </motion.button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
