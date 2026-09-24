import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Instagram,
  MapPin,
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";
import { AppButton } from "@/components/AppButton";
import { companyInfo } from "@/data/company";
import { storeInfo } from "@/data/collections";

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
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActivePath(window.location.pathname);
    }
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/collections" },
    { label: "About", href: "/about" },
    { label: "Store", href: "/store" },
    { label: "Contact", href: "/contact" },
  ];

  const isDark = variant === "dark";

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, closeMenu]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 backdrop-blur-xl ${
        isDark
          ? "border-hero-foreground/15 bg-hero/90 text-hero-foreground"
          : "border-foreground/15 bg-background/90 text-foreground"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1520px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <a
          href="/"
          className="font-display text-xl sm:text-2xl leading-none font-black uppercase tracking-normal transition-opacity hover:opacity-90"
        >
          SO NICE <span className="text-primary">NX</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {links.map((link) => {
            const isActive = activePath === link.href || (link.href !== "/" && activePath.startsWith(link.href));
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-[0.16em] transition-colors relative py-1 hover:text-primary ${
                  isActive
                    ? "text-primary font-black"
                    : isDark
                    ? "text-hero-foreground/75"
                    : "text-foreground/75"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop & Mobile Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {showCta && (
            <>
              <AppButton
                href={`tel:${storeInfo.phone.replace(/\s/g, "")}`}
                className="hidden items-center gap-1.5 lg:inline-flex"
                {...(isDark ? {} : { tone: "outline" })}
              >
                <Phone size={14} />
                {storeInfo.phone.split(" ")[0]}
              </AppButton>
              <AppButton
                href={ctaHref}
                className="hidden lg:inline-flex"
                {...(isDark ? {} : { tone: "outline" })}
              >
                {ctaText} <ArrowDownRight size={16} />
              </AppButton>
            </>
          )}

          {/* Direct Call Button (Mobile) */}
          <a
            href={`tel:${storeInfo.phone.replace(/\s/g, "")}`}
            className="grid size-10 sm:size-11 place-items-center border border-hero-foreground/25 bg-hero/50 text-hero-foreground transition hover:border-primary hover:text-primary lg:hidden"
            aria-label="Call showroom"
          >
            <Phone size={15} />
          </a>

          {/* 3-Line Hamburger Menu Button (Mobile) */}
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={`flex size-10 sm:size-11 items-center justify-center border transition-all ${
              open
                ? "border-primary bg-primary text-primary-foreground"
                : isDark
                ? "border-hero-foreground/30 bg-hero/60 text-hero-foreground hover:border-primary"
                : "border-foreground/30 bg-background/60 text-foreground hover:border-primary"
            } lg:hidden`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu-overlay"
            className="fixed inset-0 top-20 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMenu}
          >
            <motion.nav
              className="flex max-h-[calc(100svh-5rem)] flex-col justify-between overflow-y-auto border-b border-hero-foreground/20 bg-hero/98 text-hero-foreground shadow-2xl"
              aria-label="Mobile navigation"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="divide-y divide-hero-foreground/15 px-5 py-2">
                {links.map((link, index) => {
                  const isActive = activePath === link.href || (link.href !== "/" && activePath.startsWith(link.href));
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={closeMenu}
                      className={`flex items-center justify-between py-4 sm:py-5 font-display text-2xl sm:text-3xl font-black uppercase tracking-tight transition-colors ${
                        isActive ? "text-primary" : "text-hero-foreground hover:text-primary"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {isActive && <span className="h-2 w-2 rounded-full bg-primary" />}
                        {link.label}
                      </span>
                      <span className="flex items-center gap-3">
                        <span className="font-sans text-xs font-bold text-hero-foreground/40">
                          0{index + 1}
                        </span>
                        <ArrowUpRight size={18} className="text-primary" />
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Mobile Quick Contact & Store Info */}
              <div className="border-t border-hero-foreground/20 bg-hero/90 px-5 py-6">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  Quick Access · Sausar Showroom
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href={`tel:${storeInfo.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2.5 border border-hero-foreground/20 bg-hero/60 p-3 text-xs font-bold text-hero-foreground hover:border-primary hover:text-primary"
                  >
                    <Phone size={14} className="text-primary" />
                    <span>{storeInfo.phone}</span>
                  </a>
                  <a
                    href={`https://wa.me/${storeInfo.whatsapp.replace(/\s/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 border border-hero-foreground/20 bg-hero/60 p-3 text-xs font-bold text-hero-foreground hover:border-primary hover:text-primary"
                  >
                    <MessageCircle size={14} className="text-primary" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
                <p className="mt-4 text-[11px] text-hero-foreground/60 leading-relaxed">
                  {storeInfo.address}, {storeInfo.landmark}, {storeInfo.city}
                </p>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
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
    <footer className="bg-foreground py-12 text-background md:py-16">
      <div className="mx-auto max-w-[1520px] px-5 lg:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-background/15 pb-10 md:grid-cols-2 lg:grid-cols-4 lg:pb-12">
          <div className="lg:col-span-1">
            <p className="font-display text-3xl font-black uppercase">
              SO NICE <span className="text-primary">NX</span>
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.17em] opacity-60">
              {companyInfo.brandPositioning}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.17em] opacity-60">
              {companyInfo.brand}
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs opacity-50">
              <MapPin size={12} />
              <span>{companyInfo.location.split(",")[0]}</span>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] opacity-40">
              Contact
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`tel:${storeInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 opacity-70 hover:opacity-100 hover:text-primary transition-opacity"
              >
                <Phone size={14} />
                {storeInfo.phone}
              </a>
              <a
                href={`https://wa.me/${storeInfo.whatsapp.replace(/\s/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 opacity-70 hover:opacity-100 hover:text-primary transition-opacity"
              >
                <MessageCircle size={14} />
                {storeInfo.whatsapp}
              </a>
              <a
                href={`mailto:${storeInfo.email}`}
                className="flex items-center gap-2 opacity-70 hover:opacity-100 hover:text-primary transition-opacity"
              >
                <Mail size={14} />
                {storeInfo.email}
              </a>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] opacity-40">
              Address
            </p>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <p>{storeInfo.address}</p>
              <p>{storeInfo.landmark}</p>
              <p>
                {storeInfo.city}, {storeInfo.state}
              </p>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] opacity-40">
              Hours
            </p>
            <div className="flex flex-col gap-1.5 text-sm">
              {storeInfo.hours.slice(0, 7).map(({ day, open, close }) => (
                <div key={day} className="flex items-center justify-between">
                  <span className="opacity-70">{day}</span>
                  <span className="flex items-center gap-1.5 opacity-70">
                    <Clock size={11} />
                    {open} - {close}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-[0.14em] opacity-60">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="/collections" className="hover:text-primary transition-colors">
              Collections
            </a>
            <a href="/about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="/store" className="hover:text-primary transition-colors">
              Store
            </a>
            <a href="/contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/so_nice_nx/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] opacity-60 hover:opacity-100 hover:text-primary transition-opacity"
            >
              <Instagram size={14} />
              Instagram
            </a>
            <a
              href={`https://wa.me/${storeInfo.whatsapp.replace(/\s/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] opacity-60 hover:opacity-100 hover:text-primary transition-opacity"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>
          <p className="text-xs opacity-30">
            &copy; 2026 {companyInfo.brand}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
