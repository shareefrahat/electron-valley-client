import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, img, price, supplier, quantity, description } = product;
  return (
    <>
      <div
        className="relative shadow-md bg-white mx-auto w-fit h-full rounded-md p-4 border-2
      "
      >
        <div>
          <img
            className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] mx-auto rounded-md"
            src={img}
            alt=""
          />
        </div>
        <div>
          <p className="text-lg lg:text-xl font-semibold py-3">{name}</p>
        </div>
        <div>
          <p className="text-md lg:text-xl  text-slate-600 pb-3">{supplier}</p>
        </div>
        <div>
          <p className="text-md lg:text-xl font-semibold text-orange-600 pb-3">
            ${price}/Unit
          </p>
        </div>
        <div>
          <p className="text-md lg:text-xl text-blue-700 pb-3">
            Available: {quantity} Units
          </p>
        </div>
        <div>
          <p className="w-[200px] h-[50px] md:w-[300px] mx-auto text-justify text-lg overflow-ellipsis">
            {description}
          </p>
        </div>
        <div className="mt-10">
          <Link
            to={`/inventory/${_id}`}
            className="bg-blue-700 text-white text-md lg:text-2xl px-2 lg:px-4 py-1 rounded hover:bg-orange-600 mt-4"
          >
            Update
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
