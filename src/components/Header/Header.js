import React from "react";
import logo from "../../images/logo.png";
const Header = () => {
  return (
    <>
      <header className="bg-white flex flex-row justify-between px-10 py-5 shadow-md">
        <section>
          <img className="w-[250px]" src={logo} alt="" />
        </section>
        <section>nav</section>
      </header>
    </>
  );
};

export default Header;
