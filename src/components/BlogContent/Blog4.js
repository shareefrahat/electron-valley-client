import React from "react";

const Blog4 = () => {
  return (
    <>
      <div className="text-justify border border-blue-700 rounded p-5 lg:text-xl">
        <div>
          <h4 className="font-semibold text-center mb-5">
            What is the purpose of JWT and How it works?
          </h4>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            JWT stands for JSON Web Token. JWT is mostly used for secure
            authorization purpose.
          </p>
          <p>
            যখন কোনো client কোনো protected data access করার জন্য server এ
            request পাঠায়, server সে client/user trusted কিনা সেটা verify করে।
            এজন্য যখন ১ম বার client/user তার data সহ request পাঠায় বা login করে
            তখন server সে user এর জন্য একটা JWT token তৈরি করে এবং সেটা
            client/user কে দিয়ে দেয়। পরবর্তীতে সে user যখন আবার server এ request
            করে তখন server তার token টা verify করে তারপর তাকে server/database
            থেকে protected data এর access দেওয়ার জন্য সহজে সিদ্ধান্ত গ্রহন করতে
            পারে। অর্থাৎ বারবার user এর information verify করার প্রয়োজন হয়না
            শুধু token verify করে authorization করতে পারে।
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog4;
