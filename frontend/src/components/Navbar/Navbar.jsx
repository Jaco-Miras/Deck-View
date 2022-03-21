import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-screen py-4">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between">
        <div>
          <h1>Webpage name</h1>
        </div>
        <div className="flex items-center gap-4">
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          <button
            to="/login"
            className="bg-gray-500 rounded-md px-4 py-1 text-white"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
