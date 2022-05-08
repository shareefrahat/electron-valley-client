import { ArrowCircleLeftIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../images/notfound.jpg";
const NotFound = () => {
  return (
    <>
      <div className="p-5 flex flex-col gap-5">
        <h4 className=" text-2xl text-red-600">Opps! Wrong Gateway!</h4>
        <img className="w-[300px] mx-auto" src={notfound} alt="" />
        <p className="text-xl">
          Your route
          <span className="text-red-600">"{window.location.pathname}"</span> is
          not found!
        </p>
      </div>
      <div>
        <Link
          to="/"
          className="bg-blue-700 px-4 py-2 text-white text-md lg:text-xl rounded"
        >
          <ArrowCircleLeftIcon className="w-6 text-white inline-block mr-2"></ArrowCircleLeftIcon>{" "}
          Go Back
        </Link>
      </div>
    </>
  );
};

export default NotFound;
