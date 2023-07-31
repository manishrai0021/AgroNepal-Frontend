import React from "react";

import MyTree from "../../Assets/Pictures/Tree.png";
import Branch from "../../Assets/Pictures/branch.png";
import BranchL from "../../Assets/Pictures/branchL.png";

const Tree = () => {
  const branches = [
    {
      name: "",
    },
  ];
  return (
    <div className="text-white">
      {/* <div>
        <img src={TepTree} alt="" />
      </div> */}
      <div className="mt-[6.2rem]">
        <img src={MyTree} alt="" />
      </div>
      <div>
        <div className="absolute top-[36%] right-[1%] rounded-lg group hover:bg-[#1b9646] hover:z-10">
          <img src={Branch} alt="" className="w-[230px] rotate-[67deg] group-hover:shadow-md " />
          <div className="opacity-0 text-center pb-8 -mt-[5rem] group-hover:opacity-100">
            <h1 className="text-[24px] font-semibold">Soil Best</h1>
            <ul>
                <li>Best</li>
                <li>Easy</li>
                <li>Babaal</li>
                <li>OKaay</li>
            </ul>
          </div>
        </div>
        <div className="absolute top-[18%] -right-[4%] rounded-lg group hover:bg-[#1b9646] hover:z-10">
          <img src={Branch} alt="" className="w-[230px] rotate-[21deg]  group-hover:shadow-md" />
          <div className="opacity-0 text-center pb-8 -mt-10 group-hover:opacity-100">
            <h1 className="text-[24px] font-semibold">Soil Test</h1>
            <ul>
                <li>Best</li>
                <li>Easy</li>
                <li>Babaal</li>
                <li>OKaay</li>
            </ul>
          </div>
        </div>
        <div className="absolute top-[19%] right-[15%] rounded-lg group hover:bg-[#1b9646] hover:z-10">
          <img src={BranchL} alt="" className="w-[230px] rotate-[deg] -scale-x-[1] group-hover:shadow-md" />
          <div className="opacity-0 text-center pb-8 -mt-8 group-hover:opacity-100">
            <h1 className="text-[24px] font-semibold">Soil Test</h1>
            <ul>
                <li>Best</li>
                <li>Easy</li>
                <li>Babaal</li>
                <li>OKaay</li>
            </ul>
          </div>
        </div>
        <div className="absolute top-[18%] left-[13%] rounded-lg group hover:bg-[#1b9646] hover:z-10">
          <img src={Branch} alt="" className="w-[230px] rotate-[21deg]  group-hover:shadow-md" />
          <div className="opacity-0 text-center pb-8 -mt-10 group-hover:opacity-100">
            <h1 className="text-[24px] font-semibold">Soil Test</h1>
            <ul>
                <li>Best</li>
                <li>Easy</li>
                <li>Babaal</li>
                <li>OKaay</li>
            </ul>
          </div>
        </div>
        <div className="absolute top-[19%] -left-[1%] rounded-lg group hover:bg-[#1b9646] hover:z-10">
          <img src={BranchL} alt="" className="w-[230px] rotate-[deg] -scale-x-[1] group-hover:shadow-md" />
          <div className="opacity-0 text-center pb-8 -mt-8 group-hover:opacity-100">
            <h1 className="text-[24px] font-semibold">Soil Test</h1>
            <ul>
                <li>Best</li>
                <li>Easy</li>
                <li>Babaal</li>
                <li>OKaay</li>
            </ul>
          </div>
        </div>
        <div className="absolute top-[36%] -left-[6%] rounded-lg group hover:bg-[#1b9646] hover:z-10">
          <img src={BranchL} alt="" className="w-[230px] -rotate-[67deg] group-hover:shadow-md" />
          <div className="opacity-0 text-center pb-8 -mt-[5rem] group-hover:opacity-100">
            <h1 className="text-[24px] font-semibold">Soil Best</h1>
            <ul>
                <li>Best</li>
                <li>Easy</li>
                <li>Babaal</li>
                <li>OKaay</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tree;
