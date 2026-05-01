"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Sports() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-red-500/15 blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-500/15 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan mb-4">
              ◍ 07 / sports core
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95]">
              Weekend <span className="aurora-text">Religion</span>.
            </h2>
            <p className="mt-4 text-white/60 max-w-xl">
              When the laptop closes, two things take over: red jerseys in March and red jumpsuits
              in summer.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* RCB */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative glass rounded-3xl overflow-hidden"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/RCB.jpg"
                alt="Royal Challengers Bengaluru"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/20 border border-red-500/40 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-red-300">
                  IPL Season
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="font-mono text-[10px] uppercase tracking-widest text-red-400 mb-2">
                Cricket / IPL
              </div>
              <h3 className="font-display text-3xl text-white mb-2">RCB Forever.</h3>
              <p className="text-white/70 leading-relaxed">
                Loyal through every collapse, every almost, every &quot;next year is ours.&quot;
                Royal Challengers Bengaluru till the league dissolves. Ee Sala Cup Namde, every
                sala.
              </p>
            </div>
          </motion.div>

          {/* F1 / Max */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative glass rounded-3xl overflow-hidden"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/maxx.avif"
                alt="Max Verstappen"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-blue-300">
                  Lights Out
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="font-mono text-[10px] uppercase tracking-widest text-blue-400 mb-2">
                Formula 1 / Verstappen
              </div>
              <h3 className="font-display text-3xl text-white mb-2">Max Mode.</h3>
              <p className="text-white/70 leading-relaxed">
                Sunday mornings belong to F1. Max Verstappen on lap one, full send. Studying race
                strategy is its own kind of optimization problem. Simply lovely.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
