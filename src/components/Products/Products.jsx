import React, { useState } from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";

// images import
import ImgSonyHeadphone from "../../assets/product/2.png";
import ImgAppleWatch from "../../assets/product/3.png";
import ImgMetaQuest from "../../assets/product/Meta-Quest-3-VR-Headset.jpeg";
import ImgPS5 from "../../assets/product/4.png";
import ImgEchoStudio from "../../assets/product/Amazon-Echo-Studio-Smart.avif";
import ImgMacBook from "../../assets/product/Macbook-Pro-14-inch-M3.png";
import ImgiPhone from "../../assets/product/iPhone-15-Pro-Max.jpg";
import ImgAirPods from "../../assets/product/2.png";

const ProductsData = [
  {
    id: 1,
    img: ImgSonyHeadphone,
    title: "Sony WH-1000XM5 Headphones",
    price: "399",
    aosDelay: "0",
  },
  {
    id: 2,
    img: ImgAppleWatch,
    title: "Apple Watch Series 9",
    price: "499",
    aosDelay: "200",
  },
  {
    id: 3,
    img: ImgMetaQuest,
    title: "Meta Quest 3 VR Headset",
    price: "499",
    aosDelay: "400",
  },
  {
    id: 4,
    img: ImgPS5,
    title: "PlayStation 5 Pro Console",
    price: "699",
    aosDelay: "600",
  },
  {
    id: 5,
    img: ImgEchoStudio,
    title: "Amazon Echo Studio Speaker",
    price: "199",
    aosDelay: "0",
  },
  {
    id: 6,
    img: ImgMacBook,
    title: "MacBook Pro 14-inch M3",
    price: "1999",
    aosDelay: "200",
  },
  {
    id: 7,
    img: ImgiPhone,
    title: "iPhone 15 Pro Max 256GB",
    price: "1199",
    aosDelay: "400",
  },
  {
    id: 8,
    img: ImgAirPods,
    title: "AirPods Pro 2nd Gen",
    price: "249",
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