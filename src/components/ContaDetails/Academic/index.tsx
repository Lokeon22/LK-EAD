import { Button } from "@/components/Button";
import { Input } from "@/components/UserDetails/Container/Input";
import { HiAcademicCap } from "react-icons/hi";

export function Academic() {
  return (
    <>
      <section className="bg-white shadow-md p-4 w-full h-max">
        <div className="flex items-center gap-3">
          <HiAcademicCap className="min-w-[24px] min-h-[24px]" />
          <h2 className="uppercase font-medium text-lg">
            Informações Acadêmicas
          </h2>
        </div>

        <div
          id="container"
          className="w-max flex flex-col items-start justify-center gap-6 sm:gap-8 my-5"
        >
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-medium">Escolaridade</p>
            <input placeholder="Ensino medio completo" type="text" disabled />
          </div>

          <form className="flex-wrap flex flex-col gap-4">
            <div>
              <p className="text-sm font-medium mb-1">
                Nome da instituição do Ensino Médio
              </p>
              <Input name="school" />
            </div>

            <div>
              <p className="text-sm font-medium mb-1">Público ou Privado</p>
              <select className="w-full py-1.5 px-1 rounded border-2 outline-none">
                <option value={"public"}>Publico</option>
                <option value={"private"}>Privado</option>
              </select>
            </div>

            <div>
              <p className="text-sm font-medium mb-1">Ano de conclusão</p>
              <input
                className="w-full px-2 py-1 border-2 rounded outline-none"
                type="text"
                maxLength={4}
              />
            </div>

            <Button text="salvar" />
          </form>
        </div>
      </section>
    </>
  );
}
