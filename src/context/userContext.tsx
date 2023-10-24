"use client";
import { useState, useEffect, createContext, useContext } from "react";
import { UserProps, UserLogin } from "@/@types/UserType";

interface userContextProps {
  user: any;
}

export const userContext = createContext({} as userContextProps);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const user = {};

  return <userContext.Provider value={{ user }}>{children}</userContext.Provider>;
};

export function useAuth() {
  const context = useContext(userContext);
  return context;
}
