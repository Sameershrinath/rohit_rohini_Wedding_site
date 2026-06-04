"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";

interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventId: string | null;
  eventTitle: string | null;
}

export default function PasswordModal({ isOpen, onClose, eventId, eventTitle }: PasswordModalProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;

    setLoading(true);
    setError(false);

    try {
      const res = await fetch("/api/verify-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, eventId }),
      });

      const data = await res.json();

      if (res.ok && data.url) {
        window.location.href = data.url;
      } else {
        setError(true);
        setPassword("");
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="pointer-events-auto w-full max-w-md bg-navy-950 border border-white/10 shadow-2xl rounded-2xl overflow-hidden relative"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mb-6 border border-gold-500/20">
                  <Lock className="text-gold-400" size={24} />
                </div>
                
                <h2 className="font-serif text-2xl text-white mb-2">Protected Gallery</h2>
                <p className="text-slate-400 text-sm mb-6">
                  Please enter the family password to view the {eventTitle} gallery.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError(false);
                      }}
                      placeholder="Enter password"
                      className={`w-full bg-black/40 border ${
                        error ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-gold-500/50"
                      } rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 ${
                        error ? "focus:ring-red-500/50" : "focus:ring-gold-500/50"
                      } transition-all`}
                    />
                  </div>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs px-1"
                    >
                      Incorrect password. Please try again.
                    </motion.p>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading || !password}
                    type="submit"
                    className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <>
                        View Gallery
                        <ArrowRight size={18} />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
