import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Building2,
  Gem,
  Target,
  Users,
  Heart,
  Sparkles,
  Star,
  CheckCircle,
} from "lucide-react";
import { Header, Footer, SectionTitle } from "@/components/SiteNav";
import { SectionReveal, FadeIn, ScaleIn, SlideIn } from "@/components/AnimationWrapper";
import { companyInfo } from "@/data/company";
import heroImg from "@/assets/showroom.jpg";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "About | SO NICE NX" },
      {
        name: "description",
        content:
          "Learn about SO NICE NX — Sausar's trusted family wear showroom with a decade of style excellence.",
      },
      { property: "og:title", content: "About | SO NICE NX" },
      {
        property: "og:description",
        content: "Learn about SO NICE NX — Sausar's trusted family wear showroom.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <Header showCta={false} />

      {/* Hero — Image Background with Text Overlay */}
      <section className="relative min-h-[600px] overflow-hidden bg-hero text-hero-foreground lg:min-h-[700px]">
        <img
          src={heroImg}
          width={1600}
          height={900}
          alt="SO NICE NX Store"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex min-h-[600px] max-w-[1520px] flex-col justify-end px-5 pb-14 pt-32 lg:min-h-[700px] lg:px-10 lg:pb-20">
          <motion.p
            className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.23em] text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="h-px w-10 bg-primary" />
            Our story
          </motion.p>
          <motion.h1
            className="max-w-[850px] font-display text-6xl leading-[0.84] font-black uppercase tracking-normal sm:text-8xl lg:text-[8.6rem]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            A decade of<br /><span className="text-primary">family style.</span>
          </motion.h1>
          <motion.div
            className="mt-8 flex flex-col gap-6 border-t border-hero-foreground/25 pt-6 sm:flex-row sm:items-end sm:justify-between"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="max-w-md">
              <p className="text-base leading-relaxed text-hero-foreground/75">From a small dream to Sausar&apos;s most trusted family showroom — our journey is woven with passion, quality, and care.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/collections" className="inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] bg-primary text-primary-foreground transition-colors hover:bg-primary/90">Explore Collection <ArrowDownRight size={16} /></a>
              <a href="/store" className="inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] border border-hero-foreground/40 text-hero-foreground hover:bg-hero-foreground/10">Visit Store</a>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionReveal direction="up">
        <section className="relative border-b border-foreground/15 py-20 md:py-28">
          <div className="mx-auto grid max-w-[1520px] gap-10 px-5 lg:grid-cols-[1fr_1.2fr] lg:px-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {companyInfo.company}
              </p>
              <p className="mt-4 font-display text-8xl font-black text-primary/30">2014</p>
            </div>
            <SlideIn direction="left">
              <h2 className="font-display text-4xl leading-[1.05] font-bold tracking-normal sm:text-6xl">
                It started with a simple belief —{" "}
                <span className="text-muted-foreground">that fashion should be for everyone.</span>
              </h2>
              <p className="mt-8 max-w-xl text-base leading-relaxed">
                SO NICE NX began as a modest showroom with a vision to bring quality fashion to
                every family member. What set us apart wasn't just the clothes — it was the
                approach. We listened. We understood. We delivered.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Over the years, we've grown from a single-room shop to a comprehensive family
                showroom, but our core promise remains unchanged: every customer who walks through
                our doors should leave feeling their best.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <span className="flex items-center gap-2 border border-foreground/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em]">
                  <CheckCircle size={14} className="text-primary" /> Quality fabrics
                </span>
                <span className="flex items-center gap-2 border border-foreground/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em]">
                  <CheckCircle size={14} className="text-primary" /> Honest pricing
                </span>
                <span className="flex items-center gap-2 border border-foreground/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em]">
                  <CheckCircle size={14} className="text-primary" /> Personalized care
                </span>
              </div>
            </SlideIn>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal direction="up">
        <section className="bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-[1520px] px-5 lg:px-10">
            <SectionTitle kicker="01 / Purpose">What drives us.</SectionTitle>
            <div className="grid grid-cols-1 gap-px bg-foreground/20 md:grid-cols-2">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  desc: "To make every family feel stylish and confident.",
                },
                {
                  icon: Gem,
                  title: "Our Vision",
                  desc: "To be Sausar's most beloved destination for family fashion.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <ScaleIn key={title} className="bg-background p-8 md:p-12">
                  <Icon size={32} className="text-primary" />
                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    {title}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-black sm:text-4xl">{desc}</h3>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {title === "Our Mission"
                      ? "We believe fashion isn't about following trends — it's about feeling good. Our mission is to provide clothing that makes every member of your family look forward to getting dressed."
                      : "We dream of a showroom where every visit feels like coming home — where the staff knows your name, your size, and your style."}
                  </p>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal direction="up">
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-[1520px] px-5 lg:px-10">
            <SectionTitle kicker="02 / Values">What we stand for.</SectionTitle>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Heart,
                  title: "Family-first",
                  desc: "Every decision we make starts with the family experience.",
                },
                {
                  icon: Star,
                  title: "Quality",
                  desc: "Premium fabrics and finishes at honest price points.",
                },
                {
                  icon: Sparkles,
                  title: "Innovation",
                  desc: "Constantly refreshing collections with the latest trends.",
                },
                {
                  icon: Building2,
                  title: "Community",
                  desc: "Rooted in Sausar, we give back to the community we serve.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <ScaleIn key={title} className="border border-foreground/15 p-6 md:p-8">
                  <Icon size={28} className="text-primary" />
                  <h3 className="mt-5 font-display text-2xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      <motion.section
        className="bg-foreground py-20 text-background md:py-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mx-auto max-w-[1520px] px-5 lg:px-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { num: "10+", label: "Years in business" },
              { num: "3", label: "Generations served" },
              { num: "4", label: "Collections" },
              { num: "1000+", label: "Happy customers" },
            ].map(({ num, label }) => (
              <ScaleIn key={label} className="text-center">
                <p className="font-display text-6xl font-black text-primary sm:text-7xl">{num}</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  {label}
                </p>
              </ScaleIn>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
