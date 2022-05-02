import React from "react";
import cards from "../../images/cards.jpg";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <footer className="mt-40 ">
        <section className="bg-slate-800 h-40"></section>

        <section className="flex bg-slate-300 flex-col-reverse lg:flex-row justify-between items-center gap-10 px-10 py-5">
          <div>
            <p className="text-sm lg:text-md font-serif">
              &copy; Copyright Reserved | Electron Valley {year}
            </p>
          </div>
          <div>
            <img className="w-[200px]" src={cards} alt="" />
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
