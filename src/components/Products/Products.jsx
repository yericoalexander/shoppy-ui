import React, { useState } from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";

// images import
import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-7.jpg";
import Img7 from "../../assets/product/p-9.jpg";
import Img8 from "../../assets/product/p-1.jpg";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Wireless Noise-Cancelling Headphones",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Adventure Pro Smartwatch",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Smart AR Glasses",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Tech Comfort T-Shirt",
    price: "220",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Portable Bluetooth Speaker Pro",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img6,
    title: "Fitness Tracker Pro Series",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 7,
    img: Img7,
    title: "Gaming Headset Elite",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 8,
    img: Img8,
    title: "True Wireless Earbuds Pro",
    price: "220",
    aosDelay: "600",
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const handleProductClick = (product) => {
    console.log('📦 Opening modal for product:', product.title);
    setSelectedProduct(product);
    setShowDetailModal(true);
  };

  const handleCloseModal = () => {
    setShowDetailModal(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Featured Products" subtitle={"Discover the Latest Tech Innovation"} />
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-6">
          {ProductsData.map((data) => (
            <ProductCard 
              key={data.id} 
              data={data}
              onProductClick={handleProductClick}
            />
          ))}
        </div>
      </div>

      {/* Product Detail Modal - Outside of card */}
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct}
          isOpen={showDetailModal}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Products;