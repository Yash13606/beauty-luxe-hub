
import React from "react";

interface CategoryCard {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProductCategories: React.FC = () => {
  const categories: CategoryCard[] = [
    {
      title: "Lipstick",
      description: "From matte to glossy, find your perfect lip color",
      image: "https://images.pexels.com/photos/4006220/pexels-photo-4006220.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#lipstick"
    },
    {
      title: "Face Makeup",
      description: "Foundations, concealers, and powders for flawless skin",
      image: "https://images.pexels.com/photos/2253834/pexels-photo-2253834.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#face"
    },
    {
      title: "Eyes",
      description: "Eyeshadows, liners, and mascaras for captivating eyes",
      image: "https://images.pexels.com/photos/1499516/pexels-photo-1499516.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#eyes"
    },
    {
      title: "Skincare",
      description: "Premium skincare for radiant, healthy-looking skin",
      image: "https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#skincare"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-luxe-charcoal">Product Categories</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections of premium beauty products across various categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={category.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <a 
                href={category.link}
                className="group relative block overflow-hidden rounded-xl"
              >
                <div className="aspect-video md:aspect-[7/4] overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="font-playfair text-white text-2xl font-semibold group-hover:text-luxe-rosegold transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-white/80 mt-2">{category.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
