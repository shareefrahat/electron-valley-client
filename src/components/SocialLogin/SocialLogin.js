import React from "react";
import googleLogo from "../../images/google.png";

const SocialLogin = () => {
  return (
    <>
      <div className="mt-4">
        <button
          //   onClick={() => signInWithGoogle()}
          className="flex flex-row justify-center items-center border border-blue-600 rounded p-1 mx-auto shadow-md"
        >
          <img className="w-6 md:w-8 mx-2" src={googleLogo} alt="" />
          <p className="mx-2 font-serif font-medium text-md">
            Continue with Google
          </p>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
