import { cn } from "@/lib/utils";

const styles = {
  primary:
    "border border-white bg-white text-canvas shadow-[0_0_24px_-4px_rgba(255,255,255,0.45)] hover:bg-accent hover:border-accent hover:text-white hover:shadow-[0_0_28px_-4px_rgba(139,92,246,0.7)]",
  secondary:
    "border border-white/85 bg-black/35 text-white backdrop-blur-md hover:bg-white hover:text-canvas",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 text-[13px] font-semibold tracking-[0.14em] uppercase whitespace-nowrap transition-all duration-200 active:scale-[0.98]";

type Variant = keyof typeof styles;

export function Button({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={cn(base, styles[variant], className)}>
      {children}
    </a>
  );
}
