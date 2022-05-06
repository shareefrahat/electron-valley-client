import {
  ClipboardListIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

const ProductList = () => {
  const [products] = useProducts();
  let count = 1;

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure to delete?");
    if (confirm) {
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Delete Successful");
          console.log("Successfully Deleted:", data);
        });
    }
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row p-5 lg:p-0">
        <section className="lg:w-fit inset-y-0 px-10 py-10  border border-blue-700 shadow-md flex flex-col gap-10">
          <h2 className="text-2xl text-blue-700 font-bold">Manage Product</h2>
          <div>
            <Link
              className="flex flex-row items-center text-blue-700"
              to="/manage/productList"
            >
              <ClipboardListIcon className="w-6 mx-2 text-slate-500 inline"></ClipboardListIcon>
              <span className="text-lg font-serif">Product List</span>
            </Link>
          </div>
          <div>
            <Link
              className="flex flex-row items-center hover:text-blue-700"
              to="/manage/addProduct"
            >
              <PlusCircleIcon className="w-6 mx-2 text-slate-500 inline"></PlusCircleIcon>
              <span className="text-lg font-serif">Add Product</span>
            </Link>
          </div>
        </section>
        <section className="w-full lg:px-20 py-10">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-blue-700 overflow-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Serial
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {products?.map((product) => (
                  <tr
                    key={product._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {count++}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {product.name}
                    </th>
                    <td className="px-6 py-4 text-right">
                      <Link
                        to={`/inventory/${product._id}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button onClick={() => handleDelete(product._id)}>
                        <TrashIcon className="w-5 text-red-700"></TrashIcon>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductList;
