import { Button } from "@/components/Button";
import { Input } from "@/components/UserDetails/Container/Input";
import { MdEmail } from "react-icons/md";

export function NewEmail() {
  return (
    <>
      <section className="bg-white shadow-md p-4 w-full h-max">
        <div className="flex items-center gap-3">
          <MdEmail className="min-w-[24px] min-h-[24px]" />
          <h2 className="uppercase font-medium text-lg">Alterar E-mail</h2>
        </div>

        <form
          id="container"
          className="w-max flex flex-col items-center justify-center gap-6 sm:gap-8 mx-auto my-5"
        >
          <Input name="email" placeholder="E-mail atual" type="text" required />
          <Input name="password" placeholder="Senha" type="password" required />
          <Input name="new_email" placeholder="Novo E-mail" type="text" required />
          <Button text="salvar" />
        </form>
      </section>
    </>
  );
}
