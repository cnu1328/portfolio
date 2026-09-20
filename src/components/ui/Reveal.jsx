import { motion, useReducedMotion } from "framer-motion";

/** Fade-up on scroll. Wrap any block; `delay` staggers siblings. */
export default function Reveal({ children, delay = 0, y = 24, className, as = "div", once = true }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Tag>
  );
}
