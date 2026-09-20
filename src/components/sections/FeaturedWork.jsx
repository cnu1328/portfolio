import { Link } from "react-router-dom";
import { LuArrowUpRight } from "react-icons/lu";
import { caseStudies, featuredCaseStudies } from "../../data/caseStudies";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import Tag from "../ui/Tag";

function CoverFallback({ accent }) {
  return (
    <div className="relative h-full w-full overflow-hidden" style={{ background: `linear-gradient(135deg, ${accent}22, transparent 60%)` }}>
      <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 400 240" fill="none" stroke={accent} strokeWidth="1">
        {[20, 50, 80, 110, 140].map((r) => (
          <ellipse key={r} cx="300" cy="120" rx={r * 1.6} ry={r} />
        ))}
        <path d="M0 200 Q 100 140 200 180 T 400 150" />
        <path d="M0 220 Q 120 170 220 210 T 400 190" />
      </svg>
    </div>
  );
}

export function CaseStudyCard({ c, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link to={`/work/${c.slug}`} className="group glass glass-hover flex h-full flex-col overflow-hidden rounded-2xl">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-2">
          {c.cover ? (
            <img src={c.cover} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          ) : (
            <CoverFallback accent={c.accent} />
          )}
          <span className="absolute right-3 top-3 rounded-md px-2 py-0.5 font-mono text-[11px] leading-5 text-accent backdrop-blur" style={{ background: "rgb(var(--c-bg) / 0.85)", border: "1px solid rgb(var(--c-accent) / 0.35)" }}>
            {c.role.split("·")[0].trim()}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted">{c.category}</p>
          <h3 className="mt-1.5 flex items-start justify-between gap-2 text-lg font-semibold leading-snug">
            <span>{c.title}</span>
            <LuArrowUpRight className="mt-1 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" size={18} />
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{c.subtitle}. {c.summary}</p>
          <div className="mt-4 flex flex-wrap gap-1.5 pt-1">
            {c.stack.slice(0, 4).map((t) => (
              <Tag key={t} neutral>{t}</Tag>
            ))}
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export default function FeaturedWork() {
  const rest = caseStudies.filter((c) => !c.featured);
  return (
    <section id="work" className="section container-x">
      <SectionHeader
        eyebrow="Selected work"
        title="Production systems, not notebooks."
        lead="Each project runs in production today. Click through for the problem, the approach, what I owned, and the outputs."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredCaseStudies.map((c, i) => (
          <CaseStudyCard key={c.slug} c={c} delay={(i % 3) * 0.08} />
        ))}
      </div>

      {rest.length > 0 && (
        <Reveal className="mt-10">
          <p className="eyebrow mb-4">More work</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {rest.map((c) => (
              <li key={c.slug}>
                <Link to={`/work/${c.slug}`} className="group glass glass-hover flex items-center justify-between gap-4 rounded-xl px-4 py-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{c.title}</p>
                    <p className="truncate text-xs text-muted">{c.category} · {c.role.split("·")[0].trim()}</p>
                  </div>
                  <LuArrowUpRight size={16} className="shrink-0 text-muted group-hover:text-accent" />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </section>
  );
}
