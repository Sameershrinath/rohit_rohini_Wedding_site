"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 px-6 relative z-30 bg-navy-950 border-t border-white/5">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Wedding <span className="text-gold-400 italic">Highlights</span>
          </h2>
          <p className="text-slate-400 font-light max-w-lg mx-auto">
            Experience the joy, laughter, and magical moments of our special day in motion.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-video rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl group"
        >
          {!isPlaying ? (
            <div 
              className="absolute inset-0 cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/video.jpg')" }}
              />
              <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/20 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-gold-500/90 hover:bg-gold-400 rounded-full flex items-center justify-center pl-2 shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all duration-300 transform group-hover:scale-110">
                  <Play size={32} className="text-navy-950" fill="currentColor" />
                </div>
              </div>
            </div>
          ) : (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/aeYSKxSHtHg?autoplay=1&rel=0"
              title="Wedding Highlights Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
