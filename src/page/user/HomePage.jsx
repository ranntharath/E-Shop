import { CiMobile2, CiHeadphones, CiHome, CiKeyboard } from "react-icons/ci";
import { IoWatchOutline, IoTvOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import FAQComponent from "../../components/HomepageComponents/FAQComponent";
import iphone from "../../assets/iphone.png";
import { useGetProductQuery } from "../../redux/services/productSlice";
import NewProduct from "../../components/HomepageComponents/NewProduct";
import TrendingProducts from "../../components/HomepageComponents/TrendingProducts";
import BestSale from "../../components/HomepageComponents/BestSale";
import hiro from "../../assets/hiro.png";
import pc from '../../assets/pc.png'
import samsung from '../../assets/samsung.png'
const categories = [
  { icon: <IoTvOutline />, label: "Computer" },
  { icon: <CiMobile2 />, label: "Mobile" },
  { icon: <CiHeadphones />, label: "Headphone" },
  { icon: <IoWatchOutline />, label: "Watch" },
  { icon: <CiKeyboard />, label: "Keyboard" },
  { icon: <CiHome />, label: "Home" },
];

const HomePage = () => {
  const { data: pro, isLoading } = useGetProductQuery();

  return (
    <main className="max-w-7xl mx-auto  ">
      <section id="hiro" className="section  pt-10 bg-gray-200 lg:rounded-xl lg:mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4">
          <div className="text-center md:text-start">
            <h1 className="font-bold">
              Find Your Quality
              <span className="text-primary-color block mt-2">Products</span>
            </h1>
            <p className="text-descipton-color text-xl my-4 line-clamp-3">
              Explore our range of premium products designed to deliver both
              quality and lasting performance.
            </p>
            <button className="btn">Shop Now</button>
          </div>
          <div className="flex justify-center items-center">
            <img
              className=" scale-[1.09] transition-all ease-in duration-150"
              src={hiro}
              alt="hiro-image"
            />
          </div>
        </div>
      </section>
      <section className="section mt-20">
        <div className="flex flex-col md:flex-row gap-5 justify-center items-stretch">
          {/* Left Big Card */}
          <div className="w-full md:w-[60%] bg-gray-100 rounded-xl overflow-hidden  shadow-md hover:scale-[1.01] transition-all duration-300 ease-out">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              {/* Text Content */}
              <div className="flex flex-col justify-center p-6   lg:py-20">
                <h2 className="text-2xl lg:text-3xl text-gray-800 font-semibold">
                  Build Your Power Setup
                </h2>
                <p className="text-descipton-color my-6 line-clamp-2">
                  Unleash performance with high-end gaming PCs and custom builds designed for speed.
                </p>
                <button className="bg-primary-color text-white rounded-sm px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 hover:bg-primary-dark-color w-fit">Shop Now</button>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center p-4">
                <img
                  className="w-full object-contain"
                  src={pc}
                  alt="Shoes Product"
                />
              </div>
            </div>
          </div>

          {/* Right Two Small Cards */}
          <div className="w-full md:w-[40%] flex flex-col gap-5">
            {/* Card 1 */}
            <div className="bg-gray-100 rounded-xl overflow-hidden h-full shadow-sm hover:scale-[1.01] transition-all duration-300 ease-out">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="flex flex-col justify-center p-6 md:p-3 lg:p-6">
                  <h2 className="text-2xl lg:text-xl text-gray-800 font-semibold ">
                    Next-Gen Phone
                  </h2>
                  <p className="text-descipton-color my-4 line-clamp-1">
                    Smart and sleek.
                  </p>
                  <button className="bg-primary-color text-white rounded-sm px-3 py-2 sm:px-4 sm:py-2 md:px-2 md:py-2 hover:bg-primary-dark-color w-fit">Shop Now</button>
                </div>
                <div className="flex justify-center items-center p-4">
                  <img
                    className="w-full object-contain"
                    src={samsung}
                    alt="Headphone Product"
                  />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 rounded-xl overflow-hidden h-full shadow-sm hover:scale-[1.01] transition-all duration-300 ease-out">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="flex flex-col justify-center p-6 md:p-3 lg:p-6">
                  <h2 className="text-2xl lg:text-xl text-gray-800 font-semibold">
                    Pure Sound
                  </h2>
                  <p className="text-descipton-color my-4 line-clamp-1">
                    Comfort meets clarity.
                  </p>
                  <button className="bg-primary-color text-white rounded-sm px-3 py-2 sm:px-4 sm:py-2 md:px-2 md:py-2 hover:bg-primary-dark-color w-fit">Shop Now</button>
                </div>
                <div className="flex justify-center items-center p-4">
                  <img
                    className="w-full object-contain"
                    src="https://sakura-shop-three.vercel.app/image/headphone.png"
                    alt="Another Product"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <h2 className="text-2xl mb-10 text-letter-color font-bold">
          New Product
        </h2>
        <NewProduct pro={pro} />
      </section>
      <section className="section">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
          <div className="w-full lg:w-1/3 relative hover:scale-[1.01] transition-all duration-300 ease-out">
            <img
              className="w-full object-cover rounded-3xl shadow-lg"
              src={iphone}
              alt="Samsung Limited"
            />
            <div className="absolute top-0  text-center px-6 py-8">
              <h3 className="text-2xl lg:text-3xl font-bold ">
                Special Limited Edition
              </h3>
              <p className="text-sm text-descipton-color my-3 line-clamp-1">
                There are not many left
              </p>
              <button className="btn">Shop Now</button>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <p className="text-2xl font-semibold text-letter-color mb-5">
              Trending Items
            </p>
            <div className="flex flex-col gap-5">
              {/* trending product */}
              <TrendingProducts pro={pro} />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <h2 className="text-2xl font-bold text-letter-color mb-10">
          Categories
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 justify-center items-center gap-10">
          {categories.map((e) => {
            return (
              <div
                key={e.label}
                className="flex flex-col  gap-3 justify-center items-center"
              >
                <div className="p-4 w-16 h-16 bg-red-100 rounded-xl hover:bg-primary-color hover:text-white flex justify-center items-center text-4xl text-primary-color text-center transition-all duration-150 ease-in">
                  {e.icon}
                </div>
                <p className=" text-letter-color font-bold">{e.label}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="section">
        <div className="w-full bg-green-300 rounded-xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            {/* Text Content */}
            <div className="flex flex-col justify-center p-6 md:p-10 lg:py-10">
              <h2 className="text-3xl md:text-2xl  font-semibold text-white">
                Save big on select items
              </h2>
              <p className="text-description-color my-6 line-clamp-2 text-xs md:text-[16px] text-descipton-color">
                Enjoy huge discounts on select top-selling items. Limited time
                only — shop now and save big!
              </p>
              <button className="btn w-fit">Shop Now</button>
            </div>

            {/* Image */}
            <div className="flex justify-center items-center p-4">
              <img
                className="w-[90%] md:w-2/3 object-contain"
                src="https://sakura-shop-three.vercel.app/image/shoes1.png"
                alt="Shoes Product"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="flex justify-between items-center mb-10 ">
          <h2 className="text-2xl font-bold text-letter-color ">Best Seller</h2>
          <p className="p-3 bg-red-200 rounded-2xl">
            <FaArrowRight />
          </p>
        </div>
        <div className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide p-2">
          {/* best sale    */}
          <BestSale pro={pro} />
        </div>
      </section>
      <section className="section bg-gray-200 lg:rounded-xl mb-10 pt-20">
        <FAQComponent />
      </section>
    </main>
  );
};

export default HomePage;
