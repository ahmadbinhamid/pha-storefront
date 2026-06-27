import { cn } from "@/utils/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "danger";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

const base =
  "relative inline-flex items-center justify-center overflow-hidden font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-fg hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_hsl(var(--accent)/0.4)] shadow-soft",
  secondary:
    "bg-bg-2 text-fg border border-border hover:bg-bg-3 hover:border-accent/30",
  ghost:
    "bg-transparent text-fg hover:bg-bg-2",
  outline:
    "border border-border bg-transparent text-fg hover:border-accent/50 hover:bg-accent/5 hover:text-accent",
  danger:
    "bg-danger text-danger-fg hover:brightness-95",
};

const sizes: Record<ButtonSize, string> = {
  sm:   "h-9 rounded-full px-5 text-sm",
  md:   "h-11 rounded-full px-7 text-sm",
  lg:   "h-13 rounded-full px-9 text-base",
  icon: "h-10 w-10 rounded-full p-0",
};

export function buttonClassName({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cn(base, variants[variant], sizes[size], className);
}
