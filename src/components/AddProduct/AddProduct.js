import { ClipboardListIcon, PlusCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  return (
    <div>
      <div className="flex flex-row">
        <section className="w-fit relative inset-y-0  px-10 py-10  border border-blue-700 shadow-md flex flex-col gap-10">
          <h2 className="text-2xl text-blue-700 font-bold">Manage Product</h2>
          <div>
            <Link
              className="flex flex-row items-center hover:text-blue-700"
              to="/manage/productList"
            >
              <ClipboardListIcon className="w-6 mx-2 text-slate-500 inline"></ClipboardListIcon>
              <span className="text-lg font-serif">Product List</span>
            </Link>
          </div>
          <div>
            <Link
              className="flex flex-row items-center text-blue-700"
              to="/manage/addProduct"
            >
              <PlusCircleIcon className="w-6 mx-2 text-slate-500 inline"></PlusCircleIcon>
              <span className="text-lg font-serif">Add Product</span>
            </Link>
          </div>
        </section>
        <section className="w-full px-20 py-10 ">
          <div className="shadow-md sm:rounded-lg border border-blue-700 p-5">
            <form>
              <div className="mb-6">
                <label
                  htmlFor="event-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="event-name"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name of new product"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="img-link"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Image Link
                </label>
                <input
                  type="text"
                  id="img-link"
                  name="img"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Paste image link here"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="details"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Description
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Product Details..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddProduct;