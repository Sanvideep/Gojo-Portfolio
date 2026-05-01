"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#raechal", label: "Raechal" },
  { href: "/#xp", label: "XP" },
  { href: "/#stack", label: "Stack" },
  { href: "/#work", label: "Work" },
  { href: "/#play", label: "Fan" },
  { href: "/games", label: "Game" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "py-3 backdrop-blur-xl bg-ink/60 border-b border-white/5" : "py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-pink opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-neon-pink" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition">
            sanvi.exe
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-1 font-mono text-xs uppercase tracking-widest">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 rounded-full text-white/60 hover:text-white hover:bg-white/5 transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-white text-ink px-4 py-2 font-mono text-xs uppercase tracking-widest hover:bg-neon-pink transition"
        >
          Let&apos;s Build →
        </a>
      </nav>
    </motion.header>
  );
}
