import { Link } from "react-router-dom";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/hero/watch.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "PREMIUM AUDIO",
    subtitle: "Wireless Headphones",
    tag: "Latest Technology",
    description:
      "Immerse yourself in crystal-clear sound with active noise cancellation, 30-hour battery life, and premium comfort.",
    price: "$299",
    bgGradient: "from-cyan-500 via-blue-600 to-indigo-700",
    features: ["ANC Technology", "30Hr Battery", "Premium Sound"],
  },
  {
    id: 2,
    img: Image2,
    title: "SMART TECH",
    subtitle: "Next-Gen Smartwatch",
    tag: "Innovation 2025",
    description:
      "Track your health, stay connected, and manage your life with cutting-edge AI-powered smartwatch technology.",
    price: "$399",
    bgGradient: "from-blue-500 via-indigo-600 to-purple-700",
    features: ["AI Assistant", "Health Monitor", "5G Connected"],
  },
  {
    id: 3,
    img: Image1,
    title: "ULTRA SOUND",
    subtitle: "Studio Quality Audio",
    tag: "Professional Grade",
    description:
      "Experience studio-grade audio engineering with Hi-Res certified drivers and adaptive EQ technology.",
    price: "$349",
    bgGradient: "from-teal-500 via-cyan-600 to-blue-700",
    features: ["Hi-Res Audio", "Adaptive EQ", "Studio Grade"],
  },
];

const Hero = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1200,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    pauseOnHover: false,
    pauseOnFocus: true,
    fade: true,
    appendDots: dots => (
      <div>
        <ul className="flex justify-center gap-3 pb-6"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 rounded-full bg-white/50 hover:bg-white transition-all duration-300 cursor-pointer hover:w-8"></div>
    ),
  };

  return (
    <div className="relative overflow-hidden min-h-[600px] sm:min-h-[750px] bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-950 duration-200">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* hero section */}
      <div className="container pb-16 sm:pb-0 relative z-10">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className={`relative bg-gradient-to-br ${data.bgGradient} rounded-3xl overflow-hidden shadow-2xl`}>
                {/* Overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 sm:p-12 lg:p-16 relative z-10">
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-6 text-center lg:text-left order-2 lg:order-1">
                    {/* Tech Tag */}
                    <div
                      data-aos="fade-down"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="inline-flex items-center gap-2 self-center lg:self-start bg-white/20 backdrop-blur-md px-4 py-2 rounded-full"
                    >
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                      <span className="text-xs uppercase tracking-widest text-white font-bold">
                        {data.tag}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <h1
                        data-aos="fade-right"
                        data-aos-duration="700"
                        data-aos-delay="100"
                        data-aos-once="true"
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight"
                        style={{
                          textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {data.title}
                      </h1>
                      <h2
                        data-aos="fade-right"
                        data-aos-duration="700"
                        data-aos-delay="200"
                        data-aos-once="true"
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/95"
                        style={{
                          textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                        }}
                      >
                        {data.subtitle}
                      </h2>
                    </div>
                    
                    {/* Features Grid */}
                    <div
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay="300"
                      className="flex flex-wrap gap-3 justify-center lg:justify-start"
                    >
                      {data.features.map((feature, index) => (
                        <div 
                          key={index}
                          className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 text-xs font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <p
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay="400"
                      className="text-white/90 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0"
                      style={{
                        textShadow: '0 2px 8px rgba(0,0,0,0.2)',
                      }}
                    >
                      {data.description}
                    </p>
                    
                    {/* Price and CTA */}
                    <div
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay="500"
                      className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                    >
                      <div 
                        className="text-5xl sm:text-6xl font-black text-white"
                        style={{
                          textShadow: '0 4px 16px rgba(0,0,0,0.3)',
                        }}
                      >
                        {data.price}
                      </div>
                      <Link
                        to="/shop"
                        className="inline-block px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 active:scale-95 uppercase tracking-wider text-sm"
                      >
                        Shop Now →
                      </Link>
                    </div>
                  </div>
                  
                  {/* image section */}
                  <div className="order-1 lg:order-2 relative">
                    {/* Rotating tech rings */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                      <div className="w-[400px] h-[400px] border-2 border-white/30 rounded-full animate-spin-slow"></div>
                      <div className="absolute w-[350px] h-[350px] border-2 border-white/20 rounded-full animate-spin-slower"></div>
                    </div>

                    <div
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        alt={data.title}
                        className="w-[300px] sm:w-[450px] lg:w-[550px] h-[300px] sm:h-[450px] lg:h-[550px] object-contain mx-auto filter drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                        style={{
                          filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4))',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;