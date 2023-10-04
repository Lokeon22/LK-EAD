import { ComponentProps } from "react";

type InputNative = ComponentProps<"input">;
interface InputProps extends InputNative {
  name: string;
}

export function InputLogin({ name, ...props }: InputProps) {
  return (
    <input
      name={name}
      {...props}
      className="w-4/5 sm:w-4/6 outline-none border-b-2 divide-solid border-black"
    />
  );
}
