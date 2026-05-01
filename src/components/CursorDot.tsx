"use client";

import { useEffect, useRef } from "react";

export default function CursorDot() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = ref.current;
    if (!dot) return;
    let raf = 0;
    let x = 0, y = 0, tx = 0, ty = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest("a, button, [data-cursor]");
      dot.style.width = interactive ? "32px" : "10px";
      dot.style.height = interactive ? "32px" : "10px";
      dot.style.transform = `translate(${x - (interactive ? 16 : 5)}px, ${y - (interactive ? 16 : 5)}px)`;
    };

    const tick = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      const w = parseFloat(dot.style.width || "10");
      dot.style.transform = `translate(${x - w / 2}px, ${y - w / 2}px)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-dot" />;
}
