import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Clock,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Calendar,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Header, Footer, SectionTitle } from "@/components/SiteNav";
import { SectionReveal, FadeIn, ScaleIn, SlideIn } from "@/components/AnimationWrapper";
import { storeInfo } from "@/data/collections";
import { companyInfo } from "@/data/company";
import storeHero from "@/assets/family-campaign.jpg";

export const Route = createFileRoute("/store/")({
  head: () => ({
    meta: [
      { title: "Store | SO NICE NX" },
      {
        name: "description",
        content:
          "Visit SO NICE NX — The Family Wear Showroom in Sausar. Store hours, directions, and services.",
      },
      { property: "og:title", content: "Store | SO NICE NX" },
      {
        property: "og:description",
        content: "Visit SO NICE NX — The Family Wear Showroom in Sausar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StorePage,
});

function StorePage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <Header showCta={false} />

      {/* Hero — Image Right, Text Left */}
      <section className="relative min-h-[500px] overflow-hidden bg-hero text-hero-foreground lg:min-h-[600px]">
        <div className="absolute inset-0 bg-hero-wash" />
        <div className="relative mx-auto flex min-h-[500px] max-w-[1520px] flex-col items-center justify-center gap-10 px-5 py-20 lg:flex-row lg:px-10 lg:py-0">
          <SlideIn direction="right">
            <div className="flex-1">
              <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.23em] text-primary">
                <span className="h-px w-10 bg-primary" />
                Plan your visit
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
                Come find
                <br />
                <span className="text-primary">your style.</span>
              </motion.h1>
              <motion.p
                className="mt-6 max-w-md text-base leading-relaxed text-hero-foreground/75"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                A welcoming family showroom in Sausar — open 7 days a week with styling experts ready to help.
              </motion.p>
              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <Link to="/collections" className="inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] bg-primary text-primary-foreground transition-colors hover:bg-primary/90">Explore Collection <ArrowDownRight size={16} /></Link>
                <Link to="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] border border-hero-foreground/40 text-hero-foreground hover:bg-hero-foreground/10">Contact Us <ChevronRight size={16} /></Link>
              </motion.div>
            </div>
          </SlideIn>
          <ScaleIn delay={0.2} className="flex-1">
            <div className="relative w-full">
              <img
                src={storeHero}
                width={1200}
                height={900}
                alt="SO NICE NX Store"
                className="w-full"
                loading="eager"
              />
            </div>
          </ScaleIn>
        </div>
      </section>

      <SectionReveal direction="up">
        <section className="border-b border-foreground/15 py-20 md:py-28">
          <div className="mx-auto grid max-w-[1520px] gap-10 px-5 lg:grid-cols-[1.3fr_0.7fr] lg:px-10">
            <div>
              <SectionTitle kicker="01 / Location">Find us.</SectionTitle>
              <div className="mt-8 flex items-start gap-4">
                <MapPin size={24} className="mt-1 shrink-0 text-primary" />
                <div>
                  <p className="font-display text-3xl font-black">{companyInfo.company}</p>
                  <p className="font-display text-2xl font-black mt-1">{companyInfo.brand}</p>
                  <p className="mt-2 max-w-md text-lg leading-relaxed">{storeInfo.address}</p>
                  <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                    {storeInfo.landmark}
                  </p>
                  <p className="mt-1 max-w-md text-base text-muted-foreground">
                    {storeInfo.city}, {storeInfo.state}
                  </p>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { icon: Phone, label: "Phone", value: storeInfo.phone },
                  { icon: Mail, label: "Email", value: storeInfo.email },
                  { icon: Sparkles, label: "WhatsApp", value: storeInfo.whatsapp },
                ].map(({ icon: Icon, label, value }) => (
                  <ScaleIn key={label} className="border border-foreground/15 p-5">
                    <Icon size={20} className="text-primary" />
                    <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      {label}
                    </p>
                    <p className="mt-1 font-display text-sm font-bold">{value}</p>
                  </ScaleIn>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <FadeIn>
                <a
                  href={storeInfo.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-muted"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin size={48} className="mx-auto text-primary" />
                      <p className="mt-3 font-display text-lg font-black">Open in Maps</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Click to open in Google Maps
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-muted/50 group-hover:bg-muted/40 transition-colors" />
                </a>
              </FadeIn>
              <FadeIn delay={0.15}>
                <Link
                  to="/contact"
                  className="inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Get directions <ArrowDownRight size={16} />
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal direction="up">
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-[1520px] px-5 lg:px-10">
            <SectionTitle kicker="02 / Hours">When we're open.</SectionTitle>
            <div className="mt-8 border border-foreground/15">
              {storeInfo.hours.map(({ day, open, close }, index) => (
                <motion.div
                  key={day}
                  className={`flex items-center justify-between px-6 py-4 ${index % 2 ? "bg-muted/30" : ""} ${index === storeInfo.hours.length - 1 ? "" : "border-b border-foreground/10"}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <div className="flex items-center gap-4">
                    <Calendar size={18} className="text-primary" />
                    <span className="font-display text-lg font-black">{day}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={16} className="text-muted-foreground" />
                    <span className="font-bold">{open}</span>
                    <span className="text-muted-foreground">—</span>
                    <span className="text-muted-foreground">{close}</span>
                    {index < 5 && <CheckCircle2 size={14} className="ml-2 text-primary" />}
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              *Special holiday hours may apply. Please call ahead for Sunday appointments.
            </p>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal direction="up">
        <section className="bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-[1520px] px-5 lg:px-10">
            <SectionTitle kicker="03 / Services">What we offer.</SectionTitle>
            <div className="mt-8 grid grid-cols-1 gap-px bg-foreground/20 sm:grid-cols-2 lg:grid-cols-3">
              {storeInfo.services.map((service, index) => (
                <ScaleIn key={service} className="flex items-start gap-4 bg-background p-6 md:p-8">
                  <span className="font-display text-3xl font-black text-primary">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-black">{service}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Available at the showroom during operating hours.
                    </p>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal direction="up">
        <section className="relative min-h-[400px] overflow-hidden bg-hero text-hero-foreground">
          <div className="absolute inset-0 bg-hero-wash" />
          <div className="relative mx-auto flex min-h-[400px] max-w-[1520px] flex-col justify-between px-5 py-12 lg:px-10">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                04 / Ready to visit?
              </p>
            </FadeIn>
            <SlideIn direction="left">
              <h2 className="max-w-4xl font-display text-5xl leading-[0.88] font-black uppercase sm:text-7xl">
                We're here
                <br />
                <span className="text-primary">for you.</span>
              </h2>
              <p className="mt-6 max-w-md text-hero-foreground/75">
                No appointment needed — just walk in. Our team is ready to help you look and feel
                your best.
              </p>
            </SlideIn>
            <FadeIn delay={0.2}>
              <Link
                to="/contact"
                className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] bg-primary text-primary-foreground transition-colors hover:bg-primary/90 w-fit"
              >
                Contact us <ChevronRight size={16} />
              </Link>
            </FadeIn>
          </div>
        </section>
      </SectionReveal>

      <Footer />
    </main>
  );
}
