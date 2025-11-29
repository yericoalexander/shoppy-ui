/**
 * Application Configuration
 * Contains all configuration constants used across the application
 */

/**
 * Application metadata
 */
export const APP_CONFIG = {
  name: "SHOPPY",
  tagline: "Your Ultimate Shopping Destination",
  version: "1.0.0",
  contact: {
    email: "hello@shoppy.com",
    phone: "+62 123 456 7890",
    address: "123 Commerce Street, Jakarta, Indonesia 12345",
  },
  businessHours: {
    weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
    saturday: "Saturday: 10:00 AM - 4:00 PM",
    sunday: "Sunday: Closed",
  },
};

/**
 * Pagination configuration
 */
export const PAGINATION = {
  productsPerPage: 8,
  blogsPerPage: 6,
};

/**
 * Toast notification durations (milliseconds)
 */
export const NOTIFICATION_DURATION = {
  success: 3000,
  error: 4000,
  info: 3000,
  cart: 4500,
};

/**
 * Image placeholder URLs
 */
export const PLACEHOLDERS = {
  avatar: (seed) => `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`,
  product: "https://via.placeholder.com/300x300?text=Product+Image",
};

/**
 * Social media links
 */
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/shoppy",
  instagram: "https://instagram.com/shoppy",
  twitter: "https://twitter.com/shoppy",
  linkedin: "https://linkedin.com/company/shoppy",
};

/**
 * Navigation routes
 */
export const ROUTES = {
  home: "/",
  shop: "/shop",
  about: "/about",
  blogs: "/blogs",
  cart: "/cart",
  checkout: "/checkout",
  wishlist: "/wishlist",
  login: "/login",
  register: "/register",
  profile: "/profile",
  paymentSuccess: "/payment-success",
};

/**
 * Local storage keys
 */
export const STORAGE_KEYS = {
  cart: "shoppy_cart",
  wishlist: "shoppy_wishlist",
  user: "shoppy_user",
  theme: "shoppy_theme",
};

/**
 * AOS (Animate On Scroll) configuration
 */
export const AOS_CONFIG = {
  duration: 800,
  easing: "ease-in-sine",
  delay: 100,
  offset: 100,
};

/**
 * Discount percentage for display
 */
export const DISCOUNT_PERCENTAGE = 0.3; // 30%

/**
 * Maximum items to show in cart badge
 */
export const MAX_BADGE_COUNT = 9;
