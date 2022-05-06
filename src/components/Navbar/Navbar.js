import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const links = [
    {
      id: 1,
      path: "/",
      name: "HOME",
      route: "public",
    },
    {
      id: 2,
      path: "/blog",
      name: "BLOG",
      route: "public",
    },
    {
      id: 3,
      path: "/manage",
      name: "MANAGE",
      route: "private",
    },
    {
      id: 4,
      path: "/addProduct",
      name: "ADD",
      route: "private",
    },
    {
      id: 5,
      path: "/myitems",
      name: "MY ITEMS",
      route: "private",
    },
    {
      id: 6,
      path: "/about",
      name: "ABOUT",
      route: "public",
    },
  ];

  let routes;

  if (!user) {
    routes = links.filter((link) => link.route === "public");
  } else {
    routes = links;
  }
  return (
    <>
      <nav className="text-md lg:text-lg text-slate-100 lg:text-blue-700 flex flex-col lg:flex-row justify-around gap-5 lg:gap-10">
        {routes.map((link) => (
          <CustomLink key={link.id} to={link.path}>
            {link.name}
          </CustomLink>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
