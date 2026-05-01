"use client";

import { motion } from "framer-motion";

const jobs = [
  {
    co: "Raechal AI",
    role: "Founder & CEO",
    when: "2025 . Now",
    where: "Remote",
    bullets: [
      "Building an autonomous growth engine for B2B teams.",
      "Design, ship, sell, edit. Founder-led GTM end to end.",
      "AI workflows that prospect, qualify, and engage 24/7.",
    ],
    tag: "Current",
    tone: "neon-pink",
  },
  {
    co: "SFL Tech AI",
    role: "Junior Business Data Analyst & Project Manager",
    when: "May 2025 . July 2025",
    where: "Gurugram",
    bullets: [
      "Cleaned and validated master shipment data for AS400 to CargoWise ERP migration.",
      "Coordinated with consultants to align corrections with business rules. Data errors down 40%+.",
      "Ran sprints via JIRA and ClickUp. Delivered insights with SQL.",
      "Result: sprint delays down 45%, delivery up 30%, client satisfaction up 15%.",
    ],
    tone: "neon-cyan",
  },
  {
    co: "Soft Freight",
    role: "Data Analyst Intern",
    when: "Jun 2024 . Aug 2024",
    where: "New Delhi",
    bullets: [
      "Built SQL queries across 1,000+ CargoWise ERP tables for client-specific reports.",
      "Automated reporting pipelines and designed Power BI dashboards across 5 regions.",
      "Result: manual report generation down 70%, shipment delays down 20%.",
    ],
    tone: "neon-violet",
  },
  {
    co: "Awgmen",
    role: "Marketing Analyst Intern",
    when: "May 2024 . Jun 2024",
    where: "New Delhi",
    bullets: [
      "Analyzed 25,000+ monthly users via Excel and Power BI to evaluate campaign performance.",
      "Delivered weekly reports and optimization recommendations for 3 brands.",
      "Result: doubled engagement time, bounce rate down 30%, social shares tripled.",
    ],
    tone: "neon-lime",
  },
];

export default function Experience() {
  return (
    <section id="xp" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-neon-cyan/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan mb-4">
              ◍ 03 / Track Record
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95]">
              The <span className="aurora-text">Grind</span> Log.
            </h2>
          </div>
          <p className="text-white/60 max-w-md font-mono text-sm">
            // Marketing Analyst. Data Analyst. Business Analyst. Data Scientist. Now Founder.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          <div className="space-y-12">
            {jobs.map((j, i) => (
              <motion.div
                key={j.co}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-neon-pink ring-4 ring-ink shadow-[0_0_24px_#f472b6]" />

                <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">
                    {j.when} . {j.where}
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-white">{j.co}</h3>
                  <div className="font-mono text-sm text-white/60 mt-1">{j.role}</div>
                  {j.tag && (
                    <div className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full border border-neon-pink/40 bg-neon-pink/10 text-neon-pink font-mono text-[10px] uppercase tracking-widest">
                      <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                      {j.tag}
                    </div>
                  )}
                </div>

                <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <ul className="space-y-2 text-white/70">
                    {j.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="text-neon-cyan/70 font-mono shrink-0">↳</span>
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
