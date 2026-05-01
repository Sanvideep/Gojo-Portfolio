"use client";

import { useState } from "react";
import Link from "next/link";
import Sudoku from "@/components/games/Sudoku";
import CokeRun from "@/components/games/CokeRun";
import Konami from "@/components/games/Konami";

const tabs = [
  { id: "sudoku", label: "Sudoku 4x4", desc: "Mini grid. Click. Type 1 to 4." },
  { id: "coke", label: "Diet Coke Run", desc: "Collect cans. Dodge deadlines." },
  { id: "konami", label: "Konami Decode", desc: "↑ ↑ ↓ ↓ ← → ← → B A" },
] as const;

export default function GamesPage() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("sudoku");

  return (
    <main className="relative min-h-screen pt-28 pb-32 px-6">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-neon-violet/15 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-white/60 hover:text-white transition"
          >
            ← back to base
          </Link>
        </div>

        <div className="font-mono text-xs uppercase tracking-[0.3em] text-neon-pink mb-4">
          ◍ /games
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95]">
          Domain <span className="aurora-text">Expansion</span>.
        </h1>
        <p className="mt-4 text-white/60 max-w-xl">
          Three small games. Built in vanilla TS. No tracking, no scores synced anywhere. Pure
          procrastination.
        </p>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`group px-4 py-2.5 rounded-full font-mono text-xs uppercase tracking-widest border transition ${
                active === t.id
                  ? "bg-white text-ink border-white"
                  : "border-white/15 text-white/70 hover:border-white/40 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Active game */}
        <div className="mt-10">
          {active === "sudoku" && <Sudoku />}
          {active === "coke" && <CokeRun />}
          {active === "konami" && <Konami />}
        </div>
      </div>
    </main>
  );
}
