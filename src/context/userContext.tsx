"use client";
import { useState, useEffect, createContext, useContext } from "react";
import { useRouter } from "next/navigation";
import { setCookie, parseCookies } from "nookies";

import { UserProps, UserLogin } from "@/@types/UserType";

interface userContextProps {
  user?: UserProps;
  handleLogin: (data: FormData) => void;
}

export const userContext = createContext({} as userContextProps);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    const { lkead_user: user, lkead_token: token } = parseCookies();

    if (token) {
      const userData: UserProps = JSON.parse(user);
      setUser(userData);
    }
  }, []);

  const router = useRouter();

  const handleLogin = async (data: FormData) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sessions`, {
        method: "POST",
        body: JSON.stringify({
          email: data.get("email"),
          password: data.get("password"),
        }),
        headers: { "Content-Type": "application/json" },
      });

      const resData: UserLogin = await res.json();

      if (!res.ok || res.status !== 200) {
        return alert(resData.message);
      }

      if (res.ok) {
        setCookie(null, "lkead_user", JSON.stringify(resData.user), {
          expires: new Date(Date.now() + 6 * 60 * 60 * 1000), // 6 hours
          path: "/",
        });

        setCookie(null, "lkead_token", resData.token, {
          expires: new Date(Date.now() + 6 * 60 * 60 * 1000),
          path: "/",
        });

        setUser(resData.user);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }

    return router.push("/areadoaluno");
  };

  return <userContext.Provider value={{ user, handleLogin }}>{children}</userContext.Provider>;
};

export const useAuth = () => useContext(userContext);
