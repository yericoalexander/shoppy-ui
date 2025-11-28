import { createContext, useContext, useReducer, useEffect } from 'react';

const WishlistContext = createContext();

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_WISHLIST':
      return action.payload || [];
    case 'ADD_TO_WISHLIST': {
      if (state.find(item => item.id === action.payload.id)) {
        return state; // Already in wishlist
      }
      const newWishlist = [...state, action.payload];
      localStorage.setItem('wishlist', JSON.stringify(newWishlist));
      return newWishlist;
    }
    case 'REMOVE_FROM_WISHLIST': {
      const updatedWishlist = state.filter(item => item.id !== action.payload);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      return updatedWishlist;
    }
    case 'CLEAR_WISHLIST':
      localStorage.removeItem('wishlist');
      return [];
    default:
      return state;
  }
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, dispatch] = useReducer(wishlistReducer, []);

  useEffect(() => {
    // Load wishlist from localStorage on mount
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      dispatch({ type: 'LOAD_WISHLIST', payload: JSON.parse(savedWishlist) });
    }
  }, []);

  const addToWishlist = (product) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  };

  const removeFromWishlist = (productId) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
  };

  const clearWishlist = () => {
    dispatch({ type: 'CLEAR_WISHLIST' });
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  const wishlistCount = wishlist.length;

  const value = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    isInWishlist,
    wishlistCount,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};