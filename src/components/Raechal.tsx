"use client";

import { motion } from "framer-motion";

const beats = [
  { k: "What", v: "Autonomous growth engine for B2B teams." },
  { k: "Who", v: "Founders and sales orgs tired of busy work." },
  { k: "Why", v: "AI that prospects, qualifies, and engages 24/7." },
  { k: "Now", v: "Shipping. Selling. Yapping about it on LinkedIn." },
];

export default function Raechal() {
  return (
    <section id="raechal" className="relative py-32 px-6 overflow-hidden">
      {/* Cyberpunk background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-neon-pink/15 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-10 items-start"
        >
          <div className="lg:col-span-5">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-neon-pink mb-4">
              ◍ 02.5 / Current Obsession
            </div>
            <div className="relative inline-block mb-6">
              <span className="absolute -inset-2 bg-neon-pink/20 blur-2xl rounded-full" />
              <span className="relative font-mono text-[10px] uppercase tracking-[0.3em] px-3 py-1.5 rounded-full border border-neon-pink/50 bg-ink text-neon-pink">
                ◉ Live Build
              </span>
            </div>
            <h2 className="font-display text-6xl md:text-8xl font-bold leading-[0.9]">
              <span className="aurora-text">Raechal</span>
              <br />
              AI.
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Flagship project, full-time job, pet obsession. Building the autonomous growth layer
              for teams who do not want to hire another SDR. Also doing my own marketing and sales,
              because founder-led GTM is undefeated.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.raechal.ai"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-neon-pink text-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest hover:bg-white transition"
              >
                Visit Raechal AI →
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-mono text-xs uppercase tracking-widest hover:border-neon-cyan transition"
              >
                Book a Demo
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {beats.map((b, i) => (
              <motion.div
                key={b.k}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative glass rounded-2xl p-6 flex items-center gap-6 hover:border-neon-pink/40 transition"
              >
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon-pink w-20 shrink-0">
                  {b.k} //
                </span>
                <span className="font-display text-xl md:text-2xl text-white/90">
                  {b.v}
                </span>
                <span className="ml-auto text-white/20 group-hover:text-neon-pink group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </motion.div>
            ))}

            {/* Selling/marketing meta block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative glass rounded-2xl p-6 mt-6 border-neon-cyan/30"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-neon-cyan mb-3">
                / Right Now
              </div>
              <p className="text-white/80 leading-relaxed">
                Learning sales by doing sales. Cold outreach, founder content, live demos, the whole
                rodeo. If you are a founder who needs growth on autopilot, slide into my DMs.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
