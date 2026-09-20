import { experience } from "../../data/experience";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import Tag from "../ui/Tag";

export default function Experience() {
  return (
    <section id="experience" className="section container-x">
      <SectionHeader eyebrow="Experience" title="Where I've built." />
      <ol className="relative mt-12 space-y-10 border-l pl-6 sm:pl-10" style={{ borderColor: "rgb(var(--c-line) / calc(var(--line-alpha) * 2))" }}>
        {experience.map((e, i) => (
          <li key={e.company + e.period} className="relative">
            <span
              className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 sm:-left-[47px]"
              style={{
                borderColor: "rgb(var(--c-accent))",
                background: e.current ? "rgb(var(--c-accent))" : "rgb(var(--c-bg))",
                boxShadow: e.current ? "0 0 0 6px rgb(var(--c-accent) / 0.18)" : "none",
              }}
            />
            <Reveal delay={i * 0.05}>
              <article className="glass rounded-2xl p-5 sm:p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {e.role}
                      {e.subrole && <span className="text-muted"> · {e.subrole}</span>}
                    </h3>
                    <p className="text-sm text-muted">
                      {e.url ? (
                        <a href={e.url} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-accent">{e.company}</a>
                      ) : (
                        <span className="text-ink">{e.company}</span>
                      )}{" "}
                      · {e.type} · {e.location}
                    </p>
                  </div>
                  <p className="font-mono text-xs text-muted sm:text-right">{e.period}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {e.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {e.stack.map((s) => (
                    <Tag key={s} neutral>{s}</Tag>
                  ))}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
