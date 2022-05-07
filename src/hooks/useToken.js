import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;

    if (email) {
      fetch("http://localhost:5000/getToken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((response) => response.json())
        .then((data) => {
          setToken(data.token);
          localStorage.setItem("accessToken", data.token);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
