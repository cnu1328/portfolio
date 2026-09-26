import { useState } from "react";
import { LuPause, LuPlay, LuQuote } from "react-icons/lu";
import { testimonials } from "../../data/testimonials";

const cardAccents = ["#2DD4BF", "#FBBF24", "#A78BFA", "#F472B6"];
const pad = (number) => String(number).padStart(2, "0");
const marqueeTestimonials = testimonials.length
  ? Array.from({ length: Math.max(1, Math.ceil(4 / testimonials.length)) }, () => testimonials).flat()
  : [];

function initials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "—";
}

function TestimonialCard({ testimonial, index }) {
  const accent = cardAccents[index % cardAccents.length];

  return (
    <blockquote className="relative flex min-h-[19rem] w-[min(84vw,26rem)] shrink-0 flex-col overflow-hidden rounded-3xl border border-line/10 bg-surface/80 p-6 shadow-card backdrop-blur-xl sm:w-[28rem] sm:p-7">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full blur-3xl"
        style={{ background: `${accent}1f` }}
      />
      <div className="relative flex items-start justify-between gap-4">
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border"
          style={{ color: accent, borderColor: `${accent}40`, background: `${accent}12` }}
        >
          <LuQuote size={19} fill="currentColor" />
        </span>
        <span className="font-mono text-[10px] tracking-[0.2em] text-muted">{pad(index + 1)}</span>
      </div>

      {testimonial.project && (
        <p className="relative mt-6 font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: accent }}>
          {testimonial.project}
        </p>
      )}

      <p className="relative mt-4 flex-1 font-display text-xl font-medium leading-relaxed tracking-tight sm:text-[1.35rem]">
        “{testimonial.quote}”
      </p>

      <footer className="relative mt-7 flex items-center gap-3 border-t border-line/10 pt-5">
        <span
          aria-hidden
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold"
          style={{ color: accent, background: `${accent}16`, boxShadow: `inset 0 0 0 1px ${accent}35` }}
        >
          {initials(testimonial.author)}
        </span>
        <span className="min-w-0">
          <cite className="block truncate text-sm font-semibold not-italic text-ink">{testimonial.author}</cite>
          <span className="mt-0.5 block truncate text-xs text-muted">{testimonial.role}</span>
        </span>
      </footer>
    </blockquote>
  );
}

export default function Testimonials() {
  const [paused, setPaused] = useState(false);
  if (!testimonials.length) return null;

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="section relative overflow-hidden">
      <div className="container-x mb-7 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">In their words</p>
          <h2 id="testimonials-title" className="mt-1 text-2xl font-semibold sm:text-3xl">
            Collaboration, in motion.
          </h2>
        </div>
        <button
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
          className="testimonial-motion-control inline-flex items-center gap-2 rounded-full border border-line/10 bg-surface/65 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
        >
          {paused ? <LuPlay size={12} fill="currentColor" /> : <LuPause size={12} fill="currentColor" />}
          {paused ? "Play motion" : "Pause motion"}
        </button>
      </div>

      <div className="sr-only">
        {testimonials.map((testimonial, index) => (
          <blockquote key={`${testimonial.author}-${testimonial.project ?? index}`}>
            <p>{testimonial.quote}</p>
            <footer>
              <cite>{testimonial.author}</cite>, {testimonial.role}
              {testimonial.project ? ` — ${testimonial.project}` : ""}
            </footer>
          </blockquote>
        ))}
      </div>

      <div
        className={`testimonial-marquee${paused ? " is-paused" : ""}`}
        tabIndex={0}
        aria-label="Visual testimonial reel. Hover over or focus this area to pause, or use the motion control above."
      >
        <div aria-hidden="true" className="testimonial-track">
          <div className="testimonial-track-group">
            {marqueeTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`marquee-${index}-${testimonial.author}`}
                testimonial={testimonial}
                index={index % testimonials.length}
              />
            ))}
          </div>
          <div className="testimonial-track-group testimonial-duplicate">
            {marqueeTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`duplicate-${index}-${testimonial.author}`}
                testimonial={testimonial}
                index={index % testimonials.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
