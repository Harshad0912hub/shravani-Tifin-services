import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1626200419109-3221ac077c57?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1589301760014-a929f539b1a5?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1662057393282-53def79402c5?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80&w=600",
  ];

  return (
    <section className="py-24 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            A Glimpse of <span className="text-gradient">Our Kitchen</span>
          </motion.h2>
          <p className="text-slate-300">Fresh ingredients, cooked daily with pure devotion.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 max-w-5xl mx-auto">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group aspect-square overflow-hidden rounded-xl md:rounded-2xl cursor-pointer"
            >
              <div className="absolute inset-0 bg-saffron-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img 
                src={img} 
                alt="Delicious food gallery image" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
