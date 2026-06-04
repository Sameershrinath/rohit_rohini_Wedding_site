"use client";

import { motion } from "framer-motion";
import { Images } from "lucide-react";

interface GalleryCardProps {
  title: string;
  date: string;
  count: string;
  description: string;
  image: string;
  onClick: () => void;
  index: number;
}

export default function GalleryCard({ title, date, count, description, image, onClick, index }: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl glass aspect-[4/5] sm:aspect-square md:aspect-[3/4] flex flex-col justify-end p-6 border border-white/10 shadow-2xl transition-all duration-500 hover:border-gold-500/50 hover:shadow-gold-500/20"
    >
      {/* Background Image with Zoom Effect */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url('${image}')` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-20 flex flex-col gap-3 transform transition-transform duration-500 group-hover:-translate-y-2">
        <div className="flex items-center justify-between">
          <span className="text-gold-400 font-medium tracking-wider text-sm uppercase">{date}</span>
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            <Images size={14} className="text-gold-300" />
            <span className="text-xs text-white font-medium">{count} Photos</span>
          </div>
        </div>

        <h3 className="font-serif text-3xl text-white mt-2 group-hover:text-gold-300 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-slate-300 font-light text-sm line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>

        {/* Animated indicator */}
        <div className="w-0 h-[2px] bg-gold-400 mt-4 group-hover:w-full transition-all duration-500 ease-out" />
      </div>
    </motion.div>
  );
}
