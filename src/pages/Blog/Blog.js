import React from "react";
import Blog1 from "../../components/BlogContent/Blog1";
import Blog2 from "../../components/BlogContent/Blog2";
import Blog3 from "../../components/BlogContent/Blog3";
import Blog4 from "../../components/BlogContent/Blog4";

const Blog = () => {
  return (
    <>
      <p className="text-xl my-5">Blog Page</p>
      <div className="my-10 mx-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center">
          <Blog1></Blog1>
          <Blog2></Blog2>
          <Blog3></Blog3>
          <Blog4></Blog4>
        </div>
      </div>
    </>
  );
};

export default Blog;
