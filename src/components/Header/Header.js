import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header>
        <div className="bg-white flex flex-row justify-between items-center px-4 lg:px-10 py-2 lg:py-4 shadow-md">
          <section className="block lg:hidden">
            <span onClick={() => setOpen(!open)}>
              {open ? "Close" : "Menu"}
            </span>
          </section>
          <section>
            <img className="w-[200px] lg:w-[250px]" src={logo} alt="" />
          </section>
          <section className="lg:order-none hidden lg:block">
            <Navbar></Navbar>
          </section>
          <section>
            <Link to="/login">LOGIN</Link>
          </section>
        </div>
        <div>
          <section
            className={`block lg:hidden absolute inset-y-0 bg-white py-5 px-10 text-left shadow-md transition-all duration-1000 ${
              open ? "left-0 top-0" : "left-[-200px]"
            }`}
          >
            <div onClick={() => setOpen(!open)}>X</div>
            <Navbar></Navbar>
          </section>
        </div>
      </header>
    </>
  );
};

export default Header;
