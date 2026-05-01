"use client";

import { useEffect, useRef, useState } from "react";

const W = 480;
const H = 600;

type Drop = { x: number; y: number; type: "coke" | "deadline"; r: number; vy: number };

export default function CokeRun() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [hp, setHp] = useState(3);
  const [running, setRunning] = useState(false);
  const [best, setBest] = useState(0);
  const stateRef = useRef({
    x: W / 2,
    drops: [] as Drop[],
    keys: { left: false, right: false },
    spawn: 0,
    speed: 1,
    score: 0,
    hp: 3,
    running: false,
  });

  useEffect(() => {
    const stored = typeof window !== "undefined" ? Number(localStorage.getItem("coke_best") ?? 0) : 0;
    setBest(stored);
  }, []);

  useEffect(() => {
    const onDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a") stateRef.current.keys.left = true;
      if (e.key === "ArrowRight" || e.key === "d") stateRef.current.keys.right = true;
    };
    const onUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a") stateRef.current.keys.left = false;
      if (e.key === "ArrowRight" || e.key === "d") stateRef.current.keys.right = false;
    };
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const tick = () => {
      const s = stateRef.current;
      ctx.clearRect(0, 0, W, H);

      // bg gradient
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, "#0a0a14");
      grad.addColorStop(1, "#1a0a2a");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // grid
      ctx.strokeStyle = "rgba(139, 92, 246, 0.08)";
      ctx.lineWidth = 1;
      for (let i = 0; i < W; i += 30) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, H);
        ctx.stroke();
      }
      for (let i = 0; i < H; i += 30) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(W, i);
        ctx.stroke();
      }

      if (s.running) {
        // move player
        if (s.keys.left) s.x -= 6;
        if (s.keys.right) s.x += 6;
        s.x = Math.max(28, Math.min(W - 28, s.x));

        // spawn
        s.spawn -= 1;
        if (s.spawn <= 0) {
          const isCoke = Math.random() > 0.32;
          s.drops.push({
            x: 40 + Math.random() * (W - 80),
            y: -20,
            type: isCoke ? "coke" : "deadline",
            r: isCoke ? 18 : 16,
            vy: 2.5 + Math.random() * 1.5 + s.speed,
          });
          s.spawn = 28 - Math.min(s.speed * 2, 18);
        }
        s.speed += 0.0015;

        // update drops
        for (const d of s.drops) d.y += d.vy;

        // collision
        const px = s.x;
        const py = H - 60;
        const remaining: Drop[] = [];
        for (const d of s.drops) {
          const dx = d.x - px;
          const dy = d.y - py;
          if (Math.hypot(dx, dy) < d.r + 22) {
            if (d.type === "coke") {
              s.score += 1;
            } else {
              s.hp -= 1;
              if (s.hp <= 0) {
                s.running = false;
                setRunning(false);
              }
            }
          } else if (d.y < H + 30) {
            remaining.push(d);
          }
        }
        s.drops = remaining;
        if (s.score % 10 === 0 && s.score > 0) {
          // pacing handled by speed creep
        }
        setScore(s.score);
        setHp(s.hp);
      }

      // draw drops
      for (const d of s.drops) {
        if (d.type === "coke") {
          ctx.fillStyle = "rgba(244, 114, 182, 0.15)";
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.r * 1.6, 0, Math.PI * 2);
          ctx.fill();
          // can body
          ctx.fillStyle = "#f472b6";
          ctx.fillRect(d.x - 8, d.y - 14, 16, 28);
          ctx.fillStyle = "#fff";
          ctx.fillRect(d.x - 8, d.y - 4, 16, 4);
          ctx.font = "8px monospace";
          ctx.fillStyle = "#0a0a14";
          ctx.fillText("DC", d.x - 6, d.y);
        } else {
          ctx.fillStyle = "rgba(239, 68, 68, 0.15)";
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.r * 1.6, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#ef4444";
          ctx.beginPath();
          ctx.moveTo(d.x, d.y - 14);
          ctx.lineTo(d.x + 14, d.y + 10);
          ctx.lineTo(d.x - 14, d.y + 10);
          ctx.closePath();
          ctx.fill();
          ctx.fillStyle = "#0a0a14";
          ctx.font = "bold 14px monospace";
          ctx.fillText("!", d.x - 3, d.y + 6);
        }
      }

      // draw player (gojo)
      const px = s.x;
      const py = H - 60;
      ctx.fillStyle = "rgba(139, 92, 246, 0.25)";
      ctx.beginPath();
      ctx.arc(px, py, 32, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(px, py, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#0a0a14";
      ctx.fillRect(px - 16, py - 4, 32, 6);
      ctx.fillStyle = "#22d3ee";
      ctx.fillRect(px - 16, py - 3, 32, 1);

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const start = () => {
    const s = stateRef.current;
    s.x = W / 2;
    s.drops = [];
    s.spawn = 0;
    s.speed = 1;
    s.score = 0;
    s.hp = 3;
    s.running = true;
    setScore(0);
    setHp(3);
    setRunning(true);
  };

  useEffect(() => {
    if (!running && score > 0 && score > best) {
      setBest(score);
      if (typeof window !== "undefined") localStorage.setItem("coke_best", String(score));
    }
  }, [running, score, best]);

  return (
    <div className="glass rounded-3xl p-6 md:p-10 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-neon-pink mb-1">
            arcade / coke run
          </div>
          <h3 className="font-display text-2xl text-white">
            Catch cans. Dodge deadlines.
          </h3>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs">
          <span className="text-neon-cyan">SCORE {score}</span>
          <span className="text-white/50">BEST {best}</span>
          <span className="text-neon-pink">HP {"♥".repeat(Math.max(hp, 0)) || "0"}</span>
        </div>
      </div>

      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-ink mx-auto" style={{ maxWidth: W }}>
        <canvas ref={canvasRef} width={W} height={H} className="block w-full" />
        {!running && (
          <div className="absolute inset-0 flex items-center justify-center bg-ink/70 backdrop-blur-sm">
            <button
              onClick={start}
              className="px-6 py-3 rounded-full bg-neon-pink text-ink font-mono text-sm uppercase tracking-widest hover:bg-white transition"
            >
              {score > 0 ? "Restart" : "Start"} →
            </button>
          </div>
        )}
      </div>

      {/* Mobile controls */}
      <div className="mt-4 grid grid-cols-2 gap-3 max-w-md mx-auto md:hidden">
        <button
          onTouchStart={() => (stateRef.current.keys.left = true)}
          onTouchEnd={() => (stateRef.current.keys.left = false)}
          className="py-4 rounded-xl border border-white/15 bg-white/5 font-mono text-sm"
        >
          ← Left
        </button>
        <button
          onTouchStart={() => (stateRef.current.keys.right = true)}
          onTouchEnd={() => (stateRef.current.keys.right = false)}
          className="py-4 rounded-xl border border-white/15 bg-white/5 font-mono text-sm"
        >
          Right →
        </button>
      </div>

      <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-widest text-white/40">
        Arrow keys or A / D. Pink can = +1. Red triangle = deadline.
      </p>
    </div>
  );
}
