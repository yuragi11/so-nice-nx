import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Instagram,
  MapPin,
  Menu,
  Sparkles,
  X,
  Send,
  CheckCircle2,
  Volume2,
  VolumeX,
} from "lucide-react";
import { Header, Footer, SectionTitle } from "@/components/SiteNav";
import { SectionReveal, FadeIn, ScaleIn, SlideIn } from "@/components/AnimationWrapper";
import {
  collections,
  featured,
  usps,
  heroImage,
  campaignImage,
  showroomImage,
} from "@/data/collections";
import { companyInfo } from "@/data/company";
import womenImage from "@/assets/collection-women.jpg";
import menImage from "@/assets/collection-men.jpg";
import kidsImage from "@/assets/collection-kids.jpg";
import winterImage from "@/assets/collection-winter.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SO NICE NX | The Family Wear Showroom, Sausar" },
      {
        name: "description",
        content:
          "Discover fashion for women, men and children at SO NICE NX, Sausar's family wear showroom.",
      },
      { property: "og:title", content: "SO NICE NX | The Family Wear Showroom" },
      {
        property: "og:description",
        content: "Fashion for every generation, under one roof in Sausar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HeaderWithAnimation() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
    >
      <Header />
    </motion.header>
  );
}

function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted by browser policy; fallback poster is displayed seamlessly
      });
    }
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <SectionReveal direction="up">
      <section
        id="home"
        className="relative min-h-[760px] min-h-[100svh] w-full overflow-hidden bg-hero text-hero-foreground lg:min-h-screen"
      >
        {/* Instant Fallback / Poster Image to eliminate CLS & loading flicker */}
        <img
          src={heroImage}
          alt="SO NICE NX showroom background"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Ambient Brand Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          preload="metadata"
          poster={heroImage}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-90 transition-opacity duration-700"
          aria-label="SO NICE NX promotional video"
        >
          <source src="/video/so-nice-hero.mp4" type="video/mp4" />
        </video>

        {/* Brand visual overlays for high text contrast and editorial mood */}
        <div className="absolute inset-0 bg-hero-wash pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-hero/90 via-hero/40 to-transparent pointer-events-none" />

        {/* Top Badges & Audio Control */}
        <div className="absolute right-4 top-28 z-10 flex items-center gap-2 sm:right-6 lg:right-10">
          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
            className="inline-flex items-center gap-2 border border-hero-foreground/30 bg-hero/65 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary backdrop-blur-md transition-colors hover:bg-hero hover:border-primary"
          >
            {isMuted ? (
              <>
                <VolumeX size={15} />
                <span className="hidden sm:inline">Sound Off</span>
              </>
            ) : (
              <>
                <Volume2 size={15} />
                <span className="hidden sm:inline">Sound On</span>
              </>
            )}
          </button>
          <div className="hidden border border-hero-foreground/25 bg-hero/50 px-6 py-2 text-xs font-bold uppercase tracking-[0.22em] text-primary backdrop-blur-sm md:block">
            {companyInfo.location.split(",")[0]} · {companyInfo.location.split(",")[1]?.trim()}
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[760px] max-w-[1520px] flex-col justify-end px-5 pb-14 pt-32 lg:min-h-screen lg:px-10 lg:pb-20">
          <motion.p
            className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.23em] text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="h-px w-10 bg-primary" />
            The family wear showroom
          </motion.p>
          <motion.h1
            className="max-w-[850px] font-display text-6xl leading-[0.84] font-black uppercase tracking-normal sm:text-8xl lg:text-[8.6rem]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
          >
            Style runs
            <br />
            <span className="text-primary">in the family.</span>
          </motion.h1>
          <motion.div
            className="mt-8 flex flex-col gap-6 border-t border-hero-foreground/25 pt-6 sm:flex-row sm:items-end sm:justify-between"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="max-w-md">
              <p className="text-base leading-relaxed text-hero-foreground/75">
                {companyInfo.brandMessage}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-hero-foreground/55">
                Over a decade of serving Sausar families with curated fashion — from everyday
                essentials to celebration wear.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/collections"
                className="inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explore the edit <ArrowDownRight size={16} />
              </Link>
              <Link
                to="/store"
                className="inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] border border-hero-foreground/40 text-hero-foreground hover:bg-hero-foreground/10"
              >
                Find us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </SectionReveal>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative border-b border-foreground/15 py-20 md:py-28">
      <div className="mx-auto grid max-w-[1520px] gap-10 px-5 lg:grid-cols-[0.8fr_2fr] lg:px-10">
        <ScaleIn>
          <div>
            <span className="font-display text-8xl font-black text-primary">हम</span>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em]">
              Fashion, for all of us.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-xs">
              {companyInfo.company} presents SO NICE NX — Sausar's trusted family fashion
              destination, built on decades of dedication to quality and customer happiness.
            </p>
          </div>
        </ScaleIn>
        <SlideIn direction="left">
          <p className="font-display text-4xl leading-[1.05] font-bold tracking-normal sm:text-6xl">
            Not his. Not hers. <span className="text-muted-foreground">Ours.</span> One destination
            for every mood, every age, and every member of your family.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ["10+", "Years of excellence"],
              ["3", "Generations served"],
              ["4", "Specialty collections"],
            ].map(([num, label]) => (
              <div key={label} className="border-t border-foreground/20 pt-4">
                <span className="font-display text-3xl font-black text-primary">{num}</span>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </SlideIn>
      </div>
    </section>
  );
}

function CollectionsSection() {
  return (
    <section id="collections" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-[1520px] px-5 lg:px-10">
        <SectionTitle kicker="01 / Shop by world">Four moods. One roof.</SectionTitle>
        <div className="grid grid-cols-2 gap-px bg-foreground/20 lg:grid-cols-4">
          {collections.map((item, index) => (
            <ScaleIn key={item.name} delay={index * 0.1}>
              <Link
                to="/collections"
                className={`group relative overflow-hidden bg-hero ${index % 2 ? "lg:mt-16" : ""}`}
              >
                <img
                  src={item.image}
                  width={912}
                  height={1200}
                  loading="lazy"
                  alt={`${item.name} fashion collection`}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-image-shade" />
                <span className="absolute left-4 top-4 text-xs font-bold text-hero-foreground/70">
                  {item.number}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-4 text-hero-foreground sm:p-6">
                  <h3 className="font-display text-3xl font-black sm:text-5xl">{item.name}</h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-hero-foreground/70 sm:text-xs">
                    {item.note}
                  </p>
                </div>
              </Link>
            </ScaleIn>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            to="/collections"
            className="inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View all collections <ArrowDownRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedSection() {
  return (
    <section id="featured" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1520px] px-5 lg:px-10">
        <SectionTitle kicker="02 / New season">Looks worth a second look.</SectionTitle>
        <div className="grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-12 md:gap-5">
          {featured.map((item, index) => (
            <ScaleIn
              key={item.title}
              delay={index * 0.08}
              className={`${index === 0 || index === 5 ? "md:col-span-5" : "md:col-span-3"} ${index === 2 ? "md:col-span-4 md:pt-24" : ""} ${index === 3 ? "md:col-span-4" : ""} ${index === 4 ? "md:col-span-3 md:pt-16" : ""}`}
            >
              <article className="group overflow-hidden bg-muted">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    width={index === 4 ? 1600 : 912}
                    height={1200}
                    loading="lazy"
                    alt={item.title}
                    className={`aspect-[4/5] w-full object-cover ${item.position} transition-transform duration-700 group-hover:scale-[1.03]`}
                  />
                </div>
                <div className="mt-3 flex items-start justify-between gap-2 border-t border-foreground/30 pt-3">
                  <div>
                    <p className="font-display text-xl font-bold md:text-2xl">{item.title}</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      {item.tag}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground/70 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <ArrowUpRight size={18} className="shrink-0 text-primary" />
                </div>
              </article>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CampaignSection() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-hero text-hero-foreground md:min-h-[800px]">
      <img
        src={campaignImage}
        width={1600}
        height={1008}
        loading="lazy"
        alt="Three generations celebrating style together"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-campaign-shade" />
      <div className="relative mx-auto flex min-h-[620px] max-w-[1520px] flex-col justify-between px-5 py-12 md:min-h-[800px] md:px-10 md:py-16">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
            03 / The family campaign
          </p>
        </FadeIn>
        <SlideIn direction="left">
          <div>
            <h2 className="max-w-5xl font-display text-6xl leading-[0.85] font-black uppercase tracking-normal sm:text-8xl lg:text-[9rem]">
              Every
              <br />
              generation.
              <br />
              <span className="text-primary">In style.</span>
            </h2>
            <p className="mt-6 max-w-md text-hero-foreground/75">
              From first celebrations to forever traditions — find a look for every chapter.
            </p>
            <Link
              to="/collections"
              className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] border border-hero-foreground/40 text-hero-foreground hover:bg-hero-foreground/10"
            >
              Shop family edit <ArrowDownRight size={16} />
            </Link>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}

function USPSection() {
  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-20">
      <div className="mx-auto grid max-w-[1520px] gap-px bg-primary-foreground/25 px-5 md:grid-cols-4 lg:px-10">
        {usps.map(({ number, title, description }, i) => (
          <motion.div
            key={title}
            className="bg-primary p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <span className="text-xs font-bold">{number}</span>
            <Sparkles size={22} className="my-8" />
            <h3 className="font-display text-3xl font-black">{title}</h3>
            <p className="mt-3 max-w-[25ch] text-sm opacity-75">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function StoreSection() {
  return (
    <section id="store" className="bg-hero py-20 text-hero-foreground md:py-28">
      <div className="mx-auto grid max-w-[1520px] gap-10 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
        <ScaleIn>
          <div className="relative">
            <img
              src={showroomImage}
              width={1408}
              height={1056}
              loading="lazy"
              alt="SO NICE NX fashion showroom interior"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute -bottom-5 right-4 bg-primary px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground">
              Your next look is here
            </div>
          </div>
        </ScaleIn>
        <SlideIn direction="left">
          <div className="flex flex-col justify-between border-t border-hero-foreground/25 pt-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                04 / Visit SO NICE NX
              </p>
              <h2 className="mt-8 font-display text-6xl leading-[0.88] font-black uppercase md:text-8xl">
                Come find
                <br />
                your style.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-hero-foreground/75">
                A premium family showroom in the heart of Sausar — open 7 days a week with a
                welcoming team ready to help you find your perfect look.
              </p>
            </div>
            <div className="mt-12">
              <MapPin className="mb-5 text-primary" size={28} />
              <p className="max-w-md text-lg leading-relaxed">
                Vardhan Heights, Mahatma Jyotiba Foole Chauk, Mohgaon Road, Sausar, Madhya Pradesh
              </p>
              <p className="mt-4 text-sm text-hero-foreground/55">
                Landmark: Nang Mandir Chowk, opposite Saraswati Hall
              </p>
              <Link
                to="/store"
                className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Store details
              </Link>
            </div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}

function InstagramSection() {
  const instagramImages = [
    { img: womenImage, alt: "Women's collection style" },
    { img: menImage, alt: "Men's casual wear" },
    { img: kidsImage, alt: "Kids fashion" },
    { img: winterImage, alt: "Winter collection" },
    { img: campaignImage, alt: "Family campaign" },
    { img: heroImage, alt: "Showroom look" },
  ];

  return (
    <section id="instagram" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1520px] px-5 lg:px-10">
        <div className="flex flex-col justify-between gap-8 border-y border-foreground/20 py-12 md:flex-row md:items-end">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">@so_nice_nx</p>
            <h2 className="mt-4 max-w-4xl font-display text-5xl leading-[0.9] font-black uppercase md:text-8xl">
              Fresh fits.
              <br />
              Daily inspiration.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Follow us on Instagram for the latest arrivals, styling tips, and behind-the-scenes
              moments from the showroom.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="https://www.instagram.com/so_nice_nx/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Follow on Instagram <Instagram size={16} />
            </a>
          </FadeIn>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-px bg-foreground/20 md:grid-cols-3">
          {instagramImages.map(({ img, alt }, index) => (
            <ScaleIn key={`instagram-${index}`} delay={index * 0.08}>
              <a
                href="https://www.instagram.com/so_nice_nx/"
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square overflow-hidden bg-muted"
              >
                <img
                  src={img}
                  width={600}
                  height={600}
                  loading="lazy"
                  alt={alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-hero/0 transition-colors duration-300 group-hover:bg-hero/40" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Instagram size={32} className="text-hero-foreground" />
                </div>
              </a>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPreviewSection() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1520px] px-5 lg:px-10">
        <div className="flex flex-col justify-between gap-8 border-y border-foreground/20 py-12 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">@so_nice_nx</p>
            <h2 className="mt-4 max-w-4xl font-display text-4xl leading-[0.9] font-black uppercase sm:text-5xl md:text-7xl lg:text-8xl">
              Fresh fits.
              <br />
              Daily inspiration.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Contact us <ArrowDownRight size={16} />
          </Link>
        </div>
        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Quick Contact
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full border border-foreground/20 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
              <input
                required
                name="email"
                type="email"
                placeholder="Your email"
                className="w-full border border-foreground/20 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
              <textarea
                required
                name="message"
                rows={3}
                placeholder="Your message"
                className="w-full resize-none border border-foreground/20 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="inline-flex min-h-11 items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
              >
                {formStatus === "submitting" ? (
                  "Sending..."
                ) : (
                  <>
                    Send <Send size={14} />
                  </>
                )}
              </button>
              {formStatus === "success" && (
                <p className="flex items-center gap-2 text-sm text-primary">
                  <CheckCircle2 size={16} /> Message sent!
                </p>
              )}
            </form>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-1">
            {[
              ["Visit us", companyInfo.location, "Mon–Sat 10:30AM – 9:30PM"],
              ["Call us", "+91 98765 43210", "We pick up every call"],
              ["Email us", "hello@sonicenx.in", "Response within 24 hours"],
            ].map(([label, value, sub]) => (
              <div key={label} className="border-t border-foreground/20 pt-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{label}</p>
                <p className="mt-3 font-display text-xl font-bold">{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CompanyFooter() {
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
            {companyInfo.location}
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
        <div className="border-t border-background/20 pt-6 md:w-full">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">
                {companyInfo.company}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.14em] opacity-40">
                Assignment by {companyInfo.assignedTo} — {companyInfo.role}
              </p>
            </div>
            <p className="text-xs opacity-40">
              {companyInfo.startDate} — {companyInfo.deadline} · {companyInfo.assignmentType}
            </p>
          </div>
        </div>
        <p className="text-xs opacity-40 md:w-full">© 2026 SO NICE NX. All rights reserved.</p>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <HeaderWithAnimation />
      <HeroSection />
      <AboutSection />
      <CollectionsSection />
      <FeaturedSection />
      <CampaignSection />
      <USPSection />
      <StoreSection />
      <InstagramSection />
      <ContactPreviewSection />
      <CompanyFooter />
    </main>
  );
}
