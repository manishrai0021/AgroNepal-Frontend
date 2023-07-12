import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" h-[100vh]">
      <h2 className="text-white text-center text-[2rem] font-bold p-4">
        Login
      </h2>
      <form className="flex flex-col gap-4 p-4">
        <input type="email" placeholder="Email" className="rounded p-2" />
        <div className="">
          <input
            type="password"
            autoComplete="off"
            placeholder="Password"
            className="rounded p-2 w-full"
          />
          <Link to="/reset" className="text-white text-sm underline">
            Forget password ?
          </Link>
        </div>
        <div className="flex flex-col gap-2 text-white text-center">
          <button type="submit" className="bg-[#0cb01d] p-2 hover:bg-[#0a9017]">
            Login
          </button>
          or
          <Link to="/signup" className="w-full border-2 border-[#0cb01d] p-2 hover:bg-[#0cb01d]">Create account</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
