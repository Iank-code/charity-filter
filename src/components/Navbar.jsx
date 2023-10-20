import React from "react";

function Navbar() {
  return (
    <div className="flex pt-6 justify-between px-12">
      <a href="/">B-corp</a>

      <div className="flex gap-3">
        <a href="#" className="hover:text-blue-600">
          About
        </a>
        <a href="/blog" className="hover:text-blue-600">
          Blog
        </a>
        <a href="#" className="hover:text-blue-600">
          Contact Us
        </a>
      </div>

      <div className="flex justify-center items-center gap-2">
        <a href="/" className="hover:text-blue-600">
          Login
        </a>
        <button className="bg-blue-600 text-white py-2 px-3 outline-none rounded-lg">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
