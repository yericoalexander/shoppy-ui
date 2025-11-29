# 🛍️ SHOPPY - Modern E-Commerce Platform

> **A beautiful, responsive e-commerce web application built with React, Vite, and Tailwind CSS**

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.21-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.18-cyan.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## ✨ Features

### 🎨 **User Interface**
- ✅ Modern, elegant UI/UX design
- ✅ Fully responsive (Mobile, Tablet, Desktop)
- ✅ Dark mode support with theme persistence
- ✅ Smooth animations with AOS (Animate On Scroll)
- ✅ Loading states and skeleton screens
- ✅ Toast notifications for user feedback

### 🛒 **E-Commerce Features**
- ✅ Product catalog with detailed views
- ✅ Product detail modal with image gallery
- ✅ Shopping cart management
- ✅ Wishlist functionality
- ✅ Advanced product filters (category, price, rating)
- ✅ Product search with suggestions
- ✅ Product sorting options
- ✅ Checkout process

### 👤 **User Features**
- ✅ User authentication (Login/Register)
- ✅ User profile management
- ✅ Profile picture support
- ✅ Persistent cart and wishlist
- ✅ Order history

### 📝 **Content**
- ✅ Blog system with search and filters
- ✅ Blog categories and tags
- ✅ Pagination for products and blogs
- ✅ About page with team information
- ✅ Contact form

### ⚡ **Performance**
- ✅ Fast page loads with Vite
- ✅ Optimized bundle size
- ✅ Lazy loading for images
- ✅ Code splitting
- ✅ SEO friendly structure

## 🚀 Quick Start

### Prerequisites
- Node.js >= 14.0.0
- npm >= 6.0.0 or yarn >= 1.22.0

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yericoalexander/shoppy-ui.git
cd shopsy-ecommerce-starter
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
shopsy-ecommerce-starter/
├── public/                 # Static files
├── src/
│   ├── assets/            # Images, icons, and media files
│   │   ├── blogs/         # Blog images
│   │   ├── brand/         # Brand logos
│   │   ├── category/      # Category images
│   │   ├── hero/          # Hero section images
│   │   ├── product/       # Product images
│   │   ├── team/          # Team member photos
│   │   └── website/       # Website assets
│   ├── components/        # Reusable UI components
│   │   ├── Banner/        # Banner components
│   │   ├── Blogs/         # Blog components
│   │   ├── Category/      # Category display
│   │   ├── Footer/        # Footer component
│   │   ├── Hero/          # Hero slider
│   │   ├── Navbar/        # Navigation bar
│   │   ├── Partners/      # Partner logos
│   │   ├── Products/      # Product components
│   │   ├── Services/      # Services section
│   │   ├── Shared/        # Shared components
│   │   └── Popup/         # Modal/popup components
│   ├── constants/         # Application constants
│   │   ├── config.js      # Configuration constants
│   │   └── data.js        # Data constants
│   ├── context/           # React Context providers
│   │   ├── AuthContext.jsx        # Authentication state
│   │   ├── CartContext.jsx        # Shopping cart state
│   │   ├── WishlistContext.jsx    # Wishlist state
│   │   └── NotificationContext.jsx # Notifications
│   ├── pages/             # Page components
│   │   ├── About.jsx      # About page
│   │   ├── Blogs.jsx      # Blog listing page
│   │   ├── Cart.jsx       # Shopping cart page
│   │   ├── Checkout.jsx   # Checkout page
│   │   ├── Home.jsx       # Home page
│   │   ├── Login.jsx      # Login page
│   │   ├── Profile.jsx    # User profile page
│   │   ├── Register.jsx   # Registration page
│   │   ├── Shop.jsx       # Product listing page
│   │   ├── Wishlist.jsx   # Wishlist page
│   │   └── PaymentSuccess.jsx # Payment confirmation
│   ├── utils/             # Utility functions
│   │   ├── formatters.js  # Data formatting utilities
│   │   ├── helpers.js     # General helper functions
│   │   └── validators.js  # Form validation utilities
│   ├── App.jsx            # Root component
│   ├── main.jsx           # Application entry point
│   ├── index.css          # Global styles
│   └── App.css            # Component styles
├── .eslintrc.cjs          # ESLint configuration
├── .gitignore             # Git ignore rules
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## 🛠️ Built With

### Core Technologies
- **[React](https://reactjs.org/)** - UI library
- **[Vite](https://vitejs.dev/)** - Build tool
- **[React Router](https://reactrouter.com/)** - Routing
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling

### UI Libraries
- **[AOS](https://michalsnik.github.io/aos/)** - Scroll animations
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon components
- **[React Slick](https://react-slick.neostack.com/)** - Carousel/slider

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS vendor prefixes

## 📚 Key Components

### Context Providers

#### AuthContext
Manages user authentication state
- Login/logout functionality
- User session persistence
- Profile management

#### CartContext
Handles shopping cart operations
- Add/remove items
- Update quantities
- Calculate totals

#### WishlistContext
Manages wishlist functionality
- Add/remove favorites
- Wishlist persistence

#### NotificationContext
Global notification system
- Success/error messages
- Toast notifications
- Custom durations

### Utility Functions

#### Formatters (`utils/formatters.js`)
- `formatPrice()` - Currency formatting
- `calculateDiscount()` - Price calculations
- `formatDate()` - Date formatting
- `truncateText()` - Text truncation

#### Validators (`utils/validators.js`)
- `isValidEmail()` - Email validation
- `validatePassword()` - Password strength
- `isValidPhone()` - Phone number validation
- `validateForm()` - Form validation

#### Helpers (`utils/helpers.js`)
- `debounce()` - Debounce function
- `throttle()` - Throttle function
- `scrollToTop()` - Smooth scroll
- `copyToClipboard()` - Clipboard operations

## 🎨 Customization

### Theme Configuration

Edit `tailwind.config.js` to customize the theme:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#f42c37",  // Change primary color
        secondary: "#f42c37", // Change secondary color
      },
    },
  },
};
```

### Constants

Update application constants in `src/constants/config.js`:

```javascript
export const APP_CONFIG = {
  name: "YOUR_APP_NAME",
  tagline: "Your Tagline",
  // ... other configurations
};
```

## 📱 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with featured products |
| Shop | `/shop` | Product catalog with filters |
| Product Detail | Modal | Detailed product view |
| Cart | `/cart` | Shopping cart management |
| Checkout | `/checkout` | Order checkout process |
| Wishlist | `/wishlist` | Saved favorite products |
| Blogs | `/blogs` | Blog articles listing |
| About | `/about` | About company information |
| Login | `/login` | User login page |
| Register | `/register` | User registration |
| Profile | `/profile` | User profile management |
| Payment Success | `/payment-success` | Order confirmation |

## 📝 Code Style

This project follows standardized code practices:

- **ESLint** for JavaScript linting
- **Prettier** for code formatting
- **JSDoc** for function documentation
- **PropTypes** for component props validation

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Yerico Alexander**
- GitHub: [@yericoalexander](https://github.com/yericoalexander)
- Email: yericoalexander12@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern e-commerce platforms
- Icons from [React Icons](https://react-icons.github.io/)
- Images from [Unsplash](https://unsplash.com/)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by Yerico Alexander

</div>
