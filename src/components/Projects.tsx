"use client";

import { motion } from "framer-motion";

const projects = [
  {
    n: "01",
    title: "Raechal AI",
    tag: "Founder . CEO",
    href: "https://www.raechal.ai",
    desc: "Autonomous growth engine for B2B teams. Agentic workflows that prospect, qualify, and engage at scale. Backend in Python, frontend in Next.js. Founder-led GTM end to end.",
    stack: ["Next.js", "Python", "FastAPI", "Postgres", "OpenAI", "Anthropic"],
    accent: "from-neon-pink via-neon-violet to-neon-cyan",
  },
  {
    n: "02",
    title: "GaonKaSaman",
    tag: "Client Work",
    href: "https://www.gaonkasaman.com",
    desc: "Full stack platform connecting rural India to modern commerce. Built and shipped the storefront, ops dashboard, and integrated payments and logistics.",
    stack: ["Next.js", "React", "TypeScript", "Node", "Postgres"],
    accent: "from-neon-lime via-neon-cyan to-neon-violet",
  },
  {
    n: "03",
    title: "Awgmen",
    tag: "Marketing Analyst",
    href: "https://www.awgmen.com",
    desc: "Marketing analytics for 25,000+ monthly users. Power BI dashboards and Excel pipelines for 3 brands. Doubled engagement, dropped bounce rate 30%, tripled social shares.",
    stack: ["Power BI", "Excel", "SQL", "Analytics"],
    accent: "from-neon-violet via-neon-pink to-neon-lime",
  },
  {
    n: "04",
    title: "Diabetes Prediction Model",
    tag: "ML + Deep Learning",
    href: "https://github.com/Sanvideep/Diabetes-Prediction-Model",
    desc: "Pima Indians dataset. NaN imputation, LOF outlier removal, robust scaling, EDA. Trained Logistic Regression, Random Forest, SVM, XGBoost, and LightGBM. XGBoost hit 90% CV after tuning.",
    stack: ["Python", "Sklearn", "XGBoost", "LightGBM", "Pandas"],
    accent: "from-neon-cyan via-neon-violet to-neon-pink",
  },
  {
    n: "05",
    title: "Sales Report Dashboard",
    tag: "Data Viz",
    href: "https://github.com/Sanvideep/Sales_report",
    desc: "SQL pipeline plus an interactive Power BI dashboard surfacing sales metrics and customer behavior. Drove targeted marketing and operational improvements.",
    stack: ["SQL", "Power BI", "Excel"],
    accent: "from-neon-lime via-neon-pink to-neon-cyan",
  },
  {
    n: "06",
    title: "SIH Finalist . Virtual Herbal Garden",
    tag: "Team Lead",
    href: "https://github.com/Sanvideep",
    desc: "Smart India Hackathon Finalist. Led a team of 6 to build an interactive virtual herbal garden bridging health-tech and the web. Showcased innovation in plant and medicinal data visualization.",
    stack: ["React", "Three.js", "Node", "Biotech"],
    accent: "from-neon-pink via-neon-cyan to-neon-violet",
  },
  {
    n: "07",
    title: "F1 Prediction Model",
    tag: "ML . Verstappen Fan Project",
    href: "https://github.com/Sanvideep/F1-prediction-model",
    desc: "Machine learning model to predict Formula 1 race outcomes from historical telemetry, qualifying data, and circuit features. Built because watching races was not enough.",
    stack: ["Python", "Sklearn", "Pandas", "ML"],
    accent: "from-blue-500 via-neon-cyan to-neon-violet",
  },
  {
    n: "08",
    title: "IPL Score Prediction",
    tag: "ML . RCB Fan Project",
    href: "https://github.com/Sanvideep/IPL-score-prediction",
    desc: "ML model that predicts the final first-innings score of an IPL match based on live state of the innings. RCB-coded but team-agnostic.",
    stack: ["Python", "Sklearn", "Pandas", "ML"],
    accent: "from-red-500 via-neon-pink to-neon-violet",
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-neon-violet mb-4">
              ◍ 04 / Work
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95]">
              Things I&apos;ve <span className="aurora-text">Built</span>.
            </h2>
          </div>
          <p className="text-white/60 max-w-md font-mono text-sm">
            // Selected projects. NDA on the rest. Ask me over Diet Coke.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.n}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative glass rounded-3xl overflow-hidden cursor-pointer block"
              data-cursor
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-15 transition duration-700`}
              />
              <div className="relative grid md:grid-cols-12 gap-6 p-8 md:p-12 items-start">
                <div className="md:col-span-2 flex md:flex-col items-center md:items-start justify-between md:justify-start gap-2">
                  <span className="font-mono text-5xl font-bold text-white/20 group-hover:text-white/60 transition">
                    {p.n}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                    {p.tag}
                  </span>
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-display text-3xl md:text-5xl font-bold mb-4 group-hover:translate-x-2 transition-transform">
                    {p.title}
                  </h3>
                  <p className="text-white/70 text-base md:text-lg leading-relaxed">{p.desc}</p>
                </div>
                <div className="md:col-span-3 flex flex-wrap gap-2 md:justify-end">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
