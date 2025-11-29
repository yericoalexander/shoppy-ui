/**
 * Utility functions for formatting data
 */

/**
 * Format price to USD currency
 * @param {number|string} price - Price value
 * @returns {string} Formatted price string
 */
export const formatPrice = (price) => {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price;
  return `$${numPrice.toFixed(2)}`;
};

/**
 * Calculate discounted price
 * @param {number|string} price - Original price
 * @param {number} discount - Discount percentage (0-1)
 * @returns {number} Discounted price
 */
export const calculateDiscount = (price, discount = 0.3) => {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price;
  return numPrice * (1 + discount);
};

/**
 * Format date to readable string
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Generate excerpt from text
 * @param {string} text - Full text
 * @param {number} wordCount - Number of words to include
 * @returns {string} Text excerpt
 */
export const generateExcerpt = (text, wordCount = 30) => {
  const words = text.split(' ');
  if (words.length <= wordCount) return text;
  return words.slice(0, wordCount).join(' ') + '...';
};

/**
 * Format number with commas
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Calculate cart total
 * @param {Array} items - Cart items
 * @returns {number} Total price
 */
export const calculateCartTotal = (items) => {
  return items.reduce((total, item) => {
    const price = typeof item.price === 'string' ? parseFloat(item.price) : item.price;
    const quantity = item.quantity || 1;
    return total + (price * quantity);
  }, 0);
};

/**
 * Get badge count display (9+ if over 9)
 * @param {number} count - Actual count
 * @param {number} max - Maximum to display
 * @returns {string} Display count
 */
export const getBadgeCount = (count, max = 9) => {
  return count > max ? `${max}+` : count.toString();
};
