"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const C = {
  cyan: "text-neon-cyan",
  white: "text-white",
  dim: "text-white/70",
  lime: "text-neon-lime",
  pink: "text-neon-pink",
} as const;

const lines: { t: string; c: keyof typeof C }[] = [
  { t: "$ whoami", c: "cyan" },
  { t: "Sanvi Deep // Gojo // Founder", c: "white" },
  { t: "$ cat ./brain.log", c: "cyan" },
  { t: "[06:00] Swim. Unblock yesterday.", c: "dim" },
  { t: "[08:00] Gym. Compile body.", c: "dim" },
  { t: "[10:00] Raechal: ship feature, run cold outreach batch.", c: "dim" },
  { t: "[14:00] Edit demo video. Record voiceover.", c: "dim" },
  { t: "[18:00] Sudoku break. Dance break. Diet Coke.", c: "dim" },
  { t: "[22:00] Read. Plan. Close laptop. Lie awake thinking.", c: "dim" },
  { t: "$ ls ~/skills", c: "cyan" },
  { t: "build/  ship/  sell/  edit/  yap/", c: "lime" },
  { t: "$ echo $STATUS", c: "cyan" },
  { t: "Domain Expansion: Deploy.", c: "pink" },
];

export default function Terminal() {
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRevealed((r) => (r >= lines.length ? r : r + 1));
    }, 350);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-32 -right-20 w-[500px] h-[500px] rounded-full bg-neon-cyan/10 blur-[140px]" />

      <div className="relative max-w-5xl mx-auto">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan mb-4">
          ◍ 05 / A Day in the Life
        </div>
        <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] mb-12">
          One <span className="aurora-text">Cycle</span> of Gojo.
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setRevealed(1)}
          className="relative glass rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 0 80px rgba(34,211,238,0.08)" }}
        >
          {/* Terminal chrome */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-white/[0.02]">
            <span className="h-3 w-3 rounded-full bg-neon-pink/80" />
            <span className="h-3 w-3 rounded-full bg-neon-lime/80" />
            <span className="h-3 w-3 rounded-full bg-neon-cyan/80" />
            <span className="ml-3 font-mono text-xs text-white/50">
              gojo@raechal:~$ ./day.sh
            </span>
            <span className="ml-auto font-mono text-[10px] text-white/30 uppercase tracking-widest">
              tty0
            </span>
          </div>

          {/* CRT scanlines overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 3px)",
            }}
          />

          {/* Output */}
          <div className="p-6 md:p-8 font-mono text-sm md:text-base space-y-1.5 min-h-[420px]">
            {lines.slice(0, revealed).map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className={C[l.c]}
              >
                {l.t}
              </motion.div>
            ))}
            {revealed < lines.length && (
              <span className="inline-block w-2 h-4 bg-neon-cyan animate-pulse align-middle" />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
