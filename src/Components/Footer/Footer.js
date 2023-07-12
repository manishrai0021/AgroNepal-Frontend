import React from "react";

const Footer = () => {
  return (
    <div className="bg-stone-950 text-white p-4 border-t-2 border-[#0cb01d]">
      <div>
        <div></div>
        <div className="grid grid-flow-col ">
          <a href="/aboutus">About Us</a>
          <a href="/contactus">Contact Us</a>
          <a href="">Careers</a>
          <a href="">Work</a>
        </div>
        <div className="text-center border-b-2  border-[#0cb01d] p-4">
          We are located in XYZ, Kathmandu
        </div>
      </div>
      <div className="p-4">
        Copyright @ 2023 AgriEco
      </div>
    </div>
  );
};

export default Footer;
