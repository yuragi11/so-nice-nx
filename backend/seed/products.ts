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
    image: "/assets/kurti1.jpg",
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
    image: "/assets/kurti2.jpg",
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
    image: "/assets/gown1.jpg",
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
    image: "/assets/partywear1.jpg",
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
    image: "/assets/jeans2.jpg",
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
    image: "/assets/denim3.jpg",
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
    image: "/assets/joggers2.jpg",
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
    image: "/assets/frock11.jpg",
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
    image: "/assets/kids2.jpg",
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
    image: "/assets/jacket5.jpg",
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
    image: "/assets/jacket14.jpg",
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
    image: "/assets/furtop12.jpg",
    featured: true,
    available: true
  }
];

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("12 products seeded successfully");
    mongoose.disconnect();
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
})();