"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import GalleryCard from "@/components/GalleryCard";
import PasswordModal from "@/components/PasswordModal";
import Footer from "@/components/Footer";

const EVENTS = [
  {
    id: "haldi",
    title: "Haldi Ceremony",
    date: "October 10, 2024",
    count: 142,
    description: "A vibrant morning filled with yellow hues, laughter, and traditional blessings.",
    image: "/images/engagement.JPG",
  },
  {
    id: "wedding",
    title: "Wedding Ceremony",
    date: "October 11, 2024",
    count: 350,
    description: "The beautiful moment we tied the knot surrounded by our loved ones.",
    image: "/images/marriage.JPG",
  },
  {
    id: "reception",
    title: "Grand Reception",
    date: "October 12, 2024",
    count: 215,
    description: "An evening of dining, dancing, and celebrating our new beginning.",
    image: "/images/reception.JPG",
  },
];

export default function Home() {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const selectedEvent = EVENTS.find((e) => e.id === selectedEventId) || null;

  return (
    <main className="flex-1 w-full bg-navy-950">
      <HeroSection />

      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
              Our <span className="text-gold-400 italic">Galleries</span>
            </h2>
            <p className="text-slate-400 font-light max-w-lg mx-auto">
              Select an event below to view the memories. You will need the family password to access the galleries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
            {EVENTS.map((event, index) => (
              <GalleryCard
                key={event.id}
                title={event.title}
                date={event.date}
                count={event.count}
                description={event.description}
                image={event.image}
                index={index}
                onClick={() => setSelectedEventId(event.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <PasswordModal
        isOpen={!!selectedEventId}
        onClose={() => setSelectedEventId(null)}
        eventId={selectedEventId}
        eventTitle={selectedEvent?.title || null}
      />
    </main>
  );
}
