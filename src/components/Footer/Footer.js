import React from "react";
import cards from "../../images/cards.jpg";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <footer className="mt-40 ">
        <section className="bg-slate-800 flex flex-col md:flex-row justify-evenly items-center py-10 text-center lg:text-left">
          <div>
            <h5 className="text-md text-slate-300 font-bold border-b-2 border-b-slate-300 w-fit  mx-auto lg:mx-0">
              SERVICES
            </h5>
            <ul className="my-5 text-slate-300 flex flex-col gap-2">
              <li>
                <a href="a">Drop Shipping</a>
              </li>
              <li>
                <a href="a">Logistic</a>
              </li>
              <li>
                <a href="a">Emergency Delivery</a>
              </li>
              <li>
                <a href="a">Cargo Booking</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-md text-slate-300 font-bold border-b-2 border-b-slate-300 w-fit mx-auto lg:mx-0">
              STAKEHOLDERS
            </h5>
            <ul className="my-5 text-slate-300 flex flex-col gap-2">
              <li>
                <a href="a">Toolsmart</a>
              </li>
              <li>
                <a href="a">Ali Express</a>
              </li>
              <li>
                <a href="a">Star Electronics</a>
              </li>
              <li>
                <a href="/">Global Hardware</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-md text-slate-300 font-bold border-b-2 border-b-slate-300 w-fit mx-auto lg:mx-0">
              CONCERN
            </h5>
            <ul className="my-5 text-slate-300 flex flex-col gap-2">
              <li>
                <a href="/">Delivery</a>
              </li>
              <li>
                <a href="/">Legal Notice</a>
              </li>
              <li>
                <a href="/">Terms & Condition</a>
              </li>
              <li>
                <a href="/">Security System</a>
              </li>
            </ul>
          </div>
          <div className="hidden md:block border-r-2 h-20 border-r-slate-400"></div>
          <div className="text-center">
            <h5 className="text-md text-slate-300 font-bold">SUBSCRIPTION</h5>
            <div className="my-5">
              <h5 className="text-sm mb-2 text-slate-400">
                Subscribe to our Newsletter
              </h5>
              <div className="mb-4">
                <input
                  className="px-3 py-2 bg-white text-blue-800 border  placeholder-slate-400 focus:outline-none focus:border-orange-600  block w-full rounded-full sm:text-sm focus:ring-1"
                  type="email"
                  name="subscribe"
                  id="subscribe"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <button className="bg-orange-600 rounded-full px-5 py-1 text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

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
