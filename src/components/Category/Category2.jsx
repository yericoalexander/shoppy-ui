import { useNavigate } from "react-router-dom";
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../Shared/Button";

const Category2 = () => {
  const navigate = useNavigate();

  const handleBrowse = (category) => {
    navigate('/shop', { state: { category } });
  };

  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Gaming Console</p>
                <p className="text-2xl font-semibold mb-[2px]">PlayStation</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
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
              src={Image1}
              alt="Gaming Console"
              className="w-[320px] absolute top-1/2 -translate-y-1/2 -right-4"
            />
          </div>
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Meta Quest 3</p>
                <p className="text-2xl font-semibold mb-[2px]">Virtual</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Reality
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                  handler={() => handleBrowse('VR')}
                />
              </div>
            </div>
            <img src={Image2} alt="VR Headset" className="w-[200px] absolute bottom-0 -right-4" />
          </div>
          {/* third col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/70 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Amazon Echo</p>
                <p className="text-2xl font-semibold mb-[2px]">Smart</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Speaker
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                  handler={() => handleBrowse('Speakers')}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt="Smart Speaker"
              className="w-[200px] absolute bottom-0 -right-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category2;