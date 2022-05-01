import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      name: "HOME",
    },
    {
      id: 2,
      path: "/blog",
      name: "BLOG",
    },
    {
      id: 3,
      path: "/inventory",
      name: "INVENTORY",
    },
    {
      id: 4,
      path: "/myitems",
      name: "MY ITEMS",
    },
  ];
  return (
    <>
      <nav className="text-md lg:text-lg text-slate-100 lg:text-blue-700 flex flex-col lg:flex-row justify-around gap-5 lg:gap-10">
        {links.map((link) => (
          <CustomLink key={link.id} to={link.path}>
            {link.name}
          </CustomLink>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
