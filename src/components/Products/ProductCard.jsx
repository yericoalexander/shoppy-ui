import React from "react";
import { useCart } from "../../context/CartContext";
import Button from "../Shared/Button";

const ProductCard = ({ data }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(data);
    // You could add a toast notification here
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={data.aosDelay}
      className="group"
    >
      <div className="relative">
        <img
          src={data.img}
          alt=""
          className="h-[180px] w-[260px] object-cover rounded-md"
        />
        {/* hover button */}
        <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
          <Button
            text={"Add to cart"}
            bgColor={"bg-primary"}
            textColor={"text-white"}
            handler={handleAddToCart}
          />
        </div>
      </div>
      <div className="leading-7">
        <h2 className="font-semibold">{data.title}</h2>
        <h2 className="font-bold">${data.price}</h2>
      </div>
    </div>
  );
};

export default ProductCard;