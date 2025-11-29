import { useNavigate } from "react-router-dom";
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Image4 from "../../assets/category/gaming.png";
import Image5 from "../../assets/category/vr.png";
import Image6 from "../../assets/category/speaker.png";
import Button from "../Shared/Button";

const Category = () => {
  const navigate = useNavigate();

  const handleBrowse = (category) => {
    navigate('/shop', { state: { category } });
  };

  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* first col - Earphone */}
          <div className="py-6 sm:py-10 pl-4 sm:pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[280px] sm:h-[320px] flex items-end overflow-hidden">
            <div className="relative z-10">
              <div className="mb-3 sm:mb-4">
                <p className="mb-[2px] text-xs sm:text-sm text-gray-400">Premium Audio</p>
                <p className="text-xl sm:text-2xl font-semibold mb-[2px]">Wireless</p>
                <p className="text-3xl sm:text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Earbuds
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                  handler={() => handleBrowse('Audio')}
                />
              </div>
            </div>
            <img src={Image1} alt="Earphone" className="w-[240px] sm:w-[280px] lg:w-[320px] absolute bottom-0 right-0" />
          </div>
          
          {/* second col - Smartwatch */}
          <div className="py-6 sm:py-10 pl-4 sm:pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/70 text-white rounded-3xl relative h-[280px] sm:h-[320px] flex items-end overflow-hidden">
            <div className="relative z-10">
              <div className="mb-3 sm:mb-4">
                <p className="mb-[2px] text-xs sm:text-sm text-white">Health & Fitness</p>
                <p className="text-xl sm:text-2xl font-semibold mb-[2px]">Smart</p>
                <p className="text-3xl sm:text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Watches
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow"}
                  handler={() => handleBrowse('Wearables')}
                />
              </div>
            </div>
            <img
              src={Image2}
              alt="Smartwatch"
              className="w-[200px] sm:w-[240px] lg:w-[280px] absolute -right-2 sm:-right-4 top-[40px]"
            />
          </div>
          
          {/* third col - Laptop */}
          <div className="py-6 sm:py-10 pl-4 sm:pl-5 bg-gradient-to-br from-primary to-primary/70 text-white rounded-3xl relative h-[280px] sm:h-[320px] flex items-end overflow-hidden">
            <div className="relative z-10">
              <div className="mb-3 sm:mb-4">
                <p className="mb-[2px] text-xs sm:text-sm text-white">Power & Performance</p>
                <p className="text-xl sm:text-2xl font-semibold mb-[2px]">Work Smarter</p>
                <p className="text-3xl sm:text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Laptops
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                  handler={() => handleBrowse('Laptops')}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt="Laptop"
              className="w-[180px] sm:w-[220px] lg:w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
          
          {/* fourth col - Gaming Console */}
          <div className="py-6 sm:py-10 pl-4 sm:pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[280px] sm:h-[320px] flex items-end overflow-hidden">
            <div className="relative z-10">
              <div className="mb-3 sm:mb-4">
                <p className="mb-[2px] text-xs sm:text-sm text-white">Gaming Console</p>
                <p className="text-xl sm:text-2xl font-semibold mb-[2px]">PlayStation</p>
                <p className="text-3xl sm:text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  5 Pro
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                  handler={() => handleBrowse('Gaming')}
                />
              </div>
            </div>
            <img
              src={Image4}
              alt="PlayStation"
              className="w-[200px] sm:w-[240px] lg:w-[280px] absolute bottom-0 right-2 sm:right-4"
            />
          </div>
          
          {/* fifth col - VR Headset (2 columns) */}
          <div className="sm:col-span-2 py-6 sm:py-10 pl-4 sm:pl-5 bg-gradient-to-br from-green-500 to-green-400 text-white rounded-3xl relative h-[280px] sm:h-[320px] flex items-end overflow-hidden">
            <div className="relative z-10">
              <div className="mb-3 sm:mb-4">
                <p className="mb-[2px] text-xs sm:text-sm text-white">Meta Quest</p>
                <p className="text-xl sm:text-2xl font-semibold mb-[2px]">Experience</p>
                <p className="text-3xl sm:text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  VR World
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-green-600"}
                  handler={() => handleBrowse('VR')}
                />
              </div>
            </div>
            <img
              src={Image5}
              alt="VR Headset"
              className="w-[280px] sm:w-[340px] lg:w-[380px] absolute top-1/2 -translate-y-1/2 right-4 sm:right-10"
            />
          </div>
          
          {/* sixth col - Speaker (2 columns) */}
          <div className="sm:col-span-2 py-6 sm:py-10 pl-4 sm:pl-5 bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-3xl relative h-[280px] sm:h-[320px] flex items-end overflow-hidden">
            <div className="relative z-10">
              <div className="mb-3 sm:mb-4">
                <p className="mb-[2px] text-xs sm:text-sm text-white">Amazon Alexa</p>
                <p className="text-xl sm:text-2xl font-semibold mb-[2px]">Smart</p>
                <p className="text-3xl sm:text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Speakers
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-blue-600"}
                  handler={() => handleBrowse('Speakers')}
                />
              </div>
            </div>
            <img
              src={Image6}
              alt="Speaker"
              className="w-[260px] sm:w-[310px] lg:w-[350px] absolute top-1/2 -translate-y-1/2 right-4 sm:right-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;