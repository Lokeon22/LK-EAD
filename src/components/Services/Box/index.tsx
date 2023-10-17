import Image from "next/image";
import example from "@/utils/w3hunt.png";
import Link from "next/link";

export function Box({ text }: { text: string }) {
  return (
    <Link
      className="w-32 h-32 bg-white flex flex-col items-center justify-center gap-3 p-4 rounded-r border-l-blue-500 border-l-[7px]"
      href={"/"}
    >
      <Image
        className="w-max rounded"
        width={35}
        height={35}
        src={example}
        alt="course"
        priority={true}
      />
      <h2 className="text-xs text-blue-400 uppercase text-center flex-1">{text}</h2>
    </Link>
  );
}
