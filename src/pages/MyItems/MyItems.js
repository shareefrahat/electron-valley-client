import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ProductCard from "../../components/ProductCard/ProductCard";
import auth from "../../firebase.init";
import userImg from "../../images/user.png";
const MyItems = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState();

  const email = user?.email;
  const url = `http://localhost:5000/userItems?owner=${email}`;

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
  }, [user, url]);

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
          <div>
            {!products ? (
              <div>
                <p>You don't have any product right now</p>
              </div>
            ) : (
              <div>
                {products?.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                  ></ProductCard>
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
