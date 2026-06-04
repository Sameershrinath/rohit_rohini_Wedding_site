export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-navy-950 py-12 relative z-30 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="font-serif text-2xl text-white mb-2">
          Wedding <span className="text-gold-400 italic">Memories</span>
        </h2>

        <p className="text-slate-400 text-sm max-w-md font-light mb-8">
          Thank you for being a part of our journey and celebrating these beautiful moments with us.
        </p>

        <div className="text-xs text-slate-500 font-light flex flex-col sm:flex-row items-center gap-2">
          <span>&copy; {new Date().getFullYear()} Made with 🩷 by  <a href="https://www.instagram.com/sameer_shrinath/">SAMEER SHRINATH</a></span>
          <span className="hidden sm:inline">&bull;</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
