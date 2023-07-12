import React from "react";

import TopPlant from "../../Assets/Svgs/topplant.svg";
import Branch from "../../Assets/Svgs/branch.svg";

const Tree = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img src={TopPlant} alt="" />
      </div>
      <div className="grid grid-flow-col -ml-4">
        <div className="flex flex-col items-end border-r-2 pr-6 border-[#0cb01d]">
          <div className=" flex">
            <img src={Branch} alt="" className="rotate-[270deg]" />
            <div className=" opacity-0 hover:opacity-100 duration-1000">
              <h2 className="border-b border-[#0cb01d] mb-2">Research</h2>
              <ol className="text-sm flex-wrap w-[100px] text-right">
                <li>Soil Test</li>
                <li>Producable Crops</li>
              </ol>
            </div>
          </div>
          <div className="flex">
            <img src={Branch} alt="" className="rotate-[270deg]" />
            <div className=" opacity-0 hover:opacity-100 duration-1000">
              <h2 className="border-b border-[#0cb01d] mb-2">Support</h2>
              <ol className="text-sm flex-wrap w-[100px] text-right">
                <li>Soil Test</li>
                <li>Producable Crops</li>
              </ol>
            </div>
          </div>
          <div className="flex">
            <img src={Branch} alt="" className="rotate-[270deg]" />
            <div className=" opacity-0 hover:opacity-100 duration-1000">
              <h2 className="border-b border-[#0cb01d] mb-2">Market</h2>
              <ol className="text-sm flex-wrap w-[100px] text-right">
                <li>Soil Test</li>
                <li>Producable Crops</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="border-l-2 pl-2 border-[#0cb01d]">
          <div className="flex">
          <div className=" opacity-0 hover:opacity-100 duration-1000">
              <h2 className="border-b border-[#0cb01d] mb-2">Support</h2>
              <ol className="text-sm flex-wrap w-[100px] ">
                <li>Soil Test</li>
                <li>Producable Crops</li>
              </ol>
            </div>
            <img src={Branch} alt="" className="" />
          </div>
          <div className="flex">
          <div className=" opacity-0 hover:opacity-100 duration-1000">
              <h2 className="border-b border-[#0cb01d] mb-2">Enhance</h2>
              <ol className="text-sm flex-wrap w-[100px] ">
                <li>Soil Test</li>
                <li>Producable Crops</li>
              </ol>
            </div>
            <img src={Branch} alt="" className="" />
          </div>
          <div className="flex">
          <div className=" opacity-0 hover:opacity-100 duration-1000">
              <h2 className="border-b border-[#0cb01d] mb-2">Scale</h2>
              <ol className="text-sm flex-wrap w-[100px] ">
                <li>Soil Test</li>
                <li>Producable Crops</li>
              </ol>
            </div>
            <img src={Branch} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tree;
