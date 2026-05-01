const items = [
  "Raechal AI",
  "✦",
  "Biotech Engineer",
  "✦",
  "Full Stack Builder",
  "✦",
  "Data Scientist",
  "✦",
  "CEO / Coder / Editor",
  "✦",
  "introvert.exe",
  "✦",
  "Domain Expansion: Deploy",
  "✦",
  "Diet Coke Fueled",
  "✦",
  "Founder-Led GTM",
  "✦",
  "RCB Forever",
  "✦",
  "Max Verstappen",
  "✦",
];

export default function Marquee() {
  return (
    <section className="relative border-y border-white/10 bg-ink/40 py-6 overflow-hidden">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl uppercase tracking-tight px-8 whitespace-nowrap text-white/80"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
