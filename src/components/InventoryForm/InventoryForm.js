import React, { useState } from "react";
import { ArrowNarrowRightIcon, PlusIcon } from "@heroicons/react/solid";

const InventoryForm = ({ product }) => {
  const { _id, name, supplier, price, quantity } = product;
  let [update, setUpdate] = useState({
    name,
    supplier,
    price,
    quantity,
  });
  const [newValue, setNewValue] = useState(0);

  const handleName = (e) => {
    const { name, ...rest } = update;
    const newName = e.target.value;
    const newProduct = { name: newName, ...rest };
    setUpdate(newProduct);
  };

  const handleSupplier = (e) => {
    const { supplier, ...rest } = update;
    const newSupplier = e.target.value;
    const newProduct = { supplier: newSupplier, ...rest };
    setUpdate(newProduct);
  };

  const handlePrice = (e) => {
    const { price, ...rest } = update;
    const newPrice = e.target.value;
    const newProduct = { price: newPrice, ...rest };
    setUpdate(newProduct);
  };

  const handleQuantity = (e) => {
    const { quantity, ...rest } = update;
    const newQuantity = e.target.value;
    const newProduct = { quantity: newQuantity, ...rest };
    setUpdate(newProduct);
  };

  const handleDelivered = () => {
    let { quantity, ...rest } = update;
    const newQuantity = --quantity;
    if (quantity <= 0) {
      return;
    }
    const newProduct = { quantity: newQuantity, ...rest };
    setUpdate(newProduct);
    const url = `http://localhost:5000/update/${_id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Products Quantity added");

        console.log("Success:", data);
      });
  };

  const handleNewValue = (e) => {
    const value = parseInt(e.target.value);
    console.log(value);
    if (value === 0 || value === "") {
      return;
    }
    setNewValue(value);
  };

  const addNewQuantity = () => {
    const { quantity, ...rest } = update;
    const newQuantity = quantity + newValue;
    const newProduct = { quantity: newQuantity, ...rest };
    setUpdate(newProduct);
  };

  console.log(typeof update);

  const handleUpdate = (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/update/${_id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Products updated Successfully");

        console.log("Success:", data);
      });
  };

  return (
    <>
      <div>
        <form onSubmit={handleUpdate} className="text-left w-1/2 mx-auto my-10">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              onChange={handleName}
              type="text"
              id="name"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={update.name}
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
              onChange={handleSupplier}
              type="text"
              id="supplier"
              name="supplier"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={update.supplier}
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
              onChange={handlePrice}
              type="number"
              id="price"
              name="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={update.price}
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
                onChange={handleQuantity}
                type="number"
                id="quantity"
                name="quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={update.quantity}
                required
              />
            </div>
            <div className="w-1/2 mx-5">
              <button
                onClick={handleDelivered}
                type="button"
                className=" text-blue-700 border border-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Delivered
                <ArrowNarrowRightIcon className="ml-2 w-6 inline-block"></ArrowNarrowRightIcon>
              </button>
            </div>
          </div>
          <div className="mb-6 flex flex-row justify-between items-end">
            <div className="w-full">
              <label
                htmlFor="new-quantity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                New Quantity
              </label>
              <input
                onChange={handleNewValue}
                type="number"
                id="new-quantity"
                name="new-quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter new amount"
                required
              />
            </div>
            <div className="w-1/2 mx-5">
              <button
                onClick={addNewQuantity}
                type="button"
                className=" text-blue-700 border border-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Item
                <PlusIcon className="ml-2 w-6 inline-block"></PlusIcon>
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update All
          </button>
        </form>
      </div>
    </>
  );
};

export default InventoryForm;
