"use client";

import { motion } from "framer-motion";

const groups = [
  {
    title: "Languages",
    color: "from-neon-pink to-neon-violet",
    items: ["Python", "SQL", "C / C++", "TypeScript", "JavaScript"],
  },
  {
    title: "Data + ML / DL",
    color: "from-neon-lime to-neon-cyan",
    items: [
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "Pandas",
      "NumPy",
      "PySpark",
      "Matplotlib",
      "Seaborn",
      "Deep Learning",
    ],
  },
  {
    title: "Frontend",
    color: "from-neon-pink to-neon-cyan",
    items: ["Next.js", "React", "Tailwind", "Framer Motion", "shadcn/ui"],
  },
  {
    title: "Backend",
    color: "from-neon-cyan to-neon-violet",
    items: ["FastAPI", "Node", "Express", "Postgres", "Supabase", "Redis"],
  },
  {
    title: "AI Workflows",
    color: "from-neon-violet to-neon-pink",
    items: ["OpenAI", "Anthropic", "LangChain", "RAG", "Agents", "n8n"],
  },
  {
    title: "Data Viz + Tools",
    color: "from-neon-cyan to-neon-pink",
    items: ["Power BI", "Excel", "JIRA", "ClickUp", "CargoWise"],
  },
  {
    title: "Video + Graphics",
    color: "from-neon-pink to-neon-cyan",
    items: ["After Effects", "Premiere Pro", "DaVinci Resolve", "CapCut", "Photoshop", "Canva"],
  },
  {
    title: "Growth + GTM",
    color: "from-neon-lime to-neon-pink",
    items: ["Cold Outreach", "Founder Content", "LinkedIn", "Live Demos", "ICP Ops"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan mb-4">
              ◍ 02 / Stack
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95]">
              Tools of the <span className="aurora-text">Trade</span>.
            </h2>
          </div>
          <p className="text-white/60 max-w-md font-mono text-sm">
            // Not a fanboy of any framework. Pick the boring tool that ships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g, idx) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="glass rounded-3xl p-8 group relative overflow-hidden"
            >
              <div
                className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${g.color} opacity-0 group-hover:opacity-20 transition duration-700 blur-2xl pointer-events-none`}
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-3xl text-white">{g.title}</h3>
                  <span className="font-mono text-xs text-white/40">
                    [{String(g.items.length).padStart(2, "0")}]
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 font-mono hover:bg-white/10 hover:border-white/20 transition cursor-default"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
