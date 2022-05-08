import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import MyItemsCard from "../../components/MyItemsCard/MyItemsCard";
import auth from "../../firebase.init";
import userImg from "../../images/user.png";
const MyItems = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState();

  const email = user?.email;
  const url = `https://electron-valley.herokuapp.com/userItems?owner=${email}`;

  useEffect(() => {
    const getItems = () => {
      fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setProducts(data));
    };
    getItems();
  }, [user, url, products]);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <>
      <section className="my-5">
        <h3 className="text-lg lg:text-xl text-blue-700 font-bold border-b-4 border-b-blue-700 w-fit mx-auto py-2">
          My Stuff
        </h3>
      </section>
      <section className="flex flex-col-reverse lg:flex-row justify-evenly items-center gap-10">
        <div>
          <div className="border border-blue-700 p-5 rounded">
            {products?.length === 0 ? (
              <div>
                <h4 className="text-md lg:text-xl my-4 text-red-700">
                  You did not add any product yet!
                </h4>
                <Link
                  to="/addProduct"
                  className="text-md lg:text-xl bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-800 my-4"
                >
                  Add New
                </Link>
              </div>
            ) : (
              <div>
                {products?.map((product) => (
                  <MyItemsCard
                    key={product._id}
                    product={product}
                  ></MyItemsCard>
                ))}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="border border-blue-700 p-5 rounded">
            <div>
              <img
                src={user?.photoURL || userImg}
                className="w-24 lg:w-32 mx-auto rounded-full border-2 border-orange-600"
                alt=""
              />
            </div>
            <div className="my-5 flex flex-col justify-center gap-4">
              <p className="text-md lg:text-xl font-semibold">
                {user?.displayName}
              </p>
              <p className="text-md lg:text-xl text-left">
                <span className="font-semibold">Email:</span> {user?.email}
              </p>
              <p className="text-md lg:text-xl text-left">
                <span className="font-semibold">Status:</span>{" "}
                {user?.emailVerified ? "Verified" : "Not Verified"}
              </p>
            </div>
            <div>
              <button
                onClick={handleSignOut}
                className="text-md lg:text-xl bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-800"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyItems;
