
import React from "react";
import { X, Heart, ShoppingBag } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";
import Button from "@/components/shared/Button";
import { cn } from "@/lib/utils";

const Wishlist: React.FC = () => {
  const { 
    wishlistItems, 
    removeFromWishlist, 
    moveToCart,
    clearWishlist,
    totalWishlistItems,
    isWishlistOpen,
    setIsWishlistOpen
  } = useWishlist();

  return (
    <>
      {/* Overlay */}
      {isWishlistOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsWishlistOpen(false)}
        />
      )}
      
      {/* Wishlist Sidebar */}
      <div 
        className={cn(
          "fixed top-0 right-0 w-full md:w-[400px] h-full bg-white z-50 shadow-xl flex flex-col transform transition-transform duration-300",
          isWishlistOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-playfair text-xl">Your Wishlist</h2>
          <button 
            onClick={() => setIsWishlistOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Wishlist Content */}
        <div className="flex-1 overflow-y-auto py-4 px-4">
          {wishlistItems.length > 0 ? (
            <div className="space-y-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="flex border-b pb-4">
                  <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-xs text-gray-500">{item.brand}</p>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="mt-1 font-semibold">${item.price.toFixed(2)}</p>
                      </div>
                      <button 
                        onClick={() => removeFromWishlist(item.id)}
                        className="text-gray-400 hover:text-luxe-magenta"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full"
                        onClick={() => moveToCart(item.id)}
                      >
                        <ShoppingBag className="h-4 w-4 mr-1" />
                        Move to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Heart className="h-12 w-12 text-gray-300 mb-4" />
              <h3 className="font-medium text-lg">Your wishlist is empty</h3>
              <p className="text-gray-500 mt-2">Save your favorite products to your wishlist for later.</p>
              <Button 
                className="mt-6"
                onClick={() => setIsWishlistOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          )}
        </div>

        {/* Footer */}
        {wishlistItems.length > 0 && (
          <div className="border-t p-4 bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Total Items</span>
              <span className="font-semibold">{totalWishlistItems}</span>
            </div>
            <div className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={clearWishlist}
              >
                Clear Wishlist
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Wishlist Toggle Button (for mobile) */}
      <button
        className="fixed bottom-20 right-4 md:hidden bg-white p-3 rounded-full shadow-lg z-30"
        onClick={() => setIsWishlistOpen(true)}
      >
        <Heart className="h-6 w-6 text-luxe-magenta" />
        {totalWishlistItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-luxe-magenta text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {totalWishlistItems}
          </span>
        )}
      </button>
    </>
  );
};

export default Wishlist;
