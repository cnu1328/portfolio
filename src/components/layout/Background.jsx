/** Fixed page backdrop: dot grid, faint contour lines and a teal glow. */
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" style={{ right: "var(--scrollbar-lock, 0px)" }}>
      <div className="bg-glow absolute inset-0" />
      <div className="bg-grid absolute inset-0" />
      <svg
        className="absolute -right-24 top-24 h-[720px] w-[720px] opacity-[0.07] sm:-right-10"
        viewBox="0 0 600 600"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        {[60, 100, 140, 180, 220, 260].map((r, i) => (
          <path
            key={r}
            d={`M ${300 - r} 300 C ${300 - r} ${300 - r * 0.9}, ${300 + r * 0.6} ${300 - r * 1.1}, ${300 + r} 300 S ${300 + r * 0.2} ${300 + r * 1.2}, ${300 - r} 300 Z`}
            style={{ transform: `rotate(${i * 7}deg)`, transformOrigin: "300px 300px" }}
          />
        ))}
      </svg>
    </div>
  );
}
