import { IconBaseProps } from "react-icons/lib";

export function UserBox({ text, icon }: { text: string; icon: IconBaseProps }) {
  return (
    <>
      <>{icon}</>
      <h2 className="text-blue-500 uppercase text-xs flex-1">{text}</h2>
    </>
  );
}
