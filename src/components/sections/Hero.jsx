import { motion, useReducedMotion } from "framer-motion";
import { LuArrowRight, LuDownload, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { profile } from "../../data/profile";
import { useTypewriter } from "../../lib/useTypewriter";
import { img } from "../../lib/utils";

const tiles = [
  { src: img("cultivation_final_output"), label: "Parcel segmentation · dual-head UNet++", span: "col-span-2 row-span-2" },
  { src: img("road_extraction"), label: "Multi-class road extraction", span: "col-span-1 row-span-1" },
  { src: img("aqua_final_predictions"), label: "Aquaculture ponds · Planet imagery", span: "col-span-1 row-span-1" },
];

export default function Hero() {
  const typed = useTypewriter(profile.roles);
  const reduce = useReducedMotion();
  const fade = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-x grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <motion.p {...fade(0)} className="eyebrow mb-5">
            {profile.headline}
          </motion.p>
          <motion.h1
            {...fade(0.08)}
            className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p {...fade(0.16)} className="mt-4 font-mono text-base text-accent sm:text-lg" aria-live="polite">
            {typed}
            <span className="ml-0.5 inline-block w-[2px] animate-blink bg-accent align-middle" style={{ height: "1em" }} />
          </motion.p>
          <motion.p {...fade(0.24)} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.div {...fade(0.32)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn-primary">
              View work <LuArrowRight size={16} />
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <LuDownload size={16} /> Resume
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full p-2 text-muted hover:text-accent"><LuGithub size={20} /></a>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full p-2 text-muted hover:text-accent"><LuLinkedin size={20} /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="rounded-full p-2 text-muted hover:text-accent"><LuMail size={20} /></a>
            </div>
          </motion.div>

          <motion.p {...fade(0.4)} className="mt-8 inline-flex items-center gap-2 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </motion.p>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="grid aspect-[4/3] grid-cols-3 grid-rows-2 gap-3">
            {tiles.map((t) => (
              <figure key={t.src} className={`group relative overflow-hidden rounded-2xl glass ${t.span}`}>
                <img src={t.src} alt={t.label} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="eager" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-8 text-xs text-white transition-transform duration-300 group-hover:translate-y-0">
                  {t.label}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="glass absolute -bottom-4 -left-4 hidden rounded-xl px-4 py-3 sm:block animate-float">
            <div className="font-mono text-xs text-muted">now leading</div>
            <div className="text-sm font-medium">LiDAR R&amp;D · PointNet → KPConv</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
