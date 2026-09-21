import womenImage from "@/assets/collection-women.jpg";
import menImage from "@/assets/collection-men.jpg";
import kidsImage from "@/assets/collection-kids.jpg";
import winterImage from "@/assets/collection-winter.jpg";
import campaignImage from "@/assets/family-campaign.jpg";
import heroImage from "@/assets/so-nice-hero.jpg";
import showroomImage from "@/assets/showroom.jpg";

export interface CollectionItem {
  name: string;
  shortName: string;
  note: string;
  description: string;
  image: string;
  number: string;
  items: string[];
  features: string[];
}

export interface FeaturedItem {
  title: string;
  tag: string;
  image: string;
  position: string;
  description: string;
}

export interface USPItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const collections: CollectionItem[] = [
  {
    name: "Women",
    shortName: "Women",
    note: "Ethnic · Kurtis · Party",
    description:
      "Elegant ethnic wear designed for every occasion — from daily wear to grand celebrations. Discover kurtis, party dresses, and traditional outfits crafted with premium fabrics.",
    image: womenImage,
    number: "01",
    items: [
      "Cotton Kurtis",
      "Party Wear Sets",
      "Ethnic Dresses",
      "Printed Tops",
      "Lehenga Cholis",
      "Stole & Dupattas",
    ],
    features: ["Premium fabrics", "Trendy prints", "Comfortable fit", "Festive collection"],
  },
  {
    name: "Men",
    shortName: "Men",
    note: "Denim · Casual · Classics",
    description:
      "Timeless and contemporary menswear for every lifestyle. From relaxed casuals to sharp party wear, find pieces that define confidence and style.",
    image: menImage,
    number: "02",
    items: [
      "Denim Jeans",
      "Casual Shirts",
      "Kurta Sets",
      "Polo T-Shirts",
      "Chinos",
      "Winter Jackets",
    ],
    features: ["Classic fits", "Modern cuts", "Durable materials", "All-day comfort"],
  },
  {
    name: "Kids",
    shortName: "Kids",
    note: "Colour · Comfort · Play",
    description:
      "Colourful and comfortable fashion designed for little ones. Playful prints, soft fabrics, and durable builds for kids who are always on the move.",
    image: kidsImage,
    number: "03",
    items: [
      "Graphic T-Shirts",
      "Ethnic Sets",
      "School Uniforms",
      "Raincoats",
      "Shorts & Trousers",
      "Sweaters",
    ],
    features: ["Skin-friendly fabric", "Vibrant colours", "Easy care", "Growing trends"],
  },
  {
    name: "Winter",
    shortName: "Winter",
    note: "Jackets · Knits · Layers",
    description:
      "Stay warm without compromising on style. Our winter collection features cozy knits, insulated jackets, and layered looks for the chilliest days.",
    image: winterImage,
    number: "04",
    items: [
      "Puffers & Jackets",
      "Knit Sweaters",
      "Cardigans",
      "Thermal Wear",
      "Scarves & Gloves",
      "Woolen Caps",
    ],
    features: ["Thermal insulated", "Lightweight warmth", "Stylish layers", "Weather-ready"],
  },
];

export const featured: FeaturedItem[] = [
  {
    title: "Wine Story",
    tag: "Kurti Set",
    image: womenImage,
    position: "object-center",
    description:
      "A deep wine-toned kurti set with intricate detailing — perfect for evening gatherings and festive dinners.",
  },
  {
    title: "After Hours",
    tag: "Men's Casual",
    image: menImage,
    position: "object-center",
    description:
      "Smart casual essentials that transition seamlessly from office to evening — minimal effort, maximum style.",
  },
  {
    title: "Little Sunshine",
    tag: "Kids Fashion",
    image: kidsImage,
    position: "object-center",
    description:
      "Bright, fun, and comfortable — our kids' collection brings joy to every little fashionista.",
  },
  {
    title: "Soft Structure",
    tag: "Winter Edit",
    image: winterImage,
    position: "object-center",
    description:
      "Thoughtfully designed winter layers that keep you warm with refined silhouettes and soft textures.",
  },
  {
    title: "Together, Always",
    tag: "Family Edit",
    image: campaignImage,
    position: "object-center",
    description:
      "Matching family looks for every season. Because the best memories are made together.",
  },
  {
    title: "The New Classic",
    tag: "Occasion Wear",
    image: heroImage,
    position: "object-right",
    description:
      "Redefining traditional with contemporary elegance — occasion wear that turns heads.",
  },
];

export const usps: USPItem[] = [
  {
    number: "01",
    title: "Quality",
    description: "Carefully selected fabrics and styles that stand the test of time.",
    icon: "Sparkles",
  },
  {
    number: "02",
    title: "Family fashion",
    description: "Men, women and children — together under one roof.",
    icon: "Heart",
  },
  {
    number: "03",
    title: "Fair pricing",
    description: "Modern fashion at honest value. No hidden costs.",
    icon: "Tag",
  },
  {
    number: "04",
    title: "Local experience",
    description: "A showroom proudly rooted in Sausar, Madhya Pradesh.",
    icon: "MapPin",
  },
];

export { heroImage, showroomImage, campaignImage };

export interface StoreInfo {
  name: string;
  address: string;
  landmark: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  whatsapp: string;
  hours: { day: string; open: string; close: string }[];
  services: string[];
  mapUrl: string;
}

export const storeInfo: StoreInfo = {
  name: "SO NICE NX",
  address: "Vardhan Heights, Mahatma Jyotiba Foole Chauk",
  landmark: "Nang Mandir Chowk, opposite Saraswati Hall",
  city: "Sausar",
  state: "Madhya Pradesh",
  phone: "+91 98765 43210",
  email: "hello@sonicenx.in",
  whatsapp: "+91 98765 43210",
  hours: [
    { day: "Monday", open: "10:30 AM", close: "09:00 PM" },
    { day: "Tuesday", open: "10:30 AM", close: "09:00 PM" },
    { day: "Wednesday", open: "10:30 AM", close: "09:00 PM" },
    { day: "Thursday", open: "10:30 AM", close: "09:00 PM" },
    { day: "Friday", open: "10:30 AM", close: "09:30 PM" },
    { day: "Saturday", open: "10:30 AM", close: "09:30 PM" },
    { day: "Sunday", open: "11:00 AM", close: "08:00 PM" },
  ],
  services: [
    "In-store shopping",
    "Personal styling advice",
    "Fabric selection",
    "Custom stitching inquiries",
    "Gift wrapping",
    "Group/party bookings",
  ],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Vardhan+Heights+Mohgaon+Road+Sausar+Madhya+Pradesh",
};

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  youtube: string;
}

export const contactInfo: ContactInfo = {
  email: "hello@sonicenx.in",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  instagram: "https://www.instagram.com/so_nice_nx/",
  facebook: "https://www.facebook.com/so_nice_nx",
  youtube: "https://www.youtube.com/@sonicenx",
};
