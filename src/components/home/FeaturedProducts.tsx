
import React from "react";
import ProductCard from "@/components/shared/ProductCard";
import Button from "@/components/shared/Button";

const FeaturedProducts: React.FC = () => {
  // Sample featured products data
  const featuredProducts = [
    {
      id: "p1",
      name: "Matte Revolution Lipstick",
      brand: "Dior Beauty",
      price: 58.00,
      imageUrl: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Lipstick",
      isNew: true,
    },
    {
      id: "p2",
      name: "Rouge Allure Velvet",
      brand: "Chanel Beauty",
      price: 62.00,
      imageUrl: "https://images.pexels.com/photos/3373738/pexels-photo-3373738.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Lipstick",
      isBestseller: true,
    },
    {
      id: "p3",
      name: "Liquid Matte Lip Color",
      brand: "Kylie Cosmetics",
      price: 42.00,
      imageUrl: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Lipstick",
    },
    {
      id: "p4",
      name: "Rouge Pur Couture",
      brand: "YSL Beauty",
      price: 55.00,
      imageUrl: "https://images.pexels.com/photos/5938/food-wood-lipstick.jpg?auto=compress&cs=tinysrgb&w=800",
      category: "Lipstick",
      isBestseller: true,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-luxe-charcoal">Featured Products</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium beauty products from the world's most prestigious brands.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${parseInt(product.id.slice(1)) * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="px-8">View All Products</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
