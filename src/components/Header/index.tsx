import { Menu } from "./Menu";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full h-24 px-10 flex flex-col sm:flex-row items-center justify-between bg-[#225ba5]">
      <Link href={"/areadoaluno"} className="text-2xl sm:text-4xl font-medium">
        LK EAD
      </Link>
      <Menu />
    </header>
  );
}
