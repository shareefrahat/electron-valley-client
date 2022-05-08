import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <>
      <Link
        className={
          match
            ? "bg-slate-100 lg:bg-white lg:border-2 lg:border-orange-600 px-2 py-1 rounded text-blue-700 lg:text-orange-600"
            : "px-2 py-1 lg:hover:text-orange-600 lg:border-2 lg:border-transparent"
        }
        to={to}
        {...props}
      >
        {children}
      </Link>
    </>
  );
};

export default CustomLink;
