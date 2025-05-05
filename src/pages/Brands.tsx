
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/shared/ProductCard";

interface Brand {
  id: string;
  name: string;
  description: string;
  logo: string;
  heroImage: string;
  year: number;
  featured: boolean;
  products: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    category: string;
    isBestseller?: boolean;
    isNew?: boolean;
  }[];
}

const Brands: React.FC = () => {
  const brands: Brand[] = [
    {
      id: "chanel",
      name: "Chanel",
      description: "Founded by Gabrielle 'Coco' Chanel in 1910, Chanel is a symbol of timeless elegance and luxury. From their iconic N°5 fragrance to their innovative skincare and makeup collections, Chanel continues to define beauty with unmistakable Parisian sophistication.",
      logo: "https://images.unsplash.com/photo-1547887538-cc3e6d7f55b9?q=80&w=2787&auto=format&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1583704861373-14c127f5073c?q=80&w=2574&auto=format&fit=crop",
      year: 1910,
      featured: true,
      products: [
        { id: "chanel1", name: "N°5 Eau de Parfum", price: 146.00, imageUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2148&auto=format&fit=crop", category: "Fragrance", isBestseller: true },
        { id: "chanel2", name: "Rouge Coco Lipstick", price: 45.00, imageUrl: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800", category: "Lipstick", isNew: true },
        { id: "chanel3", name: "Les Beiges Healthy Glow Foundation", price: 65.00, imageUrl: "https://images.pexels.com/photos/2631021/pexels-photo-2631021.jpeg?auto=compress&cs=tinysrgb&w=800", category: "Foundation" },
        { id: "chanel4", name: "Le Lift Crème", price: 165.00, imageUrl: "https://images.unsplash.com/photo-1571781565036-d3f759be73e4?q=80&w=2670&auto=format&fit=crop", category: "Skincare" },
      ]
    },
    {
      id: "dior",
      name: "Dior",
      description: "Christian Dior founded his eponymous fashion house in 1946, and since then, Dior Beauty has become synonymous with French luxury and innovation. From revolutionary skincare to glamorous makeup and captivating fragrances, Dior continues to push the boundaries of beauty with artistic vision and scientific excellence.",
      logo: "https://images.unsplash.com/photo-1605989545341-c261ce752adb?q=80&w=2865&auto=format&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1595535373389-412eb4d669e2?q=80&w=2574&auto=format&fit=crop",
      year: 1946,
      featured: true,
      products: [
        { id: "dior1", name: "Addict Lip Glow", price: 38.00, imageUrl: "https://images.pexels.com/photos/3373738/pexels-photo-3373738.jpeg?auto=compress&cs=tinysrgb&w=800", category: "Lip Balm", isBestseller: true },
        { id: "dior2", name: "Forever Skin Glow Foundation", price: 52.00, imageUrl: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=800", category: "Foundation" },
        { id: "dior3", name: "Sauvage Eau de Toilette", price: 95.00, imageUrl: "https://images.pexels.com/photos/5938/food-wood-lipstick.jpg?auto=compress&cs=tinysrgb&w=800", category: "Fragrance", isBestseller: true },
        { id: "dior4", name: "Capture Totale Super Potent Serum", price: 85.00, imageUrl: "https://images.unsplash.com/photo-1590393802688-ab3fd8a5184b?q=80&w=2574&auto=format&fit=crop", category: "Skincare", isNew: true },
      ]
    },
    {
      id: "lamer",
      name: "La Mer",
      description: "Born from the sea, La Mer's journey began when Dr. Max Huber created his legendary Miracle Broth™ after suffering burns in a laboratory accident. Today, La Mer is renowned for its transformative moisturizers and treatments that harness the healing powers of the sea through meticulous bio-fermentation processes, delivering remarkable results for even the most demanding skin.",
      logo: "https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?q=80&w=2825&auto=format&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2574&auto=format&fit=crop",
      year: 1965,
      featured: true,
      products: [
        { id: "lamer1", name: "Crème de la Mer", price: 190.00, imageUrl: "https://images.unsplash.com/photo-1631730359585-38a4935811d0?q=80&w=2787&auto=format&fit=crop", category: "Moisturizer", isBestseller: true },
        { id: "lamer2", name: "The Concentrate", price: 210.00, imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2980&auto=format&fit=crop", category: "Serum", isNew: true },
        { id: "lamer3", name: "The Eye Concentrate", price: 235.00, imageUrl: "https://images.unsplash.com/photo-1612532275214-e4ca76d0e4d1?q=80&w=2787&auto=format&fit=crop", category: "Eye Care" },
        { id: "lamer4", name: "The Renewal Oil", price: 245.00, imageUrl: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=2574&auto=format&fit=crop", category: "Facial Oil" },
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-luxe-rosegold/30 to-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-luxe-charcoal text-center mb-4">Luxury Brands</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Discover the heritage and iconic products from the world's most prestigious beauty houses.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {brands.map((brand, index) => (
            <div key={brand.id} className="mb-24 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <img 
                    src={brand.heroImage} 
                    alt={`${brand.name} collection`}
                    className="rounded-lg shadow-lg w-full h-auto aspect-[4/3] object-cover"
                  />
                </div>
                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="mb-4">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="h-16 object-contain mb-4"
                    />
                    <h2 className="font-playfair text-3xl font-bold text-luxe-charcoal">
                      {brand.name}
                      <span className="text-gray-500 text-lg font-normal ml-3">Est. {brand.year}</span>
                    </h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{brand.description}</p>
                  <button className="text-luxe-magenta font-medium hover:underline transition-all">
                    Explore {brand.name} Collection →
                  </button>
                </div>
              </div>

              <h3 className="font-playfair text-2xl text-luxe-charcoal font-semibold mb-6">
                Bestsellers from {brand.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {brand.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    brand={brand.name}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    category={product.category}
                    isNew={product.isNew}
                    isBestseller={product.isBestseller}
                  />
                ))}
              </div>
              <div className="text-center">
                <button className="inline-flex items-center justify-center px-6 py-2 border border-luxe-magenta text-luxe-magenta font-medium rounded hover:bg-luxe-magenta/5 transition-colors">
                  View All {brand.name} Products
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Brands;
