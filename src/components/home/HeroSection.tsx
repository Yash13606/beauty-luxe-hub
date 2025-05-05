
import React from "react";
import Button from "@/components/shared/Button";

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-luxe-rosegold/30 to-white">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold tracking-tight text-luxe-charcoal">
              Luxury Beauty<br />
              <span className="text-luxe-magenta">Redefined</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-md">
              Discover a curated collection of premium cosmetics from the world's most prestigious beauty brands.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg">Shop Now</Button>
              <Button variant="outline" size="lg">Explore Brands</Button>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full max-w-lg">
              {/* Decorative elements */}
              <div className="absolute top-0 -right-4 w-72 h-72 bg-luxe-rosegold rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
              <div className="absolute -bottom-8 left-10 w-72 h-72 bg-luxe-magenta rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
              
              {/* Main image */}
              <img
                src="https://images.unsplash.com/photo-1612938376085-13c3a86ea63d?q=80&w=1000&auto=format&fit=crop"
                alt="Luxury cosmetics collection"
                className="relative rounded-xl shadow-2xl object-cover w-full h-auto aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Curved gradient separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="white">
          <path fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
