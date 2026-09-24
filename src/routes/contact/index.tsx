import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Header, Footer, SectionTitle } from "@/components/SiteNav";
import { SectionReveal, FadeIn, ScaleIn, SlideIn } from "@/components/AnimationWrapper";
import { storeInfo, contactInfo } from "@/data/collections";
import { companyInfo } from "@/data/company";
import { contactApi } from "@/lib/api";
import contactHero from "@/assets/contact-hero.jpg";

export const Route = createFileRoute("/contact/")({
  head: () => ({
    meta: [
      { title: "Contact | SO NICE NX" },
      {
        name: "description",
        content:
          "Get in touch with SO NICE NX — the family wear showroom in Sausar, Madhya Pradesh.",
      },
      { property: "og:title", content: "Contact | SO NICE NX" },
      {
        property: "og:description",
        content: "Get in touch with SO NICE NX — the family wear showroom in Sausar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.target as HTMLFormElement);
    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const message = (formData.get("message") as string) || "";

    try {
      await contactApi.submit({ name, phone, email, message });
      setFormStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setFormStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <Header showCta={false} />

      {/* Hero — Image Right, Text Left */}
      <section className="relative min-h-[480px] w-full overflow-hidden bg-hero text-hero-foreground pt-20 lg:min-h-[580px]">
        <div className="absolute inset-0 bg-hero-wash pointer-events-none" />
        <div className="relative mx-auto flex min-h-[400px] sm:min-h-[480px] max-w-[1520px] flex-col items-center justify-center gap-10 px-4 sm:px-6 py-12 sm:py-16 lg:flex-row lg:px-10 lg:py-0">
          <SlideIn direction="right">
            <div className="flex-1">
              <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.23em] text-primary">
                <span className="h-px w-10 bg-primary" />
                Get in touch
              </p>
              <motion.h1
                className="max-w-[600px] font-display text-5xl leading-[0.88] font-black uppercase tracking-normal sm:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
              >
                Let&apos;s
                <br />
                <span className="text-primary">connect.</span>
              </motion.h1>
              <motion.p
                className="mt-6 max-w-md text-base leading-relaxed text-hero-foreground/75"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Have a question, need styling advice, or want to book a visit? We&apos;d love to hear from you.
              </motion.p>
              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <Link to="/store" className="inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] bg-primary text-primary-foreground transition-colors hover:bg-primary/90">Visit Store <ArrowDownRight size={16} /></Link>
                <a href="https://www.instagram.com/so_nice_nx/" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] border border-hero-foreground/40 text-hero-foreground hover:bg-hero-foreground/10">Instagram <Instagram size={16} /></a>
              </motion.div>
            </div>
          </SlideIn>
          <ScaleIn delay={0.2} className="flex-1">
            <div className="relative w-full">
              <img
                src={contactHero}
                width={1200}
                height={900}
                alt="SO NICE NX Contact"
                className="w-full"
                loading="eager"
              />
            </div>
          </ScaleIn>
        </div>
      </section>

      <SectionReveal direction="up">
        <section className="border-b border-foreground/15 py-20 md:py-28">
          <div className="mx-auto grid max-w-[1520px] gap-10 px-5 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
            <div>
              <SectionTitle kicker="01 / Send us a message">Say hello.</SectionTitle>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.16em]"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      type="text"
                      placeholder="Your full name"
                      disabled={formStatus === "submitting"}
                      className="w-full border border-foreground/20 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary disabled:opacity-60"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.16em]"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      required
                      type="email"
                      placeholder="you@example.com"
                      disabled={formStatus === "submitting"}
                      className="w-full border border-foreground/20 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary disabled:opacity-60"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.16em]"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      disabled={formStatus === "submitting"}
                      className="w-full border border-foreground/20 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary disabled:opacity-60"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.16em]"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      required
                      type="text"
                      placeholder="How can we help?"
                      disabled={formStatus === "submitting"}
                      className="w-full border border-foreground/20 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary disabled:opacity-60"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.16em]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us what you're looking for..."
                    disabled={formStatus === "submitting"}
                    className="w-full resize-none border border-foreground/20 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary disabled:opacity-60"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="inline-flex min-h-11 items-center justify-center gap-2 px-8 py-3 text-xs font-bold uppercase tracking-[0.16em] bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
                >
                  {formStatus === "submitting" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send message <Send size={14} />
                    </>
                  )}
                </button>
                {formStatus === "success" && (
                  <motion.div
                    className="flex items-center gap-3 border border-primary/30 bg-primary/10 px-5 py-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <CheckCircle2 size={20} className="shrink-0 text-primary" />
                    <div>
                      <p className="font-display text-base font-black">Message sent!</p>
                      <p className="text-sm text-muted-foreground">
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </motion.div>
                )}
                {formStatus === "error" && (
                  <motion.div
                    className="flex items-center gap-3 border border-destructive/30 bg-destructive/10 px-5 py-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <AlertCircle size={20} className="shrink-0 text-destructive" />
                    <div>
                      <p className="font-display text-base font-black">Failed to send</p>
                      <p className="text-sm text-muted-foreground">{errorMessage}</p>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>

            <div className="space-y-8">
              <SectionTitle kicker="02 / Reach us">Details.</SectionTitle>
              {[
                {
                  icon: MapPin,
                  title: "Address",
                  lines: [
                    storeInfo.address,
                    storeInfo.landmark,
                    `${storeInfo.city}, ${storeInfo.state}`,
                  ],
                  href: storeInfo.mapUrl,
                },
                {
                  icon: Phone,
                  title: "Call",
                  lines: [storeInfo.phone],
                  href: `tel:${storeInfo.phone.replace(/\s/g, "")}`,
                },
                {
                  icon: Mail,
                  title: "Email",
                  lines: [storeInfo.email],
                  href: `mailto:${storeInfo.email}`,
                },
              ].map(({ icon: Icon, title, lines, href }) => (
                <ScaleIn key={title} className="flex items-start gap-4">
                  <Icon size={22} className="mt-1 shrink-0 text-primary" />
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      {title}
                    </p>
                    {lines.map((line, i) =>
                      href ? (
                        <a
                          key={i}
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noreferrer" : undefined}
                          className="block text-sm font-bold hover:text-primary"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={i} className="text-sm font-bold">
                          {line}
                        </p>
                      ),
                    )}
                  </div>
                </ScaleIn>
              ))}

              <FadeIn className="border-t border-foreground/20 pt-8">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Follow us
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] border border-foreground/20 hover:border-primary hover:text-primary"
                  >
                    Instagram <Instagram size={14} />
                  </a>
                  <a
                    href={contactInfo.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] border border-foreground/20 hover:border-primary hover:text-primary"
                  >
                    Facebook
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal direction="up">
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-[1520px] px-5 lg:px-10">
            <SectionTitle kicker="03 / Quick links">Other ways to reach us.</SectionTitle>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                {
                  icon: Sparkles,
                  title: "WhatsApp",
                  desc: "Chat with us for quick styling advice and availability.",
                  action: `https://wa.me/${contactInfo.whatsapp.replace(/\s/g, "")}`,
                  label: "Chat on WhatsApp",
                },
                {
                  icon: Instagram,
                  title: "Instagram",
                  desc: "Latest arrivals, styling tips, and behind-the-scenes.",
                  action: contactInfo.instagram,
                  label: "Follow us",
                },
                {
                  icon: Mail,
                  title: "Newsletter",
                  desc: "Subscribe for exclusive offers and new collection alerts.",
                  action: `mailto:${contactInfo.email}?subject=Newsletter%20Subscription`,
                  label: "Subscribe",
                },
              ].map(({ icon: Icon, title, desc, action, label }) => (
                <ScaleIn
                  key={title}
                  className="group border border-foreground/15 p-6 transition-colors hover:border-primary"
                >
                  <Icon size={28} className="text-primary" />
                  <h3 className="mt-5 font-display text-2xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary group-hover:underline">
                    {label} <ArrowUpRight size={14} />
                  </span>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal direction="up">
        <section className="relative min-h-[360px] overflow-hidden bg-hero text-hero-foreground">
          <div className="absolute inset-0 bg-hero-wash" />
          <div className="relative mx-auto flex min-h-[360px] max-w-[1520px] flex-col justify-between px-5 py-12 lg:px-10">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                04 / Visit
              </p>
            </FadeIn>
            <SlideIn direction="left">
              <h2 className="max-w-4xl font-display text-5xl leading-[0.88] font-black uppercase sm:text-7xl">
                Come find
                <br />
                <span className="text-primary">your style.</span>
              </h2>
              <p className="mt-6 max-w-md text-hero-foreground/75">
                No appointment needed — just walk in and let our team help you discover your next
                favorite look.
              </p>
            </SlideIn>
            <FadeIn delay={0.2}>
              <Link
                to="/store"
                className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] bg-primary text-primary-foreground transition-colors hover:bg-primary/90 w-fit"
              >
                See store details <ArrowDownRight size={16} />
              </Link>
            </FadeIn>
          </div>
        </section>
      </SectionReveal>

      <Footer />
    </main>
  );
}
