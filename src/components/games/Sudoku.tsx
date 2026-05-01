"use client";

import { useEffect, useMemo, useState } from "react";

type Cell = { v: number; fixed: boolean };

const PUZZLES: number[][] = [
  // sol: 1 2 3 4 / 3 4 1 2 / 2 1 4 3 / 4 3 2 1
  [1, 0, 0, 4, 0, 0, 1, 2, 0, 1, 4, 0, 4, 0, 0, 1],
  // sol: 4 3 2 1 / 2 1 4 3 / 3 4 1 2 / 1 2 3 4
  [0, 3, 0, 1, 2, 0, 0, 0, 0, 0, 1, 0, 1, 2, 0, 4],
  // sol: 2 1 4 3 / 4 3 2 1 / 3 4 1 2 / 1 2 3 4
  [0, 0, 4, 3, 4, 0, 2, 0, 0, 4, 0, 0, 1, 0, 0, 4],
];

function inRow(grid: Cell[], r: number, val: number, idx: number) {
  for (let c = 0; c < 4; c++) if (c !== idx % 4 && grid[r * 4 + c].v === val) return false;
  return true;
}
function inCol(grid: Cell[], c: number, val: number, idx: number) {
  for (let r = 0; r < 4; r++) if (r !== Math.floor(idx / 4) && grid[r * 4 + c].v === val) return false;
  return true;
}
function inBox(grid: Cell[], idx: number, val: number) {
  const r = Math.floor(idx / 4);
  const c = idx % 4;
  const br = Math.floor(r / 2) * 2;
  const bc = Math.floor(c / 2) * 2;
  for (let i = br; i < br + 2; i++)
    for (let j = bc; j < bc + 2; j++)
      if (i * 4 + j !== idx && grid[i * 4 + j].v === val) return false;
  return true;
}

function valid(grid: Cell[], idx: number) {
  const v = grid[idx].v;
  if (v === 0) return true;
  const r = Math.floor(idx / 4);
  const c = idx % 4;
  return inRow(grid, r, v, idx) && inCol(grid, c, v, idx) && inBox(grid, idx, v);
}

function buildGrid(seed: number[]): Cell[] {
  return seed.map((v) => ({ v, fixed: v !== 0 }));
}

export default function Sudoku() {
  const [puzzleIdx, setPuzzleIdx] = useState(0);
  const [grid, setGrid] = useState<Cell[]>(() => buildGrid(PUZZLES[0]));
  const [active, setActive] = useState<number | null>(null);

  const solved = useMemo(
    () => grid.every((c) => c.v !== 0) && grid.every((_, i) => valid(grid, i)),
    [grid]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (active === null) return;
      if (grid[active].fixed) return;
      if (/^[1-4]$/.test(e.key)) {
        const next = grid.slice();
        next[active] = { ...next[active], v: parseInt(e.key, 10) };
        setGrid(next);
      } else if (e.key === "Backspace" || e.key === "0") {
        const next = grid.slice();
        next[active] = { ...next[active], v: 0 };
        setGrid(next);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, grid]);

  const setCell = (idx: number, v: number) => {
    if (grid[idx].fixed) return;
    const next = grid.slice();
    next[idx] = { ...next[idx], v };
    setGrid(next);
  };

  const reset = () => {
    setGrid(buildGrid(PUZZLES[puzzleIdx]));
    setActive(null);
  };

  const swap = () => {
    const n = (puzzleIdx + 1) % PUZZLES.length;
    setPuzzleIdx(n);
    setGrid(buildGrid(PUZZLES[n]));
    setActive(null);
  };

  return (
    <div className="glass rounded-3xl p-6 md:p-10 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-neon-pink mb-1">
            puzzle / 4 x 4
          </div>
          <h3 className="font-display text-2xl text-white">9.19 brain detected. Solve it.</h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={reset}
            className="font-mono text-[10px] uppercase tracking-widest px-3 py-2 rounded-full border border-white/15 text-white/70 hover:bg-white/5"
          >
            reset
          </button>
          <button
            onClick={swap}
            className="font-mono text-[10px] uppercase tracking-widest px-3 py-2 rounded-full border border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan/10"
          >
            new puzzle
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        {grid.map((cell, i) => {
          const isValid = valid(grid, i);
          const isActive = active === i;
          const r = Math.floor(i / 4);
          const c = i % 4;
          const borderTop = r === 2 ? "border-t-2 border-t-white/30" : "";
          const borderLeft = c === 2 ? "border-l-2 border-l-white/30" : "";
          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`aspect-square rounded-lg font-display text-3xl md:text-4xl flex items-center justify-center transition relative
                ${cell.fixed ? "bg-white/[0.04] text-white" : "bg-white/[0.02] text-neon-cyan hover:bg-white/[0.08]"}
                ${isActive ? "ring-2 ring-neon-pink shadow-[0_0_24px_rgba(244,114,182,0.4)]" : "ring-1 ring-white/10"}
                ${!isValid && cell.v !== 0 ? "text-neon-pink ring-neon-pink/60" : ""}
                ${borderTop} ${borderLeft}`}
            >
              {cell.v !== 0 ? cell.v : ""}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {[1, 2, 3, 4, 0].map((n) => (
          <button
            key={n}
            onClick={() => active !== null && setCell(active, n)}
            className="w-12 h-12 rounded-xl border border-white/15 bg-white/[0.02] hover:bg-white/[0.08] hover:border-neon-cyan font-display text-xl text-white transition"
          >
            {n === 0 ? "✕" : n}
          </button>
        ))}
      </div>

      {solved && (
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-neon-lime/40 bg-neon-lime/10 text-neon-lime font-mono text-sm uppercase tracking-widest">
            ◉ Domain Expansion: Solved.
          </div>
        </div>
      )}

      <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-widest text-white/40">
        Tap cell. Type 1 to 4. Backspace clears. Mobile: use number pad below.
      </p>
    </div>
  );
}
