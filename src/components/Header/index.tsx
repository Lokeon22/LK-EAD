import Image from "next/image";
import image_default from "@/utils/w3hunt.png";

export function Header() {
  return (
    <header className="w-full h-24 px-10 flex flex-col sm:flex-row items-center justify-between bg-blue-600">
      <h2 className="text-2xl sm:text-3xl font-medium">LK EAD</h2>
      <nav className="flex items-center gap-5 max-w-[300px]">
        <Image
          width={40}
          height={40}
          className="min-w-max rounded-full mb-1 sm:mb-0"
          alt="user_image"
          src={image_default}
          priority={true}
        />
        <p className="uppercase text-ellipsis whitespace-nowrap overflow-hidden">
          Gabriel Felipe Ferreira Jerônimo
        </p>
      </nav>
    </header>
  );
}
