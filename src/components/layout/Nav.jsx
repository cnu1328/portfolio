import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { LuMenu, LuX, LuDownload } from "react-icons/lu";
import { navLinks } from "../../data/nav";
import { profile } from "../../data/profile";
import ThemeToggle from "../ui/ThemeToggle";
import { cx } from "../../lib/utils";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled ? "backdrop-blur-md" : ""
      )}
      style={{
        background: scrolled ? "rgb(var(--c-bg) / 0.72)" : "transparent",
        borderBottom: scrolled ? "1px solid rgb(var(--c-line) / var(--line-alpha))" : "1px solid transparent",
        paddingRight: "var(--scrollbar-lock, 0px)",
      }}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="group flex min-w-0 max-w-[calc(100%_-_5.5rem)] items-center gap-0.5 sm:gap-1 lg:max-w-none" aria-label={`${profile.name} — Home`}>
          {/* <span className="font-mono text-base text-ink transition-transform group-hover:-translate-x-0.5 sm:text-lg">&lt;</span> */}
          <span className="whitespace-nowrap font-signature text-[clamp(1.45rem,7vw,1rem)] leading-none text-ink">
            {"<"}{profile.name}{">"}
          </span>
          {/* <span className="font-mono text-base text-ink transition-transform group-hover:translate-x-0.5 sm:text-lg">/&gt;</span> */}
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-1.5 text-xs">
            <LuDownload size={14} /> Resume
          </a>
          <ThemeToggle />
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink"
          >
            {open ? <LuX size={20} /> : <LuMenu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="glass mx-4 mb-4 rounded-2xl p-2 lg:hidden"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-ink hover:bg-surface-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center gap-2 rounded-xl px-4 py-3 text-sm text-accent"
            >
              <LuDownload size={14} /> Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
