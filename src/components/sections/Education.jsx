import { LuExternalLink } from "react-icons/lu";
import { certifications, education } from "../../data/education";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

export default function Education() {
  return (
    <section id="education" className="section container-x">
      <SectionHeader eyebrow="Education & certifications" title="Foundations." />
      <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <ol className="glass divide-y rounded-2xl" style={{ borderColor: "rgb(var(--c-line) / var(--line-alpha))" }}>
            {education.map((e) => (
              <li key={e.degree} className="hairline flex flex-col gap-1 p-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-semibold">{e.degree}</p>
                  <p className="text-sm text-muted">
                    {e.url ? <a href={e.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent">{e.school}</a> : e.school}
                  </p>
                </div>
                <div className="font-mono text-xs text-muted sm:text-right">
                  <div>{e.period}</div>
                  <div className="text-amber">{e.score}</div>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="glass divide-y rounded-2xl">
            {certifications.map((c) => (
              <li key={c.title} className="hairline p-5">
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium group-hover:text-accent">{c.title}</p>
                    <p className="text-xs text-muted">{c.issuer}</p>
                  </div>
                  <LuExternalLink size={14} className="mt-1 shrink-0 text-muted" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
