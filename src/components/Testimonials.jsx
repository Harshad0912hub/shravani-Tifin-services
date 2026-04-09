import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Send } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { supabase } from '../supabaseClient';

export default function Testimonials() {
  const { t } = useLanguage();
  
  // Default testimonials (used if DB is empty)
  const defaultTestimonials = [
    {
      id: 4,
      name: "Priya Sharma",
      text: "The everyday tiffin is consistently fresh and delicious. It has made my work-from-home life so much easier and healthier!",
      area: "Kothrud",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Deshmukh",
      text: "Best non-veg Sunday special in Pune. The spicy chicken perfectly balances heat and traditional flavor.",
      area: "Kasba Peth",
      rating: 5,
    },
    {
      id: 2,
      name: "Sneha Kulkarni",
      text: "I booked their special festival meal for a family get-together. The puran poli was absolutely divine!",
      area: "Narayan Peth",
      rating: 5,
    },
    {
      id: 1,
      name: "Ramesh Joshi",
      text: "The varan bhaat feels exactly like what my mother used to make. Pure, hygienic, and full of blessings.",
      area: "Sadashiv Peth",
      rating: 5,
    }
  ];

  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [formData, setFormData] = useState({ name: '', text: '', area: '', rating: 5 });
  const [loading, setLoading] = useState(true);

  // Fetch from Supabase
  useEffect(() => {
    fetchTestimonials();
  }, []);

  async function fetchTestimonials() {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      if (data && data.length > 0) {
        setTestimonials(data);
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;

    try {
      const { data, error } = await supabase
        .from('testimonials')
        .insert([
          { 
            name: formData.name, 
            text: formData.text, 
            area: formData.area || "Pune", 
            rating: formData.rating 
          }
        ])
        .select();

      if (error) throw error;

      // Update UI immediately
      if (data) {
        setTestimonials([data[0], ...testimonials]);
      }
      
      // Reset form
      setFormData({ name: '', text: '', area: '', rating: 5 });
    } catch (error) {
      console.error('Error adding testimonial:', error.message);
      alert("Something went wrong. Please try again!");
    }
  };

  // Display exactly 4 comments (forms a neat 2x2 grid)
  const recentFourComments = testimonials.slice(0, 4);

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 transition-colors duration-500"
          >
            Divine <span className="text-gradient">Testimonials</span>
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-300 text-lg transition-colors duration-500">Hear what our beloved family has to say</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
          
          {/* Add a Comment Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 glass p-8 rounded-3xl border-slate-200 dark:border-white/10 transition-colors duration-500"
          >
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 transition-colors duration-500">Leave a Blessing</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Star Rating Select UI */}
              <div className="flex flex-col mb-2">
                <label className="text-sm text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-500">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <Star 
                      key={num}
                      onClick={() => setFormData({ ...formData, rating: num })}
                      className={`w-7 h-7 cursor-pointer transition-colors ${
                        formData.rating >= num ? 'fill-gold text-gold' : 'text-slate-600'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Your Area (e.g. Sadashiv Peth)" 
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full bg-white/50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Share your experience..." 
                  required
                  rows="3"
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  className="w-full bg-white/50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-gold transition-colors"
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gold/20 hover:bg-gold/30 text-gold font-medium py-3 rounded-xl border border-gold/30 transition-all flex items-center justify-center gap-2"
                type="submit"
              >
                <Send className="w-4 h-4" /> Post Comment
              </motion.button>
            </form>
          </motion.div>

          {/* Display Testimonials */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentFourComments.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="glass p-6 rounded-3xl w-full group hover:-translate-y-2 hover:border-saffron-400/30 border border-transparent dark:border-white/10 transition-all duration-300 flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < (test.rating || 5) ? 'fill-gold text-gold' : 'text-slate-300 dark:text-slate-600'}`} 
                    />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-200 italic mb-6 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-sm md:text-base line-clamp-4">
                  "{test.text}"
                </p>
                <div className="border-t border-slate-200 dark:border-white/10 pt-4 mt-auto transition-colors duration-500">
                  <p className="text-slate-800 dark:text-white font-bold transition-colors duration-500">{test.name}</p>
                  <p className="text-saffron-500 dark:text-saffron-400 text-xs mt-1 transition-colors duration-500">{test.area}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
