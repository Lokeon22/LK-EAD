import { InputLogin } from "../InputLogin";

interface FormProps {
  text: string;
  btnText: string;
  addInput: boolean;
}

export function LoginForm({ text, btnText, addInput }: FormProps) {
  return (
    <div className="mx-4 sm:mx-8 my-5 sm:my-10 px-3 pt-2 pb-8 text-black border-2 border-gray-200 bg-gray-50 rounded">
      <h2 className="text-lg uppercase mb-5 text-gray-500 font-medium">{text}</h2>
      <form className="flex flex-col items-center justify-center gap-8">
        {addInput ? <InputLogin name={"name"} placeholder="Nome" type="text" /> : null}
        <InputLogin name={"email"} placeholder="Email ou CPF" type="text" />
        <InputLogin name={"password"} placeholder="Senha" type="password" />
        <button className="w-40 rounded py-2 bg-blue-600 text-white hover:brightness-90 hover:duration-200 uppercase">
          {btnText}
        </button>
      </form>
    </div>
  );
}
