import React from "react";

const Signup = () => {
  return (
    <div className="h-[100vh] p-4">
      <div className="text-center flex flex-col gap-4">
        <h2 className="text-white text-[2rem] font-bold p-2">Signup</h2>
        <form action="" className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="p-2 rounded" />
          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-2 rounded"
          />
          <button className="text-white bg-[#0cb01d] hover:bg-[#0a9017] p-2 mt-4">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
