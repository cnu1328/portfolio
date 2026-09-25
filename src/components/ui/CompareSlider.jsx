import { useCallback, useEffect, useRef, useState } from "react";
import { LuMaximize2 } from "react-icons/lu";
import { cx } from "../../lib/utils";

/**
 * Before/after image comparison. Drag the handle (mouse/touch) or use
 * arrow keys when focused. Before and after images must share dimensions.
 * `natural` sizes the frame to the image (lightbox) instead of a 16:10 crop.
 */
export function CompareStage({ before, after, beforeLabel = "Raw", afterLabel = "Prediction", natural = false, imgClassName, onExpand }) {
  const ref = useRef(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    const move = (e) => {
      if (!dragging.current) return;
      setFromClientX(e.touches ? e.touches[0].clientX : e.clientX);
    };
    const up = () => (dragging.current = false);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, [setFromClientX]);

  const onKey = (e) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  };

  const stopDrag = (e) => e.stopPropagation();

  return (
    <div
      ref={ref}
      className={cx(
        "relative select-none overflow-hidden",
        natural ? "inline-block max-w-full rounded-lg align-top" : "aspect-[16/10] w-full bg-surface-2"
      )}
      onMouseDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        setFromClientX(e.touches[0].clientX);
      }}
    >
      <img
        src={after}
        alt={afterLabel}
        className={natural ? cx("block h-auto w-auto max-w-full", imgClassName) : "absolute inset-0 h-full w-full object-cover"}
        loading={natural ? "eager" : "lazy"}
        draggable="false"
      />
      <img
        src={before}
        alt={beforeLabel}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        loading={natural ? "eager" : "lazy"}
        draggable="false"
      />

      <span className="absolute left-3 top-3 rounded-md px-2 py-0.5 font-mono text-[11px] leading-5 text-white" style={{ background: "rgb(0 0 0 / 0.65)" }}>{beforeLabel}</span>
      <span className="absolute right-3 top-3 rounded-md px-2 py-0.5 font-mono text-[11px] leading-5 text-accent" style={{ background: "rgb(var(--c-bg) / 0.85)", border: "1px solid rgb(var(--c-accent) / 0.35)" }}>{afterLabel}</span>

      <div className="pointer-events-none absolute inset-y-0" style={{ left: `calc(${pos}% - 1px)` }}>
        <div className="h-full w-0.5 bg-accent shadow-[0_0_12px_rgb(var(--c-accent)/0.8)]" />
      </div>
      <button
        type="button"
        role="slider"
        aria-label="Compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onKeyDown={onKey}
        className="compare-handle absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-accent bg-bg/90 text-accent shadow-lg"
        style={{ left: `${pos}%` }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M9 6l-5 6 5 6M15 6l5 6-5 6" />
        </svg>
      </button>

      {onExpand && (
        <button
          type="button"
          aria-label="Open in gallery"
          onMouseDown={stopDrag}
          onTouchStart={stopDrag}
          onClick={onExpand}
          className="absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-black/60 text-white transition-colors hover:bg-black/80"
        >
          <LuMaximize2 size={15} />
        </button>
      )}
    </div>
  );
}

export default function CompareSlider({ caption, ...stageProps }) {
  return (
    <figure className="glass overflow-hidden rounded-2xl">
      <CompareStage {...stageProps} />
      {caption && <figcaption className="px-4 py-3 text-sm text-muted">{caption}</figcaption>}
    </figure>
  );
}
