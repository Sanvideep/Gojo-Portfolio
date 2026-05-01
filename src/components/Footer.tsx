export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-white/40">
        <div>© 2026 Sanvi Deep . Gojo . Raechal AI . New Delhi</div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-neon-lime animate-pulse" />
          <span>Built with Diet Coke + Claude . Deployed on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
