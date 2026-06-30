import React from "react";
import { motion } from "motion/react";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  duration?: number;
  once?: boolean;
}

const directionalOffsets = {
  up:    { x: 0,   y: 40  },
  down:  { x: 0,   y: -40 },
  left:  { x: 40,  y: 0   },
  right: { x: -40, y: 0   },
  fade:  { x: 0,   y: 0   },
};

export function AnimateIn({
  children,
  className,
  style,
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: AnimateInProps) {
  const { x, y } = directionalOffsets[direction];

  const variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { 
        duration, 
        delay, 
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number] // 👈 Fixed tuple type
      },
    },
  };

  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.12 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChildren({
  children,
  className,
  style,
  stagger = 0.1,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  stagger?: number;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
}) {
  const staggerOffsets = {
    up:    { x: 0,   y: 40  },
    down:  { x: 0,   y: -30 }, 
    left:  { x: 40,  y: 0   },
    right: { x: -40, y: 0   },
    fade:  { x: 0,   y: 0   },
  };

  const { x, y } = staggerOffsets[direction];

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number] // 👈 Fixed tuple type
      },
    },
  };

  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={parentVariants}
    >
      {React.Children.map(children, (child, i) => {
        if (!child) return null;
        return (
          <motion.div key={i} variants={childVariants}>
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}