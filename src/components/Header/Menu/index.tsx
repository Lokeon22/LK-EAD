"use client";
import { useState } from "react";
import { destroyCookie } from "nookies";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/userContext";

import Link from "next/link";
import Image from "next/image";

import image_default from "@/utils/w3hunt.png";
import { AiOutlineDown } from "react-icons/ai";
import { BiUserCircle, BiLogOut } from "react-icons/bi";

export function Menu() {
  const { user } = useAuth();
  const router = useRouter();

  const [menu, setMenu] = useState<boolean>(false);

  const handleMenu = () => setMenu(!menu);

  const userLogout = () => {
    destroyCookie(null, "lkead_token", { path: "/" });
    destroyCookie(null, "lkead_user", { path: "/" });
    return router.push("/");
  };

  return (
    <>
      <nav
        onClick={handleMenu}
        className="relative p-2 sm:p-0 flex items-center gap-4 max-w-[300px] cursor-pointer"
      >
        {user ? (
          <>
            <Image
              className="w-10 h-10 rounded-full mb-1 sm:mb-0"
              alt="user_image"
              src={image_default}
              priority={true}
            />
            <p className="uppercase text-ellipsis whitespace-nowrap overflow-hidden hover:brightness-90 hover:duration-200">
              {user.name}
            </p>
            <AiOutlineDown className="min-w-[16px] min-h-[16px]" />
          </>
        ) : (
          <span>carregando...</span>
        )}

        <nav
          id="menu"
          className="absolute bg-white shadow-xl text-blue-600 min-w-max py-4 rounded right-2.5 sm:right-0 top-[52px] sm:top-12 z-10 animate-changeOpacity"
          style={{ display: menu ? "block" : "none" }}
        >
          <ul className="flex flex-col gap-1 items-start">
            <Link
              href={"/areadoaluno/conta"}
              className="flex items-center gap-2 hover:brightness-95 hover:duration-200 w-full p-2 hover:bg-slate-100"
            >
              <BiUserCircle className="min-w-[24px] min-h-[24px]" />
              <span className="font-medium">Minha Conta</span>
            </Link>
            <li className="flex items-center gap-2 hover:brightness-95 hover:duration-200 w-full p-2 hover:bg-slate-100">
              <BiLogOut className="min-w-[24px] min-h-[24px]" />
              <button onClick={userLogout} className="w-max font-medium">
                Sair
              </button>
            </li>
          </ul>
        </nav>
      </nav>
    </>
  );
}
