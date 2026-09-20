import Reveal from "./Reveal";

export default function SectionHeader({ eyebrow, title, lead, align = "left" }) {
  const center = align === "center";
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">{title}</h2>
      {lead && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{lead}</p>}
    </Reveal>
  );
}
