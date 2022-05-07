import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import googleLogo from "../../images/google.png";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
  const [token] = useToken(user);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }
  return (
    <>
      <div className="mt-4">
        <button
          onClick={() => signInWithGoogle()}
          className="flex flex-row justify-center items-center border border-blue-600 rounded p-1 mx-auto shadow-md"
        >
          <img
            className={`w-6 md:w-8 mx-2 ${loading ? "animate-spin" : ""} `}
            src={googleLogo}
            alt=""
          />
          <p className="mx-2 font-serif font-medium text-md">
            {loading ? "Loading..." : " Continue with Google"}
          </p>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
