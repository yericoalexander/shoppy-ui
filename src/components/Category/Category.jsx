import React from "react";
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Image4 from "../../assets/category/gaming.png";
import Image5 from "../../assets/category/vr.png";
import Image6 from "../../assets/category/speaker.png";
import Button from "../Shared/Button";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col - Earphone */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden">
            <div className="relative z-10">
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Premium Audio</p>
                <p className="text-2xl font-semibold mb-[2px]">Experience</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Earphones
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img src={Image1} alt="Earphone" className="w-[320px] absolute bottom-0 right-0" />
          </div>
          
          {/* second col - Smartwatch */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/70 text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden">
            <div className="relative z-10">
              <div className="mb-4">
                <p className="mb-[2px] text-white">Smart Living</p>
                <p className="text-2xl font-semibold mb-[2px]">Track Your</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Fitness
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow"}
                />
              </div>
            </div>
            <img
              src={Image2}
              alt="Smartwatch"
              className="w-[280px] absolute -right-4 top-[40px]"
            />
          </div>
          
          {/* third col - Laptop */}
          <div className="py-10 pl-5 bg-gradient-to-br from-primary to-primary/70 text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden">
            <div className="relative z-10">
              <div className="mb-4">
                <p className="mb-[2px] text-white">Power & Performance</p>
                <p className="text-2xl font-semibold mb-[2px]">Work Smarter</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Laptops
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt="Laptop"
              className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
          
          {/* fourth col - Gaming Console */}
          <div className="py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden">
            <div className="relative z-10">
              <div className="mb-4">
                <p className="mb-[2px] text-white">Next Level</p>
                <p className="text-2xl font-semibold mb-[2px]">Unleash Your</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Gaming
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image4}
              alt="Gaming"
              className="w-[280px] absolute bottom-0 right-4"
            />
          </div>
          
          {/* fifth col - VR Headset (2 columns) */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-green-500 to-green-400 text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden">
            <div className="relative z-10">
              <div className="mb-4">
                <p className="mb-[2px] text-white">Immersive Reality</p>
                <p className="text-2xl font-semibold mb-[2px]">Step Into</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Virtual World
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-green-600"}
                />
              </div>
            </div>
            <img
              src={Image5}
              alt="VR Headset"
              className="w-[380px] absolute top-1/2 -translate-y-1/2 right-10"
            />
          </div>
          
          {/* sixth col - Speaker (2 columns) */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden">
            <div className="relative z-10">
              <div className="mb-4">
                <p className="mb-[2px] text-white">Powerful Sound</p>
                <p className="text-2xl font-semibold mb-[2px]">Feel The</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Music
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-blue-600"}
                />
              </div>
            </div>
            <img
              src={Image6}
              alt="Speaker"
              className="w-[350px] absolute top-1/2 -translate-y-1/2 right-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;