import { stats } from "../../data/stats";
import StatTile from "../ui/StatTile";
import Reveal from "../ui/Reveal";

export default function ImpactStrip() {
  return (
    <section aria-label="Impact at a glance" className="container-x -mt-2 pb-8">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <StatTile value={s.value} suffix={s.suffix} label={s.label} sub={s.sub} compact className="h-full" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
