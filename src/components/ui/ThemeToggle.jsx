import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "../../lib/theme";

export default function ThemeToggle({ className }) {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className={
        "inline-flex h-9 w-9 items-center justify-center rounded-full border text-muted transition-colors hover:text-accent " +
        (className ?? "")
      }
      style={{ borderColor: "rgb(var(--c-line) / var(--line-alpha))" }}
    >
      {dark ? <LuSun size={16} /> : <LuMoon size={16} />}
    </button>
  );
}
