import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import "../App.css";
import { useState } from "react";
import { sliderItems } from "../data";
// import pic3 from "../images/pic-3.jpg";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <main className="relative h-screen w-full hidden md:block">
      <div
        className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center absolute top-0 bottom-0 m-auto left-3 cursor-pointer opacity-80 hover:bg-gray-300 arrow"
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlined />
      </div>
      <div className="h-full flex relative overflow-x-hidden">
        <div
          className="h-full flex transition-transform duration-500"
          style={{ transform: `translateX(-${slideIndex * 100}vw)` }}
        >
          {sliderItems.map((item) => (
            <div key={item.id} className="w-screen h-full">
              {/* Slide 1: Takes up full screen */}
              <div className={`bg-${item.bg} flex flex-1 items-center px-16`}>
                <div className="w-[75%] flex items-center justify-center">
                  <img src={item.img} alt="no image" />
                </div>

                <div className="p-12">
                  <h1 className="text-7xl">{item.title}</h1>
                  <p className="my-12 text-lg font-medium tracking-wider">
                    {item.desc}
                  </p>
                  <button className="p-3 text-lg bg-transparent cursor-pointer border border-slate-500 rounded-xl hover:rounded-none delay-100 duration-100">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/*  */}
        </div>
      </div>
      <div
        className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center absolute top-0 bottom-0 m-auto right-3 cursor-pointer opacity-80 hover:bg-gray-300 arrow"
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlined />
      </div>
    </main>
  );
};

export default Slider;
