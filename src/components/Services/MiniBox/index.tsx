import Link from "next/link";

export function MiniBox({ text, date }: { text: string; date: string }) {
  return (
    <Link
      className="bg-white text-black flex flex-col justify-start gap-1.5 px-1 py-2 rounded-r border-l-blue-500 border-l-[5px]"
      href={"/"}
    >
      <span className="text-xs">{date}</span>
      <h2 className="text-xs flex-1 font-semibold uppercase">{text}</h2>
    </Link>
  );
}
