import Image from "next/image";
import Link from "next/link";

import cardimage from "@/utils/w3hunt.png";

interface CardProps {
  id?: number;
  image?: string;
  title: string;
  sub_title: string;
  course_register: number;
  status: string;
}

export function Card({ id, title, sub_title, course_register, status }: CardProps) {
  return (
    <Link
      href={`/areadoaluno/curso/${id}`}
      className="rounded-md border-2 shadow-lg cursor-pointer hover:brightness-90 hover:duration-200"
    >
      <div className="relative w-[270px] h-[270px] sm:w-[240px] sm:h-[240px] lg:w-[280px] lg:h-[280px]">
        <Image
          className="max-w-full h-auto rounded-t-md"
          src={cardimage}
          alt="test"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <h2 className="absolute text-center bg-[#1665C0] text-white h-1/5 sm:h-[27%] lg:h-1/5 p-1 sm:p-0.5 lg:p-1.5 w-full bottom-0 self-center uppercase text-sm">
          {title}
        </h2>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <h1 className="text-sm uppercase text-[#303F9F] font-medium">{sub_title}</h1>

        <label>
          <span className="text-sm text-[#303F9F] font-medium">Matrícula</span>
          <h2 className="leading-5">{course_register}</h2>
        </label>

        <label>
          <span className="text-sm text-[#303F9F] font-medium">Status</span>
          <p className="leading-5">{status}</p>
        </label>
      </div>
    </Link>
  );
}
