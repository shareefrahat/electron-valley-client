import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

const InventoryForm = ({ product }) => {
  let { name, supplier, price, quantity } = product;

  const handleDeliver = () => {
    quantity = quantity - 1;
    console.log(quantity);
  };

  return (
    <>
      <div>
        <form className="text-left w-1/2 mx-auto my-10">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={name}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="supplier"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Supplier
            </label>
            <input
              type="text"
              id="supplier"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={supplier}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={price}
              required
            />
          </div>
          <div className="mb-6 flex flex-row justify-between items-end">
            <div className="w-full">
              <label
                htmlFor="quantity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={quantity}
                required
              />
            </div>
            <div className="w-1/2 mx-5">
              <button
                onClick={handleDeliver}
                type="button"
                className=" text-blue-700 border border-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Delivered
                <ArrowNarrowRightIcon className="ml-2 w-6 inline-block"></ArrowNarrowRightIcon>
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default InventoryForm;
