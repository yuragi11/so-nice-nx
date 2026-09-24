import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import Product from "../src/models/Product";

const products = [
  {
    name: "Printed Cotton Kurti Set",
    category: "Women",
    subcategory: "Kurti Sets",
    gender: "Women",
    description: "Comfortable printed cotton kurti set for everyday wear.",
    price: 1299,
    image: "https://placehold.co/600x800?text=Kurti+Set",
    featured: true,
    available: true
  },
  {
    name: "Elegant Ethnic Kurti",
    category: "Women",
    subcategory: "Kurtis",
    gender: "Women",
    description: "Elegant ethnic kurti suitable for casual and festive occasions.",
    price: 999,
    image: "https://placehold.co/600x800?text=Ethnic+Kurti",
    featured: true,
    available: true
  },
  {
    name: "Floral Party Gown",
    category: "Women",
    subcategory: "Gowns",
    gender: "Women",
    description: "Stylish floral gown designed for parties and special occasions.",
    price: 2199,
    image: "https://placehold.co/600x800?text=Party+Gown",
    featured: false,
    available: true
  },
  {
    name: "Classic Ethnic Party Wear",
    category: "Women",
    subcategory: "Party Wear",
    gender: "Women",
    description: "Elegant party wear collection with modern ethnic styling.",
    price: 1899,
    image: "https://placehold.co/600x800?text=Party+Wear",
    featured: true,
    available: true
  },
  {
    name: "Classic Blue Jeans",
    category: "Men",
    subcategory: "Jeans",
    gender: "Men",
    description: "Classic blue jeans with a comfortable everyday fit.",
    price: 1499,
    image: "https://placehold.co/600x800?text=Mens+Jeans",
    featured: true,
    available: true
  },
  {
    name: "Slim Fit Denim",
    category: "Men",
    subcategory: "Denims",
    gender: "Men",
    description: "Modern slim-fit denim for casual styling.",
    price: 1699,
    image: "https://placehold.co/600x800?text=Denim",
    featured: false,
    available: true
  },
  {
    name: "Men's Casual Joggers",
    category: "Men",
    subcategory: "Joggers",
    gender: "Men",
    description: "Comfortable casual joggers for everyday wear.",
    price: 899,
    image: "https://placehold.co/600x800?text=Joggers",
    featured: false,
    available: true
  },
  {
    name: "Girls Floral Frock",
    category: "Kids",
    subcategory: "Frocks",
    gender: "Kids",
    description: "Colorful floral frock designed for girls.",
    price: 799,
    image: "https://placehold.co/600x800?text=Girls+Frock",
    featured: true,
    available: true
  },
  {
    name: "Kids Casual Outfit",
    category: "Kids",
    subcategory: "Casual Wear",
    gender: "Kids",
    description: "Comfortable casual fashion for kids.",
    price: 699,
    image: "https://placehold.co/600x800?text=Kids+Wear",
    featured: false,
    available: true
  },
  {
    name: "Denim Winter Jacket",
    category: "Winter",
    subcategory: "Jackets",
    gender: "Unisex",
    description: "Classic denim jacket suitable for winter styling.",
    price: 1999,
    image: "https://placehold.co/600x800?text=Denim+Jacket",
    featured: true,
    available: true
  },
  {
    name: "Cotton Winter Jacket",
    category: "Winter",
    subcategory: "Jackets",
    gender: "Unisex",
    description: "Warm cotton jacket designed for winter comfort.",
    price: 1799,
    image: "https://placehold.co/600x800?text=Cotton+Jacket",
    featured: false,
    available: true
  },
  {
    name: "Fur-Lined Winter Top",
    category: "Winter",
    subcategory: "Fur-lined Jackets",
    gender: "Unisex",
    description: "Warm fur-lined winter top for colder days.",
    price: 2299,
    image: "https://placehold.co/600x800?text=Winter+Top",
    featured: true,
    available: true
  }
];

const seedProducts = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");

    await Product.deleteMany({});
    await Product.insertMany(products);

    console.log(`${products.length} products seeded successfully`);

    await mongoose.disconnect();
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedProducts();