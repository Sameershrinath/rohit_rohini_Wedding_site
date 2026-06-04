"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

const TOP_PICKS = [
  "/images/top_picks/DSC00343.webp",
  "/images/top_picks/DSC00517.webp",
  "/images/top_picks/DSC00566.webp",
  "/images/top_picks/DSC00656.webp",
  "/images/top_picks/DSC00898.webp",
  "/images/top_picks/DSC_8282.webp",
  "/images/top_picks/DSC_8305.webp",
  "/images/top_picks/DSC_9022.webp",
  "/images/top_picks/DSC_9027.webp",
  "/images/top_picks/DSC_9037.webp",
];

// Bento grid layout classes for exactly 10 items
const bentoClasses = [
  "col-span-2 row-span-2 md:col-span-2 md:row-span-2", // 1 (Large)
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1", // 2
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1", // 3
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1", // 4
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1", // 5
  "col-span-2 row-span-2 md:col-span-2 md:row-span-2", // 6 (Large)
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1", // 7
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1", // 8
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1", // 9
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1", // 10
];

export default function TopPicksSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-playing slideshow
  useEffect(() => {
    if (isModalOpen) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TOP_PICKS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isModalOpen]);

  return (
    <>
      <section className="py-24 px-6 relative z-30 bg-navy-950">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Our <span className="text-gold-400 italic">Top Picks</span>
            </h2>
            <p className="text-slate-400 font-light max-w-lg mx-auto">
              A curated selection of our absolute favorite moments.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[400px] mx-auto aspect-[3/4] rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl group cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${TOP_PICKS[currentIndex]}')` }}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-navy-950/40 transition-colors duration-500" />
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/50 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <Maximize2 size={20} className="text-gold-400" />
                <span className="text-white font-medium text-sm tracking-wide uppercase">View Gallery</span>
              </div>
            </div>
            
            {/* Slideshow indicators */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10 px-4 flex-wrap">
              {TOP_PICKS.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-6 bg-gold-400' : 'w-1.5 bg-white/40'}`} 
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Bento Gallery Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-950/95 backdrop-blur-xl overflow-y-auto"
          >
            <div className="min-h-screen px-4 py-12 md:py-24">
              <button
                onClick={() => setIsModalOpen(false)}
                className="fixed top-6 right-6 md:top-10 md:right-10 z-[110] bg-black/50 backdrop-blur-md border border-white/20 text-white p-3 rounded-full hover:bg-gold-500 hover:text-navy-950 transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
                    Top <span className="text-gold-400 italic">Picks</span>
                  </h2>
                </div>
                
                {/* Bento Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {TOP_PICKS.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className={`relative group rounded-2xl overflow-hidden glass border border-white/10 aspect-[3/4] ${bentoClasses[idx]}`}
                    >
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${img}')` }}
                      />
                      <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/30 transition-colors duration-500" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
