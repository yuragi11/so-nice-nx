"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface AnimationWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

const variants = {
  hidden: (direction: string) => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 40 };
      case "down":
        return { opacity: 0, y: -40 };
      case "left":
        return { opacity: 0, x: 40 };
      case "right":
        return { opacity: 0, x: -40 };
      default:
        return { opacity: 0, y: 40 };
    }
  },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6, ease: easeOutExpo } },
};

export function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimationWrapperProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={direction}
      variants={variants}
      transition={{ delay, duration: 0.6, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, className = "", delay = 0 }: AnimationWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, className = "", delay = 0 }: AnimationWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({
  children,
  className = "",
  delay = 0,
  direction = "left",
}: AnimationWrapperProps) {
  const xOffset = direction === "left" ? -60 : direction === "right" ? 60 : 0;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  );
}
