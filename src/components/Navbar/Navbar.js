import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="text-md lg:text-lg text-blue-700 flex flex-col lg:flex-row justify-around gap-5 lg:gap-10">
        <Link to="/home">HOME</Link>
        <Link to="/">BLOG</Link>
        <Link to="/">INVENTORY</Link>
        <Link to="/">MY ITEMS</Link>
      </nav>
    </>
  );
};

export default Navbar;
