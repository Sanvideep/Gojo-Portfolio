"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

type Item = {
  emoji?: string;
  image?: string;
  label: string;
  size: number;
  top: string;
  left: string;
  depth: number;
  rotate: number;
  glow: string;
};

// All items pinned to far-left or far-right edges. Center column stays clear for headline + bio + portrait.
const items: Item[] = [
  // Left edge column
  { emoji: "💻", label: "code", size: 72, top: "14%", left: "3%", depth: 1.4, rotate: -8, glow: "#22d3ee" },
  { emoji: "🩰", label: "dance", size: 54, top: "38%", left: "2%", depth: 1.0, rotate: -6, glow: "#a3e635" },
  { emoji: "🧬", label: "biotech", size: 50, top: "62%", left: "3%", depth: 0.7, rotate: -4, glow: "#22d3ee" },
  { emoji: "🐉", label: "dragon", size: 50, top: "86%", left: "5%", depth: 0.8, rotate: 4, glow: "#22d3ee" },
  // Right edge column
  { emoji: "🍥", label: "naruto", size: 50, top: "10%", left: "94%", depth: 0.8, rotate: 12, glow: "#f59e0b" },
  { emoji: "🥤", label: "diet coke", size: 60, top: "30%", left: "94%", depth: 1.0, rotate: 14, glow: "#f472b6" },
  { emoji: "🎬", label: "edit", size: 52, top: "50%", left: "94%", depth: 1.2, rotate: -16, glow: "#22d3ee" },
  { image: "/Gojo.png", label: "gojo", size: 130, top: "65%", left: "88%", depth: 1.6, rotate: -8, glow: "#8b5cf6" },
  { emoji: "🎧", label: "bts/weeknd", size: 50, top: "92%", left: "94%", depth: 0.9, rotate: -8, glow: "#8b5cf6" },
];

export default function FloatingScene() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) - 0.5);
      my.set((e.clientY / window.innerHeight) - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div className="absolute inset-0 pointer-events-none [perspective:1200px]">
      {items.map((it, i) => (
        <FloatingItem key={i} item={it} sx={sx} sy={sy} index={i} />
      ))}
    </div>
  );
}

function FloatingItem({
  item,
  sx,
  sy,
  index,
}: {
  item: Item;
  sx: ReturnType<typeof useMotionValue<number>>;
  sy: ReturnType<typeof useMotionValue<number>>;
  index: number;
}) {
  const tx = useTransform(sx, (v) => v * 60 * item.depth);
  const ty = useTransform(sy, (v) => v * 60 * item.depth);
  const rx = useTransform(sy, (v) => v * -20 * item.depth);
  const ry = useTransform(sx, (v) => v * 20 * item.depth);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.6 + index * 0.07, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        top: item.top,
        left: item.left,
        x: tx,
        y: ty,
        rotateX: rx,
        rotateY: ry,
        rotate: item.rotate,
      }}
      className="absolute [transform-style:preserve-3d] will-change-transform"
    >
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [item.rotate, item.rotate + 3, item.rotate] }}
        transition={{ duration: 5 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-50"
          style={{ background: item.glow, transform: "scale(1.2)" }}
        />
        {item.image ? (
          <Image
            src={item.image}
            alt={item.label}
            width={item.size}
            height={item.size}
            style={{ filter: `drop-shadow(0 0 28px ${item.glow})` }}
            className="relative select-none object-contain"
          />
        ) : (
          <div
            style={{ fontSize: item.size, filter: `drop-shadow(0 0 24px ${item.glow})` }}
            className="relative leading-none select-none"
          >
            {item.emoji}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
