import { useRef, useEffect, useState } from "react";
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

export function AnimateIn({
  children,
  className,
  style,
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const offsets: Record<string, { x: number; y: number }> = {
    up:    { x: 0,   y: 40  },
    down:  { x: 0,   y: -40 },
    left:  { x: 40,  y: 0   },
    right: { x: -40, y: 0   },
    fade:  { x: 0,   y: 0   },
  };

  const { x, y } = offsets[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
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
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const offsets: Record<string, { x: number; y: number }> = {
    up:    { x: 0,   y: 40  },
    down:  { x: 0,   y: -30 },
    left:  { x: 40,  y: 0   },
    right: { x: -40, y: 0   },
    fade:  { x: 0,   y: 0   },
  };
  const { x, y } = offsets[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden:  { opacity: 0, x, y },
                visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
