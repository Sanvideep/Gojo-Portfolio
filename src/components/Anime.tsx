"use client";

import { motion } from "framer-motion";

const stanList = [
  { name: "Gojo Satoru", from: "Jujutsu Kaisen", emoji: "🕶️", color: "from-neon-violet to-neon-cyan" },
  { name: "Naruto", from: "Naruto", emoji: "🍥", color: "from-orange-400 to-neon-pink" },
  { name: "Hinata", from: "Naruto", emoji: "🌸", color: "from-neon-pink to-neon-violet" },
  { name: "Denji", from: "Chainsaw Man", emoji: "🪚", color: "from-yellow-400 to-neon-pink" },
  { name: "Asta", from: "Black Clover", emoji: "📖", color: "from-neon-lime to-neon-cyan" },
  { name: "Mikey", from: "Tokyo Revengers", emoji: "🐉", color: "from-neon-violet to-neon-pink" },
  { name: "Kaneki", from: "Tokyo Ghoul", emoji: "🎭", color: "from-white to-neon-violet" },
  { name: "Hinata Shoyo", from: "Haikyuu", emoji: "🏐", color: "from-orange-400 to-neon-lime" },
];

const STATUS_COLOR = {
  pink: "text-neon-pink",
  cyan: "text-neon-cyan",
  violet: "text-neon-violet",
  lime: "text-neon-lime",
} as const;

const watching: { title: string; status: string; color: keyof typeof STATUS_COLOR }[] = [
  { title: "Hell's Paradise", status: "Now Watching", color: "pink" },
  { title: "Naruto", status: "All-Time Favourite", color: "cyan" },
  { title: "Jujutsu Kaisen", status: "Rewatch Loop", color: "violet" },
  { title: "Tokyo Revengers", status: "Completed", color: "lime" },
];

const reads: { title: string; status: string; color: keyof typeof STATUS_COLOR }[] = [
  { title: "The Inheritance Games", status: "Currently Reading", color: "cyan" },
  { title: "Fourth Wing", status: "Favourite Series", color: "pink" },
  { title: "Rina Kent", status: "Favourite Author", color: "violet" },
];

const music = [
  { tag: "Pritam", note: "Bollywood Bangers Forever" },
  { tag: "Nusrat Fateh Ali Khan", note: "Soul Frequency" },
  { tag: "Sunidhi Chauhan", note: "Item Song Royalty" },
  { tag: "BTS", note: "The OG Loop" },
  { tag: "The Weeknd", note: "After Hours Mode" },
  { tag: "Chase Atlantic", note: "Midnight Code Sessions" },
  { tag: "2000s Romantic", note: "Core Memory Unlocks" },
];

export default function Anime() {
  return (
    <section id="play" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-neon-violet/15 blur-[140px]" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-neon-pink/15 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-neon-pink mb-4">
              ◍ 06 / Fan Core
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95]">
              The <span className="aurora-text">Stan</span> Wing.
            </h2>
            <p className="mt-4 text-white/60 max-w-xl">
              This is the part of the brain that powers the rest. Anime, books, music. Fuel for
              founder mode.
            </p>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 max-w-xs">
            // Ref: gojumon.carrd.co
            <br />
            // Domain Expansion: Limitless.
          </div>
        </div>

        {/* Stan list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-neon-violet mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-neon-violet/50" />
            Stan List
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stanList.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                whileHover={{ y: -6, rotate: -1 }}
                className="group glass relative rounded-2xl p-5 overflow-hidden"
              >
                <div
                  className={`absolute -inset-px bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-25 blur-xl transition duration-500`}
                />
                <div className="relative">
                  <div className="text-4xl mb-3" style={{ filter: "drop-shadow(0 0 12px rgba(255,255,255,0.2))" }}>
                    {s.emoji}
                  </div>
                  <div className="font-display text-xl text-white">{s.name}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mt-1">
                    {s.from}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Watching */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-neon-cyan mb-1">
                  Watching Log
                </div>
                <h3 className="font-display text-3xl text-white">Anime Queue</h3>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                [{String(watching.length).padStart(2, "0")}]
              </div>
            </div>
            <div className="space-y-2">
              {watching.map((w) => (
                <div
                  key={w.title}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition"
                >
                  <span className="font-display text-lg text-white">{w.title}</span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-widest ${STATUS_COLOR[w.color]}`}
                  >
                    {w.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Reads */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-neon-pink mb-1">
                  Reading Log
                </div>
                <h3 className="font-display text-3xl text-white">On the Shelf</h3>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                [{String(reads.length).padStart(2, "0")}]
              </div>
            </div>
            <div className="space-y-2">
              {reads.map((b) => (
                <div
                  key={b.title}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition"
                >
                  <span className="font-display text-lg text-white">{b.title}</span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-widest ${STATUS_COLOR[b.color]}`}
                  >
                    {b.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Music */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 glass rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-neon-violet/15 blur-[100px]" />
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-neon-violet mb-1 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon-violet animate-pulse" />
                    Now Playing
                  </div>
                  <h3 className="font-display text-3xl text-white">The Playlist</h3>
                </div>
                <div className="hidden md:flex items-end gap-1 h-8">
                  {[6, 12, 18, 24, 16, 10, 22, 14, 8].map((h, i) => (
                    <span
                      key={i}
                      className="w-1 bg-neon-pink rounded-full animate-pulse"
                      style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {music.map((m) => (
                  <div
                    key={m.tag}
                    className="group flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-neon-pink/40 hover:bg-neon-pink/10 transition"
                  >
                    <span className="font-display text-base text-white">{m.tag}</span>
                    <span className="font-mono text-[10px] text-white/40">{m.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Off-screen vibes (extracurriculars + dance flex) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid md:grid-cols-3 gap-4"
        >
          <div className="glass rounded-2xl p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-neon-lime mb-2">
              Dance . Certified
            </div>
            <div className="font-display text-2xl text-white leading-tight">
              National Hip-Hop + State Contemporary / Jazz
            </div>
            <div className="text-white/50 text-sm mt-2">100+ Competition Wins</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-neon-cyan mb-2">
              Hackathon . SIH
            </div>
            <div className="font-display text-2xl text-white leading-tight">
              Smart India Hackathon Finalist
            </div>
            <div className="text-white/50 text-sm mt-2">Team Lead . Virtual Herbal Garden</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-neon-pink mb-2">
              Service . Shubhakshika NGO
            </div>
            <div className="font-display text-2xl text-white leading-tight">
              Part-Time Teacher
            </div>
            <div className="text-white/50 text-sm mt-2">Classes 5, 6, 8 . Underprivileged Kids</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
