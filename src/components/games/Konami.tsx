"use client";

import { useEffect, useState } from "react";

const SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const LABELS: Record<string, string> = {
  ArrowUp: "↑",
  ArrowDown: "↓",
  ArrowLeft: "←",
  ArrowRight: "→",
  b: "B",
  a: "A",
};

export default function Konami() {
  const [progress, setProgress] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const expected = SEQUENCE[progress];
      const got = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (got === expected) {
        const next = progress + 1;
        if (next === SEQUENCE.length) {
          setUnlocked(true);
          setShake(true);
          setTimeout(() => setShake(false), 700);
        }
        setProgress(next);
      } else {
        setProgress(0);
      }
    };
    if (!unlocked) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [progress, unlocked]);

  const tap = (key: string) => {
    const expected = SEQUENCE[progress];
    if (key === expected) {
      const next = progress + 1;
      if (next === SEQUENCE.length) {
        setUnlocked(true);
        setShake(true);
        setTimeout(() => setShake(false), 700);
      }
      setProgress(next);
    } else {
      setProgress(0);
    }
  };

  return (
    <div className={`glass rounded-3xl p-6 md:p-10 max-w-3xl mx-auto ${shake ? "animate-pulse" : ""}`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-neon-violet mb-1">
            decode / sequence
          </div>
          <h3 className="font-display text-2xl text-white">Type the cheat. Unlock the void.</h3>
        </div>
        <button
          onClick={() => {
            setProgress(0);
            setUnlocked(false);
          }}
          className="font-mono text-[10px] uppercase tracking-widest px-3 py-2 rounded-full border border-white/15 text-white/70 hover:bg-white/5"
        >
          reset
        </button>
      </div>

      {!unlocked ? (
        <>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2 mb-8">
            {SEQUENCE.map((k, i) => (
              <div
                key={i}
                className={`aspect-square rounded-xl flex items-center justify-center font-display text-xl md:text-2xl border transition
                  ${
                    i < progress
                      ? "bg-neon-pink/20 border-neon-pink text-neon-pink shadow-[0_0_24px_rgba(244,114,182,0.4)]"
                      : i === progress
                        ? "border-neon-cyan text-neon-cyan animate-pulse"
                        : "border-white/10 text-white/40"
                  }`}
              >
                {LABELS[k]}
              </div>
            ))}
          </div>

          {/* On-screen pad for non-keyboard */}
          <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto md:hidden mb-6">
            <div></div>
            <button
              onClick={() => tap("ArrowUp")}
              className="aspect-square rounded-xl border border-white/15 bg-white/5 font-display text-2xl"
            >
              ↑
            </button>
            <div></div>
            <button
              onClick={() => tap("ArrowLeft")}
              className="aspect-square rounded-xl border border-white/15 bg-white/5 font-display text-2xl"
            >
              ←
            </button>
            <button
              onClick={() => tap("ArrowDown")}
              className="aspect-square rounded-xl border border-white/15 bg-white/5 font-display text-2xl"
            >
              ↓
            </button>
            <button
              onClick={() => tap("ArrowRight")}
              className="aspect-square rounded-xl border border-white/15 bg-white/5 font-display text-2xl"
            >
              →
            </button>
            <button
              onClick={() => tap("b")}
              className="aspect-square rounded-xl border border-neon-pink/40 bg-neon-pink/10 font-display text-2xl text-neon-pink col-start-1"
            >
              B
            </button>
            <button
              onClick={() => tap("a")}
              className="aspect-square rounded-xl border border-neon-cyan/40 bg-neon-cyan/10 font-display text-2xl text-neon-cyan col-start-3"
            >
              A
            </button>
          </div>

          <p className="text-center font-mono text-[10px] uppercase tracking-widest text-white/40">
            Use keyboard arrow keys + B + A. Or tap the pad on mobile.
          </p>
        </>
      ) : (
        <div className="text-center py-12">
          <div className="font-display text-5xl md:text-7xl aurora-text font-bold mb-4">
            Domain. Expansion.
          </div>
          <div className="font-mono text-sm text-white/70 max-w-md mx-auto leading-relaxed">
            Six eyes activated. Infinity loaded. You found the cheat code. Reward: knowing Sanvi
            also rewatched Naruto for the seventh time this year.
          </div>
          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-neon-lime/40 bg-neon-lime/10 text-neon-lime font-mono text-xs uppercase tracking-widest">
            ◉ secret unlocked / Limitless mode
          </div>
        </div>
      )}
    </div>
  );
}
