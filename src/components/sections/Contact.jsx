import { LuGithub, LuLinkedin, LuMail, LuMapPin } from "react-icons/lu";
import { profile } from "../../data/profile";
import Reveal from "../ui/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section container-x">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full" style={{ background: "radial-gradient(closest-side, rgb(var(--c-accent) / 0.25), transparent)" }} />
          <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr]">
            <img src="/images/profile.webp" alt={profile.name} width="120" height="120" className="h-28 w-28 rounded-2xl object-cover ring-2 ring-accent/40" loading="lazy" />
            <div>
              <p className="eyebrow mb-3">Contact</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">Let's build something spatial.</h2>
              <p className="mt-3 max-w-xl text-muted">
                {profile.availability}. If you're working on geospatial AI, computer vision on earth-observation data, or GIS platforms, I'd like to hear about it.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="btn-primary"><LuMail size={16} /> {profile.email}</a>
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost"><LuLinkedin size={16} /> LinkedIn</a>
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="btn-ghost"><LuGithub size={16} /> GitHub</a>
              </div>
              <p className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted"><LuMapPin size={14} /> {profile.location}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
