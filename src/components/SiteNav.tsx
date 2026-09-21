import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Instagram, MapPin, Menu, X } from "lucide-react";
import { AppButton } from "@/components/AppButton";
import { companyInfo } from "@/data/company";

interface NavProps {
  variant?: "dark" | "light";
  showCta?: boolean;
  ctaHref?: string;
  ctaText?: string;
}

export function Header({
  variant = "dark",
  showCta = true,
  ctaHref = "#store",
  ctaText = "Visit store",
}: NavProps) {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/collections" },
    { label: "About", href: "/about" },
    { label: "Store", href: "/store" },
    { label: "Contact", href: "/contact" },
  ];

  const isDark = variant === "dark";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md ${isDark ? "border-hero-foreground/15 bg-hero/90 text-hero-foreground" : "border-foreground/15 bg-background/90 text-foreground"}`}
    >
      <div className="mx-auto flex h-20 max-w-[1520px] items-center justify-between px-5 lg:px-10">
        <a
          href="/"
          className="font-display text-2xl leading-none font-black uppercase tracking-normal"
        >
          SO NICE <span className="text-primary">NX</span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:text-primary ${isDark ? "text-hero-foreground/65" : "text-foreground/65"}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {showCta &&
            (isDark ? (
              <AppButton href={ctaHref} className="hidden sm:inline-flex">
                {ctaText} <ArrowDownRight size={16} />
              </AppButton>
            ) : (
              <AppButton href={ctaHref} className="hidden sm:inline-flex" tone="outline">
                {ctaText} <ArrowDownRight size={16} />
              </AppButton>
            ))}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className={`grid size-11 place-items-center border lg:hidden ${isDark ? "border-hero-foreground/25 text-hero-foreground" : "border-foreground/25 text-foreground"}`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          className={`border-t px-5 py-8 lg:hidden ${isDark ? "border-hero-foreground/15 bg-hero" : "border-foreground/15 bg-background"}`}
          aria-label="Mobile navigation"
        >
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between border-b py-4 font-display text-3xl font-black ${isDark ? "border-hero-foreground/15 text-hero-foreground" : "border-foreground/15 text-foreground"}`}
            >
              <span className="flex w-full justify-between">
                <span>{link.label}</span>
                <span className="font-sans text-xs text-primary">0{index + 1}</span>
              </span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SectionTitle({ kicker, children }: { kicker: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 flex flex-col gap-4 border-t border-foreground/20 pt-5 md:flex-row md:items-start md:justify-between">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{kicker}</p>
      <h2 className="max-w-3xl font-display text-5xl leading-[0.92] font-black tracking-normal md:text-7xl">
        {children}
      </h2>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground py-10 text-background">
      <div className="mx-auto flex max-w-[1520px] flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between lg:px-10">
        <div>
          <p className="font-display text-4xl font-black uppercase">
            SO NICE <span className="text-primary">NX</span>
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.17em] opacity-60">
            {companyInfo.company}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.17em] opacity-60">
            {companyInfo.brandPositioning}
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.14em] opacity-50">
            {companyInfo.location.split(",")[0]}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-[0.14em] opacity-70">
          <a href="/" className="hover:text-primary">
            Home
          </a>
          <a href="/collections" className="hover:text-primary">
            Collections
          </a>
          <a href="/about" className="hover:text-primary">
            About
          </a>
          <a href="/store" className="hover:text-primary">
            Store
          </a>
          <a href="/contact" className="hover:text-primary">
            Contact
          </a>
        </div>
        <div className="flex gap-4 text-xs font-bold uppercase tracking-[0.14em] opacity-70">
          <a
            href="https://www.instagram.com/so_nice_nx/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            Instagram
          </a>
          <a href="mailto:hello@sonicenx.in" className="hover:text-primary">
            Email
          </a>
          <a href="tel:+919876543210" className="hover:text-primary">
            Call
          </a>
        </div>
        <p className="text-xs opacity-40">© 2026 SO NICE NX. All rights reserved.</p>
      </div>
    </footer>
  );
}
