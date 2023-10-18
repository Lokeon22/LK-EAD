import { IconBaseProps } from "react-icons/lib";

export function UserBox({ text, icon }: { text: string; icon: IconBaseProps }) {
  return (
    <div className="w-[90%] p-4 cursor-pointer rounded-sm flex items-center gap-3 bg-white shadow-md border-l-blue-500 border-l-[5px] hover:brightness-95 hover:duration-200">
      <>{icon}</>
      <h2 className="text-blue-500 uppercase text-xs flex-1">{text}</h2>
    </div>
  );
}
