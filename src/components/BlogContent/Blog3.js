import React from "react";

const Blog3 = () => {
  return (
    <>
      <div className="text-justify border border-blue-700 rounded p-5 lg:text-xl">
        <div>
          <h4 className="font-semibold text-center mb-5">
            Differences between sql and nosql databases.
          </h4>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            1. SQL is a Relational Database Management System. On the other hand
            NoSQL is a Non-Relational Database Management System.
          </p>
          <p>
            2. SQL is vertically scalable. But NoSQL is horizontally scalable.
          </p>
          <p>
            3. SQL is Table based database. NoSQL is document based database.
          </p>
          <p>4. SQL has pre-defined schema. NoSQL has dynamic schema.</p>
          <p>
            5. SQL is not preferable for large datasets. NoSQL is preferable for
            large datasets.
          </p>
          <p>
            6. SQL is suitable for complex queries. NoSQL is not suitable for
            complex queries.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog3;
