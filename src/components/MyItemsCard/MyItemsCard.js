import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyItemsCard = ({ product }) => {
  const { _id, name, img, supplier, price, quantity } = product;

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure to delete?");
    if (confirm) {
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            toast.success("Successfully Deleted", { id: "deleted" });
          }
        });
    }
  };

  return (
    <>
      <div className="border border-slate-300 w-[200px] lg:w-auto p-4 flex flex-col lg:flex-row gap-4 justify-start items-center shadow-md my-4 rounded">
        <div>
          <img
            src={img}
            className="w-32 rounded border border-slate-400 p-4"
            alt=""
          />
        </div>
        <div className="text-left text-md lg:text-lg">
          <p className="font-semibold text-slate-700">{name}</p>
          <p className="text-slate-500">{supplier}</p>
          <p>
            Price: <span className="text-red-700">${price}</span>
          </p>
          <p>Stock: {quantity}</p>
          <div className="flex flex-row justify-center lg:justify-start items-center gap-10 mt-4">
            <Link
              to={`/inventory/${_id}`}
              className="bg-blue-700 text-white px-3 rounded"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="bg-red-700 text-white px-3 rounded"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyItemsCard;
