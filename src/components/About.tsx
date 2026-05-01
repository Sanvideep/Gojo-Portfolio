"use client";

import { motion } from "framer-motion";

const stats = [
  { k: "Education", v: "DTU Biotech, 2026" },
  { k: "CGPA", v: "9.19 / 10" },
  { k: "Raechal AI", v: "CEO / Founder" },
  { k: "ML / DL", v: "Sklearn, XGBoost" },
  { k: "Video", v: "AE, DaVinci, CapCut" },
  { k: "Dance", v: "National Hip-Hop" },
  { k: "Fuel", v: "Diet Coke + Chai" },
  { k: "Status", v: "Online . Debug" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-12"
        >
          <div className="lg:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-neon-pink mb-4">
              ◍ 01 / About
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95]">
              The <span className="aurora-text">Origin</span> Story.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-2xl md:text-3xl text-white/85 leading-snug font-display">
              Biotech Engineer at DTU (9.19 CGPA, Class of &apos;26) who realized the lab was too
              slow. Traded pipettes for keyboards. Now I build things people use every day.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              I started as a Marketing Analyst at Awgmen, then moved into Data Analyst work at Soft
              Freight building Power BI dashboards across 5 regions, and then stepped up as a Junior
              Business Data Analyst and Project Manager at SFL Tech AI. Somewhere in there I fell
              hard into Machine Learning and Deep Learning (diabetes prediction, XGBoost tuning, the
              whole loop) and decided I would rather build the tooling than just use it.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              Now I run <span className="text-white">Raechal AI</span>: autonomous growth systems
              and AI workflows that replace busy work with leverage. Founder-led GTM means I also
              edit demo videos in After Effects and DaVinci, run cold outreach, and yap on
              LinkedIn. Fluent in shipping, allergic to bureaucracy, dance trained, Naruto trained.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden mt-10">
              {stats.map((s) => (
                <div key={s.k} className="bg-ink p-5">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2">
                    {s.k}
                  </div>
                  <div className="font-display text-lg text-white">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
