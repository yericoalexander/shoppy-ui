import React from "react";
import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";
import Category2 from "../components/Category/Category2";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";
import Blogs from "../components/Blogs/Blogs";
import Partners from "../components/Partners/Partners";

import headphone from "../assets/hero/headphone.png";
import smartwatch2 from "../assets/category/smartwatch2-removebg-preview.png";

const BannerData = {
  discount: "30% OFF",
  title: "Audio Bliss",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Experience premium sound quality with our latest wireless headphones. Advanced noise cancellation and 30-hour battery life.",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Smart Living",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Track your health, stay connected, and achieve your fitness goals with AI-powered smartwatch technology.",
  bgColor: "#2dcc6f",
};

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
    </div>
  );
};

export default Home;