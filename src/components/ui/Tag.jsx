import { cx } from "../../lib/utils";

export default function Tag({ children, neutral = false, className }) {
  return <span className={cx(neutral ? "tag-neutral" : "tag", className)}>{children}</span>;
}
