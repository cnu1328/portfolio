import { LuArrowUpRight } from "react-icons/lu";
import { sideProjects } from "../../data/sideProjects";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import Tag from "../ui/Tag";

export default function SideProjects() {
  return (
    <section id="projects" className="section container-x">
      <SectionHeader eyebrow="Freelance & side projects" title="Beyond the day job." />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sideProjects.map((p, i) => {
          const Wrapper = p.href ? "a" : "div";
          const props = p.href ? { href: p.href, target: "_blank", rel: "noopener noreferrer" } : {};
          return (
            <Reveal key={p.title} delay={(i % 3) * 0.06} className="h-full">
              <Wrapper {...props} className={`glass flex h-full flex-col rounded-2xl p-5 ${p.href ? "glass-hover group" : ""}`}>
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">{p.tag}</p>
                <h3 className="mt-1.5 flex items-center justify-between text-base font-semibold">
                  {p.title}
                  {p.href && <LuArrowUpRight size={16} className="text-muted group-hover:text-accent" />}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <Tag key={s} neutral>{s}</Tag>
                  ))}
                </div>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
