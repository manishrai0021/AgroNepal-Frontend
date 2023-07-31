import React from "react";

import SoilSVG from "../../Assets/Svgs/Farmers/soil.svg";
import EquitpmentSVG from "../../Assets/Svgs/Farmers/equiptment.svg";
import RateSVG from "../../Assets/Svgs/Farmers/rate.svg";
import DemandSVG from "../../Assets/Svgs/Farmers/demand.svg";
import VideoSVG from "../../Assets/Svgs/Farmers/video.svg";

const Farmers = () => {
  const items = [
    { name: "Soil Test", icon: SoilSVG },
    { name: "Equitments", icon: EquitpmentSVG },
    { name: "Mandi Rates", icon: RateSVG },
    { name: "Demand Rates", icon: DemandSVG },
    { name: "Videos", icon: VideoSVG },
  ];
  return (
    <div className="text-white p-8 flex flex-col gap-16">
      <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => {
          return (
            <div className="p-4 border-2 border-[#0cb01d] text-center">
              <div className="flex gap-4">
                <img src={item.icon} alt="" className="w-[30px]" />
                <h3 className="text-xl font-semibold">{item.name}</h3>
              </div>
              <p className="text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                maiores?
              </p>
            </div>
          );
        })}
      </div>
      <div className="text-center flex flex-col gap-10 items-center">
        <div className="text-center flex flex-col gap-2 items-center">
          <h2 className="text-5xl ">Out of 76 Kharab, Nepal Total Budget</h2>
          <h3 className="text-2xl flex gap-2 ">
            <p className="text-[#0cb01d] hover:text-white duration-[2500ms] font-semibold">
              56 Arab
            </p>{" "}
            is used in Agriculture
          </h3>
          <h3 className="text-2xl flex gap-2 ">
            <p className="text-[#0cb01d] hover:text-white duration-[2500ms]  font-semibold">
              36 Arab
            </p>{" "}
            is used in fertilizer
          </h3>
        </div>
        <div className="relative">
          <div className=" w-[10rem] h-[10rem] rounded-full border-8 border-[#0cb01d] text-center flex justify-center items-center text-4xl gap-1 ">
            3.29{" "}
            <p className="text-[#0cb01d] hover:text-white duration-[2500ms] hover:animate-pulse">
              %
            </p>
          </div>
          <div className="absolute inset-0 rounded-full border-t-8 border-r-1 border-l-8 border-b-8 border-white hover:border-[#0cb01d] duration-[1000ms]"></div>
        </div>
        <div className="text-2xl flex flex-col gap-2 border-b-2 pb-8 border-[#0cb01d]">
          <h3>The Solution required for the Problem</h3>
          <h2 className="text-3xl text-[#0cb01d] hover:text-white duration-[2500ms]">
            Pure Organic Fertilizer
          </h2>
          <h3>With Regulated Network</h3>
        </div>
      </div>
    </div>
  );
};

export default Farmers;
