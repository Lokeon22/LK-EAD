import { ComponentProps } from "react";

type ButtonNative = ComponentProps<"button">;
interface ButtonProps extends ButtonNative {
  text: string;
}

export function Button({ text, ...props }: ButtonProps) {
  return (
    <button
      type="submit"
      {...props}
      className="mt-3 w-2/3 sm:w-60 lg:w-80 bg-blue-600 p-2.5 self-center rounded text-white hover:brightness-90 hover:duration-200 uppercase"
    >
      {text}
    </button>
  );
}
