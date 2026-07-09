import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom' | 'rotate';
  delay?: number;
  duration?: number;
  once?: boolean;
}

function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  once = false
}: ScrollRevealProps) {
  const variants = {
    up: { opacity: 0, y: 50 },
    down: { opacity: 0, y: -50 },
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
    zoom: { opacity: 0, scale: 0.8 },
    rotate: { opacity: 0, rotateY: -90 },
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, rotateY: 0 }}
      viewport={{ once, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
