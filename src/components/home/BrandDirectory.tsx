
import React from "react";

const BrandDirectory: React.FC = () => {
  const brands = [
    { name: "Huda Beauty", logo: "https://images.pexels.com/photos/5417837/pexels-photo-5417837.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "NARS", logo: "https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "Clarins", logo: "https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "Kylie Cosmetics", logo: "https://images.pexels.com/photos/3785170/pexels-photo-3785170.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "Shiseido", logo: "https://images.pexels.com/photos/3192740/pexels-photo-3192740.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "Lancôme", logo: "https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "Dior Beauty", logo: "https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "Chanel Beauty", logo: "https://images.pexels.com/photos/5529541/pexels-photo-5529541.jpeg?auto=compress&cs=tinysrgb&w=800" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-luxe-rosegold/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-luxe-charcoal">Luxury Brands</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our collection of the world's most prestigious beauty brands, each bringing their unique heritage and innovation.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <div 
              key={brand.name} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a href="#" className="group block">
                <div className="aspect-square rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-md">
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`} 
                      className="object-cover w-full h-full rounded transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
                <h3 className="mt-3 text-center font-medium text-luxe-charcoal group-hover:text-luxe-magenta transition-colors">
                  {brand.name}
                </h3>
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a 
            href="#" 
            className="text-luxe-magenta font-medium hover:text-luxe-magenta/80 hover:underline transition-colors"
          >
            View All Luxury Brands
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandDirectory;
