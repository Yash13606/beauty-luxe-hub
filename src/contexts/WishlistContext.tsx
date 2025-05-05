
import React, { createContext, useState, useEffect, useContext } from "react";
import { toast } from "sonner";

export interface WishlistItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
}

interface WishlistContextType {
  wishlistItems: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  moveToCart: (id: string) => void;
  clearWishlist: () => void;
  totalWishlistItems: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [totalWishlistItems, setTotalWishlistItems] = useState(0);

  // Get Cart context to enable moving items to cart
  const { addToCart } = useContext(require("./CartContext").useCart());

  // Load wishlist from localStorage on initial render
  useEffect(() => {
    const storedWishlist = localStorage.getItem("luxeglowWishlist");
    if (storedWishlist) {
      setWishlistItems(JSON.parse(storedWishlist));
    }
  }, []);

  // Update localStorage and calculate totals when wishlist changes
  useEffect(() => {
    if (wishlistItems.length > 0) {
      localStorage.setItem("luxeglowWishlist", JSON.stringify(wishlistItems));
    } else {
      localStorage.removeItem("luxeglowWishlist");
    }
    
    setTotalWishlistItems(wishlistItems.length);
  }, [wishlistItems]);

  const addToWishlist = (product: WishlistItem) => {
    setWishlistItems(prevItems => {
      // Check if item already exists in wishlist
      const exists = prevItems.some(item => item.id === product.id);
      
      if (exists) {
        toast(`${product.name} is already in your wishlist`);
        return prevItems;
      } else {
        toast(`${product.name} added to your wishlist`);
        return [...prevItems, product];
      }
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlistItems(prevItems => {
      const itemToRemove = prevItems.find(item => item.id === id);
      if (itemToRemove) {
        toast(`${itemToRemove.name} removed from your wishlist`);
      }
      return prevItems.filter(item => item.id !== id);
    });
  };

  const isInWishlist = (id: string) => {
    return wishlistItems.some(item => item.id === id);
  };

  const moveToCart = (id: string) => {
    const item = wishlistItems.find(item => item.id === id);
    if (item) {
      addToCart(item);
      removeFromWishlist(id);
      toast(`${item.name} moved to your cart`);
    }
  };

  const clearWishlist = () => {
    setWishlistItems([]);
    localStorage.removeItem("luxeglowWishlist");
    toast("Wishlist has been cleared");
  };

  return (
    <WishlistContext.Provider value={{ 
      wishlistItems, 
      addToWishlist, 
      removeFromWishlist, 
      isInWishlist,
      moveToCart,
      clearWishlist,
      totalWishlistItems
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
