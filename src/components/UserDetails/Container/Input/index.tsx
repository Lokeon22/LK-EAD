import { ComponentProps } from "react";

type InputNative = ComponentProps<"input">;
interface InputProps extends InputNative {
  name: string;
}

export function Input({ name, ...props }: InputProps) {
  return (
    <input
      name={name}
      {...props}
      className="outline-none border-b-2 px-2 py-0.5 w-full placeholder:text-sm"
    />
  );
}
