import { Link, Navigate, useParams } from "react-router-dom";
import { LuArrowLeft, LuArrowRight, LuExternalLink } from "react-icons/lu";
import Seo from "../components/layout/Seo";
import Reveal from "../components/ui/Reveal";
import StatTile from "../components/ui/StatTile";
import Tag from "../components/ui/Tag";
import CompareSlider from "../components/ui/CompareSlider";
import { adjacentCaseStudies, getCaseStudy } from "../data/caseStudies";

function Block({ eyebrow, title, children }) {
  return (
    <Reveal>
      <div className="grid gap-4 lg:grid-cols-[220px_1fr]">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          {title && <h2 className="mt-1 text-xl font-semibold">{title}</h2>}
        </div>
        <div className="prose-portfolio text-[15px] leading-relaxed">{children}</div>
      </div>
    </Reveal>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const c = getCaseStudy(slug);
  if (!c) return <Navigate to="/404" replace />;
  const { prev, next } = adjacentCaseStudies(slug);

  return (
    <article>
      <Seo title={c.title} description={c.summary} path={`/work/${c.slug}`} image={c.cover ?? "/og.png"} />

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: `radial-gradient(60% 60% at 20% 0%, ${c.accent}22, transparent 70%)` }} />
        <div className="container-x pb-10 pt-8 sm:pt-12">
          <Link to="/#work" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent">
            <LuArrowLeft size={14} /> All work
          </Link>
          <Reveal className="mt-6 max-w-3xl">
            <p className="eyebrow">{c.category}</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{c.title}</h1>
            <p className="mt-3 text-lg text-muted sm:text-xl">{c.subtitle}</p>
          </Reveal>
          <Reveal delay={0.08} className="mt-8 grid gap-4 sm:grid-cols-3">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">Role</p>
              <p className="mt-1 text-sm font-medium">{c.role}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">Organisation</p>
              <p className="mt-1 text-sm font-medium">{c.org}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">Period</p>
              <p className="mt-1 text-sm font-medium">{c.period}</p>
            </div>
          </Reveal>
        </div>
        {c.cover && (
          <Reveal delay={0.12} className="container-x">
            <img src={c.cover} alt="" className="glass aspect-[21/9] w-full rounded-3xl object-cover" loading="eager" />
          </Reveal>
        )}
      </header>

      {/* Body */}
      <div className="container-x space-y-16 py-14 sm:py-16">
        <Block eyebrow="Summary">
          <p className="text-lg leading-relaxed">{c.summary}</p>
        </Block>

        <Block eyebrow="Problem">
          <p>{c.problem}</p>
        </Block>

        <Block eyebrow="Approach">
          <ol className="space-y-4">
            {c.approach.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs text-accent" style={{ background: "rgb(var(--c-accent) / 0.12)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </Block>

        <Block eyebrow="What I owned">
          <ul className="flex flex-wrap gap-2">
            {c.owned.map((o) => (
              <li key={o} className="glass rounded-lg px-3 py-1.5 text-sm">{o}</li>
            ))}
          </ul>
        </Block>

        {c.outcomes?.length > 0 && (
          <Block eyebrow="Outcomes">
            <div className="grid gap-3 sm:grid-cols-3">
              {c.outcomes.map((o) => (
                <StatTile key={o.label} value={o.value} label={o.label} sub={o.sub} compact />
              ))}
            </div>
          </Block>
        )}

        {c.gallery?.length > 0 && (
          <Reveal>
            <p className="eyebrow">Outputs</p>
            <h2 className="mt-1 text-xl font-semibold">Drag to compare input and prediction.</h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {c.gallery.map((g, i) => (
                <CompareSlider key={i} before={g.before} after={g.after} caption={g.caption} />
              ))}
            </div>
          </Reveal>
        )}

        <Block eyebrow="Stack">
          <div className="flex flex-wrap gap-2">
            {c.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
          {c.links?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-3">
              {c.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs">
                  {l.label} <LuExternalLink size={14} />
                </a>
              ))}
            </div>
          )}
        </Block>
      </div>

      {/* Prev / next */}
      <nav className="container-x hairline grid gap-3 border-t py-8 sm:grid-cols-2" aria-label="More case studies">
        {prev ? (
          <Link to={`/work/${prev.slug}`} className="glass glass-hover group rounded-2xl p-5">
            <p className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-muted"><LuArrowLeft size={12} /> Previous</p>
            <p className="mt-1 font-medium group-hover:text-accent">{prev.title}</p>
          </Link>
        ) : <span />}
        {next ? (
          <Link to={`/work/${next.slug}`} className="glass glass-hover group rounded-2xl p-5 sm:text-right">
            <p className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-muted">Next <LuArrowRight size={12} /></p>
            <p className="mt-1 font-medium group-hover:text-accent">{next.title}</p>
          </Link>
        ) : <span />}
      </nav>
    </article>
  );
}
