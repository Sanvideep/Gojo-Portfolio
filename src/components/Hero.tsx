"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import FloatingScene from "./FloatingScene";

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const tx = useTransform(sx, (v) => v * 30);
  const ty = useTransform(sy, (v) => v * 30);
  const tx2 = useTransform(sx, (v) => v * -50);
  const ty2 = useTransform(sy, (v) => v * -50);

  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-US", {
          hour12: false,
          timeZone: "Asia/Kolkata",
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) - 0.5);
      my.set((e.clientY / window.innerHeight) - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden flex items-center">
      <div className="absolute inset-0 grid-bg" />

      <motion.div
        style={{ x: tx, y: ty }}
        className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full bg-neon-violet/30 blur-[120px] animate-blob"
      />
      <motion.div
        style={{ x: tx2, y: ty2 }}
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-neon-pink/25 blur-[120px] animate-blob"
      />
      <motion.div
        style={{ x: tx, y: ty2 }}
        className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-neon-cyan/20 blur-[120px] animate-blob"
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="scanline absolute inset-x-0 h-32 animate-scan" />
      </div>

      <FloatingScene />

      {/* CRT vignette */}
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        {/* Top HUD bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 mb-8"
        >
          <span className="px-2.5 py-1 rounded-full border border-neon-pink/40 bg-neon-pink/10 text-neon-pink">
            ◉ REC
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent" />
          <span>SYS / Online</span>
          <span className="text-white/30">|</span>
          <span>New Delhi {time || "00:00:00"}</span>
          <span className="text-white/30">|</span>
          <span>v1.0</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-display font-bold leading-[0.88] tracking-tight"
        >
          <motion.span
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[clamp(3rem,9vw,9rem)]"
          >
            I&apos;m Sanvi.
          </motion.span>
          <motion.span
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[clamp(3rem,9vw,9rem)] aurora-text glitch"
            data-text="Call me Gojo."
          >
            Call me Gojo.
          </motion.span>
          <motion.span
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[clamp(2rem,6vw,5.5rem)] text-white/40"
          >
            Biotech ↘ Code ↘ AI.
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl"
        >
          <div className="space-y-5">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              CEO and brains behind{" "}
              <span className="text-white font-semibold">Raechal AI</span>. Biotech Engineer at DTU
              (9.19 CGPA, Class of &apos;26) who pivoted to building software full time. Started
              as a Marketing Analyst, grew into Data Analyst and Business Analyst roles, then
              built Data Scientist muscle through ML and DL projects.
            </p>
            <p className="text-base md:text-lg text-white/60 leading-relaxed">
              Now I ship fast, break loops, automate the boring, and learn sales by doing sales.
              Naruto fan. National Hip-Hop dancer. RCB and Max Verstappen on weekends.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Founder",
                "Full Stack Dev",
                "Data Scientist",
                "Business Analyst",
                "Video Editor",
              ].map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 rounded-full border border-white/15 bg-white/[0.03] font-mono text-[10px] uppercase tracking-widest text-white/70"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {/* Portrait card */}
            <motion.div
              whileHover={{ rotate: 1, scale: 1.02 }}
              className="relative glass rounded-2xl overflow-hidden border-neon-pink/30 group"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/IMG_8869.jpg"
                  alt="Sanvi Deep"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-ink/70 border border-white/10 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon-lime animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/80">
                    Live / Online
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <div className="font-display text-xl text-white leading-tight">Sanvi Deep</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-white/60">
                      aka Gojo / New Delhi
                    </div>
                  </div>
                  <Image
                    src="/Gojo.png"
                    alt="Gojo"
                    width={48}
                    height={48}
                    className="rounded-full border border-neon-violet/40 bg-ink/60 p-0.5"
                  />
                </div>
              </div>
            </motion.div>

            {/* Identity terminal */}
            <div className="relative glass rounded-2xl p-5 font-mono text-xs space-y-2 border-neon-cyan/30">
              <div className="flex items-center gap-2 text-neon-cyan/80 pb-2 border-b border-white/10">
                <span className="h-2 w-2 rounded-full bg-neon-pink" />
                <span className="h-2 w-2 rounded-full bg-neon-lime" />
                <span className="h-2 w-2 rounded-full bg-neon-cyan" />
                <span className="ml-2">~/sanvi/identity.json</span>
              </div>
              <div className="text-white/70">
                <span className="text-neon-pink">&quot;name&quot;</span>:{" "}
                <span className="text-neon-lime">&quot;Sanvi Deep / Gojo&quot;</span>,
              </div>
              <div className="text-white/70">
                <span className="text-neon-pink">&quot;edu&quot;</span>:{" "}
                <span className="text-neon-lime">&quot;DTU Biotech, 9.19 CGPA&quot;</span>,
              </div>
              <div className="text-white/70">
                <span className="text-neon-pink">&quot;roles&quot;</span>:{" "}
                <span className="text-neon-lime">&quot;CEO, Dev, Data Scientist, Editor&quot;</span>,
              </div>
              <div className="text-white/70">
                <span className="text-neon-pink">&quot;stack&quot;</span>:{" "}
                <span className="text-neon-lime">&quot;Python, SQL, ML/DL, TS, Next&quot;</span>,
              </div>
              <div className="text-white/70">
                <span className="text-neon-pink">&quot;vibes&quot;</span>:{" "}
                <span className="text-neon-lime">&quot;introvert.exe + Diet Coke&quot;</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group relative inline-flex items-center gap-3 rounded-full bg-white text-ink px-6 py-3 font-mono text-sm uppercase tracking-widest hover:bg-neon-pink transition overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-neon-pink via-neon-violet to-neon-cyan opacity-0 group-hover:opacity-100 transition" />
            <span className="relative">See the Work</span>
            <span className="relative inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="/games"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 font-mono text-sm uppercase tracking-widest hover:bg-white/5 hover:border-neon-cyan transition"
          >
            Play a Game
          </a>
          <a
            href="#raechal"
            className="inline-flex items-center gap-2 rounded-full bg-neon-pink/10 border border-neon-pink/40 text-neon-pink px-5 py-3 font-mono text-xs uppercase tracking-widest hover:bg-neon-pink/20 transition"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-neon-pink animate-pulse" />
            Raechal AI is Hiring Vibes
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-6 right-6 max-w-7xl mx-auto flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-white/40"
        >
          <span>↳ Scroll to Decode</span>
          <span className="hidden md:inline">
            Lat: 28.6° / Lng: 77.2° / Status: Caffeinated.exe
          </span>
        </motion.div>
      </div>
    </section>
  );
}
