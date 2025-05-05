
import React from "react";
import ProductCard from "@/components/shared/ProductCard";
import Button from "@/components/shared/Button";

const FeaturedProducts: React.FC = () => {
  // Updated featured products data with products from Chanel, Dior, and La Mer
  const featuredProducts = [
    {
      id: "p1",
      name: "N°5 Eau de Parfum",
      brand: "Chanel",
      price: 146.00,
      imageUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2148&auto=format&fit=crop",
      category: "Fragrance",
      isBestseller: true,
    },
    {
      id: "p2",
      name: "Rouge Coco Lipstick",
      brand: "Chanel",
      price: 45.00,
      imageUrl: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Lipstick",
      isNew: true,
    },
    {
      id: "p3",
      name: "Addict Lip Glow",
      brand: "Dior",
      price: 38.00,
      imageUrl: "https://images.pexels.com/photos/3373738/pexels-photo-3373738.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Lip Balm",
      isBestseller: true,
    },
    {
      id: "p4",
      name: "Crème de la Mer",
      brand: "La Mer",
      price: 190.00,
      imageUrl: "https://images.unsplash.com/photo-1631730359585-38a4935811d0?q=80&w=2787&auto=format&fit=crop",
      category: "Moisturizer",
      isBestseller: true,
    },
    {
      id: "p5",
      name: "Forever Skin Glow Foundation",
      brand: "Dior",
      price: 52.00,
      imageUrl: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Foundation",
    },
    {
      id: "p6",
      name: "Les Beiges Healthy Glow Foundation",
      brand: "Chanel",
      price: 65.00,
      imageUrl: "https://images.pexels.com/photos/2631021/pexels-photo-2631021.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Foundation",
    },
    {
      id: "p7",
      name: "The Concentrate",
      brand: "La Mer",
      price: 210.00,
      imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2980&auto=format&fit=crop",
      category: "Serum",
      isNew: true,
    },
    {
      id: "p8",
      name: "Sauvage Eau de Toilette",
      brand: "Dior",
      price: 95.00,
      imageUrl: "https://images.pexels.com/photos/5938/food-wood-lipstick.jpg?auto=compress&cs=tinysrgb&w=800",
      category: "Fragrance",
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
