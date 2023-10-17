import { Menu } from "./Menu";

export function Header() {
  return (
    <header className="w-full h-24 px-10 flex flex-col sm:flex-row items-center justify-between bg-[#225ba5]">
      <h2 className="text-2xl sm:text-4xl font-medium">LK EAD</h2>
      <Menu />
    </header>
  );
}
