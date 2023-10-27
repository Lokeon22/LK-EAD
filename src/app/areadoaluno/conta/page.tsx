"use client";
import { useState } from "react";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import { Header } from "@/components/Header";
import { DetailsMenu } from "@/components/UserDetails/DetailsMenu";
import { MyAccount } from "@/components/ContaDetails/MyAccount";
import { Financial } from "@/components/ContaDetails/Financial";
import { Legit } from "@/components/ContaDetails/Legit";
import { Acessibility } from "@/components/ContaDetails/Accessibility";
import { NewPassword } from "@/components/ContaDetails/NewPassword";
import { NewEmail } from "@/components/ContaDetails/NewEmail";

//get user infos here

export default function Conta() {
  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <>
      <Header />
      <Link
        className="flex items-center justify-center max-w-[100px] gap-2 bg-gray-400 p-4 rounded-br hover:brightness-95 hover:duration-200"
        href={"/areadoaluno"}
      >
        <BsArrowRight className="min-w-[20px] min-h-[20px] rotate-180" />
        <span className="text-base">Voltar</span>
      </Link>

      <section className="w-full h-full px-2 xl:px-4 2xl:px-8 my-4 md:my-8 flex flex-col md:grid grid-cols-6 2xl:grid-cols-8 text-black">
        <DetailsMenu setActiveItem={setActiveItem} />

        <div id="content" className="col-span-4 lg:col-span-5 2xl:col-span-7 mt-5 md:mt-0">
          {activeItem !== null && (
            <>
              {activeItem === 0 && <MyAccount />}
              {activeItem === 1 && <Legit />}
              {activeItem === 2 && <Financial />}
              {activeItem === 3 && <Acessibility />}
              {activeItem === 4 && <h2>Minha foto</h2>}
              {activeItem === 5 && <NewPassword />}
              {activeItem === 6 && <NewEmail />}
            </>
          )}
        </div>
      </section>
    </>
  );
}
