import { Button } from "@/components/Button";
import { Input } from "@/components/UserDetails/Container/Input";
import { FaLock } from "react-icons/fa";

export function NewPassword() {
  return (
    <>
      <section className="bg-white shadow-md p-4 w-full h-max">
        <div className="flex items-center gap-3">
          <FaLock className="min-w-[24px] min-h-[24px]" />
          <h2 className="uppercase font-medium text-lg">Alterar senha</h2>
        </div>

        <form
          id="container"
          className="w-max flex flex-col items-center justify-center gap-6 sm:gap-8 mx-auto my-5"
        >
          <Input name="actual_password" placeholder="Senha atual" type="password" required />
          <Input name="new_password" placeholder="Nova senha" type="password" required />
          <Input name="new_pass" placeholder="Repita nova senha" type="password" required />
          <Button text="salvar" />
        </form>
      </section>
    </>
  );
}
