import { create } from "zustand";

const useWishlistStore = create((set) => ({
  wishlistItems: [],

  addToWishlist: (item) =>
    set((state) => {
      const exists = state.wishlistItems.some((i) => i.id === item.id);
      if (exists) return state; 
      return {
        wishlistItems: [...state.wishlistItems, item],
      };
    }),

  removeFromWishlist: (id) =>
    set((state) => ({
      wishlistItems: state.wishlistItems.filter((item) => item.id !== id),
    })),

  clearWishlist: () => set({ wishlistItems: [] }),

  isWishlisted: (id) => (state) =>
    state.wishlistItems.some((item) => item.id === id),
}));

export default useWishlistStore;