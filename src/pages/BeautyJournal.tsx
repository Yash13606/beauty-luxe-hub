
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Button from "@/components/shared/Button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

const BeautyJournal: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: "blog1",
      title: "The Art of Skincare Layering",
      excerpt: "Discover the proper order to apply your skincare products for maximum effectiveness and radiant results.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop",
      author: "Emma Johnson",
      date: "May 2, 2025",
      category: "Skincare"
    },
    {
      id: "blog2",
      title: "Summer Makeup Trends 2025",
      excerpt: "From luminous skin to vibrant eyes, explore the hottest makeup trends that will dominate this summer.",
      image: "https://images.unsplash.com/photo-1596704017254-9a03165bbe96?q=80&w=2574&auto=format&fit=crop",
      author: "Sophie Williams",
      date: "April 28, 2025",
      category: "Makeup"
    },
    {
      id: "blog3",
      title: "The Science Behind La Mer's Miracle Broth",
      excerpt: "An inside look at the legendary ingredient that powers one of luxury skincare's most coveted brands.",
      image: "https://images.unsplash.com/photo-1556228852-6d35a585d566?q=80&w=2574&auto=format&fit=crop",
      author: "Dr. Linda Chen",
      date: "April 22, 2025",
      category: "Brand Stories"
    },
    {
      id: "blog4",
      title: "Perfume Layering: Creating Your Signature Scent",
      excerpt: "Learn how to combine fragrances to create a unique scent that's distinctly yours.",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2670&auto=format&fit=crop",
      author: "James Richardson",
      date: "April 18, 2025",
      category: "Fragrance"
    },
    {
      id: "blog5",
      title: "Clean Beauty: Separating Fact from Fiction",
      excerpt: "A dermatologist's guide to understanding clean beauty claims and making informed choices.",
      image: "https://images.unsplash.com/photo-1619451683257-301304407404?q=80&w=2574&auto=format&fit=crop",
      author: "Dr. Maya Patel",
      date: "April 15, 2025",
      category: "Education"
    },
    {
      id: "blog6",
      title: "The Ultimate Guide to French Pharmacy Favorites",
      excerpt: "Discover why beauty insiders swear by these affordable yet effective French pharmacy products.",
      image: "https://images.unsplash.com/photo-1571781565036-d3f759be73e4?q=80&w=2670&auto=format&fit=crop",
      author: "Claire Dubois",
      date: "April 10, 2025",
      category: "International Beauty"
    }
  ];

  const categories = ["All", "Skincare", "Makeup", "Fragrance", "Brand Stories", "Education", "International Beauty"];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-luxe-rosegold/30 to-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-luxe-charcoal text-center mb-4">Beauty Journal</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">Expert tips, insider knowledge, and beauty inspiration from the world of luxury cosmetics.</p>
            
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {categories.map((category) => (
                <button 
                  key={category} 
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "All" 
                      ? "bg-luxe-magenta text-white" 
                      : "bg-white text-luxe-charcoal hover:bg-luxe-rosegold/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-luxe-magenta font-semibold">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <CardTitle className="font-playfair text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="text-sm text-gray-600">By {post.author}</div>
                  <Button variant="link" className="p-0 h-auto text-luxe-magenta">Read More →</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button>Load More Articles</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BeautyJournal;
