import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronRight,
  Heart,
  ShoppingBag,
  Star,
  Truck,
  ShieldCheck,
  Package,
} from "lucide-react";
import { Header, Footer, SectionTitle } from "@/components/SiteNav";
import { SectionReveal, FadeIn, ScaleIn, SlideIn } from "@/components/AnimationWrapper";
import { collections, heroImage } from "@/data/collections";
import { productApi, type ApiProduct } from "@/lib/api";
import kurti1 from "@/assets/kurti1.jpg";
import kurti2 from "@/assets/kurti2.jpg";
import gown1 from "@/assets/gown1.jpg";
import partywear1 from "@/assets/partywear1.jpg";
import jeans2 from "@/assets/jeans2.jpg";
import denim3 from "@/assets/denim3.jpg";
import joggers2 from "@/assets/joggers2.jpg";
import frock11 from "@/assets/frock11.jpg";
import kids2 from "@/assets/kids2.jpg";
import jacket3 from "@/assets/jacket3.jpg";
import jacket4 from "@/assets/jacket4.jpg";
import jacket5 from "@/assets/jacket5.jpg";
import jacket14 from "@/assets/jacket14.jpg";
import furtop2 from "@/assets/furtop2.jpg";
import furtop12 from "@/assets/furtop12.jpg";

// Static fallback product data (matches backend seed data)
// Uses real product-specific images downloaded from Unsplash/Pexels
const staticProducts: ApiProduct[] = [
  { _id: "1", name: "Printed Cotton Kurti Set", category: "Women", subcategory: "Kurti Sets", gender: "Women", description: "Comfortable printed cotton kurti set for everyday wear.", price: 1299, image: kurti1, featured: true, available: true, createdAt: "", updatedAt: "" },
  { _id: "2", name: "Elegant Ethnic Kurti", category: "Women", subcategory: "Kurtis", gender: "Women", description: "Elegant ethnic kurti suitable for casual and festive occasions.", price: 999, image: kurti2, featured: true, available: true, createdAt: "", updatedAt: "" },
  { _id: "3", name: "Floral Party Gown", category: "Women", subcategory: "Gowns", gender: "Women", description: "Stylish floral gown designed for parties and special occasions.", price: 2199, image: gown1, featured: false, available: true, createdAt: "", updatedAt: "" },
  { _id: "4", name: "Classic Ethnic Party Wear", category: "Women", subcategory: "Party Wear", gender: "Women", description: "Elegant party wear collection with modern ethnic styling.", price: 1899, image: partywear1, featured: true, available: true, createdAt: "", updatedAt: "" },
  { _id: "5", name: "Classic Blue Jeans", category: "Men", subcategory: "Jeans", gender: "Men", description: "Classic blue jeans with a comfortable everyday fit.", price: 1499, image: jeans2, featured: true, available: true, createdAt: "", updatedAt: "" },
  { _id: "6", name: "Slim Fit Denim", category: "Men", subcategory: "Denims", gender: "Men", description: "Modern slim-fit denim for casual styling.", price: 1699, image: denim3, featured: false, available: true, createdAt: "", updatedAt: "" },
  { _id: "7", name: "Men's Casual Joggers", category: "Men", subcategory: "Joggers", gender: "Men", description: "Comfortable casual joggers for everyday wear.", price: 899, image: joggers2, featured: false, available: true, createdAt: "", updatedAt: "" },
  { _id: "8", name: "Girls Floral Frock", category: "Kids", subcategory: "Frocks", gender: "Kids", description: "Colorful floral frock designed for girls.", price: 799, image: frock11, featured: true, available: true, createdAt: "", updatedAt: "" },
  { _id: "9", name: "Kids Casual Outfit", category: "Kids", subcategory: "Casual Wear", gender: "Kids", description: "Comfortable casual fashion for kids.", price: 699, image: kids2, featured: false, available: true, createdAt: "", updatedAt: "" },
  { _id: "10", name: "Denim Winter Jacket", category: "Winter", subcategory: "Jackets", gender: "Unisex", description: "Classic denim jacket suitable for winter styling.", price: 1999, image: jacket5, featured: true, available: true, createdAt: "", updatedAt: "" },
  { _id: "11", name: "Cotton Winter Jacket", category: "Winter", subcategory: "Jackets", gender: "Unisex", description: "Warm cotton jacket designed for winter comfort.", price: 1799, image: jacket14, featured: false, available: true, createdAt: "", updatedAt: "" },
  { _id: "12", name: "Fur-Lined Winter Top", category: "Winter", subcategory: "Fur-lined Jackets", gender: "Unisex", description: "Warm fur-lined winter top for colder days.", price: 2299, image: furtop12, featured: true, available: true, createdAt: "", updatedAt: "" },
];

export const Route = createFileRoute("/collections/")({
  head: () => ({
    meta: [
      { title: "Collections | SO NICE NX" },
      {
        name: "description",
        content:
          "Explore our complete fashion collections for women, men, kids and winter wear at SO NICE NX, Sausar.",
      },
      { property: "og:title", content: "Collections | SO NICE NX" },
      {
        property: "og:description",
        content: "Explore our complete fashion collections for women, men, kids and winter wear.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CollectionsPage,
});

function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative min-h-[440px] sm:min-h-[520px] lg:min-h-[580px] w-full overflow-hidden bg-hero text-hero-foreground pt-20">
      {/* Background Image with top-aligned focal point so navbar never hides models */}
      <img
        src={heroImage}
        width={1920}
        height={1080}
        alt="SO NICE NX fashion"
        className="absolute inset-0 h-full w-full object-cover object-[center_top] opacity-85"
      />
      {/* Visual Overlay */}
      <div className="absolute inset-0 bg-hero-wash pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-hero via-hero/50 to-transparent pointer-events-none" />

      <div className="relative mx-auto flex min-h-[360px] sm:min-h-[440px] lg:min-h-[500px] max-w-[1520px] flex-col justify-end px-4 sm:px-6 lg:px-10 pb-10 sm:pb-14 lg:pb-16 pt-8 sm:pt-12">
        <motion.p
          className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.23em] text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="h-px w-10 bg-primary" />
          Curated for you
        </motion.p>
        <motion.h1
          className="max-w-[800px] font-display text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] leading-[0.9] sm:leading-[0.88] font-black uppercase tracking-normal"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-4 sm:mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-hero-foreground/80"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}

function CollectionCard({ item, index }: { item: (typeof collections)[0]; index: number }) {
  return (
    <ScaleIn delay={index * 0.1}>
      <article className="group relative overflow-hidden bg-hero">
        <img
          src={item.image}
          width={912}
          height={1200}
          loading="lazy"
          alt={`${item.name} collection`}
          className="aspect-[3/4] w-full object-cover object-[center_top] transition-transform duration-700 group-hover:scale-105"
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
        <div className="absolute inset-0 flex flex-col justify-end bg-hero/80 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:p-8">
          <p className="mb-4 max-w-sm text-sm leading-relaxed text-hero-foreground/80">
            {item.description}
          </p>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Key items
          </h4>
          <div className="mb-5 flex flex-wrap gap-2">
            {item.items.map((i) => (
              <span
                key={i}
                className="border border-hero-foreground/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-hero-foreground/80"
              >
                {i}
              </span>
            ))}
          </div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Why shop here
          </h4>
          <div className="mb-6 flex flex-wrap gap-2">
            {item.features.map((f) => (
              <span
                key={f}
                className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.1em] text-hero-foreground/70"
              >
                <Star size={10} className="text-primary" /> {f}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            Explore {item.name} <ArrowDownRight size={14} />
          </span>
        </div>
      </article>
    </ScaleIn>
  );
}

function ProductsByCategory({ category }: { category: "Women" | "Men" | "Kids" | "Winter" }) {
  const { data, isLoading } = useQuery({
    queryKey: ["products", category],
    queryFn: () => productApi.getAll(category).then((r) => r.data),
  });

  // Use API data if available, otherwise fallback to static data
  const products = data && data.length > 0 ? data : staticProducts.filter(p => p.category === category);

  if (isLoading && !data) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-64 animate-pulse bg-muted" />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex items-center gap-2 py-8 text-muted-foreground">
        <Package size={20} />
        <span className="text-sm">No products available in this category yet.</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ScaleIn key={product._id}>
          <article className="group overflow-hidden border border-foreground/15">
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                width={600}
                height={800}
                loading="lazy"
                alt={product.name}
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {product.featured && (
                <span className="absolute left-3 top-3 bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-primary-foreground">
                  Featured
                </span>
              )}
            </div>
            <div className="p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                {product.subcategory}
              </p>
              <h3 className="mt-1 font-display text-xl font-black">{product.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                {product.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-display text-2xl font-black text-primary">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  View <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </article>
        </ScaleIn>
      ))}
    </div>
  );
}

function CollectionsPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <Header showCta={false} />
      <PageHero
        title="Shop by world"
        subtitle="Four moods. One roof. Each collection is a world of its own — designed for every chapter of your life."
      />

      <SectionReveal direction="up">
        <section className="bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-[1520px] px-5 lg:px-10">
            <SectionTitle kicker="01 / All collections">Find your kind of beautiful.</SectionTitle>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {collections.map((item, index) => (
                <ScaleIn
                  key={item.name}
                  delay={index * 0.1}
                  className="group grid grid-cols-1 sm:grid-cols-2 gap-px bg-foreground/20 overflow-hidden"
                >
                  <div className="relative overflow-hidden bg-hero min-h-[280px] sm:min-h-[360px]">
                    <img
                      src={item.image}
                      width={912}
                      height={1200}
                      loading="lazy"
                      alt={`${item.name} collection`}
                      className="aspect-[3/4] h-full w-full object-cover object-[center_top] transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 font-display text-5xl sm:text-6xl font-black text-hero-foreground/20">
                      {item.number}
                    </span>
                  </div>
                  <SlideIn
                    direction="left"
                    delay={index * 0.15}
                    className="flex flex-col justify-between bg-hero p-6 text-hero-foreground sm:p-10"
                  >
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-hero-foreground/60">
                        {item.note}
                      </p>
                      <h3 className="mt-2 font-display text-4xl font-black sm:text-5xl">
                        {item.name}
                      </h3>
                      <p className="mt-4 max-w-xs text-sm leading-relaxed text-hero-foreground/75">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-8">
                      <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                        Key items
                      </h4>
                      <div className="mb-5 flex flex-wrap gap-2">
                        {item.items.map((i) => (
                          <span
                            key={i}
                            className="border border-hero-foreground/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-hero-foreground/80"
                          >
                            {i}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                        <ShoppingBag size={14} /> {item.features.length} reasons to love
                      </div>
                    </div>
                  </SlideIn>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal direction="up">
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-[1520px] px-5 lg:px-10">
            <SectionTitle kicker="02 / Products">Shop the collection.</SectionTitle>

            <div className="mb-16">
              <h3 className="mb-6 font-display text-3xl font-black uppercase tracking-tight">
                Women
              </h3>
              <ProductsByCategory category="Women" />
            </div>

            <div className="mb-16">
              <h3 className="mb-6 font-display text-3xl font-black uppercase tracking-tight">
                Men
              </h3>
              <ProductsByCategory category="Men" />
            </div>

            <div className="mb-16">
              <h3 className="mb-6 font-display text-3xl font-black uppercase tracking-tight">
                Kids
              </h3>
              <ProductsByCategory category="Kids" />
            </div>

            <div className="mb-16">
              <h3 className="mb-6 font-display text-3xl font-black uppercase tracking-tight">
                Winter
              </h3>
              <ProductsByCategory category="Winter" />
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal direction="up">
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-[1520px] px-5 lg:px-10">
            <SectionTitle kicker="03 / Promise">What makes us different.</SectionTitle>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Heart,
                  title: "Curated with care",
                  desc: "Every piece is handpicked for quality, comfort, and style.",
                },
                {
                  icon: ShoppingBag,
                  title: "Wide selection",
                  desc: "From ethnic to casual — we cover every wardrobe need.",
                },
                {
                  icon: ShieldCheck,
                  title: "Quality guarantee",
                  desc: "Premium fabrics and rigorous quality checks on every item.",
                },
                {
                  icon: Truck,
                  title: "Easy returns",
                  desc: "Hassle-free returns and exchanges within 7 days.",
                },
              ].map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  className="border border-foreground/15 p-6 md:p-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Icon size={28} className="text-primary" />
                  <h3 className="mt-5 font-display text-2xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      <SectionReveal direction="up">
        <section className="relative min-h-[420px] overflow-hidden bg-hero text-hero-foreground">
          <div className="absolute inset-0 bg-hero-wash" />
          <div className="relative mx-auto flex min-h-[420px] max-w-[1520px] flex-col items-start justify-center px-5 py-12 lg:px-10">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                05 / Start exploring
              </p>
            </FadeIn>
            <SlideIn direction="left">
              <h2 className="mt-4 max-w-4xl font-display text-5xl leading-[0.88] font-black uppercase sm:text-7xl">
                Your wardrobe
                <br />
                starts <span className="text-primary">here.</span>
              </h2>
              <p className="mt-6 max-w-md text-hero-foreground/75">
                Not sure where to begin? Our in-store stylists can help you find the perfect look
                for any occasion.
              </p>
            </SlideIn>
            <FadeIn delay={0.2}>
              <Link
                to="/store"
                className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Visit the showroom <ChevronRight size={16} />
              </Link>
            </FadeIn>
          </div>
        </section>
      </SectionReveal>

      <Footer />
    </main>
  );
}
