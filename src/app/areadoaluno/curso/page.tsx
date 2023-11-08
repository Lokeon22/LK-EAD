"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import { userCoursesItems } from "@/functions/fakeData";

import { Header } from "@/components/Header";
import { DetailsMenu } from "@/components/UserDetails/DetailsMenu";
import { AllCourses } from "@/components/CursoDetails/AllCourses";

export default function Curso() {
  const params = useSearchParams();

  const initialIndex = Number(params.get("id"));
  const [activeItem, setActiveItem] = useState<number>(initialIndex);

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
        <DetailsMenu menuContent={userCoursesItems} setActiveItem={setActiveItem} />

        <div
          id="content"
          className="col-span-4 lg:col-span-5 2xl:col-span-7 mt-5 md:mt-0"
        >
          {activeItem !== null && (
            <>
              {activeItem === 0 && <AllCourses />}
              {activeItem === 1 && (
                <h2 className="text-center uppercase font-medium">
                  Nenhuma incrição em processo seletivo até o momento!
                </h2>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
