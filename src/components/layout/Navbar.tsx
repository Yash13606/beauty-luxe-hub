
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingBag, Heart, User, Menu, X, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const { totalItems, setIsCartOpen } = useCart();
  const { totalWishlistItems, setIsWishlistOpen } = useWishlist();
  const navigate = useNavigate();

  useEffect(() => {
    // Check current user on load
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user || null);
    };
    
    checkUser();

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success("Signed out successfully");
      navigate("/");
    } catch (error: any) {
      toast.error(error.message || "Error signing out");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const categories = [
    {
      name: "Lipstick",
      subcategories: ["Matte", "Cream", "Gloss", "Stain", "Liquid", "Long-wear", "Hydrating", "Vegan/Clean"]
    },
    {
      name: "Face",
      subcategories: ["Foundation", "Concealer", "Powder", "Blush", "Bronzer", "Highlighter", "Contour"]
    },
    {
      name: "Eyes",
      subcategories: ["Eyeshadow", "Eyeliner", "Mascara", "Eyebrow"]
    },
    {
      name: "Skincare",
      subcategories: ["Cleansers", "Moisturizers", "Serums", "Masks", "Treatments"]
    },
    {
      name: "Sets & Gifts",
      subcategories: ["Value sets", "Gift collections", "Limited editions"]
    }
  ];

  return (
    <header className="relative bg-white border-b border-gray-100">
      {/* Top bar with branding */}
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu trigger */}
          <button 
            className="lg:hidden p-2" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-luxe-charcoal" />
            ) : (
              <Menu className="h-6 w-6 text-luxe-charcoal" />
            )}
          </button>

          {/* Logo */}
          <div className="flex-1 lg:flex-initial text-center lg:text-left">
            <Link to="/">
              <h1 className="font-playfair font-bold text-2xl text-luxe-charcoal tracking-wide">
                LUXE<span className="text-luxe-magenta">GLOW</span>
              </h1>
              <p className="hidden lg:block text-xs text-gray-500 italic">Where Luxury Meets Beauty</p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 ml-12">
            {categories.map((category) => (
              <div key={category.name} className="group relative py-2">
                <button className="flex items-center text-sm font-medium hover:text-luxe-magenta">
                  {category.name}
                </button>
                <div className="absolute left-0 top-full z-10 mt-2 w-56 rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2 px-3 border-t-2 border-luxe-magenta">
                    {category.subcategories.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-luxe-rosegold/20 hover:text-luxe-magenta rounded"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <Link to="/brands" className="text-sm font-medium hover:text-luxe-magenta">
              Brands
            </Link>
            <Link to="/beauty-journal" className="text-sm font-medium hover:text-luxe-magenta">
              Beauty Journal
            </Link>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden lg:flex items-center justify-center w-8 h-8 text-luxe-charcoal hover:text-luxe-magenta">
              <Search className="h-5 w-5" />
            </button>
            <button 
              className="relative flex items-center justify-center w-8 h-8 text-luxe-charcoal hover:text-luxe-magenta"
              onClick={() => setIsWishlistOpen(true)}
            >
              <Heart className="h-5 w-5" />
              {totalWishlistItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-luxe-magenta text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {totalWishlistItems}
                </span>
              )}
            </button>
            <button 
              className="relative flex items-center justify-center w-8 h-8 text-luxe-charcoal hover:text-luxe-magenta"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-luxe-magenta text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="hidden lg:flex items-center justify-center w-8 h-8 text-luxe-charcoal hover:text-luxe-magenta">
                    <User className="h-5 w-5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-3 py-2 text-sm font-medium text-luxe-charcoal">
                    {user.user_metadata?.full_name || user.email}
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>My Account</DropdownMenuItem>
                  <DropdownMenuItem>Orders</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="text-red-500 hover:text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link 
                to="/auth" 
                className="hidden lg:flex items-center justify-center w-8 h-8 text-luxe-charcoal hover:text-luxe-magenta"
              >
                <User className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white transition-transform duration-300 lg:hidden transform",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex items-center justify-between p-4 border-b">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <h1 className="font-playfair font-bold text-xl">
                LUXE<span className="text-luxe-magenta">GLOW</span>
              </h1>
            </Link>
            <button onClick={toggleMenu}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-luxe-magenta"
              />
            </div>
            <nav className="space-y-6">
              {categories.map((category) => (
                <div key={category.name} className="space-y-2">
                  <h3 className="font-medium text-luxe-charcoal">{category.name}</h3>
                  <div className="pl-4 space-y-2">
                    {category.subcategories.map((sub) => (
                      <a key={sub} href="#" className="block text-sm text-gray-600">
                        {sub}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <div>
                <Link 
                  to="/brands" 
                  className="block font-medium text-luxe-charcoal"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Brands
                </Link>
              </div>
              <div>
                <Link 
                  to="/beauty-journal" 
                  className="block font-medium text-luxe-charcoal"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Beauty Journal
                </Link>
              </div>
              <div>
                {user ? (
                  <div className="space-y-2">
                    <h3 className="font-medium text-luxe-charcoal">Account</h3>
                    <div className="pl-4 space-y-2">
                      <a href="#" className="block text-sm text-gray-600">My Account</a>
                      <a href="#" className="block text-sm text-gray-600">Orders</a>
                      <button 
                        onClick={handleSignOut}
                        className="block text-sm text-red-500"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                ) : (
                  <Link 
                    to="/auth" 
                    className="block font-medium text-luxe-charcoal"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In / Register
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
