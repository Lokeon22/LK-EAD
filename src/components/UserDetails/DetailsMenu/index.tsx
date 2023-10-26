"use client";
import { useState } from "react";
import { Mobile } from "./Mobile";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export function DetailsMenu() {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenu = () => setOpen(!open);

  return (
    <>
      <div
        id="menu-mobile"
        className="flex gap-2 w-max p-2 rounded md:hidden bg-blue-400 text-white hover:duration-200 hover:brightness-90"
        onClick={handleMenu}
        style={{ marginBottom: open ? "16px" : "0px" }}
      >
        {open ? (
          <AiOutlineClose className="min-w-[24px] min-h-[24px]" />
        ) : (
          <AiOutlineMenu className="min-w-[24px] min-h-[24px]" />
        )}
        <span className="uppercase">Menu</span>
      </div>

      <Mobile open={open} />
    </>
  );
}
