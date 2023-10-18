"use client";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export function MiniBox({ text, date }: { text: string; date: string }) {
  const [open, setOpen] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);

  const handleModal = () => setModal(!modal);

  const handleOutsideClick = () => setModal(false);

  return (
    <>
      <div
        onClick={handleModal}
        className="bg-white text-black flex flex-col justify-start cursor-pointer gap-1.5 px-1 py-2 rounded-r border-l-blue-500 border-l-[5px] hover:brightness-95 hover:duration-200"
      >
        <span className="text-xs">{date}</span>
        <h2 className="text-xs flex-1 font-semibold uppercase">{text}</h2>
      </div>

      <div
        id="overlay"
        className="fixed w-full h-full top-0 left-0 bottom-0 right-0 bg-gray-400 bg-opacity-40"
        style={{ display: modal ? "block" : "none" }}
        onClick={handleOutsideClick}
      />

      {modal && (
        <section className="fixed z-20 p-2.5 rounded w-[95%] sm:max-w-2xl h-72 sm:h-56 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black shadow-2xl">
          <div className="flex items-center justify-between border-b-2 mb-0.5">
            <span>Recados</span>

            <AiOutlineClose
              onClick={handleModal}
              className="min-w-[16px] min-h-[16px] cursor-pointer"
            />
          </div>
          <div className="my-4">
            <span className="text-xs text-gray-500">{date}</span>
            <h2 className="text-sm font-semibold">{text}</h2>
          </div>
          <div>
            <p className="text-lg h-32 sm:h-24 overflow-auto">
              O maior evento de tecnologia do mundo retorna no dia 22/06, organizado pelo LK GROUP e
              pelos cursos de Análise e Desenvolvimento de Sistemas, Ciência da Computação, Jogos
              Digitais, Ciência de Dados e Engenharias da LK EAD.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
