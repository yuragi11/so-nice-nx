import { type AnchorHTMLAttributes, type ReactNode } from "react";

type AppButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  tone?: "signal" | "light" | "outline";
};

const tones = {
  signal: "bg-[--cta-gradient] text-primary-foreground hover:brightness-110",
  light: "bg-background text-foreground hover:bg-background/90",
  outline: "border border-current text-current hover:bg-foreground/10",
  gradient: "bg-[--cta-gradient] text-primary-foreground hover:brightness-110",
};

export function AppButton({ children, className = "", tone = "signal", ...props }: AppButtonProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring ${tones[tone]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
