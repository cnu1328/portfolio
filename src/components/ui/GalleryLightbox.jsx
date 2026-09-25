import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { LuChevronLeft, LuChevronRight, LuColumns2, LuX } from "react-icons/lu";
import { CompareStage } from "./CompareSlider";
import { cx } from "../../lib/utils";

// Leaves room for the header, caption and thumbnail strip; short (landscape phone) screens hide the strip.
const MEDIA_MAX_H =
  "max-h-[calc(100dvh-13rem)] sm:max-h-[calc(100dvh-15rem)] [@media(max-height:500px)]:!max-h-[calc(100dvh-9rem)]";

const pad = (n) => String(n).padStart(2, "0");
const isBackdrop = (el) => el?.hasAttribute?.("data-backdrop");
const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function ArrowButton({ label, onClick, className, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cx("h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20", className)}
    >
      {children}
    </button>
  );
}

// Fades are plain CSS animations (not framer-motion): the overlay's DOM node never restarts its
// animation, so there is no one-frame opacity flash on open (StrictMode) or at the end of close.
export default function GalleryLightbox({ items, index, onIndexChange, onClose }) {
  const [closing, setClosing] = useState(false);
  const closeRef = useRef(null);
  const stripRef = useRef(null);
  const thumbRefs = useRef([]);
  const thumbsPositioned = useRef(false);
  const touchX = useRef(null);
  const dir = useRef(0);
  const pressedBackdrop = useRef(false);

  const count = items.length;
  const item = items[index];
  const isCompare = Boolean(item.before && item.after);

  const requestClose = () => setClosing(true);
  const show = (i) => {
    dir.current = Math.sign(i - index);
    onIndexChange(i);
  };
  const go = (step) => {
    dir.current = step;
    onIndexChange((index + step + count) % count);
  };

  // Layout effect: lock before the first paint so the scrollbar never visibly drops out.
  useLayoutEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const root = document.getElementById("root");
    const prevFocus = document.activeElement;
    const prev = { overflow: body.style.overflow, paddingRight: body.style.paddingRight };

    // Hiding the scrollbar widens the viewport; pad by its width so the page and fixed layers don't shift.
    const scrollbar = window.innerWidth - html.clientWidth;
    body.style.overflow = "hidden";
    if (scrollbar > 0) {
      body.style.paddingRight = `${scrollbar}px`;
      html.style.setProperty("--scrollbar-lock", `${scrollbar}px`);
    }
    root?.setAttribute("inert", "");
    closeRef.current?.focus({ preventScroll: true });

    return () => {
      body.style.overflow = prev.overflow;
      body.style.paddingRight = prev.paddingRight;
      html.style.removeProperty("--scrollbar-lock");
      root?.removeAttribute("inert");
      prevFocus?.focus?.({ preventScroll: true });
    };
  }, []);

  // Fallback in case animationend never fires (e.g. the tab is hidden mid-close).
  useEffect(() => {
    if (!closing) return;
    const t = setTimeout(onClose, 400);
    return () => clearTimeout(t);
  }, [closing, onClose]);

  useEffect(() => {
    if (closing) return;
    const onKey = (e) => {
      if (e.key === "Escape") requestClose();
      // Arrow keys on a focused compare handle move the slider, not the carousel.
      else if (count > 1 && (e.key === "ArrowLeft" || e.key === "ArrowRight") && !e.target.closest?.('[role="slider"]')) {
        go(e.key === "ArrowRight" ? 1 : -1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // Scroll only the strip (scrollIntoView can also nudge the page behind); jump instantly on open.
  useEffect(() => {
    const strip = stripRef.current;
    const thumb = thumbRefs.current[index];
    if (!strip || !thumb) return;
    const s = strip.getBoundingClientRect();
    const t = thumb.getBoundingClientRect();
    strip.scrollTo({
      left: strip.scrollLeft + (t.left - s.left) - (s.width - t.width) / 2,
      behavior: reducedMotion() || !thumbsPositioned.current ? "auto" : "smooth",
    });
    thumbsPositioned.current = true;
  }, [index]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Project outputs gallery"
      data-backdrop
      className={cx(
        "fixed inset-0 z-[100] flex flex-col bg-black/90 text-white",
        closing ? "pointer-events-none animate-lightbox-out" : "animate-lightbox-in"
      )}
      onAnimationEnd={(e) => closing && e.target === e.currentTarget && onClose()}
      // Only a press that starts and ends on empty space closes — releasing a slider drag there must not.
      onPointerDown={(e) => (pressedBackdrop.current = isBackdrop(e.target))}
      onClick={(e) => pressedBackdrop.current && isBackdrop(e.target) && requestClose()}
    >
      <div data-backdrop className="flex items-center justify-between px-4 py-3 sm:px-6">
        <p className="font-mono text-xs tracking-widest text-white/70">
          {pad(index + 1)} / {pad(count)}
        </p>
        <button
          ref={closeRef}
          type="button"
          aria-label="Close gallery"
          onClick={requestClose}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <LuX size={20} />
        </button>
      </div>

      <div
        data-backdrop
        className="relative flex min-h-0 flex-1 items-center justify-center px-3 sm:px-20"
        onTouchStart={isCompare ? undefined : (e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={
          isCompare
            ? undefined
            : (e) => {
                if (touchX.current === null) return;
                const dx = e.changedTouches[0].clientX - touchX.current;
                touchX.current = null;
                if (count > 1 && Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
              }
        }
      >
        <div
          key={index}
          className={cx(
            "flex min-w-0 max-w-full justify-center",
            dir.current > 0 && "animate-slide-in-right",
            dir.current < 0 && "animate-slide-in-left"
          )}
        >
          {isCompare ? (
            <CompareStage
              natural
              before={item.before}
              after={item.after}
              beforeLabel={item.beforeLabel}
              afterLabel={item.afterLabel}
              imgClassName={MEDIA_MAX_H}
            />
          ) : (
            <img
              src={item.image}
              alt={item.alt ?? item.caption ?? "Project output"}
              className={cx("block h-auto w-auto max-w-full rounded-lg", MEDIA_MAX_H)}
              draggable="false"
            />
          )}
        </div>

        {count > 1 && (
          <>
            <ArrowButton label="Previous" onClick={() => go(-1)} className="absolute left-4 top-1/2 hidden -translate-y-1/2 sm:inline-flex">
              <LuChevronLeft size={22} />
            </ArrowButton>
            <ArrowButton label="Next" onClick={() => go(1)} className="absolute right-4 top-1/2 hidden -translate-y-1/2 sm:inline-flex">
              <LuChevronRight size={22} />
            </ArrowButton>
          </>
        )}
      </div>

      <div className="px-4 pb-4 pt-3 sm:px-6 sm:pb-6">
        {item.caption && <p className="mx-auto max-w-3xl text-center text-sm text-white/80">{item.caption}</p>}

        {count > 1 && (
          <div className="mt-3 flex items-center justify-center gap-2">
            <ArrowButton label="Previous" onClick={() => go(-1)} className="inline-flex sm:hidden">
              <LuChevronLeft size={20} />
            </ArrowButton>

            <div ref={stripRef} className="flex min-w-0 gap-2 overflow-x-auto p-1 [@media(max-height:500px)]:hidden">
              {items.map((it, i) => (
                <button
                  key={i}
                  ref={(el) => (thumbRefs.current[i] = el)}
                  type="button"
                  aria-label={`Show item ${i + 1}${it.caption ? `: ${it.caption}` : ""}`}
                  aria-current={i === index}
                  onClick={() => show(i)}
                  className={cx(
                    "relative h-12 w-16 shrink-0 overflow-hidden rounded-md ring-2 transition sm:h-14 sm:w-20",
                    i === index ? "opacity-100 ring-accent" : "opacity-50 ring-transparent hover:opacity-80"
                  )}
                >
                  <img src={it.after ?? it.image} alt="" className="h-full w-full object-cover" loading="lazy" draggable="false" />
                  {it.before && it.after && (
                    <span className="absolute bottom-0.5 right-0.5 rounded bg-black/70 p-0.5">
                      <LuColumns2 size={10} />
                    </span>
                  )}
                </button>
              ))}
            </div>

            <ArrowButton label="Next" onClick={() => go(1)} className="inline-flex sm:hidden">
              <LuChevronRight size={20} />
            </ArrowButton>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
