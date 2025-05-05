
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandDirectory from "@/components/home/BrandDirectory";
import ProductCategories from "@/components/home/ProductCategories";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProducts />
        <div className="py-16 bg-luxe-rosegold/10 flex items-center justify-center px-4">
          <div className="text-center max-w-3xl">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-luxe-charcoal mb-6">
              Where Luxury Meets Beauty
            </h2>
            <p className="text-gray-700 leading-relaxed">
              LUXE GLOW is your premier destination for luxury cosmetics and beauty products. We curate the finest selections from the world's most prestigious brands, offering you unparalleled quality and elegance. Discover a world of beauty excellence, where every product tells a story of heritage, innovation, and timeless allure.
            </p>
          </div>
        </div>
        <ProductCategories />
        <BrandDirectory />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
