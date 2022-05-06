import React from "react";

const Blog1 = () => {
  return (
    <>
      <div className="text-justify border border-blue-700 rounded p-5 lg:text-xl">
        <div>
          <h4 className="font-semibold text-center mb-5">
            Difference between Javascript & NodeJS
          </h4>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            1. Javascript একটি programming language, যেটি website এ script
            writing এর জন্য ব্যবহৃত হয়। NodeJS হচ্ছে Javascript Runtime
          </p>
          <p>
            2. Javascript শুধুমাত্র browser এ run করতে পারে। Browser এর বাইরে,
            যেমন terminal-এ NodeJS এর সাহায্যে আমরা Javascript run করতে পারি।
          </p>
          <p>
            3. Javascript মূলত client side বা front end development এর জন্য
            ব্যবহৃত হয়। NodeJS mostly server side বা back end development এর
            জন্য ব্যবহৃত হয়।
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog1;
