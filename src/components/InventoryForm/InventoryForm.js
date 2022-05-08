import React, { useState } from "react";
import toast from "react-hot-toast";

const InventoryForm = ({ product }) => {
  const { _id, name, img, description, supplier, price, quantity } = product;
  let [update, setUpdate] = useState({
    name,
    img,
    description,
    supplier,
    price,
    quantity,
  });

  const handleName = (e) => {
    const { name, ...rest } = update;
    const newName = e.target.value;
    const newProduct = { name: newName, ...rest };
    setUpdate(newProduct);
  };

  const handleImgLink = (e) => {
    const { img, ...rest } = update;
    const newImg = e.target.value;
    const newProduct = { img: newImg, ...rest };
    setUpdate(newProduct);
  };

  const handleDescription = (e) => {
    const { description, ...rest } = update;
    const newDescription = e.target.value;
    const newProduct = { description: newDescription, ...rest };
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
    const newPrice = parseInt(e.target.value);
    const newProduct = { price: newPrice, ...rest };
    setUpdate(newProduct);
  };

  const handleQuantity = (e) => {
    const { quantity, ...rest } = update;
    const newQuantity = parseInt(e.target.value);
    const newProduct = { quantity: newQuantity, ...rest };
    setUpdate(newProduct);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const url = `https://electron-valley.herokuapp.com/update/${_id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount !== 0) {
          toast.success("Information Updated!", { id: "infoUpdated" });
        }
      });
  };

  return (
    <>
      <div className="border border-blue-700 rounded p-5">
        <div>
          <h2 className="text-lg lg:text-xl font-semibold font-serif text-blue-700 border border-blue-700 py-2 rounded mb-10">
            Update All
          </h2>
        </div>
        <form onSubmit={handleUpdate} className="text-left w-full mx-auto ">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              onChange={handleName}
              type="text"
              id="name"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={update.name}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="img"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
            >
              Img Link
            </label>
            <input
              onChange={handleImgLink}
              type="text"
              id="img"
              name="img"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={update.img}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
            >
              Description
            </label>
            <textarea
              onChange={handleDescription}
              id="description"
              name="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={update.description}
              required
              cols="25"
              rows="2"
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              htmlFor="supplier"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
            >
              Supplier
            </label>
            <input
              onChange={handleSupplier}
              type="text"
              id="supplier"
              name="supplier"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={update.supplier}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="price"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
            >
              Price
            </label>
            <input
              onChange={handlePrice}
              type="number"
              id="price"
              name="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={update.price}
              required
            />
          </div>
          <div className="mb-6 flex flex-row justify-between items-end">
            <div className="w-full">
              <label
                htmlFor="quantity"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
              >
                Quantity
              </label>
              <input
                onChange={handleQuantity}
                type="number"
                id="quantity"
                name="quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={update.quantity}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update All
          </button>
        </form>
      </div>
    </>
  );
};

export default InventoryForm;
