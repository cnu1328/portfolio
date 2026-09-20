import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cx } from "../../lib/utils";

function useCountUp(target, active, duration = 1200) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return n;
}

/**
 * Big mono number + label. `value` may be a number (animated count-up)
 * or a string (rendered as-is, e.g. "5–6 h → 10 min").
 */
export default function StatTile({ value, suffix = "", label, sub, className, compact = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const numeric = typeof value === "number";
  const count = useCountUp(numeric ? value : 0, inView && !reduce);
  const shown = numeric ? (reduce ? value : count) : value;

  return (
    <div ref={ref} className={cx("glass rounded-2xl", compact ? "p-4" : "p-5 sm:p-6", className)}>
      <div className={cx("font-mono font-semibold tabular-nums text-amber", compact ? "text-2xl" : "text-3xl sm:text-4xl")}>
        {shown}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-ink">{label}</div>
      {sub && <div className="mt-1 text-xs text-muted">{sub}</div>}
    </div>
  );
}
