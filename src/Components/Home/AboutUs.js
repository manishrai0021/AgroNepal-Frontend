import React from "react";

import Agri from "../../Assets/Pictures/Agri.jpg";
import Tree from "./Tree";

const AboutUs = () => {
  return (
    <div className="text-white p-4 bg-stone-950">
      <h1 className="text-[2rem] border-b-2 rounded-sm border-[#0cb01d] ">
        About Us
      </h1>
      <Tree />
      <div className="mt-4 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl border-[#0cb01d] w-fit border-b-2">Research</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            mollitia officia aspernatur maiores rem libero corporis fugit
            doloribus alias. Atque aut velit repellat officia earum distinctio
            quasi reiciendis pariatur recusandae?
          </p>
          <img src={Agri} alt="" className="rounded-lg" />
        </div>
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl border-[#0cb01d] w-fit border-b-2">Support</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            mollitia officia aspernatur maiores rem libero corporis fugit
            doloribus alias. Atque aut velit repellat officia earum distinctio
            quasi reiciendis pariatur recusandae?
          </p>
          <img src={Agri} alt="" className="rounded-lg" />
        </div>
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl border-[#0cb01d] w-fit border-b-2">Enhance</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            mollitia officia aspernatur maiores rem libero corporis fugit
            doloribus alias. Atque aut velit repellat officia earum distinctio
            quasi reiciendis pariatur recusandae?
          </p>
          <img src={Agri} alt="" className="rounded-lg" />
        </div>
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl border-[#0cb01d] w-fit border-b-2">Market</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            mollitia officia aspernatur maiores rem libero corporis fugit
            doloribus alias. Atque aut velit repellat officia earum distinctio
            quasi reiciendis pariatur recusandae?
          </p>
          <img src={Agri} alt="" className="rounded-lg" />
        </div>
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl border-[#0cb01d] w-fit border-b-2">Scale</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            mollitia officia aspernatur maiores rem libero corporis fugit
            doloribus alias. Atque aut velit repellat officia earum distinctio
            quasi reiciendis pariatur recusandae?
          </p>
          <img src={Agri} alt="" className="rounded-lg" />
        </div>
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl border-[#0cb01d] w-fit border-b-2">Assist</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            mollitia officia aspernatur maiores rem libero corporis fugit
            doloribus alias. Atque aut velit repellat officia earum distinctio
            quasi reiciendis pariatur recusandae?
          </p>
          <img src={Agri} alt="" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
