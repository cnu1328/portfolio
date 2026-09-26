import Seo from "../components/layout/Seo";
import Hero from "../components/sections/Hero";
import ImpactStrip from "../components/sections/ImpactStrip";
import Pillars from "../components/sections/Pillars";
import FeaturedWork from "../components/sections/FeaturedWork";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import SideProjects from "../components/sections/SideProjects";
import Education from "../components/sections/Education";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import { profile } from "../data/profile";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "AI/ML Engineer",
  worksFor: { "@type": "Organization", name: profile.company.name, url: profile.company.url },
  email: `mailto:${profile.email}`,
  url: profile.links.site,
  sameAs: [profile.links.github, profile.links.linkedin, profile.links.leetcode],
  knowsAbout: ["Computer Vision", "LiDAR", "Geospatial", "Deep Learning", "Django", "PostGIS"],
};

export default function Home() {
  return (
    <>
      <Seo description={profile.tagline} path="/" jsonLd={jsonLd} />
      <Hero />
      <ImpactStrip />
      <FeaturedWork />
      <Pillars />
      <Experience />
      <Skills />
      <SideProjects />
      <Education />
      <Testimonials />
      <Contact />
    </>
  );
}
