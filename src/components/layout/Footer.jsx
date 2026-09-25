import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";
import { profile } from "../../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="hairline border-t">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted sm:flex-row">
        <p>
         © {year} {profile.name}  ·  R&D Engineer
        </p>
        <div className="flex items-center gap-3">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-accent"><LuMail size={18} /></a>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent"><LuGithub size={18} /></a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent"><LuLinkedin size={18} /></a>
          <a href={profile.links.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="hover:text-accent"><SiLeetcode size={17} /></a>
        </div>
      </div>
    </footer>
  );
}
