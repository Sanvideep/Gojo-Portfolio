"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, Phone, Globe } from "lucide-react";

const links = [
  { icon: Mail, label: "sanvideep2112@gmail.com", href: "mailto:sanvideep2112@gmail.com" },
  { icon: Globe, label: "raechal.ai", href: "https://www.raechal.ai" },
  { icon: Linkedin, label: "LinkedIn / sanvi-deep", href: "https://www.linkedin.com/in/sanvi-deep" },
  { icon: Github, label: "GitHub / Sanvideep", href: "https://github.com/Sanvideep" },
  { icon: Instagram, label: "Instagram / sanvi_deep", href: "https://instagram.com/sanvi_deep" },
  { icon: Phone, label: "+91 98711 41397", href: "tel:+919871141397" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass rounded-[2rem] p-10 md:p-20 overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-neon-pink/20 blur-[120px]" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-neon-violet/20 blur-[120px]" />

          <div className="relative">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-neon-pink mb-6">
              ◍ 08 / Contact
            </div>
            <h2 className="font-display text-5xl md:text-8xl font-bold leading-[0.9] mb-10">
              Got Something <br />
              <span className="aurora-text">Cool</span> to Build?
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mb-12 leading-relaxed">
              I am selective about projects but always open to interesting conversations. Shoot me
              a note. I reply faster than my DMs suggest.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.06] hover:border-white/30 transition"
                >
                  <l.icon className="w-5 h-5 text-white/60 group-hover:text-neon-pink transition" strokeWidth={1.5} />
                  <span className="font-mono text-sm text-white/80 group-hover:text-white truncate">
                    {l.label}
                  </span>
                  <span className="ml-auto text-white/30 group-hover:text-white group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
