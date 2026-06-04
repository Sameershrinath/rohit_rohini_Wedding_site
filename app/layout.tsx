import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wedding Memories | A Celebration of Love",
  description: "Join us in remembering our beautiful wedding celebrations.",
  openGraph: {
    title: "Wedding Memories",
    description: "Join us in remembering our beautiful wedding celebrations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-navy-950 text-slate-200 selection:bg-gold-500/30 font-sans">{children}</body>
    </html>
  );
}
