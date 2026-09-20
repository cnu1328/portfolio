import { LuBrainCircuit, LuLayers, LuShieldCheck } from "react-icons/lu";
import { pillars } from "../../data/pillars";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import Tag from "../ui/Tag";

const icons = { ml: LuBrainCircuit, platform: LuLayers, ops: LuShieldCheck };

export default function Pillars() {
  return (
    <section id="about" className="section container-x">
      <SectionHeader
        eyebrow="What I do"
        title="From raw geodata to decisions people can act on."
        lead="Three things I do well, and do together: train the models, build the platform they live in, and keep it running in production."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {pillars.map((p, i) => {
          const Icon = icons[p.key];
          return (
            <Reveal key={p.key} delay={i * 0.08} className="h-full">
              <article className="glass glass-hover flex h-full flex-col rounded-2xl p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-accent" style={{ background: "rgb(var(--c-accent) / 0.12)" }}>
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.blurb}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-1.5 pt-1">
                  {p.tags.map((t) => (
                    <Tag key={t} neutral>{t}</Tag>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
