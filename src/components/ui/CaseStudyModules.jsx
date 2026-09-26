import { useEffect, useMemo, useState } from "react";
import { LuArrowLeft, LuArrowRight, LuExternalLink, LuMaximize2 } from "react-icons/lu";
import CompareSlider from "./CompareSlider";
import GalleryLightbox from "./GalleryLightbox";
import Reveal from "./Reveal";
import RichText from "./RichText";
import Tag from "./Tag";
import { cx } from "../../lib/utils";

const pad = (number) => String(number).padStart(2, "0");

function GalleryItem({ item, onExpand }) {
  if (item.before && item.after) {
    return (
      <CompareSlider
        before={item.before}
        after={item.after}
        beforeLabel={item.beforeLabel}
        afterLabel={item.afterLabel}
        caption={item.caption}
        onExpand={onExpand}
      />
    );
  }

  return (
    <figure className="glass overflow-hidden rounded-2xl">
      <button
        type="button"
        aria-label="Open in gallery"
        onClick={onExpand}
        className="group relative block w-full cursor-zoom-in overflow-hidden"
      >
        <img
          src={item.image}
          alt={item.alt ?? item.caption ?? "Module output"}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <span className="absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-black/60 text-white transition-colors group-hover:bg-black/80">
          <LuMaximize2 size={15} />
        </span>
      </button>
      {item.caption && <figcaption className="px-4 py-3 text-sm text-muted">{item.caption}</figcaption>}
    </figure>
  );
}

function ModuleDetail({ module, index, total, accent, onPrevious, onNext }) {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => setLightbox(null), [module.id]);

  return (
    <div className="min-w-0" aria-live="polite">
      <div className="overflow-hidden rounded-3xl border border-line/10 bg-surface/70 shadow-card backdrop-blur-xl">
        <div className="relative overflow-hidden border-b border-line/10 px-5 py-6 sm:px-8 sm:py-8">
          <div
            className="pointer-events-none absolute -right-24 -top-28 h-64 w-64 rounded-full blur-3xl"
            style={{ background: `${accent}1c` }}
          />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em]">
                <span style={{ color: accent }}>Module {pad(index + 1)}</span>
                <span className="text-muted">/</span>
                <span className="text-muted">{module.category}</span>
              </div>
              <h3 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">{module.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{module.subtitle}</p>
            </div>
            {module.scope && (
              <span
                className="w-fit shrink-0 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-widest"
                style={{ borderColor: `${accent}55`, color: accent, background: `${accent}10` }}
              >
                {module.scope}
              </span>
            )}
          </div>
        </div>

        <div className="space-y-8 p-5 sm:p-8">
          <p className="max-w-3xl text-base leading-relaxed sm:text-lg">
            <RichText text={module.summary} />
          </p>

          {module.facts?.length > 0 && (
            <dl className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {module.facts.map((fact) => (
                <div key={`${fact.value}-${fact.label}`} className="rounded-2xl border border-line/10 bg-surface-2/55 p-4">
                  <dt className="text-xs leading-relaxed text-muted">{fact.label}</dt>
                  <dd className="mt-1 font-mono text-xl font-semibold" style={{ color: accent }}>{fact.value}</dd>
                  {fact.sub && <p className="mt-1 text-xs text-muted">{fact.sub}</p>}
                </div>
              ))}
            </dl>
          )}

          {module.workflow?.length > 0 && (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">How it moves</p>
              <ol className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
                {module.workflow.map((step, stepIndex) => (
                  <li key={step} className="relative flex min-h-20 items-center gap-3 rounded-xl border border-line/10 bg-bg/35 px-3 py-3">
                    <span
                      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-[10px]"
                      style={{ color: accent, background: `${accent}14` }}
                    >
                      {pad(stepIndex + 1)}
                    </span>
                    <span className="text-xs font-medium leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {module.details?.length > 0 && (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">What it includes</p>
              <ul className="mt-3 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {module.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent }} />
                    <span><RichText text={detail} /></span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {module.gallery?.length > 0 && (
            <div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Gallery</p>
                  <h4 className="mt-1 text-base font-semibold">Screens and module outputs</h4>
                </div>
                <span className="font-mono text-[10px] text-muted">{pad(module.gallery.length)} items</span>
              </div>
              <div className="mt-4 grid gap-4 xl:grid-cols-2">
                {module.gallery.map((item, galleryIndex) => (
                  <GalleryItem key={galleryIndex} item={item} onExpand={() => setLightbox(galleryIndex)} />
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-4 border-t border-line/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
            {module.tags?.length > 0 && (
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {module.tags.map((tag) => <Tag key={tag} neutral>{tag}</Tag>)}
                </div>
              </div>
            )}
            {module.links?.length > 0 && (
              <div className="shrink-0">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted sm:text-right">External resources</p>
                <div className="flex flex-wrap gap-2 sm:justify-end">
                  {module.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-4 !py-2 text-xs">
                      {link.label} <LuExternalLink size={13} />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-line/10 px-5 py-4 sm:px-8">
          <button type="button" onClick={onPrevious} className="inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-ink">
            <LuArrowLeft size={14} /> Previous
          </button>
          <span className="font-mono text-[10px] tracking-widest text-muted">{pad(index + 1)} / {pad(total)}</span>
          <button type="button" onClick={onNext} className="inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-ink">
            Next <LuArrowRight size={14} />
          </button>
        </div>
      </div>

      {lightbox !== null && module.gallery?.[lightbox] && (
        <GalleryLightbox
          items={module.gallery}
          index={lightbox}
          onIndexChange={setLightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}

export default function CaseStudyModules({ modules, accent = "#2DD4BF", title, intro }) {
  const [activeId, setActiveId] = useState(modules[0]?.id);
  const activeIndex = useMemo(() => Math.max(0, modules.findIndex((module) => module.id === activeId)), [activeId, modules]);
  const activeModule = modules[activeIndex];

  useEffect(() => setActiveId(modules[0]?.id), [modules]);

  if (!activeModule) return null;

  const goTo = (index) => setActiveId(modules[(index + modules.length) % modules.length].id);

  return (
    <Reveal>
      <section aria-labelledby="platform-modules-heading">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Platform map</p>
            <h2 id="platform-modules-heading" className="mt-1 text-2xl font-semibold sm:text-3xl">
              {title ?? "Explore the platform, module by module."}
            </h2>
            {intro && <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{intro}</p>}
          </div>
          <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            <span className="text-ink">{pad(modules.length)}</span> modules documented
          </p>
        </div>

        <div className="mt-7 grid items-start gap-5 lg:grid-cols-[17rem_minmax(0,1fr)]">
          <nav aria-label="Case study modules" className="grid gap-2 sm:grid-cols-2 lg:sticky lg:top-24 lg:grid-cols-1">
            {modules.map((module, index) => {
              const active = module.id === activeModule.id;
              return (
                <button
                  key={module.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveId(module.id)}
                  className={cx(
                    "group relative overflow-hidden rounded-2xl border px-4 py-3 text-left transition-all duration-200",
                    active
                      ? "border-transparent bg-surface shadow-card"
                      : "border-line/10 bg-surface/35 hover:border-line/20 hover:bg-surface/70"
                  )}
                  style={active ? { boxShadow: `inset 3px 0 0 ${accent}, 0 16px 35px -28px ${accent}` } : undefined}
                >
                  <div className="flex items-start gap-3">
                    <span className="pt-0.5 font-mono text-[10px] tracking-widest" style={{ color: active ? accent : undefined }}>
                      {pad(index + 1)}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className={cx("block text-sm font-medium leading-snug", !active && "text-muted group-hover:text-ink")}>{module.title}</span>
                      <span className="mt-1 block truncate text-[11px] text-muted">{module.category}</span>
                    </span>
                    <LuArrowRight className={cx("mt-0.5 shrink-0 transition-all", active ? "translate-x-0 text-ink" : "-translate-x-1 text-muted opacity-0 group-hover:translate-x-0 group-hover:opacity-100")} size={14} />
                  </div>
                </button>
              );
            })}
          </nav>

          <ModuleDetail
            key={activeModule.id}
            module={activeModule}
            index={activeIndex}
            total={modules.length}
            accent={accent}
            onPrevious={() => goTo(activeIndex - 1)}
            onNext={() => goTo(activeIndex + 1)}
          />
        </div>
      </section>
    </Reveal>
  );
}
