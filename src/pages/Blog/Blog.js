import React from "react";
import Blog1 from "../../components/BlogContent/Blog1";
import Blog2 from "../../components/BlogContent/Blog2";
import Blog3 from "../../components/BlogContent/Blog3";
import Blog4 from "../../components/BlogContent/Blog4";

const Blog = () => {
  return (
    <>
      <section className="my-5">
        <h3 className="text-lg lg:text-xl text-blue-700 font-bold border-b-4 border-b-blue-700 w-fit mx-auto py-2">
          Latest Blog
        </h3>
      </section>
      <section>
        <div className="my-10 mx-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center  lg:w-2/3 mx-auto font-serif">
            <Blog1></Blog1>
            <Blog2></Blog2>
            <Blog3></Blog3>
            <Blog4></Blog4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
