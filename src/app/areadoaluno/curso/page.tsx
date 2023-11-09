"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import { userCoursesItems } from "@/functions/fakeData";

import { Header } from "@/components/Header";
import { DetailsMenu } from "@/components/UserDetails/DetailsMenu";
import { AllCourses } from "@/components/CursoDetails/AllCourses";
import { Card } from "@/components/CursoDetails/AllCourses/Card";

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
              {activeItem === 2 && (
                <>
                  <h2 className="relative w-full text-lg mt-2 px-5 uppercase before:content-[''] before:absolute before:w-3 before:h-8 before:bg-gray-400 before:-left-1">
                    Matriculados
                  </h2>

                  <div className="w-full flex flex-wrap items-center justify-center lg:justify-start gap-2 lg:gap-5 my-8">
                    <Card
                      id={2}
                      title="Projeto de ensino LK-GROUP - Cursos extras"
                      sub_title="Curso livre ead"
                      course_register={210455}
                      status="Matriculado"
                    />
                  </div>
                </>
              )}
              {activeItem === 4 && (
                <h2 className="text-center uppercase font-medium">
                  Nenhum curso foi cancelado ate o momento!
                </h2>
              )}
              {activeItem === 5 && (
                <h2 className="text-center uppercase font-medium">
                  Nenhuma transferência de curso foi realizada até o momento!
                </h2>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
