import React from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen grid place-items-center">
      <Navbar />
      {/* Login */}
      <form className="w-96 border border-gray-200 py-10 px-10 rounded-sm shadow-md">
        <h1 className="text-3xl font-semibold mb-2">Log in</h1>
        <p className="mb-5">
          Don't have an account?{" "}
          <span
            className="font-semibold underline cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
        <div className="flex flex-col">
          <input className="form-input" type="text" placeholder="Email" />
          <input
            className="form-input"
            type="password"
            placeholder="Password"
          />
          <button className="btn btn-block btn-default mt-2">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
