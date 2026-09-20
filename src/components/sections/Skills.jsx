import {
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiElasticsearch,
  SiExpo,
  SiGit,
  SiJavascript,
  SiJenkins,
  SiKeycloak,
  SiLangchain,
  SiLinux,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNumpy,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiQgis,
  SiReact,
  SiStreamlit,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Si = { SiCplusplus, SiDjango, SiDocker, SiElasticsearch, SiExpo, SiGit, SiJavascript, SiJenkins, SiKeycloak, SiLangchain, SiLinux, SiNextdotjs, SiNginx, SiNodedotjs, SiNumpy, SiPostgresql, SiPython, SiPytorch, SiQgis, SiReact, SiStreamlit, SiTailwindcss, SiTypescript };
import { skillGroups } from "../../data/skills";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

function SkillChip({ item }) {
  const Icon = item.icon ? Si[item.icon] : null;
  return (
    <li
      className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition-colors hover:text-accent"
      style={{ background: "rgb(var(--c-line) / 0.05)", border: "1px solid rgb(var(--c-line) / var(--line-alpha))" }}
    >
      {Icon ? <Icon size={14} className="opacity-80" /> : <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />}
      {item.name}
    </li>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section container-x">
      <SectionHeader eyebrow="Skills" title="The toolkit." lead="What I reach for, grouped by the layer of the stack it lives in." />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 2) * 0.06}>
            <div className="glass rounded-2xl p-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent">{g.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <SkillChip key={it.name} item={it} />
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
