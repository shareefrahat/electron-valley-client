import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuAlt1Icon, MenuIcon } from "@heroicons/react/solid";

import logo from "../../images/logo.png";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header>
        <div className="bg-white flex flex-row justify-between items-center px-4 lg:px-10 py-3 lg:py-4 shadow-md">
          <section className="block lg:hidden ">
            <div onClick={() => setOpen(!open)}>
              {open ? (
                <MenuAlt1Icon className="w-7 text-blue-600"></MenuAlt1Icon>
              ) : (
                <MenuIcon className="w-7 text-blue-700"></MenuIcon>
              )}
            </div>
          </section>
          <section>
            <img className="w-[200px] lg:w-[250px]" src={logo} alt="" />
          </section>
          <section className="lg:order-none hidden lg:block">
            <Navbar></Navbar>
          </section>
          <section>
            <Link
              to="/login"
              className="bg-blue-700 text-slate-100 text-md lg:text-lg px-2 lg:px-4 py-1 lg:py-2 rounded"
            >
              LOGIN
            </Link>
          </section>
        </div>
        <div>
          <section
            onClick={() => setOpen(!open)}
            className={`block lg:hidden absolute top-10 mt-5 inset-y-0 bg-blue-800 py-5 pl-6 pr-16 text-left shadow-md transition-all duration-1000 ${
              open ? "left-0 top-0" : "left-[-200px]"
            }`}
          >
            <Navbar></Navbar>
          </section>
        </div>
      </header>
    </>
  );
};

export default Header;
